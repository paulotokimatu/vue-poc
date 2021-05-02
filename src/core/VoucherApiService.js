const ENDPOINTS = {
  getList: '/lists',
};

const VoucherApiService = {
  async send(url, method, body = {}, headers = {}) {
    const response = await fetch(`${process.env.VOUCHER_API_URL}${url}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: JSON.stringify(body),
    });

    return response.json();
  },

  getVoucherList() {
    return this.send(ENDPOINTS.getList, 'GET');
  },
};

export default VoucherApiService;
