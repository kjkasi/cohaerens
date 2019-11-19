export default class ApiService {

  _apiBase = 'http://localhost:3000/api';

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`);
    }
    return await res.json();
  };

  getAllPlace = async (page = 1, perPage = 10) => {
    const res = await this.getResource(`/place?page=${page}&perPage=${perPage}`);
    return res;
    /*
    return res.result.map((item) => {
      return {
        id: item._id,
        name: item.Name
      };
    });
    */
  };

};