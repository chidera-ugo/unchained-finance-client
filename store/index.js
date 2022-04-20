import { ethers } from 'ethers'
import { contractAbi, contractAddress } from '../utils/constants'

export const state = () => {
  return {
    account: null,
    loading: false,
    transactionsCount: 0,
    transactions: [],
    transactionsCountLoading: false,
    transactionsLoading: false,
  }
}

export const mutations = {
  setAccount(state, account) {
    state.account = account
  },
  setLoading(state, loading) {
    state.loading = loading
  },
  setTransactionsCount(state, count) {
    state.transactionsCount = count
  },
  setTransactions(state, transactions) {
    state.transactions = transactions
  },
  setTransactionsCountLoading(state, loading) {
    state.transactionsCountLoading = loading
  },
  setTransactionsLoading(state, loading) {
    state.transactionsLoading = loading
  },
}

export const actions = {
  checkForEthereum() {
    if (!window.ethereum) return false
    return true
  },
  async checkIfWalletIsConnected({ dispatch, commit }) {
    const hasEthereum = await dispatch('checkForEthereum')

    if (!hasEthereum)
      return alert('No web3? You should consider trying MetaMask!')

    const accounts = await window.ethereum.request({ method: 'eth_accounts' })

    if (accounts.length) {
      commit('setAccount', accounts[0])

      dispatch('getTransactionsCount')
      dispatch('getAllTransactions')
    }
  },
  async connectWallet({ commit, dispatch }) {
    const hasEthereum = await dispatch('checkForEthereum')

    if (!hasEthereum)
      return alert('No web3? You should consider trying MetaMask!')

    try {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      })

      if (accounts.length) {
        commit('setAccount', accounts[0])
        dispatch('getTransactionsCount')
        dispatch('getAllTransactions')
      } else {
        alert('No accounts found')
      }
    } catch (e) {
      console.log(e)

      if (e.code === -32002) {
        alert(
          'A permission request is already pending, please find the tab and approve the request'
        )
      } else {
        alert("Couldn't connect to wallet")
      }
    }
  },
  getEthereumContract() {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    const transactionContract = new ethers.Contract(
      contractAddress,
      contractAbi,
      signer
    )
    return transactionContract
  },
  async sendTransaction({ dispatch, state, commit }, payload) {
    try {
      const hasEthereum = await dispatch('checkForEthereum')

      if (!hasEthereum)
        return alert('No web3? You should consider trying MetaMask!')

      commit('setLoading', true)

      const transactionContract = await dispatch('getEthereumContract')
      const { addressTo, amount, message, keyword } = payload

      const parsedAmount = ethers.utils.parseEther(amount)

      await window.ethereum.request({
        method: 'eth_sendTransaction',
        params: [
          {
            from: state.account,
            to: addressTo,
            gas: '0x5208',
            value: parsedAmount._hex,
          },
        ],
      })

      const transactionHash = await transactionContract.addToBlockChain(
        addressTo,
        parsedAmount,
        message,
        keyword
      )

      console.log(`Loading transaction hash: ${transactionHash.hash}`)
      await transactionHash.wait()

      commit('setLoading', false)
      console.log(`Success transaction hash: ${transactionHash.hash}`)

      const transactionsCount = await transactionContract.getTransactionCount()
      commit('setTransactionsCount', transactionsCount.toNumber())
      location.reload()
    } catch (e) {
      console.log(e)
      commit('setLoading', false)

      if (e.code === 4001) {
        alert('User rejected transaction')
      } else {
        alert('Transaction failed')
      }
    }
  },
  async getTransactionsCount({ dispatch, commit }) {
    try {
      const hasEthereum = await dispatch('checkForEthereum')

      if (!hasEthereum)
        return alert('No web3? You should consider trying MetaMask!')
      commit('setTransactionsCountLoading', true)

      const transactionContract = await dispatch('getEthereumContract')
      const transactionsCount = await transactionContract.getTransactionCount()
      const parsedCount = parseInt(transactionsCount._hex, 16)
      commit('setTransactionsCount', parsedCount)
      commit('setTransactionsCountLoading', false)
    } catch (e) {
      commit('setTransactionsCountLoading', false)
      console.log(e)
      alert("Couldn't check if transactions exist")
    }
  },
  async getAllTransactions({ dispatch, commit }) {
    try {
      const hasEthereum = await dispatch('checkForEthereum')

      if (!hasEthereum)
        return alert('No web3? You should consider trying MetaMask!')
      commit('setTransactionsLoading', true)

      const transactionContract = await dispatch('getEthereumContract')
      const availableTransactions =
        await transactionContract.getAllTransactions()

      const structuredTransactions = availableTransactions.map(
        (transaction) => {
          const { amount, message, receiver, sender, keyword, timestamp } =
            transaction

          const parsedAmount = ethers.utils.formatEther(amount)

          return {
            addressTo: receiver,
            addressFrom: sender,
            amount: parsedAmount,
            message,
            keyword,
            time: new Date(timestamp.toNumber() * 1000).toDateString(),
          }
        }
      )
      commit('setTransactions', structuredTransactions)
      commit('setTransactionsLoading', false)
    } catch (e) {
      console.log(e)
      commit('setTransactionsLoading', false)
      alert("Couldn't fetch all transactions")
    }
  },
}
