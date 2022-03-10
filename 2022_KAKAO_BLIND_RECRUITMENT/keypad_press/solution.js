function solution(numbers, hand) {
  let answer = '';
  let handPosition = {R:'#', L:'*'}
  let keyPad = new Map()
  
  keyPad.set(1, [0,0])
  keyPad.set(2, [0,1])
  keyPad.set(3, [0,2])
  
  keyPad.set(4, [1,0])
  keyPad.set(5, [1,1])
  keyPad.set(6, [1,2])
  
  keyPad.set(7, [2,0])
  keyPad.set(8, [2,1])
  keyPad.set(9, [2,2])
  
  keyPad.set('*', [3,0])
  keyPad.set(0, [3,1])
  keyPad.set('#', [3,2])
  
  for (const num of numbers) {
      if ('1/4/7'.indexOf(num) > -1) {
          handPosition.L = num
          answer = answer + 'L'
      } else if ('3/6/9'.indexOf(num) > -1) {
          handPosition.R = num
          answer = answer + 'R'
      } else {
          let numP = keyPad.get(num)
          let rP   = keyPad.get(handPosition.R)
          let lP   = keyPad.get(handPosition.L)
          
          let rd = Math.abs(numP[0]-rP[0]) + Math.abs(numP[1]-rP[1])
          let ld = Math.abs(numP[0]-lP[0]) + Math.abs(numP[1]-lP[1])
          
          if (rd > ld) {
              handPosition.L = num
              answer = answer + 'L'
          } else if (rd < ld) {
              handPosition.R = num
              answer = answer + 'R'
          } else {
              if (hand.indexOf('r') > -1) {
                  handPosition.R = num
                  answer = answer + 'R' 
              } else {
                  handPosition.L = num
                  answer = answer + 'L' 
              }
          }
      }
  }
  
  return answer;
}