const axios = require('axios');

const api = axios.create({
  baseURL: 'https://api.tfl.gov.uk/',
});

module.exports = function(app) {
  app.get('/getCabs', (req, res) => {
    const { lat, lon } = req.query;
    api.get(`/Cabwise/search?lat=${lat}&lon=${lon}&radius=100000`).then((cabsData) => {
      res.json(cabsData.data);
    });
  });
};
