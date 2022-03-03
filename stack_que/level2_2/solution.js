function solution(priorities, location) {
    let max       = Math.max(...priorities); //우선순위 최댓값
    let documents = {}; //dictionary
    let answer    = 0;  //출력된 문서 수 
    
    for (let i in priorities) {
        documents[i] = priorities[i]
    }
    
    while (documents[location] !== 0) {
        for (const key of Object.keys(documents)) {
            if (documents[key] >= max) {
                console.log(max)
                documents[key] = 0;
                answer++;
                if (key === location+'') break;
                
                max = Math.max(...Object.values(documents));
               
                console.log("change max :  "+ max)
            } 
        }
    }

    return answer;
}