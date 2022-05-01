import urls from "../urls";

const apikey = "xGrDp4bcnmA9r84G3H5DPgUUKxZ6IBVw";

const fetchApi = async (url) => {
  let params = {
    method: "GET",
  };
  console.log("fetch url", url);
  return await fetch(url, params);
};

export const getCityData = async (city) => {
  return new Promise((resolve) => {
    fetchApi(urls.city(apikey, city))
      .then((res) => res.json())
      .then((resJson) => {
        console.log("city res:", resJson);
        resolve({ data: resJson });
      })
      .catch((error) => {
        console.log("error getCityData", error);
        resolve({ data: null });
      });
  });
};

export const getFiveDaysForecasts = async (localKey) => {
  return new Promise((resolve) => {
    fetchApi(urls.forecasts(apikey, localKey))
      .then((res) => res.json())
      .then((resJson) => {
        console.log("getFiveDaysForecasts res:", resJson);

        resolve({ data: resJson });
      })
      .catch((error) => {
        console.log("error getFiveDaysForecasts", error);
        resolve({ data: null });
      });
  });
};

export const getAutocompleteCities = async (text) => {
  return new Promise((resolve) => {
    fetchApi(urls.autocomplete(apikey, text))
      .then((res) => res.json())
      .then((resJson) => {
        resolve({ data: resJson });
      })
      .catch((error) => {
        console.log("error getAutocompleteCities", error);
        resolve({ data: null });
      });
  });
};
