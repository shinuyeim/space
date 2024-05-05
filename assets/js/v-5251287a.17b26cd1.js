"use strict";(self.webpackChunkafternoon_grocery_store=self.webpackChunkafternoon_grocery_store||[]).push([[4467],{619:(n,a,s)=>{s.r(a),s.d(a,{data:()=>e});const e={key:"v-5251287a",path:"/blogs/LeetCode/2020/8-02-70ClimbingStairs.html",title:"爬楼梯",lang:"zh-CN",frontmatter:{title:"爬楼梯",date:"2020-08-02T00:00:00.000Z",tags:["简单","力扣"],categories:["算法笔记"]},excerpt:"",headers:[{level:2,title:"爬楼梯",slug:"爬楼梯",children:[]},{level:2,title:"注意：",slug:"注意",children:[]},{level:2,title:"示例1：",slug:"示例1",children:[]},{level:2,title:"示例2：",slug:"示例2",children:[]},{level:2,title:"代码",slug:"代码",children:[]},{level:2,title:"说明",slug:"说明",children:[]}],git:{createdTime:1642079704e3,updatedTime:1642079704e3,contributors:[{name:"shinuyeim",email:"shinuyemail@gmail.com",commits:1}]}}},1326:(n,a,s)=>{s.r(a),s.d(a,{default:()=>t});const e=(0,s(6252).uE)('<h2 id="爬楼梯" tabindex="-1"><a class="header-anchor" href="#爬楼梯" aria-hidden="true">#</a> 爬楼梯</h2><p>假设你正在爬楼梯。需要 n 阶你才能到达楼顶。</p><p>每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？</p><h2 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意：</h2><p>给定 n 是一个正整数。</p><h2 id="示例1" tabindex="-1"><a class="header-anchor" href="#示例1" aria-hidden="true">#</a> 示例1：</h2><blockquote><p>输入： 2<br> 输出： 2</p></blockquote><blockquote><p>解释： 有两种方法可以爬到楼顶。</p><ol><li>1 阶 + 1 阶</li><li>2 阶</li></ol></blockquote><h2 id="示例2" tabindex="-1"><a class="header-anchor" href="#示例2" aria-hidden="true">#</a> 示例2：</h2><blockquote><p>输入： 3<br> 输出： 3</p></blockquote><blockquote><p>解释： 有三种方法可以爬到楼顶。</p><ol><li>1 阶 + 1 阶 + 1 阶</li><li>1 阶 + 2 阶</li><li>2 阶 + 1 阶</li></ol></blockquote><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">climbStairs</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">int</span> p <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> q <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> r <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n        <span class="token keyword">if</span><span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>\n        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            p <span class="token operator">=</span> q<span class="token punctuation">;</span> \n            q <span class="token operator">=</span> r<span class="token punctuation">;</span> \n            r <span class="token operator">=</span> p <span class="token operator">+</span> q<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">return</span> r<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="说明" tabindex="-1"><a class="header-anchor" href="#说明" aria-hidden="true">#</a> 说明</h2><p>因为每一次都只能爬1或者2个台阶，所以，爬n个台阶的方法就是n-1个台阶的方法再爬1个台阶，和爬n-2个台阶的方法再爬两个台阶。</p><p>所以，爬n个台阶的方法就是爬n-1个台阶的方法加上爬n-2个台阶的方法。</p><p>其实这就是斐波那契数列。</p>',17),p={},t=(0,s(3744).Z)(p,[["render",function(n,a){return e}]])}}]);