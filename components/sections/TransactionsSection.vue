<template>
  <div>
    <h1>latest transactions ({{ transactionsCount }})</h1>

    <div class="grid grid-cols-12 gap-5 mt-8">
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
    ...mapState(['transactionsCount', 'transactions']),
  },
})
</script>

<style scoped></style>
