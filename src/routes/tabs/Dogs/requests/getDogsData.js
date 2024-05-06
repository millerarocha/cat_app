const getSuspender = (promise) => {
  let status = 'pending';
  let response;

  const suspender = promise.then(
    (res) => {
      status = 'success';
      response = res;
    },
    (err) => {
      status = 'error';
      response = err;
    }
  );

  const read = () => {
    switch (status) {
      case 'pending':
        throw suspender;
      case 'error':
        throw response;
      default:
        return response;
    }
  };

  return { read };
};

export const getDogsData = () => {
  const queryParams = { limit: 20, has_breeds: 1 };
  const baseUrl = 'https://api.thedogapi.com/v1/images/search';
  const queryString = new URLSearchParams(queryParams).toString();
  const url = `${baseUrl}?${queryString}`;

  const promise = fetch(url, {
    headers: {
      'content-type': 'application/json',
      'x-api-key': import.meta.env.VITE_DOG_API_KEY,
    },
  })
    .then((res) => res.json())
    .then((data) => data);

  return getSuspender(promise);
};
