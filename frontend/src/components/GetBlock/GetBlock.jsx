import { useEffect, useState } from "react";
import { GetUsers } from "../../API/ApiService";
import Button from "../UI/Button/Button";
import classes from "./GetBlock.module.scss";
import Card from "./components/Card/Card";
import { useGlobalContext } from "../../context/useGlobalContext";

const GetBlock = () => {
  const [users, setUsers] = useState([]);
  const [isLastPage, setIsLastPage] = useState(false);
  const [loading, setLoading] = useState(true);
  const { isReload, usersCount, setUsersCount } = useGlobalContext();

  const handleShowMore = () => {
    setUsersCount((prev) => prev + 6);
  };

  useEffect(() => {
    setLoading(true);
    GetUsers(usersCount)
      .then((data) => {
        setUsers(data.users);
        if (data.count === data.total_users) {
          setIsLastPage(true);
        } else {
          setIsLastPage(false);
        }
      })
      .finally(() => setLoading(false));
  }, [isReload, usersCount]);

  return (
    <section className={classes.wrapper} id="block_users">
      <h1>Working with GET request</h1>
      <div className={classes.users}>
        {users.map((user) => (
          <Card key={user.id} user={user} isLoading={loading} />
        ))}
      </div>
      {!isLastPage && !loading && <Button text={"Show more"} onClick={handleShowMore} />}
    </section>
  );
};
export default GetBlock;
