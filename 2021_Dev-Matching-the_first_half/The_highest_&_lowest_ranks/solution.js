function solution(lottos, win_nums) {
  let answer = [];
  let rank = [6, 6, 5, 4, 3, 2, 1];
  let max = 0;
  let min = lottos.filter((lotto) => {
    if (lotto === 0) max++;
    return win_nums.includes(lotto);
  }).length;

  answer[0] = rank[max + min];
  answer[1] = rank[min];

  return answer;
}
