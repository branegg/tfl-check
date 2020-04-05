import api from './index';

export default {
  fetchCabs({ lat, lon }) {
    return api.get(`/getCabs?lat=${lat}&lon=${lon}`).then((res) => {
      console.log('response', res);
      return res;
    });
  },
};
