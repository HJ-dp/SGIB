import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
    ${reset}
    /*
Noto Sans Korean
ExtraLight 200
Regular 400
SemiBold 600

font-family: 'Noto Sans KR', sans-serif;  */
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@200;400;600&display=swap');


/* Roboto
Light 300
Medium 500

font-family: 'Roboto', sans-serif; */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;500&display=swap');


/***** CSS ì´ˆê¸°í™” *****/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 14px;
    text-decoration: none;
    font-family: 'Noto Sans KR', sans-serif;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
    overflow-x: hidden;
    color: rgb(29, 29, 31);
    letter-spacing: -0.05em;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}


a:link {
    color : inherit;
  }
  a:visited {
    color : inherit;
  }
  a:hover {
    color : inherit;
  }
  a:active {
    color : inherit;
  }
    `;