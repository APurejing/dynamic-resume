const css1 = 
`
/* 
 * 面试官你好，我是xxx
 * 只用文字作做我介绍太单调了
 * 我就用代码来介绍吧
 * 首先准备一些样式
 */
* {
    transition: all 1s;
}
html {
    background: #333;
}
#code {
    border: 1px solid #aaa;
    padding: 16px;
}

/* 接下来，我需要一点代码高亮 */

.token.selector {color: #690;}
.token.property {color: #905;}

/*加一个呼吸效果*/

#code {
    animation: breath .5s infinite alternate-reverse;
}`;

