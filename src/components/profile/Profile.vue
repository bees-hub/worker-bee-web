<template>
    <div class="container">
        <div v-if="profile.index && address">
            {{profile}}
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
import { computed, defineComponent, onBeforeMount, reactive, toRefs } from 'vue';
import { useAddress } from '@starport/vue/src/composables';
import { useStore } from 'vuex';

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


export default defineComponent({
    name: "Profile",
    components: { CreateProfile },
    setup: () => {
        // store
        let $s = useStore()
        
        // state
        let state: State = reactive(initialState)
        // composables
        let { address } = useAddress({ $s })
        onBeforeMount(async () => {
            if (address.value) {
                $s.dispatch("williamfeng323.workerbee.workerbee/QueryProfile", {
                    params: { index: address.value },
                    options: { subscribe: true }
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
            ...toRefs(state),
        }
    }
});
</script>
