"use strict";(self.webpackChunkafternoon_grocery_store=self.webpackChunkafternoon_grocery_store||[]).push([[3171],{2662:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-12daf3cc",path:"/blogs/LeetCode/2021/2021-01-03-1403MinimumSubsequenceInNonIncreasingOrder.html",title:"非递增顺序的最小子序列",lang:"zh-CN",frontmatter:{title:"非递增顺序的最小子序列",date:"2021-01-03T00:00:00.000Z",tags:["简单","力扣","贪心"],categories:["算法笔记"]},excerpt:"",headers:[{level:2,title:"题目描述",slug:"题目描述",children:[]},{level:2,title:"示例",slug:"示例",children:[]},{level:2,title:"算法设计",slug:"算法设计",children:[]},{level:2,title:"代码",slug:"代码",children:[]},{level:2,title:"复杂度分析",slug:"复杂度分析",children:[]}],git:{createdTime:1642079704e3,updatedTime:1642079704e3,contributors:[{name:"shinuyeim",email:"shinuyemail@gmail.com",commits:1}]}}},6723:(n,s,a)=>{a.r(s),a.d(s,{default:()=>m});var p=a(6252);const e=(0,p._)("h2",{id:"题目描述",tabindex:"-1"},[(0,p._)("a",{class:"header-anchor",href:"#题目描述","aria-hidden":"true"},"#"),(0,p.Uk)(" 题目描述")],-1),t=(0,p._)("p",null,"给你一个数组 nums，请你从中抽取一个子序列，满足该子序列的元素之和 严格 大于未包含在该子序列中的各元素之和。",-1),o=(0,p._)("p",null,"如果存在多个解决方案，只需返回 长度最小 的子序列。如果仍然有多个解决方案，则返回 元素之和最大 的子序列。",-1),l=(0,p._)("p",null,"与子数组不同的地方在于，「数组的子序列」不强调元素在原数组中的连续性，也就是说，它可以通过从数组中分离一些（也可能不分离）元素得到。",-1),c=(0,p._)("p",null,"注意，题目数据保证满足所有约束条件的解决方案是 唯一 的。同时，返回的答案应当按 非递增顺序 排列。",-1),r=(0,p._)("h2",{id:"示例",tabindex:"-1"},[(0,p._)("a",{class:"header-anchor",href:"#示例","aria-hidden":"true"},"#"),(0,p.Uk)(" 示例")],-1),u=(0,p._)("div",{class:"custom-container tip"},[(0,p._)("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[(0,p._)("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[(0,p._)("circle",{cx:"12",cy:"12",r:"9"}),(0,p._)("path",{d:"M12 8h.01"}),(0,p._)("path",{d:"M11 12h1v4h1"})])]),(0,p._)("p",{class:"custom-container-title"},"TIP"),(0,p._)("p",null,[(0,p.Uk)("输入：nums = [4,3,10,9,8]"),(0,p._)("br"),(0,p.Uk)(" 输出：[10,9]"),(0,p._)("br"),(0,p.Uk)(" 解释：子序列 [10,9] 和 [10,8] 是最小的、满足元素之和大于其他各元素之和的子序列。但是 [10,9] 的元素之和最大。")]),(0,p._)("p",null,[(0,p.Uk)("输入：nums = [4,4,7,6,7]"),(0,p._)("br"),(0,p.Uk)(" 输出：[7,7,6]"),(0,p._)("br"),(0,p.Uk)(" 解释：子序列 [7,7] 的和为 14 ，不严格大于剩下的其他元素之和（14 = 4 + 4 + 6）。因此，[7,6,7] 是满足题意的最小子序列。注意，元素按非递增顺序返回。")]),(0,p._)("p",null,[(0,p.Uk)("输入：nums = [6]"),(0,p._)("br"),(0,p.Uk)(" 输出：[6]")])],-1),i=(0,p.uE)('<p>Tips:</p><ol><li>1 &lt;= nums.length &lt;= 500</li><li>1 &lt;= nums[i] &lt;= 100</li></ol><h2 id="算法设计" tabindex="-1"><a class="header-anchor" href="#算法设计" aria-hidden="true">#</a> 算法设计</h2><p>题目的意思就是给出一个数组，从中抽取一个子序列，使得这个子序列里面的值的和大于原数组里面除去这个子序列的值。</p><p>从这里我们可以得知，其实数组其实被分为两部分，其中最后需要的子序列里面的值的和要大于剩余的子序列值的和，则其实就是我们需要的子序列从大到小排列出来后，以最少的个数的和大于原数组的和的一半。</p><p>我们可以想到贪心算法，把原数组按从大到小的顺序排序后，每次判断已选出来的子序列和与原数组和的一半的大小关系，当子序列和大于原数组和一半的时候返回子序列就是题目要求的解。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token comment">/**\n * Note: The returned array must be malloced, assume caller calls free().\n */</span>\n<span class="token keyword">int</span> <span class="token function">cmp</span><span class="token punctuation">(</span><span class="token keyword">void</span> <span class="token operator">*</span>_a<span class="token punctuation">,</span> <span class="token keyword">void</span> <span class="token operator">*</span>_b<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token operator">*</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span><span class="token punctuation">)</span>_a<span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token operator">*</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span><span class="token punctuation">)</span>_b<span class="token punctuation">;</span>\n    <span class="token keyword">return</span> b <span class="token operator">-</span> a<span class="token punctuation">;</span>  <span class="token comment">//数组按从大到小的顺序排序</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">int</span><span class="token operator">*</span> <span class="token function">minSubsequence</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token operator">*</span> nums<span class="token punctuation">,</span> <span class="token keyword">int</span> numsSize<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token operator">*</span> returnSize<span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token function">qsort</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span>numsSize<span class="token punctuation">,</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">,</span>cmp<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">int</span> i<span class="token punctuation">,</span>sum<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span>i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>numsSize<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> sum<span class="token operator">+=</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token keyword">float</span> mid <span class="token operator">=</span> sum<span class="token operator">/</span><span class="token number">2.0</span><span class="token punctuation">;</span>  <span class="token comment">// 计算出原数组和的一半</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span>i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>numsSize<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        sum<span class="token operator">-=</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">&lt;</span> mid<span class="token punctuation">)</span>\n        <span class="token punctuation">{</span>\n            <span class="token operator">*</span>returnSize<span class="token operator">=</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>\n            <span class="token keyword">break</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> nums<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h2 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h2><p>时间复杂度：O(NlogN)，其中 N 是数组 nums 的长度。<br> 空间复杂度：O(1)。注意在这里我们不考虑输出数组的空间占用。</p>',10),k={},m=(0,a(3744).Z)(k,[["render",function(n,s){return(0,p.wg)(),(0,p.iD)(p.HY,null,[e,t,o,l,c,r,u,i],64)}]])}}]);