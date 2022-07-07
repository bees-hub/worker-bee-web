<template>
  <div class="sp-card-wrapper">
    <n-grid :x-gap="12" :y-gap="8" :cols="6" responsive="self">
      <n-grid-item v-for="(task, index) in tasks" :key="index">
        <n-card hoverable :title="task.summary" @click="showDetails(task)">
          {{task.description}}
        </n-card>
      </n-grid-item>
    </n-grid>
  </div>
  <NModal v-model:show="showModal">
    <Task :task="selectedTask"/>
  </NModal>
</template>

<script lang="ts">
import { computed, defineComponent, onBeforeMount, ref } from 'vue';
import { useStore } from 'vuex';
import { NGrid, NGridItem, NCard, NModal } from 'naive-ui';
import Task from './Task.vue';
import { Task as ITask } from '../../store/generated/williamfeng323/worker-bee/williamfeng323.workerbee.workerbee';

export default defineComponent({
  name: 'TaskList',
  components: { NCard, NGrid, NGridItem, NModal,Task },
  setup: () => {
    // store
    let $s = useStore();
    onBeforeMount(async () => {
      $s.dispatch('williamfeng323.workerbee.workerbee/QueryTaskAll',{
        // query: {'pagination.limit': '24', 'pagination.reverse': true},
        options: { subscribe: true }
      })
    })
    let tasks = computed<ITask[]>(() => {
      let t = $s.getters['williamfeng323.workerbee.workerbee/getTaskAll']()['task'] ?? []
      return t
    })
    let selectedTask = ref({} as ITask);
    let showModal = ref(false);
    let showDetails = (task: ITask) => {
      console.log(task);
      selectedTask.value = task;
      showModal.value = true;
    }
    return {
      tasks,
      selectedTask,
      showDetails,
      showModal
    }
  }
});

</script>

<style lang="scss">

</style>