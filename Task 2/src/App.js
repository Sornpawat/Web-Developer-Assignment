import { createContext, useState } from "react";
import Images from "./components/Images";
import SearchField from "./components/SearchField";
import Unsplash from "./components/Unsplash";
import useAxios from "./hooks/useAxios";
import More from "./components/More";

export const ImageContext = createContext();
export const SearchContext = createContext();

function App() {
  const { response, isLoading, error, fetchData } = useAxios(
    ``
  );

  const initialSearch = {
    search: "office",
  };

  const initialPage = {
    page: 8,
  };

  const [search, setSearch] = useState(initialSearch);
  const [page, setPage] = useState(initialPage);

  const updateSearch = (newData) => {
    setSearch(newData);
  };

  const updatePage = (newData) => {
    setPage(newData);
  };

  const length = response.length;

  const value = {
    length,
    response,
    isLoading,
    error,
    fetchData,
  };

  return (
    <ImageContext.Provider value={value}>
      <SearchContext.Provider
        value={{ search, page, updateSearch, updatePage }}
      >
        <Unsplash>
          <SearchField></SearchField>
        </Unsplash>
        <Images></Images>
        <More></More>
      </SearchContext.Provider>
    </ImageContext.Provider>
  );
}

export default App;
