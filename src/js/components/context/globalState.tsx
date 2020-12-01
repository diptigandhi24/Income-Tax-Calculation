// login
// main screen
//    with cards
// tax calculation form

// state.userId ? <cards> : <login>
//  with a route: /taxform
//      with a route ? param thing, userid

import React, { useContext } from 'react';

interface UserInfo {
  id: number;
}

const UserInfo = { user: '', id: 0 };
let id =0;
export const UserContext = React.createContext( id);
const Provider = UserContext.Provider;
export function UserInfoProvider({ children }: any) {
  return <UserContext.Provider value={ id= 0 }> {children} </UserContext.Provider>;
}
