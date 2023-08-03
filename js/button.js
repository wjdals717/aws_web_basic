const plus = () => {
    const resultObj = document.querySelector(".result");    //result 객체의 주소를 들고 옴
    let oldNumber = parseInt(resultObj.innerHTML);          //태그 안에 들어있는 text를 들고와서 Int로 변환

    resultObj.innerHTML = oldNumber + 1;
}

const minus = () => {
    const resultObj = document.querySelector(".result");
    let oldNumber = parseInt(resultObj.innerHTML);

    resultObj.innerHTML = oldNumber - 1;
}