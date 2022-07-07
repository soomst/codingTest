// 다른 사람 문제풀이

function solution(participant, completion) {
  var dic = completion.reduce(
    (obj, t) => ((obj[t] = obj[t] ? obj[t] + 1 : 1), obj),
    {}
  );
  console.log(dic);
  return participant.find((t) => {
    if (dic[t]) dic[t] = dic[t] - 1;
    else return true;
  });
}
