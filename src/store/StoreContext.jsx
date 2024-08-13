import { useContext, createContext, useReducer, useEffect } from "react";
import { tabLabels } from "@/common";
import axios from "axios";

/* Default State start */
const defaultState = {
  select: "Web Development",
  query: "",
  news: [],
  error: false,
  loading: false,
};
/* Default State End */


/* Pure Reducer Function Start */
const reducer = (currentState, action) => {
  let newState = currentState;
  if (action.type === "TAB_SELECTED") {
    newState = {
      ...currentState,
      select: action.payload.tab,
    };
    return newState;
  } else if (action.type === "SEARCH_NEWS") {
    newState = {
      ...currentState,
      query: action.payload.searchQuery,
    };
    return newState;
  } else if (action.type === "SET_NEWS") {
    newState = {
      ...currentState,
      news: action.payload,
    };
    return newState;
  } else if (action.type === "SET_LOADING") {
    newState = {
      ...currentState,
      loading: action.payload,
    };
    return newState;
  } else if (action.type === "SET_ERROR") {
    newState = {
      ...currentState,
      error: action.payload,
    };
    return newState;
  }
  
  return newState;
};
/* Pure Reducer Function End */




/* App Context Provider Start */
const AppContext = createContext(defaultState);

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  
  const toggleTabs = (tab) => {
    const newSelectedTab = {
      type: "TAB_SELECTED",
      payload: { tab },
    };
    dispatch(newSelectedTab);
  };
  
  const searchNews = (searchQuery) => {
    const searchedNews = {
      type: "SEARCH_NEWS",
      payload: { searchQuery },
    };
    dispatch(searchedNews);
  };
  
  
  useEffect(() => {
    const tabsData = tabLabels.find(
      (data) => state.select === "Web Development" || data.name === state.select
    );
    const apiUrl = state.query
    ? `https://hn.algolia.com/api/v1/search?query=${state.query}`
    : tabsData.apiUrl;
    if (tabsData) {
      (async () => {
        try {
          dispatch({ type: "SET_LOADING", payload: true });
          dispatch({ type: "SET_ERROR", payload: false });
          const apiUrl = state.query
          ? `https://hn.algolia.com/api/v1/search?query=${state.query}`
          : tabsData.apiUrl;
          const response = await axios.get(apiUrl);
          const API_DATA = response.data.hits.map((data) => {
            return {
              ...data,
              createdDate: new Date(data.created_at).toLocaleDateString(), // Converting the date
              updatedDate: new Date(data.updated_at).toLocaleDateString(), // Converting the date
            };
          });
          dispatch({ type: "SET_NEWS", payload: API_DATA });
          dispatch({ type: "SET_LOADING", payload: false });
        } catch (error) {
          dispatch({ type: "SET_ERROR", payload: true });
          dispatch({ type: "SET_LOADING", payload: false });
        }
      })();
    }
  }, [state.select, tabLabels, state.query]);
  
  return (
    <AppContext.Provider
    value={{
      select: state.select,
      query: state.query,
      news: state.news,
      error: state.error,
      loading: state.loading,
      toggleTabs,
      searchNews,
    }}
    >
      {children}
    </AppContext.Provider>
  );
};
/* App Context Provider End */

/* Custom Hook To Provide Context Throught out the App */
const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppContextProvider, useGlobalContext };




//   if (state.query) {
  //     useEffect(() => {
  //       const tabsData = tabLabels.find(
  //         (data) => state.select === "Web Development" || data.name === state.select
  //       );
  //       if (tabsData) {
  //         (async () => {
  //           try {
  //             dispatch({ type: "SET_LOADING", payload: true });
  //             dispatch({ type: "SET_ERROR", payload: false });

  //             const response = await axios.get(
  //               `https://hn.algolia.com/api/v1/search?query=${state.query}`
  //             );
  //             const API_DATA = response.data.hits.map((data) => {
  //               return {
  //                 ...data,
  //                 createdDate: new Date(data.created_at).toLocaleDateString(), // Converting the date
  //                 updatedDate: new Date(data.updated_at).toLocaleDateString(), // Converting the date
  //               };
  //             });
  //             dispatch({ type: "SET_NEWS", payload: API_DATA });
  //             dispatch({ type: "SET_LOADING", payload: false });
  //           } catch (error) {
  //             dispatch({ type: "SET_ERROR", payload: true });
  //             dispatch({ type: "SET_LOADING", payload: false });
  //           }
  //         })();
  //       }
  //     }, [state.select, tabLabels, state.query]);
  //   } else if (state.query === "") {
  //     useEffect(() => {
  //       const tabsData = tabLabels.find(
  //         (data) =>
  //           state.select === "Web Development" || data.name === state.select
  //       );
  //       if (tabsData) {
  //         (async () => {
  //           try {
  //             dispatch({ type: "SET_LOADING", payload: true });
  //             dispatch({ type: "SET_ERROR", payload: false });

  //             const response = await axios.get(tabsData.apiUrl);
  //             const API_DATA = response.data.hits.map((data) => {
  //               return {
  //                 ...data,
  //                 createdDate: new Date(data.created_at).toLocaleDateString(), // Converting the date
  //                 updatedDate: new Date(data.updated_at).toLocaleDateString(), // Converting the date
  //               };
  //             });
  //             dispatch({ type: "SET_NEWS", payload: API_DATA });
  //             dispatch({ type: "SET_LOADING", payload: false });
  //           } catch (error) {
  //             dispatch({ type: "SET_ERROR", payload: true });
  //             dispatch({ type: "SET_LOADING", payload: false });
  //           }
  //         })();
  //       }
  //     }, [state.select, tabLabels, state.query]);
  //   }