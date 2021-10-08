/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

+( function() {
  window.addEventListener('scroll', throttle(callback, 750), false);

  function throttle(fn, wait) {
    let time = Date.now();
    return function() {
      if ((time + wait - Date.now()) < 0) {
        fn();
        time = Date.now();
      }
    }
  }

  function callback() {
    console.log('callback');
    const header = document.getElementById('document-mainnav');
    if (window.pageYOffset > 100 ){
      header.classList.add('mainnav--is-fixed');
    } else {
      header.classList.remove('mainnav--is-fixed');
    }
  }

  (() => {
    console.log('darkmodeswitcher');
    const userWantsDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.body.classList.add(
      userWantsDarkMode ? 'body--dark' : 'body--light'
    );
    const darkModeCheckbox = document.getElementById('darkmodeswitcher__input');
    darkModeCheckbox.checked = userWantsDarkMode;
    darkModeCheckbox.addEventListener('change', (e) => {
      document.body.classList.toggle('body--dark');
      document.body.classList.toggle('body--light');
    })
    document.getElementById('darkmodeswitcher').classList.add('darkmodeswitcher--is-visible');
  })();
} )();
