import React from "react";
import classes from "./Input.module.scss";

export default function Input({
  register,
  type = "text",
  errors,
  phonePlaceholder,
  placeholder,
  fieldName,
  errorObject,
}) {
  return (
    <>
      <div className={classes.inputWrapper}>
        <input
          {...register(`${fieldName}`, errorObject)}
          type={type}
          className={`${classes.input} ${errors[fieldName] ? classes.inputError : ""}`}
          placeholder={placeholder}
        />
        {errors[fieldName] ? (
          <p className={"error"}>{errors[fieldName].message}</p>
        ) : (
          type === "tel" && <span className={classes.phonePlaceholder}>{phonePlaceholder}</span>
        )}
      </div>
    </>
  );
}
