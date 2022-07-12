<template>
  <n-card
    style="width: 600px"
    :title="`${task.summary} - ${task.index}`"
    :bordered="false"
    size="huge"
    role="dialog"
    aria-modal="true"
  >
    <div class="container">
      <n-h6 prefix="bar"> 
        Bounty: {{task.bounty.amount}} {{task.bounty.denom}}
      </n-h6>
      <n-h5>
        Description
      </n-h5>
      <n-p>
        {{task.description}}
      </n-p>
      <div class="row row-sm-revers">
        <div class="col-md-6">
          <n-h5>
          Location
          </n-h5>
          <n-p>
            {{task.location.address}}, {{task.location.city}}, {{task.location.province}}, {{task.location.country}}
          </n-p>
          <n-h5>
            Start Date
          </n-h5>
          <n-p>
            {{task.startDateTime}}
          </n-p>
        </div>
        <div class="col-md-6">
          <n-divider title-placement="left" :theme-overrides="dividerThemeOverrides">
            Task Owner
          </n-divider>
          <div class="avatar-and-name row">
            <div class="col-md-4">
              <n-avatar
                round
                size="medium"
                :src="profile.avatar"
                :fallback-src="defaultAvatar"
              />
            </div>
            <div class="col-md-8 center-name">
              <n-h5>
                {{profile.nickName}}
              </n-h5>
            </div>
          </div>
          <div class="medium-text"> 
            Owner's Credit: {{profile.credit}}
          </div>
        </div>
      </div>
    </div>
    <template #action>
      <n-space vertical>
        <n-space justify="end">
          <div class="row">
            <div class="col-md-5 line-height-34">
              Proposing Reward:
            </div>
            <div class="col-md-7">
              <n-input-number v-model:value="value" :parse="parse" :format="format"></n-input-number>
            </div>
          </div>
        </n-space>
        <n-space justify="end">
          <n-button :disabled="!loggedIn||canWithdraw" @click="applyTask">Apply</n-button>
          <n-button :disabled="!canWithdraw">Withdraw</n-button>
        </n-space>
      </n-space>
    </template>
  </n-card>
</template>

<script lang="ts">
import { computed, defineComponent, onBeforeMount, ref } from 'vue';
import { useStore } from 'vuex';
import { NAvatar, NButton, NCard, NDivider, NSpace, NGrid, NH5, NH6, NP, NInputNumber, DividerProps } from 'naive-ui';
import type { PropType } from 'vue';
import { useAddress } from '@starport/vue/src/composables';
import defaultAvatar from '../../assets/images/bee.jpg';

import type { Task as ITask, Profile as IProfile } from '../../store/generated/williamfeng323/worker-bee/williamfeng323.workerbee.workerbee';

type DividerThemeOverrides = NonNullable<DividerProps['themeOverrides']>

const dividerThemeOverrides: DividerThemeOverrides = {
  color: "rgb(31, 34, 37)"
}

export default defineComponent({
  props: {
    task: {
      type: Object as PropType<ITask>,
      required: true,
    }
  },
  components: { NAvatar, NButton, NCard, NDivider, NSpace, NGrid, NH5, NH6, NP, NInputNumber },
  setup: (prop) => {
    onBeforeMount(async () => {
      $s.dispatch("williamfeng323.workerbee.workerbee/QueryProfile", {
        params: { index: prop.task.owner }
      });
    });
    let $s = useStore();
    let loggedIn = computed<boolean>(() => $s.getters['common/wallet/loggedIn'])
    let { address } = useAddress({$s});
    let canWithdraw = prop.task.owner === address.value;
    let profile = computed<IProfile>(() => {
      return (
        $s.getters['williamfeng323.workerbee.workerbee/getProfile']({
          params: { index: prop.task.owner }
        })?.profile ?? {}
      );
    });
    let val = ref(Number(prop.task.bounty.amount)||0)
    let showModal = ref(false);
    let applyTask = async () => {
      let formData = {
        creator: address.value,
        taskId: prop.task.index,
        requestReward: {
          denom: 'honey',
          amount: `${val.value}`,
        }
      }
      try {
        let resp = await $s.dispatch("williamfeng323.workerbee.workerbee/sendMsgApplyTask", {
          value: { ...formData }
        });
        console.log(resp);
        if (resp.code != 0){
          alert(`applied task failed due to ${resp.rawLog}`);
        } else {
          alert(`applied task for ${val.value} honey`);
        }
      } catch(err) {
        console.log(err);
      }
      showModal.value = false;
    }
    return {
      value: val,
      showModal,
      profile,
      canWithdraw,
      dividerThemeOverrides,
      loggedIn,
      applyTask,
      parse: (input: string) => {
        const nums = input.replace(/(,|honey|\s)/g, '').trim()
        if (/^\d+(\.(\d+)?)?$/.test(nums)) return Number(nums)
        return nums === '' ? null : Number.NaN
      },
      format: (value: number | null) => {
        if (value === null) return ''
        return `${value.toLocaleString('en-US')} honey`
      },
      defaultAvatar
    };
  }
});
</script>

<style lang="scss">
.zero-margin {
  margin-top: 0 !important;
}
.avatar-and-name {
  min-height:45px
}
.center-name {
  line-height: 45px;
}
.medium-text {
  font-size: 15px;
  font-weight: bolder;
}
.line-height-34 {
  height:34px;
  line-height: 34px;
  font-size: 12px;
}
</style>