import {RootState} from './rootState';
import { GetterTree } from 'vuex';


const getters: GetterTree<RootState, RootState> = {
  userInfo: state => state.userInfo,
};


export default getters;
