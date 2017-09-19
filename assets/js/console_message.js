/*
   https://codepen.io/ssk7833/pen/JKPYoX
   https://stackoverflow.com/questions/7505623/colors-in-javascript-console
   https://coderwall.com/p/fskzdw/colorful-console-log
   
   console.log('%c a colorful message', 'background: blue; color: white; display: block;');
   console.log('%c a colorful message', 'background: green; color: white; display: block;');
*/

setTimeout(console.log.bind(console, "%c Welcome to the Console %c \n Please don't break the site, Thanks", "background: #3F51B5;color:#FFF;padding:5px;border-radius: 5px;line-height: 26px;", ""));
