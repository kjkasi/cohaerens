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

  postResource = async (url, data) => {
    const res = await fetch(
      'http://localhost:3000/test',
      {
        method: 'post',
        //body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({foo: 'foo', bar: 'bar'}),
      });
    return await JSON.stringify(res);
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

  postData = async (data) => {
    const res = await this.postResource('/test', data);
    return res;
  };
};