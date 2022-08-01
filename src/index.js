import { helloWebpack } from "./js/component/hello-webpack/index";
import { jsonObjectLoad } from "./js/component/load-data/index";
import Lodash from "lodash";

import "./sass/style.scss";

Lodash.cloneDeep({});
console.log(helloWebpack);

document.getElementById("button").addEventListener("click", () => {
  jsonObjectLoad().then((jsonObject) => console.log(jsonObject.default));
});
