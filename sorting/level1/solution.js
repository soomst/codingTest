function solution(array, commands) {
    var answer = [];
    
    commands.map((arr)=>{
        let newArr = [...array].slice(arr[0]-1, arr[1]).sort((x,y)=>(x-y))
        
        answer.push(newArr[arr[2]-1])
    })
    
    return answer;
}