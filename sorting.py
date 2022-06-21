arr=[1,4,22,11,44,33,14];


def sorting(arr):
   arrLength=len(arr);
   for i in range (arrLength):
        j=i+1
        for j in range(arrLength):
            if(arr[i]<arr[j]):
                temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
   print(arr)


sorting(arr)

