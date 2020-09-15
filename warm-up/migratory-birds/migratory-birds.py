
#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the migratoryBirds function below.
def migratoryBirds(arr):
    bList = list(arr)
    mig_dict = {i:0 for i in bList}
    for i in bList:
        mig_dict[i]+=1
    maxKey = max(mig_dict, key = mig_dict.get)
    newSet = set(k for k,v in mig_dict.items() if v == mig_dict[maxKey])
    return min(newSet)    
if __name__ == '__main__':
    arr_count = int(input().strip())

    arr = list(map(int, input().rstrip().split()))

    result = migratoryBirds(arr)

    print(result)
