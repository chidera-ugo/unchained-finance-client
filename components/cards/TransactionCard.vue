<template>
  <div
    class="flex border border-emerald-500 align-middle col-span-12 md:col-span-6 lg:col-span-4"
  >
    <img
      :src="`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${addressFrom}`"
      alt="address"
      class="mr-2 h-32 lg:h-full"
    />
    <div class="my-auto p-3">
      <a
        :href="`https://ropsten.etherscan.io/address/${addressFrom}`"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>from: {{ formatAddress(addressFrom) }}</p>
      </a>
      <a
        :href="`https://ropsten.etherscan.io/address/${addressTo}`"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>to: {{ formatAddress(addressTo) }}</p>
      </a>
      <p class="line-clamp-1">amount: {{ amount }} ETH</p>
      <p class="line-clamp-1">message: {{ message }}</p>
      <p class="line-clamp-1">time: {{ time }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { formatAddress } from '../../utils/helpers'

export default Vue.extend({
  props: {
    addressTo: {
      type: String,
      required: true,
    },
    addressFrom: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    amount: {
      type: String,
      required: true,
    },
  },
  methods: {
    formatAddress,
  },
})
</script>

<style scoped></style>
