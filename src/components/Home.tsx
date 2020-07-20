import React, { FC } from "react";
import { Link } from "react-router-dom";

const Home: FC = () => {
  return (
    <>
      <h3>ホームページです</h3>
      <Link to="/counter">カウンターページ</Link>
    </>
  );
};

export default Home;
