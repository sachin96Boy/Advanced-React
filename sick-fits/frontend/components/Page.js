import React from 'react';
import propTypes from 'prop-types';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import Header from './Header';

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'radnika_next';
        src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
    }
    html {
        box-sizing: border-box;
        font-size: 10px;
        }
    *, *:before, *:after {
            box-sizing: inherit;
    }
    body {
                padding: 0;
                margin: 0;
                font-size: 1.5rem;
                line-height: 2;
                font-family: 'radnika_next';
    }
    a {
                text-decoration: none;
                color: ${(props) => props.theme.black};
    }
    button {  font-family: 'radnika_next'; }
                
`;
const theme = {
  red: '#ff0000',
  black: '#393939',
  grey: '#3a3a3a',
  lightgrey: '#e1e1e1',
  offWhite: '#ededed',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
};

const innerStyles = {
  maxWidth: theme.maxWidth,
  margin: '0 auto',
  padding: '2rem',
};
function Page({ children }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <div style={innerStyles}>{children}</div>
      </ThemeProvider>
    </>
  );
}

Page.propTypes = {
  children: propTypes.any,
};
export default Page;
