//못 풀어서 답안 참고했던 문제

function solution(numbers) {
    var answer = new Set(); //중복제거
    
    function setDenials (arr, str) {
        if (arr.length) {
            for (let i in arr) {
                let tmp = [...arr];
                tmp.splice(i,1);
                setDenials(tmp, str + arr[i]);
            }
        }

        if (str > 0) answer.add(Number(str));
    }
    
    setDenials([...numbers], '')
    
    return [...answer].filter((val) => {
        for(let i=2; i <= Math.sqrt(val); i++) {
            if (parseInt(val) % i == 0) return false;
        }
        
        return ![0, 1].includes(parseInt(val));
    }).length;
}