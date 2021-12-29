import { baseURL } from "./variables";

const getData = (dataName) => {
  const data = {};
  const error = {};
  async function load() {
    try {
      let dataFetched = await fetch(baseURL + dataName);
      if (!dataFetched.ok) {
        throw Error("no data available");
      }
      data.value = await dataFetched.json();
    } catch (e) {
      error.value = e.message;
      console.log(e.message);
    }
  }
  return { data, error, load };
};

export default getData;
