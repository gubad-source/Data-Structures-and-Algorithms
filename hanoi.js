//n---size,s---starting,a---middle or auxiliary,d---destination
function Hanoi(n,s,a,d){
    if(n==1){
        console.log(`from ${s} to ${d}`);
        return;
    }else{
        Hanoi(n-1,s,d,a);
        console.log(`from ${s} to ${d}`);
        Hanoi(n-1,a,s,d);
        return;
    }
}
Hanoi(3,'s','a','d')