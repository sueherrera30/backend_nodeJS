const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if( Math.random() < 0.5) {
      resolve('hello world!');
    } else {
      reject( new Error('hello error'));
    }
  }, 1000);
});

// podemos encadenar las promesas:
promise
.then(msg => msg.toUpperCase())
.then(msg => console.log('message:', msg))
.catch(error  => console.log('there is an error',error));