"use client"
import React, { useRef, useEffect } from 'react';
import style from '@/style/component/Main.module.scss';
import { changePage } from '@/redux/features/mainDataSlice';
import { useDispatch } from 'react-redux';
import { slideCountByAmount } from '@/redux/features/sliderSlice';

function Links() {
  const ref = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleClick = (page) => {
      dispatch(changePage(page + 1));
      dispatch(slideCountByAmount(0))
    };

    const buttons = ref.current.querySelectorAll('button');
    buttons.forEach((button, index) => {
      button.addEventListener('click', () => handleClick(index));
      
    });

    return () => {
      buttons.forEach((button) => {
        button.removeEventListener('click', handleClick);
      });
    };
  }, []);

  return (
    <div className={style.links} ref={ref}>
      <button>About</button>
      <button>Projects</button>
      <button>Contact</button>
    </div>
  );
}

export default Links;
