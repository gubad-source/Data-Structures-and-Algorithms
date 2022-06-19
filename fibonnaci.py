n=int(input('Enter a number : '));

def fib(n):
    first=0
    second=1
    if(n==1):
      print(first)
    else:
        for i in range(1,n):
         total=first+second
         first=second
         second=total
         print(total)
       

fib(n)