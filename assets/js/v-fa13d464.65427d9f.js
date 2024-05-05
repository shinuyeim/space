"use strict";(self.webpackChunkafternoon_grocery_store=self.webpackChunkafternoon_grocery_store||[]).push([[7686],{589:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-fa13d464",path:"/blogs/LeetCode/2021/2021-01-01-976TheMaximumD'SPersecleOfTheTriangle.html",title:"三角形的最大周长",lang:"zh-CN",frontmatter:{title:"三角形的最大周长",date:"2021-01-01T00:00:00.000Z",tags:["简单","力扣"],categories:["suanfabiji"]},excerpt:"",headers:[{level:2,title:"题目描述",slug:"题目描述",children:[]},{level:2,title:"示例",slug:"示例",children:[]},{level:2,title:"算法设计",slug:"算法设计",children:[]},{level:2,title:"代码",slug:"代码",children:[]},{level:2,title:"复杂度分析",slug:"复杂度分析",children:[]}],git:{createdTime:1642079704e3,updatedTime:1712413606e3,contributors:[{name:"shinuyeim",email:"shinuyemail@gmail.com",commits:2}]}}},6997:(n,s,a)=>{a.r(s),a.d(s,{default:()=>g});var p=a(6252);const t=(0,p._)("h2",{id:"题目描述",tabindex:"-1"},[(0,p._)("a",{class:"header-anchor",href:"#题目描述","aria-hidden":"true"},"#"),(0,p.Uk)(" 题目描述")],-1),e=(0,p._)("p",null,"给定由一些正数（代表长度）组成的数组 A，返回由其中三个长度组成的、面积不为零的三角形的最大周长。",-1),o=(0,p._)("p",null,"如果不能形成任何面积不为零的三角形，返回 0。",-1),c=(0,p._)("h2",{id:"示例",tabindex:"-1"},[(0,p._)("a",{class:"header-anchor",href:"#示例","aria-hidden":"true"},"#"),(0,p.Uk)(" 示例")],-1),l=(0,p._)("div",{class:"custom-container tip"},[(0,p._)("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[(0,p._)("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[(0,p._)("circle",{cx:"12",cy:"12",r:"9"}),(0,p._)("path",{d:"M12 8h.01"}),(0,p._)("path",{d:"M11 12h1v4h1"})])]),(0,p._)("p",{class:"custom-container-title"},"TIP"),(0,p._)("p",null,[(0,p.Uk)("输入：[2,1,2]"),(0,p._)("br"),(0,p.Uk)(" 输出：5")]),(0,p._)("p",null,[(0,p.Uk)("输入：[1,2,1]"),(0,p._)("br"),(0,p.Uk)(" 输出：0")]),(0,p._)("p",null,[(0,p.Uk)("输入：[3,2,3,4]"),(0,p._)("br"),(0,p.Uk)(" 输出：10")]),(0,p._)("p",null,[(0,p.Uk)("输入：[3,6,2,3]"),(0,p._)("br"),(0,p.Uk)(" 输出：8")])],-1),r=(0,p._)("p",null,[(0,p.Uk)("Tips:"),(0,p._)("br"),(0,p.Uk)(" 1.3<=A.Length<=10000"),(0,p._)("br"),(0,p.Uk)(" 2.1<= A[i] <= 10^6")],-1),i=(0,p._)("h2",{id:"算法设计",tabindex:"-1"},[(0,p._)("a",{class:"header-anchor",href:"#算法设计","aria-hidden":"true"},"#"),(0,p.Uk)(" 算法设计")],-1),u=(0,p._)("p",null,"我们知道能构成三角形三条边的条件就是两边之和大于第三边。这是充要条件。所以我们可以对数组进行排序，然后先选出数组中最大的那个值，设为c。在选取第二大和第三大的边分别作为a,b。判断是否有a+b>c，若成立则返回a+b+c;若不成立则i--,因为第二和第三长的边加起来都没有最长的边长，那么其他所有边长，无论则么组合都不可能大于最长的边,就相当于可以把最大边舍去，而把第二大的作为c边，也就是看作是最大边继续判断是否有a+b>c。",-1),k=(0,p.Uk)("由于需要排序，一般来说就使用快速排序，C语言的库函数提供了快速排序算法qsort，使用时只需调入stdlib.h文件。qsort函数的具体用法可以参见"),d={href:"https://shinuyeim.github.io/shinuye-site/views/PCCNotes/20210101Qsort.html",target:"_blank",rel:"noopener noreferrer"},b=(0,p.Uk)("qsort函数简介"),h=(0,p.Uk)("。。"),m=(0,p.uE)('<p>所以我们可以得到如下代码：</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">cmp</span><span class="token punctuation">(</span><span class="token keyword">void</span> <span class="token operator">*</span>_a<span class="token punctuation">,</span> <span class="token keyword">void</span> <span class="token operator">*</span>_b<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token operator">*</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span><span class="token punctuation">)</span>_a<span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token operator">*</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span><span class="token punctuation">)</span>_b<span class="token punctuation">;</span>\n    <span class="token keyword">return</span> a <span class="token operator">-</span> b<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">int</span> <span class="token function">largestPerimeter</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span>A<span class="token punctuation">,</span> <span class="token keyword">int</span> ASize<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">qsort</span><span class="token punctuation">(</span>A<span class="token punctuation">,</span> ASize<span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">,</span> cmp<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> ASize <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token operator">--</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>A<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">+</span> A<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&gt;</span> A<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">return</span> A<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">+</span> A<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> A<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h2><p>时间复杂度：O(NlogN)，其中 N 是数组 A 的长度。<br> 空间复杂度：Ω(logN)。只使用了指针。</p>',5),_={},g=(0,a(3744).Z)(_,[["render",function(n,s){const a=(0,p.up)("OutboundLink");return(0,p.wg)(),(0,p.iD)(p.HY,null,[t,e,o,c,l,r,i,u,(0,p._)("p",null,[k,(0,p._)("a",d,[b,(0,p.Wm)(a)]),h]),m],64)}]])}}]);