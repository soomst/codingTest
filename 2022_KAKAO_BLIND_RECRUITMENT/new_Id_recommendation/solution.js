function solution(new_id) {
    var answer = '';
    
    answer = new_id.toLowerCase()
        .replace(/[^\w-_.]/g, '') // 2
        .replace(/[.]+/g, '.')  //3
        .replace(/^[.]/g, '')   //4  
        .replace(/^$/, 'a') // 5
        .slice(0, 15).replace(/\.$/, ''); // 6
    
    return answer.length <= 2 ? answer.padEnd(3, answer.charAt(answer.length-1)) : answer
}