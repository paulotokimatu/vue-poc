import axios from 'axios';

const ENDPOINTS = {
  getList: '/list',
};

const VoucherApiService = {
  async send(url, method, body = {}, headers = {}) {
    const request = {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    };

    if (method !== 'GET') {
      // request.body = JSON.stringify(body);
      request.data = JSON.stringify(body);
    }

    // const response = await fetch(`${process.env.VUE_APP_VOUCHER_API_URL}${url}`, request);
    const response = await axios.request(`${process.env.VUE_APP_VOUCHER_API_URL}${url}`, request);

    return response.data;
  },

  getVoucherList() {
    return this.send(ENDPOINTS.getList, 'GET');
  },
};

export default VoucherApiService;
