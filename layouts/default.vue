<template>
  <div class="px-6 md:px-8 py-32">
    <div class="max-w-[1200px] mx-auto">
      <Nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'vuex'

export default Vue.extend({
  name: 'DefaultLayout',
  mounted() {
    this.checkIfWalletIsConnected()
  },
  methods: {
    ...mapActions(['checkIfWalletIsConnected']),
  },
})
</script>

<style scoped></style>
