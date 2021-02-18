/* Add JavaScript code here! */
console.log('Hello World! You did! Welcome to Snowpack :D');

import Button from "@ui5/webcomponents/dist/Button";
import Toast from "@ui5/webcomponents/dist/Toast"

/** @type {Toast} */
const tst= document.createElement("ui5-toast");
document.body.appendChild(tst);

/** @type {Button} */
const btn = document.getElementById("btn");
btn.addEventListener("click", event => {
    tst.innerHTML = btn.innerHTML;
    tst.show();
});
