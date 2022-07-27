import React from 'react';

const Confirmation = ({children}) => {
  return <div role="dialog">
    <h1>Confirmation</h1>
    <div>{children}</div>
    <button>OK</button>
    <button>Cancel</button>
  </div>;
};

export default Confirmation;