import React from 'react';
import UserPhone from './userphone.js';

function User(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.email}</p>
      <UserPhone phone={props.phone} />
    </div>
  );
}

export default User;
