import React, { FunctionComponent } from "react";
import { generateUUID } from "../utils";
import styled from "styled-components";

interface Props {
  addMessage: Function;
}

const FormItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 10px;

  & label {
    margin-right: 20px;
  }

  & input,
  textarea,
  button {
    padding: 5px;
    border: ${({ theme }): string => theme.color} 1px solid;
    background-color: ${({ theme }): string => theme.bgColor};
    color: ${({ theme }): string => theme.color};
    font-family: "Courier New", Courier, monospace;
    border-radius: 2px;
  }

  & button {
    font-weight: 900;
    cursor: pointer;
    transition: border-width ease 0.2s;

    &:hover {
      border-width: 2px;
    }
  }
`;

const NewMessage: FunctionComponent = ({ addMessage }: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (event: any): void => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newMessage = {
      id: generateUUID(),
      subject: formData.get("subject").toString(),
      text: formData.get("body").toString(),
      read: false
    };
    addMessage(newMessage);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <FormItem>
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            placeholder="Enter subject"
            name="subject"
          />
        </FormItem>
        <FormItem>
          <label htmlFor="body">Body</label>
          <textarea
            type="text"
            id="body"
            placeholder="Enter body"
            name="body"
          />
        </FormItem>
        <FormItem>
          <button type="submit">Submit</button>
        </FormItem>
      </form>
    </>
  );
};

export default NewMessage;
