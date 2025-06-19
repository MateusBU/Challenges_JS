#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char* multiply(char* num1, char* num2) {
    int len1 = strlen(num1);
    int len2 = strlen(num2);

    if ((len1 == 1 && num1[0] == '0') || (len2 == 1 && num2[0] == '0')) {
        char* zero = malloc(2);
        zero[0] = '0';
        zero[1] = '\0';
        return zero;
    }

    int *result = calloc(len1 + len2, sizeof(int));
    if (!result) return NULL;

    for (int i = len1 - 1; i >= 0; i--) {
        for (int j = len2 - 1; j >= 0; j--) {
            int mul = (num1[i] - '0') * (num2[j] - '0');
            int sum = mul + result[i + j + 1];

            result[i + j + 1] = sum % 10;
            result[i + j] += sum / 10;
        }
    }

    int start = 0;
    while (start < len1 + len2 - 1 && result[start] == 0) {
        start++;
    }

    int resLen = len1 + len2 - start;
    char* resStr = malloc(resLen + 1);
    if (!resStr) {
        free(result);
        return NULL;
    }

    for (int i = 0; i < resLen; i++) {
        resStr[i] = result[start + i] + '0';
    }
    resStr[resLen] = '\0';

    free(result);
    return resStr;
}

int main() {
    char num1[] = "6913259244";
    char num2[] = "71103343";

    char* product = multiply(num1, num2);
    printf("Product:\n%s\n", product);

    free(product);
    return 0;
}
