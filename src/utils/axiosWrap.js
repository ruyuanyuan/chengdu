import axios from 'axios'
import store from '@/store'

const axiosWrap = axios.create({
  headers: {
    // 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    'Content-Type': 'application/json; charset=UTF-8'
  },
  withCredentials: true,
  // transformRequest: [
  //   function (data) {
  //     if (data) {
  //       let params = new URLSearchParams();
  //       for (const key in data) {
  //         if (data.hasOwnProperty(key)) {
  //           const element = data[key];
  //           if (element === null) {
  //             continue;
  //           }
  //           params.append(key, element);
  //         }
  //       }
  //       return params;
  //     }
  //   }
  // ]
});

export default {
  storeState: store.state,
  get(url, data) {
    if (!data)
      data = {};
    //所有接口加parkId
    data.pkId = this.storeState.parkId === null ? '66' : this.storeState.parkId;
    return axiosWrap.get(url, {params: data})
  },
  post(url, data) {
    if (!data)
      data = {};
    //所有接口加parkId
    data.pkId = this.storeState.parkId === null ? '66' : this.storeState.parkId;
    return axiosWrap.post(url, data)
  }
}
