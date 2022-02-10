/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
import arrow from '../../images/arrow-min.svg';
import styled from './Dropdown.module.scss';

type DropdownProps = {
  selected: string;
  setSelected: (select: string) => void;
  options: string[];
};

const Dropdown = ({ selected, setSelected, options }: DropdownProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(!open);

  const handleSelected = (select: string) => {
    setSelected(select);
    setOpen(false);
  };

  return (
    <div className={styled.dropdown}>
      <p className={styled.dropdown__color}>{selected}</p>
      <ul className={styled.dropdown__colors}>
        {open &&
          options
            .filter((item) => item !== selected)
            .map((item) => (
              <li
                key={item}
                onClick={() => handleSelected(item)}
                className={styled.dropdown__color}
              >
                {item}
              </li>
            ))}
      </ul>
      <button
        type="button"
        onClick={handleOpen}
        className={styled.dropdown__button}
      >
        <img
          src={arrow}
          alt="arrow"
          className={
            open ? styled['dropdown__arrow--u'] : styled['dropdown__arrow--d']
          }
        />
      </button>
    </div>
  );
};

export default Dropdown;
