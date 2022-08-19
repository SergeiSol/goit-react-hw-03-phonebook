import React from 'react';

import PropTypes from 'prop-types';

export function Section({ title, children }) {
  return (
    <div>
      <h2 className="section-title">{title}</h2>
      <div className="section-content">{children}</div>
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

// export default Section;
