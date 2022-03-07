// 다른 사람 문제풀이

function solution(id_list, report, k) {
    let reports = [...new Set(report)].map(a=>{return a.split(' ')}); //중복값 제거
    
    let counts = new Map(); //신고받은 횟수 카운트
    for (const bad of reports) {
        counts.set(bad[1],counts.get(bad[1])+1||1)
    }
    
    let good = new Map(); //신고자 카운트
    for (const report of reports) {
        if (counts.get(report[1]) >= k) {
            good.set(report[0], good.get(report[0])+1||1)
        }
    }
    
    let answer = id_list.map(a => good.get(a)||0)
    
    return answer;
}