import {ActionTree} from 'vuex';
import * as types from './mutation-types';
import {RootState} from './rootState';

const actions: ActionTree<RootState, RootState> = {
  doSignin: ({commit}): void => {
    commit(types.TEST);
  },
};


export default actions;
