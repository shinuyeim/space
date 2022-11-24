---
title: 排列硬币
date: 2021-05-30
tags:
 - 简单
 - 力扣
 - 二分搜索
categories:
 - 算法笔记
---

## 题目描述
你总共有 n 枚硬币，你需要将它们摆成一个阶梯形状，第 k 行就必须正好有 k 枚硬币。  

给定一个数字 n，找出可形成完整阶梯行的总行数。  

n 是一个非负整数，并且在32位有符号整型的范围内。  

## 示例
::: tip  
n = 5  

硬币可排列成以下几行:  
¤  
¤ ¤  
¤ ¤  

因为第三行不完整，所以返回2.  


n = 8  

硬币可排列成以下几行:  
¤  
¤ ¤  
¤ ¤ ¤  
¤ ¤  

因为第四行不完整，所以返回3.  


n = 6

硬币可排列成以下几行:
¤  
¤ ¤  
¤ ¤ ¤  
返回3.  
:::  

## 算法设计
这个题在LeetCode里面的标签是简单的二分搜索，当我读完题目的时候，还没有想到用二分法如何求解，但是我想到了一种相对暴力的解法，于是就写了一段，调试了几次通过了。具体代码如下暴力法1。因为对于二分法没有思路，所以我去搜索了一下，结果看到一个更加直观的暴力法，一看就能理解，对比于我的代码，可读性更好。所以我把另一个暴力法总结在暴力法2中。  
二分法主要利用到的就是等差数列求和这个性质，求和的过程要注意数据不能溢出，所以定义的时候使用了long型。

## 代码

**暴力法1：**
```c
int arrangeCoins(int n) {
	int i = 0;
	while (n > i) {
		n = n - i;  //每一行都需要减去当前行数个硬币
		i++;		//行数加1
		if (n == i) {    //特例，刚好最后一行放完所有的硬币，如6个硬币的时候，能放3行
			i++;
		}
	}
	return i - 1;
}
```
---
**暴力法2：**  
```c
int arrangeCoin(int n) {
	int res = 0;  //存储结果
	while (n > 0) {
		res++;
		n = n - res;
	}
	//刚好减完的话n=0，例如6-1-2-3 = 0 此时返回3
	//当减完小于0，例如5-1-2-3 < 0 此时返回2
	if (n == 0) {
		return res;
	}
	else {
		return res - 1;
	}
}
```
---
**二分搜索：**  
```c
int arrangeCoins(int n) {
	int left = 0, right = n;
	long mid, sum;
	while (left <= right) {
		mid = left + (right - left) / 2;
		//等差数列求和
		sum = (1 + mid) * mid / 2;
		if (sum == n) {
			return (int)mid;
		}
		else if (sum < n) {
			left = mid + 1;
		}
		else {
			right = mid - 1;
		}
	}
	return left -1;
}
```
---

## 复杂度分析     
**时间复杂度：**   
暴力法中，提交时用时16ms，算法执行效率不高，时间复杂度为O(n)。  
二分搜索中，算法的时间复杂度为O(logn);

**空间复杂度：**   
暴力法中，也没有占用多余的内存，只是定义了一个变量，空间复杂度为O(1)。  
二分搜索中，空间复杂度为O(1);