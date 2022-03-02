function solution(answers) {
    var answer = [];
    
    const answer1 = [1, 2, 3, 4, 5]
    const answer2 = [2, 1, 2, 3, 2, 4, 2, 5]
    const answer3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    
    let score = [0,0,0]
    
    answers.map((val, idx) => {
        if (val === answer1[idx % answer1.length]) score[0]++;
        if (val === answer2[idx % answer2.length]) score[1]++;
        if (val === answer3[idx % answer3.length]) score[2]++;
    })
    
    let max = Math.max(score[0], score[1], score[2])
    
    if (score[0] === max) answer.push(1)
    if (score[1] === max) answer.push(2)
    if (score[2] === max) answer.push(3)
    
    return answer;
}