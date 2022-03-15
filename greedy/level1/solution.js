function solution(n, lost, reserve) {
    let answer = n-lost.length
            
    lost.sort()
    reserve.sort()
        
    //2벌인 학생이 도둑맞은 경우 - 남은 체육복이 하나이기에 다른 학생에게는 체육복을 빌려줄 수 없습니다.
    lost.map((std, idx) => { 
        if(reserve.includes(std)) {
            reserve = reserve.filter(v=>v!==std)
            lost = lost.filter(v=>v!==std)
            answer++
        }
    })
      
    lost.map((std) => {
        let idx1 = reserve.findIndex(res=> res === (std-1))
        let idx2 = reserve.findIndex(res=> res === (std+1))
        
        if (reserve[idx1] > 0) {
            reserve.splice(idx1,1)
            answer++
            return
        }
        
        if (reserve[idx2] > 0) {
            reserve.splice(idx2,1)
            answer++
            return
        }
    })
    
    return answer;
}