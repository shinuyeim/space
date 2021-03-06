---
title: 非递增顺序的最小子序列  
date: 2021-01-03
tags:
 - 简单
 - 力扣
 - 贪心
categories:
 - 算法笔记
---


## 题目描述
给你一个数组 nums，请你从中抽取一个子序列，满足该子序列的元素之和 严格 大于未包含在该子序列中的各元素之和。  

如果存在多个解决方案，只需返回 长度最小 的子序列。如果仍然有多个解决方案，则返回 元素之和最大 的子序列。  

与子数组不同的地方在于，「数组的子序列」不强调元素在原数组中的连续性，也就是说，它可以通过从数组中分离一些（也可能不分离）元素得到。  

注意，题目数据保证满足所有约束条件的解决方案是 唯一 的。同时，返回的答案应当按 非递增顺序 排列。  


## 示例
::: tip  
输入：nums = [4,3,10,9,8]  
输出：[10,9]   
解释：子序列 [10,9] 和 [10,8] 是最小的、满足元素之和大于其他各元素之和的子序列。但是 [10,9] 的元素之和最大。   

输入：nums = [4,4,7,6,7]  
输出：[7,7,6]   
解释：子序列 [7,7] 的和为 14 ，不严格大于剩下的其他元素之和（14 = 4 + 4 + 6）。因此，[7,6,7] 是满足题意的最小子序列。注意，元素按非递增顺序返回。    

输入：nums = [6]  
输出：[6]       
:::  

Tips:    
1. 1 <= nums.length <= 500  
2. 1 <= nums[i] <= 100  


## 算法设计
题目的意思就是给出一个数组，从中抽取一个子序列，使得这个子序列里面的值的和大于原数组里面除去这个子序列的值。

从这里我们可以得知，其实数组其实被分为两部分，其中最后需要的子序列里面的值的和要大于剩余的子序列值的和，则其实就是我们需要的子序列从大到小排列出来后，以最少的个数的和大于原数组的和的一半。

我们可以想到贪心算法，把原数组按从大到小的顺序排序后，每次判断已选出来的子序列和与原数组和的一半的大小关系，当子序列和大于原数组和一半的时候返回子序列就是题目要求的解。

## 代码
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int cmp(void *_a, void *_b) {
    int a = *(int *)_a, b = *(int *)_b;
    return b - a;  //数组按从大到小的顺序排序
}
int* minSubsequence(int* nums, int numsSize, int* returnSize){
    qsort(nums,numsSize,sizeof(int),cmp);
    int i,sum=0;
    for (i=0; i<numsSize; i++) sum+=nums[i];
    float mid = sum/2.0;  // 计算出原数组和的一半
    for (i=0; i<numsSize; i++){
        sum-=nums[i];
        if (sum < mid)
        {
            *returnSize=i+1;
            break;
        }
    }
    return nums;
}
```

## 复杂度分析     
时间复杂度：O(NlogN)，其中 N 是数组 nums 的长度。   
空间复杂度：O(1)。注意在这里我们不考虑输出数组的空间占用。   

