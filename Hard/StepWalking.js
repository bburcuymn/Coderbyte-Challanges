function StepWalking(num){
// code goes here

//recursive

if(num==1){
    return 1; // just 1
}

if(num==2){
    return 2; // 1+1 or 2
}

// for num==3 -> 1+1+1 or 2+1 or 1+2 -> 3 (1+2)
// for num==4 -> 2+2 or 1+1+1+1 or 2+1+1 or 1+2+1 or 1+1+2 -> 5 (3+2)
// f(n) = f(n-2) + f(n-1)

return StepWalking(num-2) + StepWalking(num-1);

}

console.log(StepWalking(readline()));