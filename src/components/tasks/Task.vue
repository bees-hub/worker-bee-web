<template>
  <n-card
    style="width: 600px"
    :title="task.summary"
    :bordered="false"
    size="huge"
    role="dialog"
    aria-modal="true"
  >
    {{task}}
  </n-card>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { NCard } from 'naive-ui';
import type { PropType } from 'vue';

import type { Task as ITask } from '../../store/generated/williamfeng323/worker-bee/williamfeng323.workerbee.workerbee';

export default defineComponent({
  props: {
    task: {
      type: Object as PropType<ITask>,
      required: true,
    }
  },
  components: { NCard },
  setup: () => {
    return {
      showModal: ref(false)
    }
  }
});
</script>

<style lang="scss"></style>