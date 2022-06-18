number=int(input('Enter a number : '));

def armstrong(number):
    sum=0;
    original=number;
    lengthString=len(str(number));
   
    while number>0:
       modules=number%10;
       sum+=modules**lengthString;
       number=number//10;
    
    if sum==original:
       return True
    return False

if(armstrong(number)):
    print('number is armstrong')
else:
    print('number is not armstrong')
    