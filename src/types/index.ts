import {RootState} from '@/store/rootState';

export interface Config {
  baseURL?: string;
  useServerDate: boolean;
}


export interface UserInfo {
  id?: number;
  name?: string;
}

export type RootState= RootState;
