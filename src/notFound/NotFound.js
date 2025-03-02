import React from 'react';
import Header from '../header/header';

function NotFound() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
          <Header/>
      <p
        style={{
          fontSize: 50,
          textAlign: 'center',
        }}
      >
        404 Not Found
      </p>
    </div>
  );
}

export default NotFound;
