import * as React from "react";
import { FormattedNumber } from "react-intl";
import { Input } from "antd";

const Numbers = (): JSX.Element => {
  const [number, setNumber] = React.useState<number>(0);

  return (
    <>
      <Input
        type="number"
        style={{ width: "100px" }}
        value={number}
        onChange={(event: any): void => setNumber(event.target.value)}
      />
      <p>
        <br />
        <FormattedNumber value={number} />
        <br />
        <FormattedNumber currency="EUR" style="currency" value={number} />
        <br />
        <FormattedNumber
          currency="EUR"
          minimumFractionDigits={5}
          style="currency"
          value={number}
        />
        <br />
      </p>
    </>
  );
};

export default Numbers;
