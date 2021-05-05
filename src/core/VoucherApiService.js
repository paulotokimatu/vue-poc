import axios from 'axios';

const ENDPOINTS = {
  getList: '/list',
};

const VoucherApiService = {
  async send(url, method, params = {}, body = {}, headers = {}) {
    const request = {
      method,
      params,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    };

    console.log(request)
    if (method !== 'GET') {
      request.data = JSON.stringify(body);
    }

    const response = await axios.request(`${process.env.VUE_APP_VOUCHER_API_URL}${url}`, request);

    return response.data;
  },

  getVoucherList(page, pageSize) {
    return this.send(`${ENDPOINTS.getList}`, 'GET', { page, pageSize });
  },
};

export default VoucherApiService;
