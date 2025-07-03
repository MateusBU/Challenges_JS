#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <string.h>

int findLHS(int* nums, int numsSize);

void main(){
    int numsSize = 4;
    int nums[] = {3999932,14095060,-38450324,-6006632,-6052261,34210012,5636226,-301414,19348094,6297539};
    printf("%d", findLHS(nums, numsSize));
}
int cmp(const void* a, const void* b) {
    return (*(int*)a - *(int*)b);
}

int findLHS(int* nums, int numsSize) {
    qsort(nums, numsSize, sizeof(int), cmp);

    int maxLen = 0;
    int start = 0;

    for (int i = 1; i < numsSize; i++) {
        if (nums[i] == nums[i - 1]) {
            continue; // ignora duplicatas
        }

        if (nums[i] - nums[start] > 1) {
            start++;
            i = start; // reinicia do novo início
        }

        if (nums[i] - nums[start] == 1) {
            int count1 = 0, count2 = 0;
            for (int j = start; j < numsSize; j++) {
                if (nums[j] == nums[start]) count1++;
                else if (nums[j] == nums[i]) count2++;
                else break;
            }
            if (count1 > 0 && count2 > 0) {
                int total = count1 + count2;
                if (total > maxLen) maxLen = total;
            }
        }
    }
    return maxLen;
}