function solution(N, stages) {
    //stages : 게임을 이용하는 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 배열
    //         N + 1 은 마지막 스테이지(N 번째 스테이지) 까지 클리어 한 사용자를 나타낸다.
    //실패율 : 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
    //실패율이 같은 스테이지가 있다면 작은 번호의 스테이지가 먼저 오도록 하면 된다.

    const answer = [];
    const percent = [];

    for (let stage =1; stage<=N; stage++){
        let c_cnt = 0
        let s_cnt = 0

        stages.filter(v=>{
            if (v >= Number(stage)) s_cnt++
            if (Number(stage) === v) c_cnt++
        })

        if (!s_cnt) s_cnt = 1

        percent.push(c_cnt/s_cnt)
    }

    for (let stage =1; stage<=N; stage++) {
        let max = Math.max(...percent)
        answer.push(percent.indexOf(max) + 1) 
        percent[percent.indexOf(max)] = -1000
    }


    return answer;
}