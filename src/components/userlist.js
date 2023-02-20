import React from 'react';
import User from './user.js';

function UsersList() {
  const users = [
    { name: 'Pelle Teuse', email: 'pelle.teuse@example.com', phone: '0615689591' },
    { name: 'Toi Ture', email: 'toi.ture@example.com', phone: '0780458565' },
    { name: 'Carbo Nara', email: 'carbo.nara@example.com', phone: '0623548753' },
  ];

  return (
    <div>
      {users.map(user => (
        <User key={user} name={user.name} email={user.email} phone={user.phone} />
      ))}
    </div>
  );
}

export default UsersList;
