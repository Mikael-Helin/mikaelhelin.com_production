import { w as writable } from './index2-zTFVZeQR.js';

function setCookie(name, value, days) {
  const date = /* @__PURE__ */ new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1e3);
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}
function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1, c.length);
    }
    if (c.indexOf(nameEQ) === 0) {
      return c.substring(nameEQ.length, c.length);
    }
  }
  return null;
}
const storeLanguage = writable(null);

export { setCookie as a, getCookie as g, storeLanguage as s };
//# sourceMappingURL=stores-nw_Fd3Oo.js.map
