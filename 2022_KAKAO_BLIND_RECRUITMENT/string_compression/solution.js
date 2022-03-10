function solution(s) {
    let answer = 0;
    
    for (let i=1; i <= s.length/2; i++) {
        let before = ''
        let matchCnt = 0
        let compressStr = ''
        
        for (let j=0; j < s.length; j+=i) {
            let endPoint = (j+i) >= s.length
            let present  = endPoint ? s.substring(j, s.length) : s.substr(j, i)
            before       = before || present
            
            if (before === present) {
                matchCnt++
            } else {
                if (matchCnt > 1) {
                    compressStr = compressStr + matchCnt + '' + before    
                } else {
                    compressStr = compressStr + before    
                }
                matchCnt = 1
                before   = present
            }
            
            if (endPoint) {
                matchCnt = matchCnt > 1 ? matchCnt : ''
                compressStr = compressStr + matchCnt + '' + before
            }
        }
        
        answer = answer === 0 ? compressStr.length : answer > compressStr.length ? compressStr.length : answer 
    } 
    
    return s.length === 1 ? 1 : answer;
}