"use strict";(self.webpackChunkafternoon_grocery_store=self.webpackChunkafternoon_grocery_store||[]).push([[3706],{4033:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-2be6f329",path:"/blogs/LeetCode/2020/11-07-367TheNumberOfFullSquaresThatAreValid.html",title:"完全有效的平方数",lang:"zh-CN",frontmatter:{title:"完全有效的平方数",date:"2020-11-07T00:00:00.000Z",tags:["简单","力扣","二分搜索"],categories:["算法笔记"]},excerpt:"",headers:[{level:2,title:"题目描述",slug:"题目描述",children:[]},{level:2,title:"示例",slug:"示例",children:[]},{level:2,title:"算法设计",slug:"算法设计",children:[{level:3,title:"代码",slug:"代码",children:[]},{level:3,title:"复杂性分析",slug:"复杂性分析",children:[]}]}],git:{createdTime:1642079704e3,updatedTime:1642079704e3,contributors:[{name:"shinuyeim",email:"shinuyemail@gmail.com",commits:1}]}}},9326:(n,s,a)=>{a.r(s),a.d(s,{default:()=>u});var e=a(6252);const t=(0,e._)("h2",{id:"题目描述",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#题目描述","aria-hidden":"true"},"#"),(0,e.Uk)(" 题目描述")],-1),p=(0,e._)("p",null,[(0,e.Uk)("给定一个正整数 num，编写一个函数，如果 num 是一个完全平方数，则返回 True，否则返回 False。"),(0,e._)("br"),(0,e.Uk)(" 说明：不要使用任何内置的库函数，如 sqrt。")],-1),l=(0,e._)("h2",{id:"示例",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#示例","aria-hidden":"true"},"#"),(0,e.Uk)(" 示例")],-1),o=(0,e._)("div",{class:"custom-container tip"},[(0,e._)("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[(0,e._)("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[(0,e._)("circle",{cx:"12",cy:"12",r:"9"}),(0,e._)("path",{d:"M12 8h.01"}),(0,e._)("path",{d:"M11 12h1v4h1"})])]),(0,e._)("p",{class:"custom-container-title"},"TIP"),(0,e._)("p",null,[(0,e.Uk)("输入：16"),(0,e._)("br"),(0,e.Uk)(" 输出：True")]),(0,e._)("p",null,[(0,e.Uk)("输入：14"),(0,e._)("br"),(0,e.Uk)(" 输出：False")])],-1),r=(0,e.uE)('<h2 id="算法设计" tabindex="-1"><a class="header-anchor" href="#算法设计" aria-hidden="true">#</a> 算法设计</h2><blockquote><ul><li>1.若 num &lt; 2，返回 true。</li><li>2.设置左边界为 2，右边界为 num/2。</li><li>3.当 left &lt;= right：</li><li>令 x = (left + right) / 2 作为一个猜测，计算 guess_squared = x * x 与 num 做比较：</li><li>如果 guess_squared == num，则 num 是一个完全平方数，返回 true。</li><li>如果 guess_squared &gt; num ，设置右边界 right = x-1。</li><li>否则设置左边界为 left = x+1。</li><li>如果在循环体内没有找到，则说明 num 不是完全平方数，返回 false。</li></ul></blockquote><h3 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h3><p>最后的结果为：</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>bool <span class="token function">isPerfectSquare</span><span class="token punctuation">(</span><span class="token keyword">int</span> num<span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> true<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">long</span> left <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span> right <span class="token operator">=</span> num <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">,</span> x<span class="token punctuation">,</span> guessSquared<span class="token punctuation">;</span>\n    <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;=</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      x <span class="token operator">=</span> left <span class="token operator">+</span> <span class="token punctuation">(</span>right <span class="token operator">-</span> left<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>\n      guessSquared <span class="token operator">=</span> x <span class="token operator">*</span> x<span class="token punctuation">;</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>guessSquared <span class="token operator">==</span> num<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> true<span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>guessSquared <span class="token operator">&gt;</span> num<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        right <span class="token operator">=</span> x <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n        left <span class="token operator">=</span> x <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> false<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h3 id="复杂性分析" tabindex="-1"><a class="header-anchor" href="#复杂性分析" aria-hidden="true">#</a> 复杂性分析</h3><p>时间复杂度：O(logN)。 空间复杂度：O(1)。</p>',7),c={},u=(0,a(3744).Z)(c,[["render",function(n,s){return(0,e.wg)(),(0,e.iD)(e.HY,null,[t,p,l,o,r],64)}]])}}]);