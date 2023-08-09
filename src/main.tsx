import ReactDOM from 'react-dom/client';

import { App } from './components/app/app';

import './styles/global-styles.scss';
import { Provider } from 'react-redux';
import { store } from './store/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>,
);
