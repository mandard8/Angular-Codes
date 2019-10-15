function sum(mA, mB)
{
    var result = [];
    result = new Array( mA.length );
    for( var i=0; i<result.length; i++){
        result[i] = new Array( mA[i].length );
        for( var j=0; j<result[i].length; j++){
            result[i][j] = mA[i][j] + mB[i][j]
        }
    }

    // sum(3,5);

    // console.log(result);
}