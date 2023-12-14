import React, { createContext, useState } from 'react';
export const AtuhContext = createContext(null);
const UserContext = ({ children }) => {
  const [user, setUser] = useState('hello');

  const authInfo = {
    user,
  };
  return (
    <AtuhContext.Provider value={authInfo}>{children}</AtuhContext.Provider>
  );
};

export default UserContext;
