num=int(input('Please enter number : '));


def palindrome(num):
    reverse=0;
    original=num;
    while num>0:
       reverse=reverse*10+num%10;
       num=num//10;
    if reverse==original:
        print('it is palindrome')
    else:
        print('it is not palindrome')

palindrome(num)