import { blocks, env, wallet } from '@starport/vuex';
import generated from './generated';

export default function init(store:any) {
  for (const moduleInit of Object.values(generated)) {
    moduleInit(store);
  }
  blocks(store);
  env(store);
  wallet(store);
}
