from turtle import left


nums = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
num_to_find = 11

def binary_search(inteegers,target):
        left_index = 0
        right_index = len(integers) - 1
        middle_index = (left_index + right_index) / 2
    if left_index >= right_index:
        return "target not found"
        #account for odd middle indexes
        print(middle_index)
        if (middle_index % 2 > 0):
            middle_index = middle_index - 0.5
        
         middle_index = int[middle_index]

         if int[middle_index] == target:
            return middle_index
        elif int[middle_index] > target:
            left_index = middle_index + 1
        else:
            if left_index >= right_index:

