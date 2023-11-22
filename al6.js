function solution(A, B) {
    let answer = 0;
    let [i, j] = [0, 0];
    // 둘다 내림차순
    A.sort((a,b)=>(b-a));
    B.sort((a,b)=>(b-a));
    // 10 5 3 1 / 8 6 2 2
    while(i < A.length){
        if(A[i] >= B[j]){
            i+=1;
            continue;
        }
        answer+=1;
        i+=1;
        j+=1;
    }
    return answer;
}