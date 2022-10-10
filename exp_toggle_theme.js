@import-normalize;
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap');

* {
  box-sizing: border-box;
}

:root {
  /* Typography */
  --family: 'Nunito Sans', sans-serif;
  --fs-sm: 14px;
  --fs-md: 16px;
  --fw-light: 300;
  --fw-normal: 600;
  --fw-bold: 800;

  /* Other */
  --radii: 0.5rem;
}

body[data-theme='dark'] {
  --colors-text: hsl(0, 0%, 100%);
  --colors-bg: hsl(207, 26%, 17%);
  --colors-ui-base: hsl(209, 23%, 22%);

  --shadow: rgba(245, 245, 245, 0.2) 0 0 8px;
}
body[data-theme='light'] {
  --colors-text: hsl(200, 15%, 8%);
  --colors-bg: hsl(0, 0%, 98%);
  --colors-ui-base: hsl(0, 0%, 100%);

  --shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

body {
  margin: 0;
  font-family: var(--family);
  color: var(--colors-text);
  font-weight: var(--fw-light);
  background-color: var(--colors-bg);
}
///////////////////////////////
import {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import { IoSunnyOutline,IoMoon, IoMoonOutline } from 'react-icons/io5';


export const Header = () => {
   const dispatch = useDispatch();
   const theme = useSelector(state => state.theme);
 
   useEffect(() => {
     document.body.setAttribute('data-theme', theme);
   }, [theme]);
 
   const onToggleTheme = () => {
     dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));
   }
 
   return (
      <ModeSwitcher onClick={() => onToggleTheme()}>
         {theme === 'light' ? (
         // <IoMoonOutline size="14px" />
         <IoSunnyOutline size="14px" />
         ) : (
         <IoMoon size="14px" />
         )}{' '}
         <span style={{ marginLeft: '0.75rem' }}>{theme} Theme</span>
      </ModeSwitcher>
   );
 };