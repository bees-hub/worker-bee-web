<template>
  <div class="container">
    <div v-if="profile.index && address">
      <div class="col-md-6">
          <n-divider title-placement="left" :theme-overrides="dividerThemeOverrides">
            My Profile
          </n-divider>
          <div class="avatar-and-name row">
            <div class="col-md-4">
              <n-avatar
                round
                size="large"
                src="a.jpg"
                :fallback-src="defaultAvatar"
              />
            </div>
            <div class="col-md-8 center-name">
              <n-h5>
                {{profile.nickName||"Anonymous"}}
              </n-h5>
            </div>
          </div>
          <div class="medium-text"> 
            Credit: {{profile.credit}}
          </div>
        </div>
    </div>
    <div v-else>
      <div class="col-6 text-align--right">
        <SpButton
        type="primary"
        :disabled="!address"
        @click="visibleModal = 'create-item'"
        >
        Create Profile
        </SpButton>
      </div>
    </div>
  </div>
  <CreateProfile
    v-if="visibleModal === 'create-item'"
    store-name='williamfeng323.workerbee.workerbee'
    item-name="Profile"
    :command-name="`/sendMsgCreate${'Profile'}`"
    @close="visibleModal = ''"
  />
</template>

<script lang="ts">
import { computed, defineComponent, onUpdated, reactive, toRefs } from 'vue';
import { NAvatar, NDivider, NH5, DividerProps } from 'naive-ui';
import { useAddress } from '@starport/vue/src/composables';
import { useStore } from 'vuex';
import defaultAvatar from '../../assets/images/bee.jpg';

import CreateProfile from './CreateProfile.vue';
import { Profile as IProfile } from '../../store/generated/williamfeng323/worker-bee/williamfeng323.workerbee.workerbee/module/types/workerbee/profile'

export interface State {
  visibleModal: string
  moduleAvailable: boolean
}

export let initialState: State = {
  visibleModal: '',
  moduleAvailable: false
}

type DividerThemeOverrides = NonNullable<DividerProps['themeOverrides']>

const dividerThemeOverrides: DividerThemeOverrides = {
  color: "rgb(31, 34, 37)"
}

export default defineComponent({
  name: "Profile",
  components: { CreateProfile, NAvatar, NDivider, NH5 },
  setup: () => {
    // store
    let $s = useStore()
    
    // state
    let state: State = reactive(initialState)
    // composables
    let { address } = useAddress({ $s })
    onUpdated(async () => {
      if (address.value) {
        $s.dispatch("williamfeng323.workerbee.workerbee/QueryProfile", {
          params: { index: address.value }
        })
      }
    })
    let profile = computed<IProfile>(() => {
      return (
        $s.getters['williamfeng323.workerbee.workerbee/getProfile']({
          params: { index: address.value }
        })?.profile ?? {}
      )
    });
    return {
      address,
      profile,
      dividerThemeOverrides,
      defaultAvatar,
      ...toRefs(state),
    }
  }
});
</script>
