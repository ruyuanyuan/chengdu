import axios from 'axios'

const axiosWrap = axios.create({
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
  },
  withCredentials: true,
  transformRequest: [
    function (data) {
      if (data) {
        let params = new URLSearchParams();
        for (const key in data) {
          if (data.hasOwnProperty(key)) {
            const element = data[key];
            if (element === null) {
              continue;
            }
            params.append(key, element);
          }
        }
        return params;
      }
    }
  ]
});

export default {
  get(url, data) {
    return axiosWrap.get(url, {
      params: data
    })
  },
  post(url, data) {
    return axiosWrap.post(url, data)
  }
}
