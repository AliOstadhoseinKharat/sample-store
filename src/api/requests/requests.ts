import { http } from "../instance/http";

// http request for get all products

export const httpAllProducts = (payload: any) => {
  return new Promise((resolve, reject) => {
    http
      .get(
        `/productStore/nina?page=${payload.page}&search=${payload.search}&mostSaleProducts=${payload.mostSaleProducts}&newestProducts=${payload.newestProducts}&cheapestProducts=${payload.cheapestProducts}&mostExpensiveProducts=${payload.mostExpensiveProducts}`
      )
      .then((res) => {
        if (res.data.status) {
          resolve(res.data);
        }
      })
      .catch((e) => {
        reject(e);
      });
  });
};
