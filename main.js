var css1 = 
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
}

/* 给我一张白纸 */

#code-wrapper {
    width: 50%; 
    height: 100%;
    left: 0;
    position: fixed;
}
#paper>.content {
    display: block;
}

/*现在我就可以在这张白纸上展示我的简历了*/
`
var css2 =
`
/* 接下来利用一个不错的库 marked.js
 * 把 Markdown 变成 HTML
 */
`

var md = 
`
# 自我介绍
我叫xxx，1994年9月出生，本科毕业，所学专业为信息管理与信息系统
自学前端半年
希望应聘前端开发岗位

# 技能介绍
熟悉JavaScript、CSS，了解Vue的基本使用

# 项目介绍
1. 微信小程序
2. H5动画
3. 响应式网站界面设计

# 联系方式
- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx
`
var css3 = 
`
/*
 * 这就是我的动态的简历
 * 谢谢观看
 */
`