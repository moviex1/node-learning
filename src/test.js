const f = (l1, l2) =>{
    let arr1 = l1.reverse().join('');
    let arr2 = l2.reverse().join('');
    const answer = [];
    const result = '' + (parseInt(arr1, 10) + parseInt(arr2,10))
    for(let i =0; i < result.length; i++ ){
       answer.push(+result[i])
    }
    return answer.reverse()

}

console.log(f([1,3,2], [4,2,5]))
