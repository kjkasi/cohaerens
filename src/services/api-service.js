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

  getAllPlace = async () => {
    const res = await this.getResource(`/place/`);
    return res.map((item) => {
      return {
        id: res.indexOf(item),
        name: item.Name
      };
    });
  };

};