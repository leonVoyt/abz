import { useForm } from "react-hook-form";
import classes from "./Form.module.scss";
import { GetPositions, PostUser } from "../../../API/ApiService";
import { useEffect, useState } from "react";
import { useGlobalContext } from "../../../context/useGlobalContext";
import Button from "../Button/Button";
import Input from "../Fields/Input/Input";
import RadioInput from "../Fields/RadioInput/RadioInput";
import CustomFileInput from "../Fields/CustomFileInput/CustomFileInput";

const Form = ({ setSsSuccessPage }) => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const [positions, setPositions] = useState([]);
  const [selectedFileName, setSelectedFileName] = useState("");
  const { triggerReload, setUsersCount } = useGlobalContext();

  const photoFile = watch("photo");

  const name = watch("name");
  const email = watch("email");
  const phone = watch("phone");
  const position = watch("position_id");

  const isReady =
    !!name &&
    !!email &&
    !!phone &&
    !!position &&
    !!photoFile?.length &&
    !errors.name &&
    !errors.email &&
    !errors.phone &&
    !errors.position_id &&
    !errors.photo;

  useEffect(() => {
    if (photoFile && photoFile[0]) {
      setSelectedFileName(photoFile[0].name);
    } else {
      setSelectedFileName("");
    }
  }, [photoFile]);

  useEffect(() => {
    GetPositions().then((data) => {
      if (data.success) {
        setPositions(data.positions);
      }
    });
  }, []);

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("position_id", data.position_id);

      if (data.photo && data.photo[0]) {
        const file = data.photo[0];

        if (file.size > 5 * 1024 * 1024) {
          throw new Error("Photo size must be less than 5MB");
        }

        formData.append("photo", file);
      }

      await PostUser(formData);
      alert("Registration successful!");
      reset();
      setSelectedFileName("");
      setUsersCount(6);
      triggerReload();
      setSsSuccessPage(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(error.message || "Error submitting form");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
      <Input
        register={register}
        errors={errors}
        placeholder="Your name"
        fieldName="name"
        errorObject={{ required: "Name is required" }}
      />
      <Input
        type="email"
        register={register}
        errors={errors}
        placeholder="Email"
        fieldName="email"
        errorObject={{
          required: "Email is required",
          minLength: {
            value: 6,
            message: "Email must be at least 6 characters long",
          },
          maxLength: {
            value: 100,
            message: "Email must not exceed 100 characters",
          },
          pattern: {
            value:
              /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
            message: "Email must be a valid email according to RFC2822",
          },
        }}
      />
      <Input
        type="tel"
        register={register}
        errors={errors}
        placeholder="Phone"
        phonePlaceholder="+38 (XXX) XXX - XX - XX"
        fieldName="phone"
        errorObject={{
          required: "Phone is required",
          pattern: {
            value: /^[+]?380([0-9]{9})$/,
            message: "Phone number should start with code of Ukraine +380",
          },
        }}
      />

      <RadioInput errors={errors} positions={positions} register={register} />

      <CustomFileInput register={register} selectedFileName={selectedFileName} errors={errors} />

      <Button text={"Sign up"} type="submit" isDisabled={!isReady} />
    </form>
  );
};
export default Form;
