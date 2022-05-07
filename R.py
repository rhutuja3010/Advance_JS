# i=1
# while i<=5:
#     j=1
#     while j<=i:
#         if j<=3:
#             print("*",end="")
#         j+=1
#     print()
#     i+=1


# a = [11]
# b = [89]
# c = [37]

# print("Before swapping a = ",a,", b = ",b,", c = ",c) 
# a[0] = a[0] ^ b[0] ^ c[0] 
# b[0] = a[0] ^ b[0] ^ c[0] 
# c[0] = a[0] ^ b[0] ^ c[0]  
# a[0] = a[0] ^ b[0] ^ c[0] 
# print("After swapping a = ",a,", b = ",b,", c = ",c) 



# new_file=open("qustion3.txt","r")
# for i in new_file :
#     if "delhi" in i:
#         new_file=open("delhi.txt","a")
#         new_file.write(i)
#     elif "Shimla" in i:
#         new_file=open("Shimla.txt","a")
#         new_file.write(i)
#     else:
#         new_file=open("other.txt","a")
#         new_file.write(i)
# new_file.close() 


# k=1
# i=1
# while i<=4:
#     b=1
#     while b<5-i:
#         print("",end=" ")
#         b+=1
#     j=1
#     while j<=k:
#         print("*",end=" ")
#         j+=1
#     print()
#     i+=1
#     k+=1

# l=[[1,2,3],[8,9],[3,4,8,2]]
# i=0
# b=[]
# while i<len(l):
#     j=0
#     sum=0
#     while j<len(l[i]):
#         sum+=l[i][j]
#         j+=1
#     b.append(sum)
#     i+=1
# print(b)



# a=2+5j
# b=3+2j
# print(a*b)


# a=[1,2,3]
# b=[4,5,6]
# i=0
# c=[]
# while i<len(a):
#     c.append(a[i]+b[i])
#     i+=1
# print(c)


# a=["rhutuja","anu","monu"]
# i=0
# while i<len(a):
#     if len(a[i]) is odd:
#         print(l[i],"odd")





# n="Rhutuja"
# i=0
# while i<len(n):
#     print(n,split())
#     i+=1

# a=2+5j
# b=3+2j
# print(a*b)

# a={"a":10,"b":20}
# b={"c":30}
# a.update(b)
# print(a)



# a=["rhutuja","anu","monu"]
# i=0
# while i<len(a):
#     print(len(a[i]))
#     i+=1


# import json


# a={"a":1,"b":2}
# with open (a.json,"w") as file :
#     json.dump(a,file,indent=2)


# print(4 in [[4],5])


# def ifPalindrome(string):
#     if string == "":  # BASE CASE CONDITION
#         return True
#     elif len(string) == 1:  # BASE CASE CONDITION
#         return True
#     elif string[0] == string[len(string)-1]:  # RECURSION
#         return ifPalindrome(string[1:][:-1])
#     else:
#         return False
# print(ifPalindrome("mom"))



# a="rhutuja"
# print(a[-1])

# s=["s","i","s"]
# if s==s[::-1]:
#     print("palindrom")
# else:
#     print("not")



# i=10
# while i>0:
#     print(i)
#     i-=1



# n=19657
# rev=0
# while n>0:
#     rev=(rev*10)+n%10
#     n=n//10
# print(rev)


# n=123
# sum=0
# while n:
#     sum+=n%10
#     n//=10
# print(sum)


# a=[[[[[1,2,3,4]]]]]
# print(a[0][0][0][0][0])










# a=[[[[[1,2,3,4]]]]]
# print(a[0][0][0][0])


# a=1
# b="1"
# print(a==b)


# a=[1,2,3]
# print(1 in a)


# a = 20
# b = 29

# print( a is a )


# x = ["apple", "banana"]
# y = ["apple", "banana"]
# z = x
# print(x is z)
# # returns True because z is the same object as x
# print(x is y)
# # returns False because x is not the same object as y, even if they have the same content
# print(x == y)
# # to demonstrate the difference betweeen "is" and "==": this comparison returns True because x is equal to y



# a=2+3j
# b=3+5j
# print(a*b)


# a=[1,2,3,4]
# l=[]
# sum=0
# for i in a:
#     sum+=i
#     l.append(sum)
# print(l)

# a=[1,2,3,4]
# i=1
# l=[]
# sum=0
# while i<=len(a):
#     sum+=i
#     i+=1
#     l.append(sum)
# print(l)



# print(r"z\ntyu","\n","tryu")


# print("\\r") #would print ‘\r’ 
# print(r"\\r") #would print ’\\r’, where r’string’ makes a raw string  
# print(r'\r') #would print ‘\r’  
# print('\r') #would return the carriage to the starting position, the effect can be realised on consoles. 
# print('\nabcdef') 


# def Q(min,max,step):
#     l=[]
#     for i in range(min,max,step):
#         # print(i)
#         l.append(i)
#     return l
# print(Q(2,12,2))

# a=1
# while True:
#     if a==10:
#         break
#     print(a)


# a=2
# while a<=20:
#     print(a)
#     a+=2


# Even Odd Program using Bitwise Operator  
# a=int(input("Please Enter a Number : "));  
# if(a&1==1):  
#     print("This Number is Odd")    
# else:  
#     print("This Number is Even")   



# a=int(input("Please Enter a Number : "))
# x=int(a//2)*2
# if a==x:
#     print("even ")
# else:
#     print("odd")



# a=13
# if a/2==a//2:
#     print("even")
# else:
#     print("odd")


# a="3"
# print(type(a))

# a=1
# if True:
#     b=a<=10
#     print(a)
    
# a=[1,2,3]
# b=[4,5,6]
# print(a+b)


# print(type(("rh",)))


# a=[1,2,3,4,5,6,7,8,8]
# print(a[-4:])
# print(a[0:7:5])
# print(a[-5:-3])
# print(a[-1::-1])
# print(a[::-1])



# a="rhutuja"
# for i in range((len(a)-1),-1,-1):
#     # print()
#     # print(a[i],end="")
#     print(a[i],end=" ")


l=[]
n=(input("enter the names :"))
for i in range(n):
    print("names :",i+1)
    l.append(input())
s=set(l)
l=list(s)
for i in l:
    print(i)