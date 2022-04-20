<template>
  <div class="lg:grid grid-cols-12 gap-24">
    <div class="col-span-6">
      <h1 class="text-5xl">unchained finance</h1>
      <p class="mt-4">
        send crypto to anyone in the world in a matter of minutes on smart
        contract running on the ropsten network
      </p>
      <div class="py-2"></div>
      <p v-if="account" class="uppercase text-emerald-400">
        connected {{ formatAddress(account) }}
      </p>
      <button v-else @click="connectWallet">connect wallet</button>
    </div>

    <div class="col-span-6 mt-12 lg:mt-0">
      <SendForm />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions, mapState } from 'vuex'
import { formatAddress } from '../../utils/helpers'

export default Vue.extend({
  computed: {
    ...mapState(['account']),
  },
  methods: {
    ...mapActions(['connectWallet']),
    formatAddress,
  },
})
</script>

<style scoped></style>
