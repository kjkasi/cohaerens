export default class ApiService {

  _apiBase = 'http://localhost:3000/api';

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`);
    }
    return res.json();
  };

  postResource = async (url, data) => {
    const res = await fetch(
      `${this._apiBase}${url}`,
      {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify(data)
      });
    return res;
  };

  getAllPlace = async (page = 1, perPage = 10) => {
    const res = await this.getResource(`/place?page=${page}&perPage=${perPage}`);
    return res;
  };

  getTecList = async (page = 1, perPage = 10) => {
    const res = await this.getResource(`/tec/list?page=${page}&perPage=${perPage}`);
    return res;
  };

  getTec = async (id) => {
    const res = await this.getResource(`/tec/${id}`);
    return res;
  }

  getResearchList = async (page = 1, perPage = 10) => {
    const res = await this.getResource(`/research/list?page=${page}&perPage=${perPage}`);
    return res;
  };

  getResearch = async (id) => {
    const res = await this.getResource(`/research/${id}`);
    return res;
  }

  postData = async (data) => {
    const res = await this.postResource('/tec', data);
    console.log(res);
    return res;
  };
};