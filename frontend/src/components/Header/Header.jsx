import { handleScrollTo } from "../../utils/functions";
import Button from "../UI/Button/Button";
import classes from "./Header.module.scss";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.content}>
        <img src="/Logo.svg" alt="" />
        <span className={classes.navigation}>
          <Button text={"Users"} onClick={() => handleScrollTo("block_users")} />
          <Button text={"Sign up"} onClick={() => handleScrollTo("block_sign_up")} />
        </span>
      </div>
    </header>
  );
};
export default Header;
