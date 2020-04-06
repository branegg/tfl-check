import api from './index';

export default {
  fetchCabs(lat, lon) {
    return api.get(`/getCabs?lat=${lat}&lon=${lon}`).then((res) => {
      return res;
    });
  },
};
