"use strict";(self.webpackChunkafternoon_grocery_store=self.webpackChunkafternoon_grocery_store||[]).push([[5361],{2769:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-43a17643",path:"/blogs/LeetCode/2020/8-11-38CountAndSay.html",title:"外观数列",lang:"zh-CN",frontmatter:{title:"外观数列",date:"2020-08-11T00:00:00.000Z",tags:["简单","力扣"],categories:["算法笔记"]},excerpt:"",headers:[{level:2,title:"外观数列",slug:"外观数列",children:[]},{level:2,title:"示例1：",slug:"示例1",children:[]},{level:2,title:"示例2：",slug:"示例2",children:[]},{level:2,title:"代码",slug:"代码",children:[]}],git:{createdTime:1642079704e3,updatedTime:1642079704e3,contributors:[{name:"shinuyeim",email:"shinuyemail@gmail.com",commits:1}]}}},2870:(n,s,a)=>{a.r(s),a.d(s,{default:()=>e});const p=(0,a(6252).uE)('<h2 id="外观数列" tabindex="-1"><a class="header-anchor" href="#外观数列" aria-hidden="true">#</a> 外观数列</h2><p>给定一个正整数 n（1 ≤ n ≤ 30），输出外观数列的第 n 项。</p><p>注意：整数序列中的每一项将表示为一个字符串。</p><p>「外观数列」是一个整数序列，从数字 1 开始，序列中的每一项都是对前一项的描述。前五项如下：</p><blockquote><ol><li><pre><code>1\n</code></pre></li><li><pre><code>11 \n</code></pre></li><li><pre><code>21\n</code></pre></li><li><pre><code>1211\n</code></pre></li><li><pre><code>111221  \n</code></pre></li></ol></blockquote><p>第一项是数字 1</p><p>描述前一项，这个数是 1 即 “一个 1 ”，记作 11</p><p>描述前一项，这个数是 11 即 “两个 1 ” ，记作 21</p><p>描述前一项，这个数是 21 即 “一个 2 一个 1 ” ，记作 1211</p><p>描述前一项，这个数是 1211 即 “一个 1 一个 2 两个 1 ” ，记作 111221</p><h2 id="示例1" tabindex="-1"><a class="header-anchor" href="#示例1" aria-hidden="true">#</a> 示例1：</h2><blockquote><p>输入: 1<br> 输出: &quot;1&quot;<br> 解释：这是一个基本样例。</p></blockquote><h2 id="示例2" tabindex="-1"><a class="header-anchor" href="#示例2" aria-hidden="true">#</a> 示例2：</h2><blockquote><p>输入: 4<br> 输出: &quot;1211&quot;<br> 解释：当 n = 3 时，序列是 &quot;21&quot;，其中我们有 &quot;2&quot; 和 &quot;1&quot; 两组，&quot;2&quot; 可以读作 &quot;12&quot;，也就是出现频次 = 1 而 值 = 2；类似 &quot;1&quot; 可以读作 &quot;11&quot;。所以答案是 &quot;12&quot; 和 &quot;11&quot; 组合在一起，也就是 &quot;1211&quot;。</p></blockquote><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>\n<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">countAndSay</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token class-name">String</span> str <span class="token operator">=</span> <span class="token function">countAndSay</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 递归</span>\n    <span class="token class-name">StringBuilder</span> result <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> str<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> str<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">return</span> result<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>i <span class="token operator">-</span> a<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span> <span class="token keyword">else</span>  <span class="token keyword">if</span> <span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">!=</span> str<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            result<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>i <span class="token operator">-</span> a<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            a <span class="token operator">=</span> i<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> result<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div>',16),t={},e=(0,a(3744).Z)(t,[["render",function(n,s){return p}]])}}]);