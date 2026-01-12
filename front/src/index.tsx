import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './app';
import { AuthProvider } from './context/AuthContext';
import { initSentry } from './lib/sentry';
import { store } from './store';
import GlobalStyle from './styles/global.style';

initSentry();

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <Provider store={store}>
      <AuthProvider>
        <React.StrictMode>
          <GlobalStyle />
          <App />
        </React.StrictMode>
      </AuthProvider>
    </Provider>,
  );
}
