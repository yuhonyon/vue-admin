import { MutationTree } from 'vuex';
import {UserInfo} from '@/types';
import * as types from '@/store/mutation-types';

export interface RootState {
  userInfo: UserInfo;
}

function initState(): RootState {
  return {
    userInfo: {},
  };
}
export const state: RootState = initState();


export const mutations: MutationTree<RootState> = {
  [types.APP_RESET](state): void {
    state = initState();
  },
  [types.TEST](state, data: UserInfo) {
    state.userInfo = data;
  },
};


