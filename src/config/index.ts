import config from './config';
import {getBaseURL} from '@/utils';

let newConfig = config;
if (((window as any).globalConfig)) {
  newConfig = {...config, ...(window as any).globalConfig};
}

if (!newConfig.baseURL) {
  newConfig.baseURL = getBaseURL();
}

export default newConfig;
