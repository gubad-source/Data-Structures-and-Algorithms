pos=-1

def search(list,n):
    lower=0;
    upper=len(list)-1;

   
    while lower<upper:
      middle=(lower+upper)//2;
      if list[middle]==n:
       globals()["pos"]=middle
       return True;
      else:
         if list[middle]<n:
           lower=middle+1
         else:
            upper=middle-1;
    return False

list=[1,2,3,4,66,78]; #66
n=66

if(search(list, n)):
    print("Found at ",pos+1)
else:
    print("Not found")

search(list, n)
