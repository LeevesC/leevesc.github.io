import { createContext, useContext, useReducer } from "react";

const initialValue = {
  about: true,
  resume: false,
  portfolio: false,
};
function reducer(state, action) {
  switch (action.type) {
    case "about":
      return { ...state, about: true, resume: false, portfolio: false };
    case "resume":
      return { ...state, about: false, resume: true, portfolio: false };
    case "portfolio":
      return { ...state, about: false, resume: false, portfolio: true };
    default:
      throw new Error("Action unknown");
  }
}

// initiate context
const MainContext = createContext();
function MainProvider({ children }) {
  const [{ about, resume, portfolio }, dispatch] = useReducer(
    reducer,
    initialValue
  );
  return (
    <MainContext.Provider
      value={{
        about,
        resume,
        portfolio,
        dispatch,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}

function useMain() {
  const context = useContext(MainContext);
  return context;
}

export { MainProvider, useMain };
