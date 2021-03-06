import app from './server/index';
import http from 'http';

const server = http.createServer(app);

let currentApp = app;

server.listen(process.env.PORT || 3000, error => {
  if (error) {
    console.log(error);
  }

  console.log('🚀 started!');
});

if (module.hot) {
  console.log('✅  Server-side HMR Enabled!');

  module.hot.accept('./server/index', () => {
    console.log('🔁  HMR Reloading `./server/index`...');
    server.removeListener('request', currentApp);
    const newApp = require('./server/index').default;
    server.on('request', newApp);
    currentApp = newApp;
  });
}
