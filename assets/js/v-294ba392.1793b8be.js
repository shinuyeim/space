"use strict";(self.webpackChunkafternoon_grocery_store=self.webpackChunkafternoon_grocery_store||[]).push([[8940],{897:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-294ba392",path:"/blogs/LeetCode/2020/8-12-104MaximumDepthOfBinaryTree.html",title:"二叉树的最大深度",lang:"zh-CN",frontmatter:{title:"二叉树的最大深度",date:"2020-08-12T00:00:00.000Z",tags:["简单","力扣"],categories:["算法笔记"]},excerpt:"",headers:[{level:2,title:"二叉树的最大深度",slug:"二叉树的最大深度",children:[]},{level:2,title:"说明:",slug:"说明",children:[]},{level:2,title:"示例：",slug:"示例",children:[]},{level:2,title:"代码",slug:"代码",children:[]}],git:{createdTime:1642079704e3,updatedTime:1642079704e3,contributors:[{name:"shinuyeim",email:"shinuyemail@gmail.com",commits:1}]}}},546:(n,s,a)=>{a.r(s),a.d(s,{default:()=>t});const p=(0,a(6252).uE)('<h2 id="二叉树的最大深度" tabindex="-1"><a class="header-anchor" href="#二叉树的最大深度" aria-hidden="true">#</a> 二叉树的最大深度</h2><p>给定一个二叉树，找出其最大深度。</p><p>二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。</p><h2 id="说明" tabindex="-1"><a class="header-anchor" href="#说明" aria-hidden="true">#</a> 说明:</h2><p>叶子节点是指没有子节点的节点。</p><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例：</h2><blockquote><p>给定二叉树 [3,9,20,null,null,15,7]，</p></blockquote><blockquote><p>3<br> / <br> 9 20<br> / <br> 15 7 返回它的最大深度 3 。</p></blockquote><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><p>解法1：</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">maxDepth</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token function">maxDepth</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">maxDepth</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>解法2：</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">maxDepth</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token class-name">Queue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TreeNode</span><span class="token punctuation">&gt;</span></span> queue <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TreeNode</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        queue<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">int</span> ans <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>queue<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">int</span> size <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token keyword">while</span> <span class="token punctuation">(</span>size <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                <span class="token class-name">TreeNode</span> node <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">poll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>left <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                    queue<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>\n                <span class="token punctuation">}</span>\n                <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>right <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                    queue<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>\n                <span class="token punctuation">}</span>\n                size<span class="token operator">--</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n            ans<span class="token operator">++</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">return</span> ans<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div>',13),e={},t=(0,a(3744).Z)(e,[["render",function(n,s){return p}]])}}]);