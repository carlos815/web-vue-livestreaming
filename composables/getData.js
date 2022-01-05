import { baseURL } from "./variables";

const getData = (dataName) => {
  const data = {};
  let error = {};
  async function load() {
    try {
      const res = await fetch(baseURL + dataName);

      if (!res.ok) {
        const message = `An error has occured: ${res.status} - ${res.statusText}`;
        throw new Error(message);
      }
      data = await res.json();

      console.log("this is the dataform getData  ");
      console.log(data);
    } catch (err) {
      error = err.message;
    }
  }

  return { data, error, load };
};

export default getData;
