import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { store } from '../store/store';
import { theme } from '../styles/theme';
import GlobalStyle from '../styles/GlobalStyle';

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}
