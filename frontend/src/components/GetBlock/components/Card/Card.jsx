import Image from "../../../UI/Image/Image";
import Tooltip from "../../../UI/Tooltip/Tooltip";
import CardLoader from "../CardLoader/CardLoader";
import classes from "./Card.module.scss";

const Card = ({ user, isLoading }) => {
  return isLoading ? (
    <div className={classes.card}>
      <CardLoader />
    </div>
  ) : (
    <div className={classes.card}>
      <Image url={user.photo} />
      <Tooltip title={user.name}>
        <p className={classes.text}>{user.name}</p>
      </Tooltip>
      <div className={classes.info}>
        <Tooltip title={user.position}>
          <p className={classes.text}>{user.position}</p>
        </Tooltip>
        <Tooltip title={user.email}>
          <p className={classes.text}>{user.email}</p>
        </Tooltip>
        <Tooltip title={user.phone}>
          <p className={classes.text}>{user.phone}</p>
        </Tooltip>
      </div>
    </div>
  );
};
export default Card;
