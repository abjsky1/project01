// 1. 동물 정보
const petInfo = [
    {
        pcode: 1,
        pname: "보리",
        pgender: true,
        pkg: 15,
        page: 1,
        pimg: "###",
        ppersonality: "사나움",
        pjoong: true,
        pyeah: true,
        pdate: "2026-03-01",
        pshelter: 1,
        pcomment: "보리는 구조 당시 몸과 마음이 많이 다친 상태였습니다.",
        scode: 1,
        dcode: 31,
        tcode: 1
    },
    {
        pcode: 2,
        pname: "쌀이",
        pgender: true,
        pkg: 25,
        page: 4,
        pimg: "###",
        ppersonality: "귀여움",
        pjoong: false,
        pyeah: false,
        pdate: "2024-10-10",
        pshelter: 5,
        pcomment: "조금 예민한 성격입니다.",
        scode: 2,
        dcode: 12,
        tcode: 1
    },
    {
        pcode: 3,
        pname: "코코",
        pgender: false,
        pkg: 12,
        page: 12,
        pimg: "###",
        ppersonality: "온순함",
        pjoong: true,
        pyeah: false,
        pdate: "2020-08-27",
        pshelter: 1,
        pcomment: "다른 강아지들과 친하게 지내는 순한 아이입니다.",
        scode: 3,
        dcode: 26,
        tcode: 2
    },
    {
        pcode: 4,
        pname: "망고",
        pgender: false,
        pkg: 11,
        page: 4,
        pimg: "###",
        ppersonality: "착함",
        pjoong: false,
        pyeah: true,
        pdate: "2013-06-30",
        pshelter: 2,
        pcomment: "사람을 좋아하고 활발한 아이입니다.",
        scode: 4,
        dcode: 14,
        tcode: 1
    },
    {
        pcode: 5,
        pname: "수박",
        pgender: true,
        pkg: 14,
        page: 11,
        pimg: "###",
        ppersonality: "똑똑함",
        pjoong: true,
        pyeah: true,
        pdate: "2021-04-05",
        pshelter: 7,
        pcomment: "산책을 좋아하고 사람을 잘 따르는 아이입니다.",
        scode: 1,
        dcode: 27,
        tcode: 2
    },
    {
        pcode: 6,
        pname: "나비",
        pgender: false,
        pkg: 7,
        page: 8,
        pimg: "###",
        ppersonality: "활발함",
        pjoong: true,
        pyeah: true,
        pdate: "2025-12-11",
        pshelter: 8,
        pcomment: "간식을 좋아하는 아이입니다.",
        scode: 2,
        dcode: 63,
        tcode: 2
    }
];


// ========================================
// 2. 보호소 정보
// ========================================

const shelterList = [
    { shcode: 1, shname: "성결보호소" },
    { shcode: 2, shname: "유린보호소" },
    { shcode: 3, shname: "병준보호소" },
    { shcode: 4, shname: "훈석보호소" },
    { shcode: 5, shname: "소연보호소" },
    { shcode: 6, shname: "시흥보호소" },
    { shcode: 7, shname: "안양보호소" },
    { shcode: 8, shname: "서울보호소" }
];




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
            let fnumber = document.querySelector('[name="fnumber"]').value;
            let fname = document.querySelector('[name="fname"]').value;
            let ffamily = document.querySelector('[name="ffamily"]').value;
            let pcode = document.querySelector('[name="pcode"]').value;
            let shcode = document.querySelector('[name="shcode"]').value;
            let freason = document.querySelector('[name="freason"]').value;
            let acode = document.querySelector('[name="acode"]').checked;
            let fexpCheck = document.querySelector('input[name="fexp"]:checked');



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


            if (Number(ffamily) < 1) {
            alert("가구 인원은 1명 이상 입력해주세요.");
            return;
        }

            if (fexpCheck == null) {
            alert("반려동물 경험을 선택해주세요.");
            return;
            }
    

           if(pcode == ""){
            alert("입양을 원하는 아이를 입력해주세요.")
            return;
        }

        for (let i = 0; i < petInfo.length; i++) {
        if (petInfo[i].pname == pcode) {
        pcode = petInfo[i].pcode;
        break;}
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
