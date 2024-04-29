import s from "./ColorPicker.module.css";
import colors from "../../assets/colors.json";
import { useState } from "react";

export const ColorPicker = () => {

    const [currentColor, setCurrentColor] = useState('white')

  return (
    <div className={s.wrapper} style={{backgroundColor: currentColor}}>
        <h2 className={s.title}>Current color: {currentColor}</h2>
      <ul className={s.list}>
        {colors.map((item) => {
          return (
            <li
              className={s.item}
              key={item.id}
              onClick={() => setCurrentColor(item.color)}
            >
              {item.color}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
