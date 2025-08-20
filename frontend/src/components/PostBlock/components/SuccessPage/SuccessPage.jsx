import React from "react";
import classes from "./SuccessPage.module.scss";
import Image from "../../../UI/Image/Image";

const SuccessPage = () => {
  return (
    <section className={classes.wrapper}>
      <h2>User successfully registered</h2>
      <Image url={"/success-image.svg"} type="bigImg" />
    </section>
  );
};
export default SuccessPage;
