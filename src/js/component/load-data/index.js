export const jsonObjectLoad = async () =>
  import(/* webpackChunkName: "load-data" */ "@/data.json");
