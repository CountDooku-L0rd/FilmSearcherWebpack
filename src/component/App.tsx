import { useState } from "react";
import styles from "./App.module.scss";
import { Link, Outlet } from "react-router-dom";
import AvatarSvg from "@/assets/alien-svgrepo-com.svg";

export const App = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div data-testId={'APP'}>
      <h1 data-testId={'Platform'}>PLATFORM={__PLATFORM__}</h1>
      <Link to={"/about"}>about</Link>
      <Link to={"/shop"}>shop</Link>
      <div>
        <AvatarSvg color={"red"} width={50} height={50} />
      </div>
      <p>{count}</p>
      <button className={styles.button} onClick={increment}></button>
      <Outlet />
    </div>
  );
};
