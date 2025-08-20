import { useState } from "react";
import classes from "./PostBlock.module.scss";
import SuccessPage from "./components/SuccessPage/SuccessPage";
import Form from "../UI/Form/Form";

const PostBlock = () => {
  const [isSuccessPage, setSsSuccessPage] = useState(false);
  return isSuccessPage ? (
    <SuccessPage />
  ) : (
    <section className={classes.wrapper} id="block_sign_up">
      <h1>Working with POST request</h1>
      <Form setSsSuccessPage={setSsSuccessPage} />
    </section>
  );
};
export default PostBlock;
