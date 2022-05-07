# // let x = 10;
# // if (x === 10) {
# //   let x = 20;
# //   console.log(x); // 20:  reference x inside the block
# // }
# // console.log(x); // 10: reference at the begining of the script


# // console.log(b)
# // let a=10;
# // var b=20;

# a=[[1,2,3],[1,6,7],[3,3,2,6],[1,3,4,5,6],[3,5,6]]
# for i in range(len(a)):
#     sum=0
#     for j in range(len(a[i])):
#         sum+=a()
#         avg=sum/5
#         print(avg)
        # print(j)
        # sum+=
    #     for p in range(len(a)):
    #        for k in range(len(a[p])):
    #         if j==k:
    #             sum+=a[i][j]
    # print(sum)


# a=["ab","abcd","abe","abhrt","a"]
# max=0
# for i in range(len(a)):
#     # print(len(a[i]))
#     l=len(a[i])
#     if max<l:
#         max=l
# print(max)
    


# a=2
# print(complex(a))





# while True:
#     n=int(input("enter the no :"))
#     if n==10:
#         break
#     else:
#         print(n)


from collections import Counter
l1 = [1,2,1,2,3,4,5,1,1,2,5,6,7,8,9,9]
d = Counter(l1)
print(d)
 
new_list = list([item for item in d if d[item]>1])
print(new_list)