import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { switchTheme } from 'src/store/actions';

const SwitchTheme: React.FC = () => {
  const theme = useSelector((state: any) => state.theme);
  const dispatch = useDispatch();

  const changeToDark = () => {
    import(/* webpackChunkName: 'theme-dark' */ 'src/styles/theme/dark.less');
    import(/* webpackChunkName: 'ag-grid-theme-dark' */ 'ag-grid-community/dist/styles/ag-theme-balham-dark.css');
    dispatch(switchTheme('dark'));
    localStorage.setItem('theme', 'dark');
  };
  const changeToLight = () => {
    import(/* webpackChunkName: 'theme-light' */ 'src/styles/theme/light.less');
    import(/* webpackChunkName: 'ag-grid-theme-light' */ 'ag-grid-community/dist/styles/ag-theme-balham.css');
    dispatch(switchTheme('light'));
    localStorage.setItem('theme', 'light');
  };

  const hasDarkThemeFile = () => {
    return Array.from(document.head.getElementsByTagName('link')).some(link => {
      return link.href.indexOf('theme-dark') > -1;
    });
  };
  const hasLightThemeFile = () => {
    return Array.from(document.head.getElementsByTagName('link')).some(link => {
      return link.href.indexOf('theme-light') > -1;
    });
  };

  const hideDarkThemeFile = () => {
    Array.from(document.head.getElementsByTagName('link')).forEach(link => {
      if (link.href.indexOf('theme-dark') > -1 && link.href.indexOf('theme-dark-hide') === -1) {
        link.href = link.href.replace('theme-dark', 'theme-dark-hide');
      }
      if (link.href.indexOf('theme-light-hide') > -1) {
        link.href = link.href.replace('theme-light-hide', 'theme-light');
      }
    });
  };

  const hideLightThemeFile = () => {
    Array.from(document.head.getElementsByTagName('link')).forEach(link => {
      if (link.href.indexOf('theme-light') > -1 && link.href.indexOf('theme-light-hide') === -1) {
        link.href = link.href.replace('theme-light', 'theme-light-hide');
      }
      if (link.href.indexOf('theme-dark-hide') > -1) {
        link.href = link.href.replace('theme-dark-hide', 'theme-dark');
      }
    });
  };

  useEffect(() => {
    if (theme === 'dark' && hasLightThemeFile()) {
      hideLightThemeFile();
    }
    if (theme === 'light' && hasDarkThemeFile()) {
      hideDarkThemeFile();
    }
  }, [theme]);

  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      changeToDark();
    } else if (localStorage.getItem('theme') === 'light') {
      changeToLight();
    } else {
      changeToDark();
    }
  }, []);
  return (
    <>
      <button style={{ background: 'transparent' }} onClick={changeToDark}>
        dark theme
      </button>
      <button style={{ background: 'transparent' }} onClick={changeToLight}>
        light theme
      </button>
    </>
  );
};

export default SwitchTheme;
