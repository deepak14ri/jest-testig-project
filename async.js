function fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('data from async function');
      }, 1000);
    });
  }

  module.exports = fetchData;