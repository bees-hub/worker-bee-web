<template>
  <div class="container">
    <div class="row row-sm-revers">
      <div class="col-md-8">
        <TaskList />
      </div>
      <div class="col-md-4">
        <Profile/>
      </div>
    </div>
  </div>
</template>

<script>
import { SpAssets, SpTokenTransfer, SpTokenTransferList } from '@starport/vue';
import Profile from '../components/profile/Profile.vue'
import TaskList from '../components/tasks/TaskList.vue'
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'Portfolio',

  components: { TaskList, Profile },

  setup() {
    // store
    let $s = useStore()

    // computed
    let address = computed(() => $s.getters['common/wallet/address'])

    return {
      address
    }
  }
}
</script>

<style scoped>
.row {
  display: flex;
  flex-wrap: wrap;
}
.col {
  flex-grow: 1;
  padding: 20px;
}
.container {
    max-width: inherit;
}
</style>
