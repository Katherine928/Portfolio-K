import React from "react";
import { Fragment } from "react";
import Card from "./Card";
import ReactDOM from "react-dom";
import "./modal.css";

const Modal = ({ className, children }) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <>
          <section id="backdrop"></section>
          <Card className={className}>dsdsdsd</Card>
        </>,
        document.querySelector("#overlays")
      )}
    </Fragment>
  );
};

export default Modal;
