import { getHotelsUrl } from '../utils/constant/pointApi';
import { axiosInstanceNotToken } from './axios.service';

const getDataHotelsAPI = () => axiosInstanceNotToken.get(getHotelsUrl);

export {
  getDataHotelsAPI,
};
