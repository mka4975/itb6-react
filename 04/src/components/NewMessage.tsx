import React, { FunctionComponent } from "react";
import { generateUUID } from "../utils";
import PropTypes from "prop-types";

const NewMessage: FunctionComponent = ({ addMessage }) => {
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
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            className="form-control"
            id="subject"
            placeholder="Enter subject"
            name="subject"
          />
        </div>
        <div className="form-group">
          <label htmlFor="body">Body</label>
          <input
            type="password"
            className="form-control"
            id="body"
            placeholder="Enter body"
            name="body"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

NewMessage.propTypes = {
  addMessage: PropTypes.func.isRequired
};

export default NewMessage;
