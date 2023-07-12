import React, {useRef, useEffect} from "react";
import style from "@/style/component/Main.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { slideCountByAmount } from "@/redux/features/sliderSlice";

function SlideLine({ count, activeIndex }) {
  const slideLineRef = useRef(null)
  let renderSlideLine = [];
  const dispatch = useDispatch();
  let pageChange = useSelector((state) => state.globalMainData.count);
  
  for (let i = 0; i < count; i++) {
    renderSlideLine.push(
      <div
        key={i}
        className={`${style.slideLine} 
            ${i == activeIndex.toString() ? style.activeLine : ""}`}
      ></div>
    );
  }

  useEffect(() => {
    const handleClick = (page) => {
      dispatch(slideCountByAmount(page))
    };
    let slideLine = slideLineRef.current.querySelectorAll('div');
    slideLine.forEach((line, index) => {
      line.addEventListener("click", () => handleClick(index))
    });
    return () => {
      slideLine.forEach((line) => {
        line.removeEventListener("click", handleClick)
      });  
    }
  }, [pageChange])


  return <div className={style.slideLineContainer} ref={slideLineRef}>{renderSlideLine}</div>;
}

export default SlideLine;
