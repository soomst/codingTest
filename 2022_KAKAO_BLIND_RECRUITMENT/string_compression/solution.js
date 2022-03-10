function solution(s) {
    let answer = 1000;
    
    if (s.length === 1) return 1;
    
    for (let i=1; i <= s.length/2; i++) {
        let before = ''
        let matchCnt = 0
        let compressStr = ''
        
        for (let j=0; j < s.length; j+=i) {
            let endPoint = (j+i) >= s.length
            let present  = s.slice(j, j + i)
            before       = before || present
            
            if (before === present) {
                matchCnt++
            } else {
                if (matchCnt > 1) {
                    compressStr += `${matchCnt}${before}`    
                } else {
                    compressStr += `${before}`    
                }
                matchCnt = 1
                before   = present
            }
            
            if (endPoint) {
                matchCnt = matchCnt > 1 ? matchCnt : ''
                compressStr += `${matchCnt}${before}`
            }
        }
        
        answer = answer > compressStr.length ? compressStr.length : answer
    } 
    
    return answer;
}