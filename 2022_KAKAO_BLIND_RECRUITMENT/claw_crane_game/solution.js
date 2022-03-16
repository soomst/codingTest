function solution(board, moves) {
  let answer = 0;
  const box = []
  
  for (let i of moves) {
      for (let j=0; j<board.length; j++) {
          if (board[j][i-1] > 0) {
              if (box[box.length-1] === board[j][i-1]) {
                  box.pop()
                  answer += 2
              } else {
                  box.push(board[j][i-1])
              }
              
              board[j][i-1]=0
              
              break
          }
      }
  }
  
  return answer;
}