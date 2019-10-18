const EventEmmiter = require('events');

class Logger extends EventEmmiter {
  execute(cb) {
    console.log('before');
    this.emit('start');
    cb();
    this.emit('finish');
    console.log('after');
  }
}

const logger = new Logger();

logger.on('start',() => console.log('starting'));
logger.on('finish',() => console.log('finishing'));
logger.on('finish',() => console.log('Its done beib'));
logger.execute(() => console.log('hello world!!'));
