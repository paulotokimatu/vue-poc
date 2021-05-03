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
      request.body = JSON.stringify(body);
    }

    const response = await fetch(`${process.env.VUE_APP_VOUCHER_API_URL}${url}`, request);

    return response.json();
  },

  getVoucherList() {
    return this.send(ENDPOINTS.getList, 'GET');
  },
};

export default VoucherApiService;
