import { getDataUser, loginUrl } from '../utils/constant/pointApi';
import { axiosInstanceNotToken, axiosToken } from './axios.service';

const loginAPI = (payload) => {
  const { username, password } = payload;
  return axiosInstanceNotToken.post(loginUrl, {
    userName: username, password,
  });
};

const getDataUserAPI = () => axiosToken.get(getDataUser);

export {
  loginAPI,
  getDataUserAPI,
};
