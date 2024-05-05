"use strict";(self.webpackChunkafternoon_grocery_store=self.webpackChunkafternoon_grocery_store||[]).push([[938],{3275:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-5c0e6d45",path:"/blogs/LeetCode/2021/2021-01-02-922Sort-array-by-parity-ii.html",title:"奇偶排序数组 II",lang:"zh-CN",frontmatter:{title:"奇偶排序数组 II",date:"2021-01-02T00:00:00.000Z",tags:["简单","力扣","排序"],categories:["算法笔记"]},excerpt:"",headers:[{level:2,title:"题目描述",slug:"题目描述",children:[]},{level:2,title:"示例",slug:"示例",children:[]},{level:2,title:"算法设计",slug:"算法设计",children:[]},{level:2,title:"代码",slug:"代码",children:[]},{level:2,title:"复杂度分析",slug:"复杂度分析",children:[]}],git:{createdTime:1642079704e3,updatedTime:1642079704e3,contributors:[{name:"shinuyeim",email:"shinuyemail@gmail.com",commits:1}]}}},4511:(n,s,a)=>{a.r(s),a.d(s,{default:()=>k});var p=a(6252);const t=(0,p._)("h2",{id:"题目描述",tabindex:"-1"},[(0,p._)("a",{class:"header-anchor",href:"#题目描述","aria-hidden":"true"},"#"),(0,p.Uk)(" 题目描述")],-1),e=(0,p._)("p",null,"给定一个非负整数数组 A， A 中一半整数是奇数，一半整数是偶数。",-1),o=(0,p._)("p",null,"对数组进行排序，以便当 A[i] 为奇数时，i 也是奇数；当 A[i] 为偶数时， i 也是偶数。",-1),c=(0,p._)("p",null,"你可以返回任何满足上述条件的数组作为答案。",-1),l=(0,p._)("h2",{id:"示例",tabindex:"-1"},[(0,p._)("a",{class:"header-anchor",href:"#示例","aria-hidden":"true"},"#"),(0,p.Uk)(" 示例")],-1),r=(0,p._)("div",{class:"custom-container tip"},[(0,p._)("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[(0,p._)("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[(0,p._)("circle",{cx:"12",cy:"12",r:"9"}),(0,p._)("path",{d:"M12 8h.01"}),(0,p._)("path",{d:"M11 12h1v4h1"})])]),(0,p._)("p",{class:"custom-container-title"},"TIP"),(0,p._)("p",null,[(0,p.Uk)("输入：[4,2,5,7]"),(0,p._)("br"),(0,p.Uk)(" 输出：[4,5,2,7]"),(0,p._)("br"),(0,p.Uk)(" 解释：[4,7,2,5]，[2,5,4,7]，[2,7,4,5] 也会被接受。")])],-1),u=(0,p.uE)('<p>Tips:</p><ol><li>2 &lt;= A.length &lt;= 20000</li><li>A.length % 2 == 0</li><li>0 &lt;= A[i] &lt;= 1000</li></ol><h2 id="算法设计" tabindex="-1"><a class="header-anchor" href="#算法设计" aria-hidden="true">#</a> 算法设计</h2><p>题目的意思就是给定一个数组，数组长度一定是偶数位，（提示里面的第二点说明）。按照数组下标的奇偶，把数组里面的元素排序。</p><p>一种简单的方法就是循环遍历数组，把所有的偶数放进ans[0],ans[2],ans[4],以此类推。<br> 在遍历一遍，把所有的奇数放进ans[1],ans[3],ans[5],以此类推。</p><p>还有一种解法就是整个数组只要遍历一次，设置两个指针，一个指针只指向奇数，一个只指向偶数。随后，在每一步中，如果 A[i] 为奇数，则不断地向前移动 j（每次移动两个单位），直到遇见下一个偶数。此时，可以直接将 A[i] 与 A[j] 交换。我们不断进行这样的过程，最终能够将所有的整数放在正确的位置上。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><p>两次遍历：</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token keyword">int</span><span class="token operator">*</span> <span class="token function">sortArrayByParityII</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token operator">*</span> A<span class="token punctuation">,</span> <span class="token keyword">int</span> ASize<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token operator">*</span> returnSize<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">int</span><span class="token operator">*</span> ans <span class="token operator">=</span> <span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token operator">*</span> ASize<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">int</span> add <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span><span class="token comment">//做偶数指针</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> ASize<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>A<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            ans<span class="token punctuation">[</span>add<span class="token punctuation">]</span> <span class="token operator">=</span> A<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>\n            add <span class="token operator">+=</span> <span class="token number">2</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n    add <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span><span class="token comment">//做奇数指针</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> ASize<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>A<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            ans<span class="token punctuation">[</span>add<span class="token punctuation">]</span> <span class="token operator">=</span> A<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>\n            add <span class="token operator">+=</span> <span class="token number">2</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n    <span class="token operator">*</span>returnSize <span class="token operator">=</span> ASize<span class="token punctuation">;</span>\n    <span class="token keyword">return</span> ans<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>双指针:</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token keyword">int</span><span class="token operator">*</span> <span class="token function">sortArrayByParityII</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token operator">*</span> A<span class="token punctuation">,</span> <span class="token keyword">int</span> ASize<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token operator">*</span> returnSize<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> ASize<span class="token punctuation">;</span> i <span class="token operator">+=</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>A<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">while</span> <span class="token punctuation">(</span>A<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                j <span class="token operator">+=</span> <span class="token number">2</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n            <span class="token keyword">int</span> temp <span class="token operator">=</span> A<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>\n            A<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> A<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>\n            A<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n    <span class="token operator">*</span>returnSize <span class="token operator">=</span> ASize<span class="token punctuation">;</span>\n    <span class="token keyword">return</span> A<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h2><p>两次遍历：<br> 时间复杂度：O(N)，其中 N 是数组 A 的长度。<br> 空间复杂度：O(1)。注意在这里我们不考虑输出数组的空间占用。</p><p>双指针：<br> 时间复杂度：O(N)，其中 NN 是数组 A 的长度。<br> 空间复杂度：O(1)。</p>',14),i={},k=(0,a(3744).Z)(i,[["render",function(n,s){return(0,p.wg)(),(0,p.iD)(p.HY,null,[t,e,o,c,l,r,u],64)}]])}}]);