import PropTypes from 'prop-types';
import React from 'react';
const Section = ({ title, children }) => (
  <div>
    <h2>{title} </h2>
    <div>{children}</div>
  </div>
);
Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
export default Section;
