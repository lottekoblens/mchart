export const getData = () => {
    return new Promise((resolve) => {
      fetch("./data.js")
        .then(response => response.json())
        .then((json) => {
          resolve(json)
        })
    })
  }