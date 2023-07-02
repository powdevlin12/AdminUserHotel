import { getUserUrl } from '../utils/constant/pointApi';
import { axiosToken } from './axios.service';

const getDataUserAPI = () => axiosToken.get(getUserUrl);
const patchLockUserAPI = () => axiosToken.patch(getUserUrl);

export {
  getDataUserAPI,
  patchLockUserAPI,
};
