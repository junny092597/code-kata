//사전에 알파벳 모음 'A', 'E', 'I', 'O', 'U'만을 사용하여 만들 수 있는, 길이 5 이하의 모든 단어가 수록되어 있습니다. 사전에서 첫 번째 단어는 "A"이고, 그다음은 "AA"이며, 마지막 단어는 "UUUUU"입니다.

//단어 하나 word가 매개변수로 주어질 때, 이 단어가 사전에서 몇 번째 단어인지 return 하도록 solution 함수를 완성해주세요.

function solution(word) {
    const stack1 = ['A','E','I','O','U'],stack2=[],stack3 = [],stack4 = [],stack5 = []

    stack1.forEach(str=>{
        for(let i=0;i<=4;i++){
            stack2.push(str.concat(stack1[i]))
        }
    })

    stack2.forEach(str=>{
        for(let i=0;i<=4;i++){
            stack3.push(str.concat(stack1[i]))
        }
    })

    stack3.forEach(str=>{
        for(let i=0;i<=4;i++){
            stack4.push(str.concat(stack1[i]))
        }
    })

    stack4.forEach(str=>{
        for(let i=0;i<=4;i++){
            stack5.push(str.concat(stack1[i]))
        }
    })

    const words = [...stack1,...stack2,...stack3,...stack4,...stack5]

    words.sort()
    const answer = words.indexOf(word) + 1
    return answer
}

console.log(solution('AEIU'));
