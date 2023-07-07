import { getHotelsUrl, postHotelsUrl } from '../utils/constant/pointApi';
import { axiosInstanceNotToken, axiosToken } from './axios.service';

const getDataHotelsAPI = () => axiosInstanceNotToken.get(getHotelsUrl);
const postHotelAPI = (data) => axiosToken.post(postHotelsUrl, data);
export {
  getDataHotelsAPI,
  postHotelAPI,
};
