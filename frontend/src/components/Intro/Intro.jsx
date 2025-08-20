import { handleScrollTo } from "../../utils/functions";
import Button from "../UI/Button/Button";
import classes from "./Intro.module.scss";

const Intro = () => {
  return (
    <section className={classes.wrapper} id="block_intro">
      <div className={classes.intro}>
        <h1>Test assignment for front-end developer</h1>
        <p>
          What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS
          with a vast understanding of User design thinking as they'll be building web interfaces
          with accessibility in mind. They should also be excited to learn, as the world of
          Front-End Development keeps evolving.
        </p>
        <Button text={"Sign up"} onClick={() => handleScrollTo("block_sign_up")} />
      </div>
    </section>
  );
};
export default Intro;
