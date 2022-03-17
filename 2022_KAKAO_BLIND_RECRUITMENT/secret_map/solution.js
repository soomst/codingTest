function solution(n, arr1, arr2) {
    const answer = [];

    for (let i=0; i<n; i++) {
        const final_map = []
        const map1 = Array.from(arr1[i].toString(2).padStart(n,0))
        const map2 = Array.from(arr2[i].toString(2).padStart(n,0))

        map1.map((val, idx) => {
            if (val === '1' || map2[idx] === '1') {
                final_map.push('#')
            } else {
                final_map.push(' ')
            }
        })

        answer.push(final_map.join(''))
    }

    return answer;
}