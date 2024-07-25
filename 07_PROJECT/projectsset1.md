# Projects related to DOM

## project link
[ Click here ](https://stackblitz.com/edit/vitejs-vite-ghzmnt?file=index.html&terminal=dev)

## Project one

# Solution code
```javascript

const buttons = document.querySelectorAll('.button');
const body = document.body;
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    console.log(e.target.id, `Id's`);
    switch (e.target.id) {
      case 'grey':
        body.style.backgroundColor = e.target.id;
        break;
      case 'white':
        body.style.backgroundColor = e.target.id;
        break;
      case 'blue':
        body.style.backgroundColor = e.target.id;
        break;
      case 'yellow':
        body.style.backgroundColor = e.target.id;
        break;
    }
  });
});

```
## Project Two

# Solution code

```Javascript
const form = document.querySelector('form');
// this will give empty value as it will hold valur immidiate after page lode
// const weight=parseInt(document.querySelector('#weight').value);

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = 'Please give a valid height';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = 'Please give a valid weight';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // const guid =( bmi < 18.6) ? 'Under Weight' : 'Normal Range';
    // show the result
    // result.innerHTML = `<span>${bmi}</span><br>`;
    if (bmi < 18.6) {
      result.innerHTML = `<span>${bmi}</span><br> 
      <h5>Under Weight</h5>`;
    } else if (bmi > 24.9) {
      result.innerHTML = `<span>${bmi}</span>
      <h5>Over Weight</h5>`;
    } else {
      result.innerHTML = `<span>${bmi}</span>
      <h2>Normal Range</h2>`;
    }
  }
});
```