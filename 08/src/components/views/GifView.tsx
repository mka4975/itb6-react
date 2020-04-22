import * as React from "react";
import GifContainer from "./GifContainer";
import styled from "styled-components";

interface PropTypes {
  items: Gif[];
  loading: boolean;
  numberOfPages: number;
  currentPage: number;
  nextPage: () => void;
  lastPage: () => void;
  setPage: (page: number) => void;
}

const PaginationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 20px;
`;

const GifView = ({
  items,
  loading,
  nextPage,
  lastPage,
  currentPage,
  numberOfPages,
  setPage,
}: PropTypes): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (event: any): void => {
    event.preventDefault();

    setPage(parseInt(event.target.currentPage.value));
    event.target.currentPage.value = "";
  };

  return (
    <>
      <PaginationContainer>
        <button onClick={lastPage}>Last page</button>
        <form onSubmit={onSubmit}>
          <input
            type="number"
            name="currentPage"
            placeholder={currentPage.toString()}
          />
        </form>
        / {numberOfPages}
        <button onClick={nextPage}>next page</button>
      </PaginationContainer>
      {loading ? (
        <div>Loading ...</div>
      ) : (
        <>
          {items.map((item: Gif) => (
            <GifContainer key={item.id} gif={item} />
          ))}
        </>
      )}
    </>
  );
};
export default GifView;
