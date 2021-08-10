const csrfToken = document.querySelector('[name=csrf-token]').content

const headers = () => {
  const h = new Headers();

  h.append('Content-Type', 'application/json');
  h.append('X-CSRF-TOKEN', csrfToken);
  
  const session = {
    email: localStorage.getItem('email'),
    token: localStorage.getItem('token')
  }

  if (session.email && session.token) {
    h.append('Email', session.email);
    h.append('Token', session.token);
  }

  return h;
}

const request = (method, path, body) => {
  const url = `${path}`
  const options = { method, headers: headers() };

  if (body) {
    body.user_email = localStorage.getItem('email');
    body.user_token = localStorage.getItem('token');
    options.body = JSON.stringify(body);
  }

  return fetch(url, options)
    .then((response) => {
      if (response.ok) {
        return response
      }
      else {
        return Promise.reject(response);
      }
    })
}

const Api = {
  get(path) {
    return request('GET', path)
  },

  post(path, data = {}) {
    return request('POST', path, data);
  },

  put(path, data = {}) {
    return request('PUT', path, data);
  },

  delete(path) {
    return request('DELETE', path);
  }
}

export default Api;
