var  i, flag=0, no;
no = 56;
for (i=2;i<= no/2;i++)
{
    if (no%i==0)
{
    flag=1;
    break;
}
}
if(flag==0)
{
    console.log(" the inputed number is prime "+ no );
}
else{
    console.log(" the inputed number is not prime "+ no );
}