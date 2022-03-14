function solution(orders, course) {
    const answer = []
    const maxNum = Array(10 + 1).fill(0);
    const FoodMaps = {};
       
    for (let i=0; i<11; ++i) FoodMaps[i] = {}
    
    for (let order of orders) {
        comb(Array.from(order).sort(), 0, '');
    }
    

    for (let len of course) {
        for (let menu of Object.keys(FoodMaps[len])) {
            if (maxNum[len] > 1 && FoodMaps[len][menu] === maxNum[len]) {
                answer.push(menu)
            }
        }
    }

    function comb(arr, pos, candi) {
        if (pos >= arr.length) {
            let len = candi.length;
            if (len >= 2) {
                let cnt = FoodMaps[len][candi] === undefined ? 1 : FoodMaps[len][candi] + 1
                FoodMaps[len][candi] = cnt;
                maxNum[len] = Math.max(maxNum[len], cnt);
            }
            return;
        }

        comb(arr, pos+1, `${candi}${arr[pos]}`)
        comb(arr, pos+1, candi);
    }

    return answer.sort();
}

//function solution(orders, course) {
//     const ordered = {};
//     const candidates = {};
//     const maxNum = Array(10 + 1).fill(0);
//     const createSet = (arr, start, len, foods) => {
//       if (len === 0) {
//         ordered[foods] = (ordered[foods] || 0) + 1;
//         if (ordered[foods] > 1) candidates[foods] = ordered[foods];
//         maxNum[foods.length] = Math.max(maxNum[foods.length], ordered[foods]);
//         return;
//       }
  
//       for (let i = start; i < arr.length; i++) {
//         createSet(arr, i + 1, len - 1, foods + arr[i]);
//       }
//     };
  
//     orders.forEach((od) => {
//       // arr.sort는 기본적으로 사전식 배열
//       const sorted = od.split('').sort();
//       // 주문한 음식을 사전순으로 배열해서 문자열을 만든다.
//       // course에 있는 길이만 만들면 된다.
//       course.forEach((len) => {
//         createSet(sorted, 0, len, '');
//       });
//     });
  
//     const launched = Object.keys(candidates).filter(
//       (food) => maxNum[food.length] === candidates[food]
//     );
  
//     return launched.sort();
//   }