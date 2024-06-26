---
title: 三角形的最大周长
date: 2021-01-01
tags:
 - 简单
 - 力扣
categories:
 - suanfabiji
---


## 题目描述
给定由一些正数（代表长度）组成的数组 A，返回由其中三个长度组成的、面积不为零的三角形的最大周长。  

如果不能形成任何面积不为零的三角形，返回 0。


## 示例
::: tip  
输入：[2,1,2]  
输出：5  

输入：[1,2,1]  
输出：0  

输入：[3,2,3,4]  
输出：10    

输入：[3,6,2,3]  
输出：8      
:::  

Tips:  
1.3<=A.Length<=10000  
2.1<= A[i] <= 10^6  


## 算法设计
我们知道能构成三角形三条边的条件就是两边之和大于第三边。这是充要条件。所以我们可以对数组进行排序，然后先选出数组中最大的那个值，设为c。在选取第二大和第三大的边分别作为a,b。判断是否有a+b>c，若成立则返回a+b+c;若不成立则i--,因为第二和第三长的边加起来都没有最长的边长，那么其他所有边长，无论则么组合都不可能大于最长的边,就相当于可以把最大边舍去，而把第二大的作为c边，也就是看作是最大边继续判断是否有a+b>c。  

由于需要排序，一般来说就使用快速排序，C语言的库函数提供了快速排序算法qsort，使用时只需调入stdlib.h文件。qsort函数的具体用法可以参见[qsort函数简介](https://shinuyeim.github.io/shinuye-site/views/PCCNotes/20210101Qsort.html)。。  

所以我们可以得到如下代码：

## 代码
```c
int cmp(void *_a, void *_b) {
    int a = *(int *)_a, b = *(int *)_b;
    return a - b;
}

int largestPerimeter(int *A, int ASize) {
    qsort(A, ASize, sizeof(int), cmp);
    for (int i = ASize - 1; i >= 2; --i) {
        if (A[i - 2] + A[i - 1] > A[i]) {
            return A[i - 2] + A[i - 1] + A[i];
        }
    }
    return 0;
}
```

## 复杂度分析  
时间复杂度：O(NlogN)，其中 N 是数组 A 的长度。  
空间复杂度：Ω(logN)。只使用了指针。  