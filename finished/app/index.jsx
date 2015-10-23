require('./main.css');
var React    = require('react');
var ReactDOM = require('react-dom');
var App      = require('./containers/App');
var DevTools = require('./containers/DevTools.jsx');
var Provider = require('react-redux').Provider;
var configureStore = require('./store/configureStore');

const store = configureStore({
  ship: {
    info: {
      shipName: null,
      captain: null,
      firstOfficer: null,
      chiefEngineer: null,
      tacticalOfficer: null,
      helmsman: null
    },
    position: [500, 300],
    destination: {
      name: 'Sol',
      position: [500, 300],
      jurisdiction: 'Federation'
    },
    speed: 0
  }
});

var appNode = document.createElement('div');
appNode.className = 'star-trek-app';
document.body.appendChild(appNode);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <App />
      <DevTools />
    </div>
  </Provider>,
  appNode
);
