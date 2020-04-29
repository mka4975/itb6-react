import * as React from "react";
import { Input, Select } from "antd";
import { FormattedMessage } from "react-intl";

const Texts = (): JSX.Element => {
  const [text, setText] = React.useState<string>("...");
  const [gender, setGender] = React.useState<"female" | "male">("female");
  const [number, setNumber] = React.useState<number>(0);

  return (
    <>
      <Input
        type="text"
        style={{ width: "200px", marginRight: "10px" }}
        value={text}
        onChange={(event: any): void => setText(event.target.value)}
      />
      <Input
        type="number"
        style={{ width: "100px", marginRight: "10px" }}
        value={number}
        onChange={(event: any): void => setNumber(event.target.value)}
      />
      <Select
        onChange={(value: "female" | "male"): void => setGender(value)}
        defaultValue="female"
      >
        <Select.Option value="female">Female</Select.Option>
        <Select.Option value="male">Male</Select.Option>
      </Select>
      <p>
        <br />
        <FormattedMessage
          id="text"
          values={[number, new Date(), text, gender]}
        />
      </p>
    </>
  );
};

export default Texts;
