// 입양 신청 목록
let formList = [
    {
        fcode: 1,
        fname: "권유린",
        fnumber: "01012341234",
        ffamily: 4,
        fexp: false,
        pcode: 6,
        shcode: 4,
        freason: "고양이를 입양하고 싶어서",
        acode: true
    }
];

        // 신청하기 버튼을 활성화
        document.querySelector(".submitButton").addEventListener("click", function() {
            let fnumber = document.querySelector("#fnumber").value
            let fname = document.querySelector("#fname").value
            let ffamily = document.querySelector("#ffamily").value
            let pcode = document.querySelector("#pcode").value
            let shcode = document.querySelector("#shcode").value
            let freason = document.querySelector("#freason").value
            let acode = document.querySelector("#acode").value
            let fexpYes = document.querySelector("#fexpYes").value
            let fexpNo = document.querySelector("#fexpNo").value
            let fexpCheck = document.querySelector("input[name='fexp']:checked");


        // 여부 검사
        if(fname == ""){
            alert("이름을 입력해주세요.")
            return;
        }

           if(fnumber == ""){
            alert("연락처 입력해주세요.")
            return;
        }

           if(ffamily == ""){
            alert("가족 구성 인원을 입력해주세요.")
            return;
        }

        if (fexpCheck == null) {
            alert("반려동물 경험을 선택해주세요.");
            return;
            }
    

           if(pcode == ""){
            alert("입양을 원하는 아이의 코드를 입력해주세요.")
            return;
        }

           if(shcode == ""){
            alert("보호소 코드를 입력해주세요.")
            return;
        }

           if(freason == ""){
            alert("신청사유를 입력해주세요.")
            return;
        }

           if(acode == false){
            alert("개인정보 수집 및 이용에 동의해주세요.")
            return;
        }

    //객체만들기 
    let form = {
    fname: fname,
    fnumber: fnumber,
    ffamily: Number(ffamily),
    fexpYes: fexpYes,
    fexpNo : fexpNo,
    pcode: Number(pcode),
    shcode: Number(shcode),
    freason: freason,
    acode: acode
};
    
    
      // 신청 목록에 추가
    formList.push(form);
    console.log(formList);
   })
