# Task 2. 1-100 arasında tek ededlerin cemini ekrana cap edin
sum=0
x=range(1,101)
for item in x:
    if item%2==1:
        sum=sum+item
print(sum)