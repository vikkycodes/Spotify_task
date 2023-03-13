import { createContext, useEffect, useState } from "react";

export const defaultState = {
  user: { name: "", image: "", spotifyInstance: null, currentTrack: null },
  setUser: () => {},
};

export const AppContext = createContext(defaultState);

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(defaultState.user);

  useEffect(() => {
    defaultState.setUser = setUser;
    defaultState.user = user;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AppContext.Provider value={{ setUser, user }}>
      {children}
    </AppContext.Provider>
  );
};
