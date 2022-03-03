function solution(progresses, speeds) {
    let dueDate = [];
    let answer = [];
    
    progresses.map((val, idx) => {
        dueDate.push(Math.ceil((100 - val) / speeds[idx]))
    })
    
    let max = {prev : 0, dueDate : dueDate[0]}
    
    dueDate.map((val, idx) => {
        if (val > max.dueDate) {
            answer.push(idx - max.prev)

            max.dueDate = val
            max.prev    = idx
            
            if (idx + 1 === dueDate.length) {
                answer.push(1)
                
                return
            }
        }
        
         if (idx + 1 === dueDate.length) {
            answer.push(dueDate.length - max.prev)
        }
    })
    
    return answer;
}