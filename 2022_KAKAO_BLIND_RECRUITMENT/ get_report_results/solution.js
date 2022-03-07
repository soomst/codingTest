function solution(id_list, report, k) {
    var answer = [];
    let reportObj = {}
    
    for (let i=0 ; i<id_list.length; i++) {
        answer[i] = 0
    }
    
    report.map(v=>{
        let user = v.split(' ')
        reportObj[user[1]] = reportObj[user[1]] || []
        
        if (reportObj[user[1]].findIndex(v=> v === user[0]) < 0 ) {
            reportObj[user[1]].push(user[0])    
        }
        
        reportObj[user[1]]['cnt'] = reportObj[user[1]].length
    })
    
    Object.keys(reportObj).map( key => {
        if (reportObj[key]['cnt'] >= k) {
            for (let i=0 ; i<id_list.length; i++) {
                 if (reportObj[key].findIndex(v=> v === id_list[i]) > -1) {
                    answer[i]++
                }
            }
        }
    })
    
    return answer;
}