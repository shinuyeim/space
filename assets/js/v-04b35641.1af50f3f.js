"use strict";(self.webpackChunkafternoon_grocery_store=self.webpackChunkafternoon_grocery_store||[]).push([[5741],{3579:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-04b35641",path:"/blogs/PCCNotes/092901.html",title:"二分法查找以及改进",lang:"zh-CN",frontmatter:{title:"二分法查找以及改进",date:"2020-09-29T00:00:00.000Z",tags:["笔记","二分搜索"],categories:["算法笔记"]},excerpt:"",headers:[{level:2,title:"题目描述",slug:"题目描述",children:[{level:3,title:"算法设计",slug:"算法设计",children:[]},{level:3,title:"代码",slug:"代码",children:[]},{level:3,title:"时间复杂性分析",slug:"时间复杂性分析",children:[]}]},{level:2,title:"二分法改进版1",slug:"二分法改进版1",children:[{level:3,title:"代码",slug:"代码-1",children:[]},{level:3,title:"时间复杂度",slug:"时间复杂度",children:[]}]},{level:2,title:"完整代码",slug:"完整代码",children:[{level:3,title:"二分搜索法",slug:"二分搜索法",children:[]},{level:3,title:"改进的二分法",slug:"改进的二分法",children:[]}]}],git:{createdTime:1642079704e3,updatedTime:1642079704e3,contributors:[{name:"shinuyeim",email:"shinuyemail@gmail.com",commits:1}]}}},1636:(n,s,a)=>{a.r(s),a.d(s,{default:()=>e});const p=(0,a(6252).uE)('<h2 id="题目描述" tabindex="-1"><a class="header-anchor" href="#题目描述" aria-hidden="true">#</a> 题目描述</h2><p>二分搜索算法是运用分治策略的典型例子。给定已排好序的n个元素a[0:n-1]，现要在这n个元素中找出一特定的元素x。首先较容易想到的是用顺序搜索方法，逐个比较a[0:n-1]中的元素，直至找出元素x或搜索遍整个数组后 确定x不在其中。这个方法没有很好的利用n个元素已排好序这个条件，因此，在最坏的情况下，顺序搜索方法需要O(n)次比较。</p><h3 id="算法设计" tabindex="-1"><a class="header-anchor" href="#算法设计" aria-hidden="true">#</a> 算法设计</h3><p>二分搜索方法充分利用了元素间的次序关系，采用分治策略，可在最坏的情况下用O(logn)时间完成所搜任务。二分搜索算法的进本思想是，将n个元素分成个数大致相同的两半，取a[n/2]与x作比较。如果x = a[n/2]，则找到x，算法终止; 如果x &lt; a[n/2]，则只在数组a的左半部继续搜索x; 如果x &gt; a[n/2]，则只在数组a的右半部继续搜索x。具体算法可描述如下：</p><h3 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h3><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">BinarySearch</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int</span> x<span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">//在a[0]&lt;=a[1]&lt;=...&lt;=a[n-1]中搜索.</span>\n    <span class="token comment">//找不到x时返回其在数组中的位置，否则返回-1</span>\n    <span class="token keyword">int</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>  <span class="token keyword">int</span> right <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">while</span><span class="token punctuation">(</span>left <span class="token operator">&gt;</span> right<span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">int</span> middle <span class="token operator">==</span> <span class="token punctuation">(</span>left <span class="token operator">+</span> right<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>\n        <span class="token keyword">if</span><span class="token punctuation">(</span>x <span class="token operator">==</span> a<span class="token punctuation">[</span>middle<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">return</span> middle<span class="token punctuation">;</span>\n        <span class="token keyword">if</span><span class="token punctuation">(</span>x <span class="token operator">&gt;</span> a<span class="token punctuation">[</span>middle<span class="token punctuation">]</span><span class="token punctuation">)</span>\n            left <span class="token operator">=</span> middle <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>\n        <span class="token keyword">if</span><span class="token punctuation">(</span>x <span class="token operator">&lt;</span> a<span class="token punctuation">[</span>middle<span class="token punctuation">]</span><span class="token punctuation">)</span>\n            right <span class="token operator">=</span> middle <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="时间复杂性分析" tabindex="-1"><a class="header-anchor" href="#时间复杂性分析" aria-hidden="true">#</a> 时间复杂性分析</h3><p>在执行一次算法的while循环，带搜索数组的大小减小一半。因此，在最坏情况下，while循环被执行了O(logn)次。循环体内运算时间需要O(1)，因此整个算法在最坏情况下的计算时间复杂性为O(logn)。</p><h2 id="二分法改进版1" tabindex="-1"><a class="header-anchor" href="#二分法改进版1" aria-hidden="true">#</a> 二分法改进版1</h2><p>设a[0:n-1]是已排好序的数组。改写二分搜索法，使得当搜索元素x不在数组中时，返回小于x的最大元素位置i和大于x的最小元素位置j。当搜索元素在数组中时，i和j相同，均为x在数组中的位置。</p><h3 id="代码-1" tabindex="-1"><a class="header-anchor" href="#代码-1" aria-hidden="true">#</a> 代码</h3><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">BinarySearch</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int</span> x<span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">,</span><span class="token keyword">int</span> <span class="token operator">&amp;</span>i<span class="token punctuation">,</span> <span class="token keyword">int</span> <span class="token operator">&amp;</span>j<span class="token punctuation">)</span><span class="token punctuation">{</span>  <span class="token comment">//x代表想要查询的数字 </span>\n\t<span class="token comment">//找到x时返回其在数组中的位置，否则返回应当插入的位置 </span>\n\t<span class="token keyword">int</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>   <span class="token keyword">int</span> right <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>\n\t<span class="token keyword">while</span><span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span><span class="token punctuation">{</span>\n\t\t<span class="token keyword">int</span> middle <span class="token operator">=</span> <span class="token punctuation">(</span>left <span class="token operator">+</span> right<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>\n\t\t<span class="token keyword">if</span><span class="token punctuation">(</span>x <span class="token operator">==</span> a<span class="token punctuation">[</span>middle<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n\t\t\t<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span>middle<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t<span class="token punctuation">}</span>\n\t\t<span class="token keyword">if</span><span class="token punctuation">(</span>x <span class="token operator">&gt;</span> a<span class="token punctuation">[</span>middle<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n\t\t\tleft <span class="token operator">=</span> middle <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>\n\t\t<span class="token punctuation">}</span>\n\t\t<span class="token keyword">else</span><span class="token punctuation">{</span>\n\t\t\tright <span class="token operator">=</span> middle <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>\n\t\t<span class="token punctuation">}</span>\n\t<span class="token punctuation">}</span>\n\ti <span class="token operator">=</span> right<span class="token punctuation">;</span>\n\tj <span class="token operator">=</span> left<span class="token punctuation">;</span>\n\t<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>\t\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h3 id="时间复杂度" tabindex="-1"><a class="header-anchor" href="#时间复杂度" aria-hidden="true">#</a> 时间复杂度</h3><p>这种改进方法不是针对程序的时间复杂度进行优化，只是为了丰富算法的功能。时间复杂度任然为O(logn)。</p><h2 id="完整代码" tabindex="-1"><a class="header-anchor" href="#完整代码" aria-hidden="true">#</a> 完整代码</h2><h3 id="二分搜索法" tabindex="-1"><a class="header-anchor" href="#二分搜索法" aria-hidden="true">#</a> 二分搜索法</h3><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>\n\n<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">N</span> <span class="token expression"><span class="token number">100000</span></span></span>\n\n<span class="token keyword">int</span> <span class="token function">BinarySearch</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int</span> x<span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n\t<span class="token function">freopen</span><span class="token punctuation">(</span><span class="token string">&quot;D:\\\\input.txt&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;r&quot;</span><span class="token punctuation">,</span><span class="token constant">stdin</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token function">freopen</span><span class="token punctuation">(</span><span class="token string">&quot;D:\\\\output.txt&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;w&quot;</span><span class="token punctuation">,</span><span class="token constant">stdout</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    \n    <span class="token keyword">int</span> a<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token keyword">int</span> size<span class="token punctuation">;</span>\n\t\n\t<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>size<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>i <span class="token operator">&lt;</span> size<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n\t\t<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span>\n\t\n\t<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d &quot;</span><span class="token punctuation">,</span><span class="token function">BinarySearch</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span>size<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\n\t<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">int</span> <span class="token function">BinarySearch</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int</span> x<span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">{</span>  <span class="token comment">//x代表想要查询的数字 </span>\n\t<span class="token comment">//找到x时返回其在数组中的位置，否则返回-1 </span>\n\t<span class="token keyword">int</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>   <span class="token keyword">int</span> right <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>\n\t<span class="token keyword">while</span><span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span><span class="token punctuation">{</span>\n\t\t<span class="token keyword">int</span> middle <span class="token operator">=</span> <span class="token punctuation">(</span>left <span class="token operator">+</span> right<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>\n\t\t<span class="token keyword">if</span><span class="token punctuation">(</span>x <span class="token operator">==</span> a<span class="token punctuation">[</span>middle<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n\t\t\t<span class="token keyword">return</span> middle<span class="token punctuation">;</span>\n\t\t<span class="token punctuation">}</span>\n\t\t<span class="token keyword">if</span><span class="token punctuation">(</span>x <span class="token operator">&gt;</span> a<span class="token punctuation">[</span>middle<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n\t\t\tleft <span class="token operator">=</span> middle <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>\n\t\t<span class="token punctuation">}</span>\n\t\t<span class="token keyword">else</span>\n\t\t\tright <span class="token operator">=</span> middle <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span>\n\t<span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><h3 id="改进的二分法" tabindex="-1"><a class="header-anchor" href="#改进的二分法" aria-hidden="true">#</a> 改进的二分法</h3><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>\n\n<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">N</span> <span class="token expression"><span class="token number">100000</span></span></span>\n\n<span class="token keyword">int</span> <span class="token function">BinarySearch</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int</span> x<span class="token punctuation">,</span> <span class="token keyword">int</span> left<span class="token punctuation">,</span> <span class="token keyword">int</span> right<span class="token punctuation">,</span><span class="token keyword">int</span> <span class="token operator">&amp;</span>i<span class="token punctuation">,</span> <span class="token keyword">int</span> <span class="token operator">&amp;</span>j<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n\t<span class="token function">freopen</span><span class="token punctuation">(</span><span class="token string">&quot;D:\\\\input1.txt&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;r&quot;</span><span class="token punctuation">,</span><span class="token constant">stdin</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token function">freopen</span><span class="token punctuation">(</span><span class="token string">&quot;D:\\\\output1.txt&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;w&quot;</span><span class="token punctuation">,</span><span class="token constant">stdout</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    \n\t<span class="token keyword">int</span> a<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token keyword">int</span> size<span class="token punctuation">;</span>\n\t\n\t<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>size<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>i <span class="token operator">&lt;</span> size<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n\t\t<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span>\n\t\n\t<span class="token keyword">int</span> n <span class="token operator">=</span>size <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>\t\n\t<span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n\t\n\t<span class="token keyword">int</span> p <span class="token operator">=</span> <span class="token function">BinarySearch</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span>n<span class="token punctuation">,</span>i<span class="token punctuation">,</span>j<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token keyword">if</span><span class="token punctuation">(</span> p <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>      <span class="token comment">//搜索元素x不在数组中时 </span>\n\t\t<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;小于x的最大元素的位置为%d，大于x的最小元素位置为%d&quot;</span><span class="token punctuation">,</span>i<span class="token punctuation">,</span>j<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>\n\t\t<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;搜索元素x的位置为%d&quot;</span><span class="token punctuation">,</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span>\n\t\n\t<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">int</span> <span class="token function">BinarySearch</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int</span> x<span class="token punctuation">,</span> <span class="token keyword">int</span> left<span class="token punctuation">,</span> <span class="token keyword">int</span> right<span class="token punctuation">,</span><span class="token keyword">int</span> <span class="token operator">&amp;</span>i<span class="token punctuation">,</span> <span class="token keyword">int</span> <span class="token operator">&amp;</span>j<span class="token punctuation">)</span><span class="token punctuation">{</span>  <span class="token comment">//x代表想要查询的数字 </span>\n\t<span class="token comment">//找到x时返回其在数组中的位置，否则返回应当插入的位置 </span>\n\t<span class="token keyword">int</span> middle<span class="token punctuation">;</span>\n\t\n\t<span class="token keyword">while</span><span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span><span class="token punctuation">{</span>\n\t\tmiddle <span class="token operator">=</span> <span class="token punctuation">(</span>left <span class="token operator">+</span> right<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>\n\t\t<span class="token keyword">if</span><span class="token punctuation">(</span>x <span class="token operator">==</span> a<span class="token punctuation">[</span>middle<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n\t\t\ti <span class="token operator">=</span> j <span class="token operator">=</span> middle<span class="token punctuation">;</span>\n\t\t\t<span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>\n\t\t<span class="token punctuation">}</span>\n\t\t<span class="token keyword">if</span><span class="token punctuation">(</span>x <span class="token operator">&gt;</span> a<span class="token punctuation">[</span>middle<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n\t\t\tleft <span class="token operator">=</span> middle <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>\n\t\t<span class="token punctuation">}</span>\n\t\t<span class="token keyword">else</span><span class="token punctuation">{</span>\n\t\t\tright <span class="token operator">=</span> middle <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>\n\t\t<span class="token punctuation">}</span>\n\t<span class="token punctuation">}</span>\n\ti <span class="token operator">=</span> right<span class="token punctuation">;</span>\n\tj <span class="token operator">=</span> left<span class="token punctuation">;</span>\n\t<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>\t\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br></div></div>',19),t={},e=(0,a(3744).Z)(t,[["render",function(n,s){return p}]])}}]);