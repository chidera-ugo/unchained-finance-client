<template>
  <div>
    <HeroSection />
    <div class="py-12"></div>
    <TransactionsSection v-if="account" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'

export default Vue.extend({
  name: 'IndexPage',
  computed: {
    ...mapState(['account']),
  },
})
</script>

<style scoped></style>
