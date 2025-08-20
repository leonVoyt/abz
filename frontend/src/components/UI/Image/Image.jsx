import React from "react";
import classes from "./Image.module.scss";

export default function Image({ url, type = "normal" }) {
  return (
    <img
      src={url || "/default-user.png"}
      loading="lazy"
      alt={url}
      className={type === "normal" ? classes.img : classes.bigImg}
    />
  );
}
