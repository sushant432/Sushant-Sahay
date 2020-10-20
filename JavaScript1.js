function FindPair(numofsocks,array)
{
    var counter=0;
    for(var i=0;i<array.length;i++)
    {
    var countValue = 1;
    for(var j=i+1;j<array.length;j++)
    {
    if(array[i]==array[j])
    {
       countValue++;
    }
    }
    if (countValue % 2 == 0)
    {
    counter++;
    }
    }
    return counter;
    
}
var result = FindPair(17,[1, 1, 2, 2, 3, 3, 4, 4, 4, 5, 5, 5 ,6, 6, 7, 7, 7])
alert(result);
