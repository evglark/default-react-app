import { FC, useState } from 'react';

import { useTheme } from 'Root/hooks';

import './style.less';

export const Header: FC = () => {
  const { setTheme } = useTheme();
  const [isPressed, setPressed] = useState(false);

  const togglePressed = () => {
    setPressed((pressed) => {
      setTheme(pressed ? 'light' : 'dark');
      return !pressed;
    });
  };

  return (
    <header className="_flex _justify-between _items-center">
      <div>
        <h1>Header</h1>
      </div>
      <div className="_cursor-pointer" onClick={togglePressed} role="checkbox" aria-checked={isPressed}>
        <div className="_flex _gap-2 _items-center">
          <div className="_select-none">Dark mode {isPressed ? 'ON' : 'OFF'}</div>
          <div className={`checkbox ${isPressed ? 'checkbox-pressed' : ''} _flex _items-center`}>
            <div className="circle" style={{ marginLeft: isPressed ? '16px' : '2px' }} />
          </div>
        </div>
      </div>
    </header>
  );
};
