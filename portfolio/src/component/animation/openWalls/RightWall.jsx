import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import style from "@/style/component/OpenWalls.module.scss";
import { useAnimate } from "framer-motion";

function RightWall() {
  const [scope, animate] = useAnimate();
  let pageChange = useSelector((state) => state.slider.value);
  useEffect(() => {
    animate(scope.current, {right: [-250, 0, 0, -250]}, {duration: .8});
  }, [pageChange]);
  return (
    <div className={style.rightWall} ref={scope}></div>
  );
}

export default RightWall;
