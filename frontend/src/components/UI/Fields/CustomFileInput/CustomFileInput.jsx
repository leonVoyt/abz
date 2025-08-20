import classes from "./CustomFileInput.module.scss";

const CustomFileInput = ({ register, selectedFileName, errors }) => {
  return (
    <div className={`${classes.fileInputWrapper} ${errors.photo ? classes.inputError : ""}`}>
      <div className={classes.fileInputWrapper}>
        <input
          type="file"
          {...register("photo", { required: "Photo is required" })}
          className={classes.hiddenFileInput}
          accept="image/*"
          id="photo-input"
        />
        <label htmlFor="photo-input" className={classes.wrapper}>
          <div
            className={`${classes.customFileInputFirst} ${errors.photo ? classes.inputError : ""}`}
          >
            <span className={classes.fileInputText}>Upload</span>
          </div>
          <div className={classes.customFileInput}>
            <span className={selectedFileName ? classes.fileName : classes.fileInputText}>
              {selectedFileName || "Upload your photo"}
            </span>
          </div>
        </label>
        {errors.photo && <p className={"error"}>{errors.photo.message}</p>}
      </div>
    </div>
  );
};

export default CustomFileInput;
