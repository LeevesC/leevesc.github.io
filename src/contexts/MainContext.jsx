import { createContext, useContext, useReducer } from "react";

const initialValue = {
  about: true,
  resume: false,
  portfolio: false,
  sidebar: false,
};
function reducer(state, action) {
  switch (action.type) {
    case "about":
      return { ...state, about: true, resume: false, portfolio: false };
    case "resume":
      return { ...state, about: false, resume: true, portfolio: false };
    case "portfolio":
      return { ...state, about: false, resume: false, portfolio: true };
    case "sidebar":
      return { ...state, sidebar: !state.sidebar };
    default:
      throw new Error("Action unknown");
  }
}

// initiate context
const MainContext = createContext();
function MainProvider({ children }) {
  const [{ about, resume, portfolio, sidebar }, dispatch] = useReducer(
    reducer,
    initialValue
  );
  return (
    <MainContext.Provider
      value={{
        about,
        resume,
        portfolio,
        sidebar,
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
