import React from 'react';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore';
import RouteMap from './router/routeMap';

import './static/css/common.css';
import './static/css/font.css';
// 创建Redux的 store 对象
const store= configureStore();

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Provider store={store}>
        <RouteMap/>
      </Provider>
    );

  }
}
export default App;
