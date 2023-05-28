import * as Logic from "./logic.test.js";
import * as String from "./string.test.js";

const tests = [...Object.entries(Logic), ...Object.entries(String)];
tests.forEach(([k, v]) => {
  try {
    v();
  } catch (e) {
    console.log(k, e);
  }
});
