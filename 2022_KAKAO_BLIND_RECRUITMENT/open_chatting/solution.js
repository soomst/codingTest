function solution(record) {
    let chatting = []
    let answer = []
    let user = {}
    
    record.map(v => {
        let [action, id, name] = v.split('/ /g')
        
        if (action === 'Enter') chatting.push([id, '님이 들어왔습니다.'])
        if (action === 'Leave') chatting.push([id, '님이 나갔습니다.'])
        
        if (action !== 'Leave') user[id] = name
    })
    
    chatting.map(v => {
        answer.push(`${user[v[0]]}${v[1]}`)
    })
    
    return answer;
}