import * as React from "react";
import { DatePicker } from "antd";
import { FormattedDate } from "react-intl";

const Date = (): JSX.Element => {
  const [date, setDate] = React.useState<Date>();

  return (
    <>
      <DatePicker onChange={(d: any): void => setDate(d)} />

      <p>
        <br />
        <FormattedDate value={date} />
        <br />
        <FormattedDate month="long" weekday="long" day="numeric" value={date} />
        <br />
      </p>
    </>
  );
};

export default Date;
