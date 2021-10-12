import axios from "axios";
axios.defaults.timeout = 10000;

const API = "https://fakestoreapi.com/";

const getProducts = () => {
  return axios.get(API + "products", {});
};

const getCategories = () => {
  return axios.get(API + "products/categories", {});
};

export const getAllData = async (callBack) => {
  axios
    .all([getProducts(), getCategories()])
    .then(
      axios.spread((Products, Categories) => {
        return callBack({
          data: {
            Products: Products.data,
            Categories: Categories.data,
          },
        });
      })
    )
    .catch((e) => {
      return callBack({ error: e });
    });
};
