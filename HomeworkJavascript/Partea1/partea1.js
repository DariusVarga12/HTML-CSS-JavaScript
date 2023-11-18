
const multiplyForm = document.querySelector('#multiply-form');
const product = document.querySelector("#calc-result");

multiplyForm.addEventListener('submit', event => {
  const formData = new FormData(event.target);
  const a = Number(formData.get('a'));
  const b = Number(formData.get('b'));
  const c = Number(formData.get('c'));
  product.value = ((a * b) + (b * c)) / (a + b);
  event.preventDefault();
  alert(product.value);
});


