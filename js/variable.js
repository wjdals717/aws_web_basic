window.onload = () => {
    main();
}

function main() {
    var a = 10;     //변수(사용X)
    let b = 20;     //변수
    const c = 30;   //상수

    console.log(a);
    console.log(b);
    console.log(c);

    var a = 40;
    console.log(a);
    b = 50;
    console.log(b);
    // c = 60;
    // console.log(c);

    let name = "변정민";
    let age = 30;
    let score = 80.5;
    let status = true;

    console.log("이름" + name + " - type(" + typeof(name) + ")");
    console.log("나이" + age + " - type(" + typeof(name) + ")");
    console.log("성적" + score + " - type(" + typeof(name) + ")");
    console.log("상태" + status + " - type(" + typeof(name) + ")");

    console.log("10" == 10);    //값만 비교
    console.log("10" === 10);   //값 + 자료형 비교
    console.log("10" != 10);    //값만 비교
    console.log("10" !== 10);   //값 + 자료형 비교

    let count;  //undefined : 변수 선언은 되었지만 초기화가 되지 않아 자료형이 결정되지 않으면 undefined;
    console.log(count);
    let count2 = null;
    console.log(count2);

    if(count === undefined || count === null || count === 0 || count === ""){//typeof(count) == undefined
        console.log(true);
    }

    count = "";

    //자바스크립트는 값이 undefined, null, 0, ""이면 false의 결과를 반환한다.
    if(!count){
        console.log("값이 없음");
    }
    if(!!count){ // 이 연산을 통해 변수가 boolean 자료형으로 변함
        console.log("값이 있음");
    }
}