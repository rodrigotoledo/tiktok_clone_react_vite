import { createContext } from "react";

const PostContext = createContext(null);

export const PostProvider = ({ children }) => {

  return (
    <PostContext.Provider value={{}}>
      {children}
    </PostContext.Provider>
  );
};
