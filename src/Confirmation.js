import React from 'react';

const Confirmation = ({children}) => {
  return <div role="dialog">
    <h1>Confirmation</h1>
    <div>{children}</div>
  </div>;
};

export default Confirmation;