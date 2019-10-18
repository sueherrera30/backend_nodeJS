const asyncCallback = function(cb) {
  setTimeout(() => {
    if (Math.random() < 0.5) {
      return cb(null, 'Hello callback, you are only a test');
    } else {
      cb(new Error('no no, te dije que era un error'));
    }
  }, 1000);
};
asyncCallback((err, msg) => {
  if(err) {
    console.log('error', err)
  } else {
    console.log('message', msg);
  }
});
