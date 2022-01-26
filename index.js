import { CustomInput } from "./custom-input.js";

customElements.define('custom-input', CustomInput);

const form = document.forms[0];

form.addEventListener("formdata", (e) => {
  const formData = e.formData;

  const keys = [...formData.keys()]
  const values = [...formData.values()]

  console.log(keys, values);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  new FormData(form);
});