<template>
  <div>
    <h1>
      latest transactions

      <span v-if="!transactionsCountLoading"> ({{ transactionsCount }}) </span>
    </h1>
    <div
      v-if="transactionsLoading"
      class="w-full flex flex-col align-middle justify-center border border-emerald-500 mt-8"
    >
      <span class="mx-auto py-24">
        <svg
          fill="none"
          class="w-8 h-8 text-emerald-500 animate-spin"
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
    </div>
    <div v-else class="grid grid-cols-12 gap-5 mt-8">
      <TransactionCard
        v-for="(
          { addressTo, addressFrom, amount, message, time }, index
        ) in transactions"
        :key="`${addressFrom}-${addressTo}-${amount}-${message}-${time}-${index}`"
        :address-to="addressTo"
        :address-from="addressFrom"
        :amount="amount"
        :message="message"
        :time="time"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'

export default Vue.extend({
  computed: {
    ...mapState([
      'transactionsCount',
      'transactions',
      'transactionsLoading',
      'transactionsCountLoading',
    ]),
  },
})
</script>

<style scoped></style>
