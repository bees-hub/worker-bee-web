<template>
  <n-config-provider :theme="lightTheme">
    <div>
      <SpTheme>
        <SpNavbar
          :links="navbarLinks"
          :active-route="router.currentRoute.value.path"
        />
        <router-view />
      </SpTheme>
    </div>
  </n-config-provider>
</template>

<script lang="ts">
import { SpNavbar, SpTheme } from '@starport/vue'
import { computed, onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { lightTheme, NConfigProvider } from 'naive-ui'

export default {
  components: { SpTheme, SpNavbar,  NConfigProvider },

  setup() {
    // store
    let $s = useStore()

    // router
    let router = useRouter()

    // state
    let navbarLinks = [
      { name: 'Portfolio', url: '/portfolio' },
      { name: 'Worker-Bee', url: '/workerBee' }
    ]

    // computed
    let address = computed(() => $s.getters['common/wallet/address'])

    // lh
    onBeforeMount(async () => {
      await $s.dispatch('common/env/init')

      router.push('portfolio')
    })

    return {
      navbarLinks,
      // router
      router,
      // computed
      address,
      lightTheme
    }
  }
}
</script>

<style scoped lang="scss">
body {
  margin: 0;
}
</style>
