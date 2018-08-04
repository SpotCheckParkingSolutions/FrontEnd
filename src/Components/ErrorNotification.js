import React from 'react';

import '../warning.png';

const ErrorNotification = (props) =>{
  return (
    <div className="client-error">
      {props.error ?
      <div>
      <h1 className='error'>ERORR</h1>
</div>

      : null }
    </div>

  )
}

export default ErrorNotification;
