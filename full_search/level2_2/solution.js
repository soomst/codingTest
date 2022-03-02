function solution(brown, yellow) {
    var answer = [];
    let carpet_cnt = brown + yellow + 0;
    let x, y = 0;
    
    
    if (Number.isInteger(Math.sqrt(carpet_cnt))) {
        //정사각형 인 경우
        answer = [Math.sqrt(carpet_cnt), Math.sqrt(carpet_cnt)]
    } else {
    	//직사각형 인 경우
        //xy = yellow
        //(x+2)(y+2) = brown
        //xy+2(x+y)+4 = brown
        //x+y = (brown-yellow-4)/2
        let yellowXY = yaksoo(yellow, (carpet_cnt-yellow-4)/2)
        
        if (yellowXY) {
            answer = yellowXY.map((x)=>(x+2))
            answer.sort((x,y)=>(y-x))
        }
    }
    
    return answer;
}

function yaksoo (num, sum) {
    for (let i = 1; i<=num; i++) {
        let restVal = num % i;
        let val     = num / i;
        
        if (restVal === 0 && i + val === sum) {
            return [i, val]
        }
    }
    
    return null
}