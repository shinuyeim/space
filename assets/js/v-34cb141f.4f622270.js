"use strict";(self.webpackChunkafternoon_grocery_store=self.webpackChunkafternoon_grocery_store||[]).push([[3091],{1029:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-34cb141f",path:"/blogs/LeetCode/2020/9-09-198HouseRobber.html",title:"打家劫舍",lang:"zh-CN",frontmatter:{title:"打家劫舍",date:"2020-09-09T00:00:00.000Z",tags:["中等","力扣"],categories:["算法笔记"]},excerpt:"",headers:[{level:2,title:"题目描述",slug:"题目描述",children:[{level:3,title:"示例1:",slug:"示例1",children:[]},{level:3,title:"示例2:",slug:"示例2",children:[]},{level:3,title:"提示:",slug:"提示",children:[]}]},{level:2,title:"题目分析",slug:"题目分析",children:[{level:3,title:"代码",slug:"代码",children:[]}]}],git:{createdTime:1642079704e3,updatedTime:1642079704e3,contributors:[{name:"shinuyeim",email:"shinuyemail@gmail.com",commits:1}]}}},5341:(n,s,a)=>{a.r(s),a.d(s,{default:()=>d});var t=a(6252);const e=(0,t._)("h2",{id:"题目描述",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#题目描述","aria-hidden":"true"},"#"),(0,t.Uk)(" 题目描述")],-1),p=(0,t._)("p",null,[(0,t.Uk)("你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，"),(0,t._)("strong",null,"如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。")],-1),o=(0,t._)("p",null,[(0,t.Uk)("给定一个代表每个房屋存放金额的非负整数数组，计算你 "),(0,t._)("strong",null,"不触动警报装置的情况下"),(0,t.Uk)(" ，一夜之内能够偷窃到的最高金额。")],-1),l=(0,t._)("h3",{id:"示例1",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#示例1","aria-hidden":"true"},"#"),(0,t.Uk)(" 示例1:")],-1),c=(0,t._)("div",{class:"custom-container tip"},[(0,t._)("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[(0,t._)("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[(0,t._)("circle",{cx:"12",cy:"12",r:"9"}),(0,t._)("path",{d:"M12 8h.01"}),(0,t._)("path",{d:"M11 12h1v4h1"})])]),(0,t._)("p",{class:"custom-container-title"},"TIP"),(0,t._)("p",null,[(0,t.Uk)("输入：[1,2,3,1]"),(0,t._)("br"),(0,t.Uk)(" 输出：4"),(0,t._)("br"),(0,t.Uk)(" 解释：偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。"),(0,t._)("br"),(0,t.Uk)(" 偷窃到的最高金额 = 1 + 3 = 4 。")])],-1),r=(0,t._)("h3",{id:"示例2",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#示例2","aria-hidden":"true"},"#"),(0,t.Uk)(" 示例2:")],-1),u=(0,t._)("div",{class:"custom-container tip"},[(0,t._)("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[(0,t._)("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[(0,t._)("circle",{cx:"12",cy:"12",r:"9"}),(0,t._)("path",{d:"M12 8h.01"}),(0,t._)("path",{d:"M11 12h1v4h1"})])]),(0,t._)("p",{class:"custom-container-title"},"TIP"),(0,t._)("p",null,[(0,t.Uk)("输入：[2,7,9,3,1]"),(0,t._)("br"),(0,t.Uk)(" 输出：12"),(0,t._)("br"),(0,t.Uk)(" 解释：偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。"),(0,t._)("br"),(0,t.Uk)(" 偷窃到的最高金额 = 2 + 9 + 1 = 12 。")])],-1),i=(0,t.uE)('<h3 id="提示" tabindex="-1"><a class="header-anchor" href="#提示" aria-hidden="true">#</a> 提示:</h3><blockquote><ul><li>0 &lt;= nums.length &lt;= 100</li><li>0 &lt;= nums[i] &lt;= 400</li></ul></blockquote><h2 id="题目分析" tabindex="-1"><a class="header-anchor" href="#题目分析" aria-hidden="true">#</a> 题目分析</h2><h3 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">rob</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>nums <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> nums<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">int</span> length <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>length <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">return</span> nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">int</span> first <span class="token operator">=</span> nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> second <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">int</span> temp <span class="token operator">=</span> second<span class="token punctuation">;</span>\n            second <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>first <span class="token operator">+</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> second<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            first <span class="token operator">=</span> temp<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">return</span> second<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div>',5),k={},d=(0,a(3744).Z)(k,[["render",function(n,s){return(0,t.wg)(),(0,t.iD)(t.HY,null,[e,p,o,l,c,r,u,i],64)}]])}}]);