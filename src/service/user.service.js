import { getUserUrl } from '../utils/constant/pointApi';
import { axiosToken } from './axios.service';

const getDataUserAPI = () => axiosToken.get(getUserUrl);

export {
  getDataUserAPI,
};
