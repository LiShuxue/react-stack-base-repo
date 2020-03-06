import React, { FC, useState, useEffect } from 'react';

const SwitchTheme: FC = () => {
  const [theme, setTheme] = useState('');

  const changeToDark = () => {
    import(/* webpackChunkName: 'theme-dark' */ 'src/styles/theme/dark.less');
    setTheme('dark');
    localStorage.setItem('ratan-theme', 'dark');
  };
  const changeToLight = () => {
    import(/* webpackChunkName: 'theme-light' */ 'src/styles/theme/light.less');
    setTheme('light');
    localStorage.setItem('ratan-theme', 'light');
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
    if (localStorage.getItem('ratan-theme') === 'dark') {
      changeToDark();
    } else if (localStorage.getItem('ratan-theme') === 'light') {
      changeToLight();
    } else {
      changeToDark();
    }
  }, []);
  return (
    <>
      <button onClick={changeToDark}>dark theme</button>
      <button onClick={changeToLight}>light theme</button>
    </>
  );
};

export default SwitchTheme;
