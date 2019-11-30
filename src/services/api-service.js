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
        headers: {
          //'Content-Type': 'application/json'
          //'Content-Type': 'application/x-www-form-urlencoded',
          //'Content-Type': 'multipart/form-data'
          //'content-type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify(data)
        //body: JSON.stringify({foo: 'bar'})
      });
    return res;
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
    const res = await this.postResource('/tec', data);
    console.log(res);
    return res;
  };
};