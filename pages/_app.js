import React from 'react';
import App from 'next/app';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../assets/css/ionicons.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/scss/style.scss';

import { ThemeProvider } from '../context/ThemeContext';

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  state = {
    theme: 'dark',
  };

  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider
        value={{
          data: this.state,
          update: () => {
            this.setState((state) => ({
              theme:
                state.theme === 'light'
                  ? (this.theme = 'dark')
                  : (this.theme = 'light'),
            }));
          },
        }}
      >
        <Component {...pageProps} {...this.state} />
      </ThemeProvider>
    );
  }
}
