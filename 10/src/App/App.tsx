import * as React from "react";
import { PageHeader, Table } from "antd";
import Pagination from "../Pagination";
import useFakeData from "../useFakeData";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
];

const pageSize = 10;

const App = (): JSX.Element => {
  const data = useFakeData();
  const [currentPage, setCurrentPage] = React.useState(0);

  const numPages = Math.floor(data.length / pageSize) + 1;
  const startIndex = pageSize * currentPage;
  const displayedData = data.slice(startIndex, startIndex + pageSize);

  const setPage = (num: number): void => {
    if (num >= 0 && num < numPages) {
      setCurrentPage(num);
    }
  };

  return (
    <>
      <PageHeader
        title="Testing Assignment"
        subTitle="Paginated list"
        extra={
          <Pagination
            next={(): void => setPage(currentPage + 1)}
            last={(): void => setPage(currentPage - 1)}
            numberOfPages={numPages}
            currentPage={currentPage}
          />
        }
      />
      <Table
        dataSource={displayedData}
        columns={columns}
        rowKey="age"
        pagination={false}
      />
      ;
    </>
  );
};

export default App;
