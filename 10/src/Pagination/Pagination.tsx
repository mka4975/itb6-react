import * as React from "react";
import { Button } from "antd";

interface PaginationProps {
  numberOfPages: number;
  currentPage: number;
  last: () => void;
  next: () => void;
}

const Pagination = ({
  numberOfPages,
  currentPage,
  last,
  next,
}: PaginationProps): JSX.Element => {
  return (
    <>
      <Button onClick={last}>&lt;</Button>
      <span>
        Page {currentPage + 1} of {numberOfPages}
      </span>
      <Button onClick={next}>&gt;</Button>
    </>
  );
};

export default Pagination;
