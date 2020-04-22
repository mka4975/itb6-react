import * as React from "react";
import styled, { createGlobalStyle } from "styled-components";
import GifView from "./views/GifView";
import { observer } from "mobx-react";
import Nav from "./Nav";
import Loader from "./domain/Loader";
import Search from "./views/Search";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Courier New', Courier, monospace;
    background-color: #edf0f2;
    color: #626569;
    text-align: center;
  }
`;

const Container = styled.div`
  margin: 0 auto;
  padding: 20px;
  max-width: 800px;
`;

const App = observer(
  (): JSX.Element => {
    const [currentTab, setCurrentTab] = React.useState<"trending" | "search">(
      "trending"
    );
    const [trending, setTrending] = React.useState(null);
    const [search, setSearch] = React.useState(null);

    React.useEffect(() => {
      const tmpTrending = new Loader();
      tmpTrending.loadItems(0);
      setTrending(tmpTrending);

      const tmpSearch = new Loader();
      tmpSearch.loadItems(0, "Lukas");
      setSearch(tmpSearch);
    }, []);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onSearch = (event: any): void => {
      event.preventDefault();

      search.currentPage = 1;
      search.loadItems(0, event.target.search.value);
    };

    return (
      <>
        <GlobalStyle />
        <Container>
          <Nav currentTab={currentTab} selectTab={setCurrentTab} />
          {currentTab === "trending" ? (
            trending && (
              <GifView
                items={trending.items}
                loading={trending.loading}
                currentPage={trending.currentPage}
                numberOfPages={trending.numberOfPages}
                lastPage={trending.lastPage}
                nextPage={trending.nextPage}
                setPage={trending.setPage}
              />
            )
          ) : (
            <>
              <Search onSearch={onSearch} searchTerm={search.searchTerm} />
              <GifView
                items={search.items}
                loading={search.loading}
                currentPage={search.currentPage}
                numberOfPages={search.numberOfPages}
                lastPage={search.lastPage}
                nextPage={search.nextPage}
                setPage={search.setPage}
              />
            </>
          )}
        </Container>
      </>
    );
  }
);

export default App;
