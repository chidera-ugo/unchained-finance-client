<template>
  <form @submit.prevent="handleSubmit">
    <label for="addressTo">
      address to
      <input
        v-model="addressTo"
        placeholder="enter destination"
        name="addressTo"
        type="text"
        required
      />
    </label>

    <label for="amount">
      amount (eth)
      <input
        v-model="amount"
        placeholder="enter amount"
        name="amount"
        type="number"
        step="0.00001"
        required
      />
    </label>

    <label for="message">
      message
      <input
        v-model="message"
        placeholder="type message"
        name="message"
        type="text"
        required
      />
    </label>

    <button v-if="account" type="submit" class="mt-4">
      <span v-if="loading">
        <svg
          fill="none"
          class="w-4 h-4 text-white animate-spin"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      </span>

      <span v-else> send</span>
    </button>
  </form>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions, mapState } from 'vuex'

export default Vue.extend({
  data() {
    return {
      addressTo: '',
      amount: '',
      message: '',
      keyword: '',
    }
  },
  computed: {
    ...mapState(['account', 'loading']),
  },
  methods: {
    ...mapActions(['sendTransaction']),
    handleSubmit() {
      this.sendTransaction({
        addressTo: this.addressTo,
        amount: this.amount,
        message: this.message,
        keyword: 'dummy',
      })
    },
  },
})
</script>

<style scoped></style>
