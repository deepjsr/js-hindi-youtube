# Projects related to DOM

## project link
[ Click here ](https://stackblitz.com/edit/vitejs-vite-ghzmnt?file=index.html&terminal=dev)

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
## Project one
