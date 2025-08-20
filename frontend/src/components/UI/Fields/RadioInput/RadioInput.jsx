import React from "react";
import classes from "./RadioInput.module.scss";

export default function RadioInput({ register, positions, errors }) {
  return (
    <>
      <div className={classes.radioGroup}>
        {positions.map((position) => {
          return (
            <label key={position.id} className={classes.radioLabel}>
              <input
                type="radio"
                value={position.id}
                {...register("position_id", { required: "Please select a position" })}
                className={classes.radio}
              />
              {position.name}
            </label>
          );
        })}
        {errors.position_id && <p className={"error"}>{errors.position_id.message}</p>}
      </div>
    </>
  );
}
