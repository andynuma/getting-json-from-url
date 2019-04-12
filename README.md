# getting-json-from-url
React勉強用 Created with CodeSandbox

```js
  getJson = () => {
    const url = "https://api.myjson.com/bins/dfez0";
    axios.get(url).then(res => {
      console.log(res)
    })
  }
  ```
