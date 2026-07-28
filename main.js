//동물정보
const petInfo = [
  {
    pcode: 1,
    pname: "보리",
    pgender: true,
    pkg: 15,
    page: 1,
    pimg: "###",
    ppersonality: "사나움",
    pjoong: true,  // 1: true (함)
    pyeah: true,   // 1: true (함)
    pdate: "2026-03-01",
    pshelter: 1,
    pcomment: "보리는 구조 당시 몸과 마음이 많이 다친 상태였기 때문에 가까이 다가가면 무서워 해요. 천천히 다가가 주세요.",
    scode: 1,
    dcode: 31,
    tcode: 1       // 1: dog
  },
  {
    pcode: 2,
    pname: "쌀이",
    pgender: true,
    pkg: 25,
    page: 4,
    pimg: "###",
    ppersonality: "귀여움",
    pjoong: false, // 0: false (안 함)
    pyeah: false,  // 0: false (안 함)
    pdate: "2024-10-10",
    pshelter: 5,
    pcomment: "조금 예민한 성격입니다. 이 아이 혼자 기르실 수 있는 분이시면 좋겠습니다.",
    scode: 2,
    dcode: 12,
    tcode: 1       // 1: dog
  },
  {
    pcode: 3,
    pname: "코코",
    pgender: false,
    pkg: 12,
    page: 12,
    pimg: "###",
    ppersonality: "온순함",
    pjoong: true,  // 1: true (함)
    pyeah: false,  // 0: false (안 함)
    pdate: "2020-08-27",
    pshelter: 1,
    pcomment: "다른 강아지들과도 친하게 지내고 순한 아이 입니다. 엄마는 비숑 아빠는 푸들입니다.",
    scode: 3,
    dcode: 26,
    tcode: 2       // 2: cat
  },
  {
    pcode: 4,
    pname: "망고",
    pgender: false,
    pkg: 11,
    page: 4,
    pimg: "###",
    ppersonality: "착함",
    pjoong: false, // 0: false (안 함)
    pyeah: true,   // 1: true (함)
    pdate: "2013-06-30",
    pshelter: 2,
    pcomment: "구조 당시 겁이 많았지만 지금은 사람을 정말 좋아하고 활발한 아이입니다.",
    scode: 4,
    dcode: 14,
    tcode: 1       // 1: dog
  },
  {
    pcode: 5,
    pname: "수박",
    pgender: true,
    pkg: 14,
    page: 11,
    pimg: "###",
    ppersonality: "똑똑함",
    pjoong: true,  // 1: true (함)
    pyeah: true,   // 1: true (함)
    pdate: "2021-04-05",
    pshelter: 7,
    pcomment: "산책을 좋아하고 사람을 잘 따르는 아이입니다.",
    scode: 1,
    dcode: 27,
    tcode: 2       // 2: cat
  },
  {
    pcode: 6,
    pname: "나비",
    pgender: false,
    pkg: 7,
    page: 8,
    pimg: "###",
    ppersonality: "활발함",
    pjoong: true,  // 1: true (함)
    pyeah: true,   // 1: true (함)
    pdate: "2025-12-11",
    pshelter: 8,
    pcomment: "간식을 좋아하는 아이입니다. 밥은 잘 먹지 않고 간식을 안 주면 물수도 있어요",
    scode: 2,
    dcode: 63,
    tcode: 2       // 2: cat
  }
];// 3 페이지


//보호소 리스트
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


// 신청서 리스트
const formList = [
    {
        fcode: 1,
        fname: "권유린",
        fnumber: "01012341234",
        ffamily: 4,
        fexp: false,                // true: 반려동물 경험 있음, false: 반려동물 경험 없음
        freason: "고양이를 입양하고 싶어서",
        acode: true,                // true: 개인정보 동의함, false: 개인정보 동의 안 함
        pcode: 6,
        scode: 4
    },

    {
        fcode: 2,
        fname: "황소연",
        fnumber: "01043214321",
        ffamily: 2,
        fexp: true,
        freason: "강아지를 키우고 싶어서",
        acode: true,
        pcode: 2,
        scode: 2
    },

    {
        fcode: 3,
        fname: "안훈석",
        fnumber: "01015613251",
        ffamily: 1,
        fexp: false,
        freason: "외롭습니다",
        acode: true,
        pcode: 3,
        scode: 1
    }
];

//동물 종류
const typeList = [
  {
    tcode: 1,
    tname: "강아지"
  },
  {
    tcode: 2,
    tname: "고양이"
  }
];

//시 리스트
const siList = [
  { scode: 11000, siName: "서울특별시" },
  { scode: 23000, siName: "인천직할시" },
  { scode: 41170, siName: "경기도 안양시" },
  { scode: 41390, siName: "경기도 시흥시" }
];

//구(동) 리스트
const dongList = [
  { dcode: 11110, dongName: "종로구" },
  { dcode: 11140, dongName: "중구" },
  { dcode: 11170, dongName: "용산구" },
  { dcode: 11200, dongName: "성동구" },
  { dcode: 11215, dongName: "광진구" },
  { dcode: 11230, dongName: "동대문구" },
  { dcode: 11260, dongName: "중랑구" },
  { dcode: 11290, dongName: "성북구" },
  { dcode: 11305, dongName: "강북구" },
  { dcode: 11320, dongName: "도봉구" },
  { dcode: 11350, dongName: "노원구" },
  { dcode: 11380, dongName: "은평구" },
  { dcode: 11410, dongName: "서대문구" },
  { dcode: 11440, dongName: "마포구" },
  { dcode: 11470, dongName: "양천구" },
  { dcode: 11500, dongName: "강서구" },
  { dcode: 11530, dongName: "구로구" },
  { dcode: 11545, dongName: "금천구" },
  { dcode: 11560, dongName: "영등포구" },
  { dcode: 11590, dongName: "동작구" },
  { dcode: 11620, dongName: "관악구" },
  { dcode: 11650, dongName: "서초구" },
  { dcode: 11680, dongName: "강남구" },
  { dcode: 11710, dongName: "송파구" },
  { dcode: 11740, dongName: "강동구" },
  { dcode: 23110, dongName: "중구" },
  { dcode: 23140, dongName: "동구" },
  { dcode: 23170, dongName: "미추홀구" },
  { dcode: 23200, dongName: "남동구" },
  { dcode: 23230, dongName: "부평구" },
  { dcode: 23260, dongName: "서구" },
  { dcode: 41171, dongName: "만안구" },
  { dcode: 41173, dongName: "동안구" },
  { dcode: 0 , donNamd:"구 없음"}
];