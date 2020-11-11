//Context provides a way to pass data through the component tree without having to pass props down manually at every level

// => create the Context
// => Provide a context value
// => consume the context value

import React, { Component } from "react";
const UserContext = React.createContext("Nikita");

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;
export { UserProvider, UserConsumer };
export default UserContext