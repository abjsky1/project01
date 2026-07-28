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
];

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