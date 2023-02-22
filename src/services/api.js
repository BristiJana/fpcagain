import global from './global';
import axios from 'axios';

const Instance = axios.create({
  baseURL: global.Instance,
});

// Instance.interceptors.response.use(
//   request => {
//     console.log('Interceptor request-->' + JSON.stringify(request, null, 2));
//     return request;
//   },
//   err => {
//     console.log('Interceptor Error-->' + JSON.stringify(err, null, 2));
//   },
// );

export default {
  login: (username, password) =>
    Instance({
      method: 'POST',
      url: 'auth/code/',
      data: {
        username: username,
        password: password,
      },
    }),
  logout: token =>
    Instance({
      method: 'POST',
      url: 'logoutme/',
      data: {
        token: token,
      },
       headers: {
        Authorization: 'Bearer ' + token,
      },
    }),
};
