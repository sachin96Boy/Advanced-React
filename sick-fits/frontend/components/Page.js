import React from 'react';
import propTypes from 'prop-types';
import Header from './Header';

function Page({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

Page.propTypes = {
  children: propTypes.any,
};
export default Page;
