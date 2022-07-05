import { blocks, env, wallet } from '@starport/vuex';
import { Store } from 'vuex';
import generated from './generated';

export default function init(store:Store<any>) {
  for (const moduleInit of Object.values(generated)) {
    moduleInit(store);
  }
  blocks(store);
  env(store);
  wallet(store);
}
