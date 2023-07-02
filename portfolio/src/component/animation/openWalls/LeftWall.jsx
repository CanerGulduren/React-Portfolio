import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import style from "@/style/component/OpenWalls.module.scss";
import { useAnimate } from "framer-motion";

function LeftWall() {
  const [scope, animate] = useAnimate();
  let pageChange = useSelector((state) => state.slider.value);
  useEffect(() => {
    animate(scope.current, {left: [-250, 0, 0, -250]}, {duration: .8});
  }, [pageChange]);
  return (
    <div className={style.leftWall} ref={scope}></div>
  );
}

export default LeftWall;
