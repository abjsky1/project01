//링크 가져오기
function petLink(){
    let url=new URLSearchParams(location.search)
    let pcode = url.get('pcode')
    for(let i=0; i<=petInfoList.length-1; i++){
        if(petInfoList[i].pcode == pcode){
            let img = petInfoList[i].pimg
            let type = ''
            petInfoList[i].tcode == 1? type="강아지":type="고양이"
            let name = petInfoList[i].pname
            let age = petInfoList[i].page
            let gender=''
            petInfoList[i].pgender == 1? gender="여":gender="남" 
            let weight = petInfoList[i].pkg
            let personality = petInfoList[i].ppersonality
            let joong
            petInfoList[i].pjoong == 1? joong="완료":joong="전"
            let yeah
            petInfoList[i].pyeah == 1? yeah="완료":yeah="전"
            let date = petInfoList[i].pdate
            let shelterFind = petInfoList[i].pshelter
            for(let j=0; j<=shelterList.length-1; j++){
                if(shelterFind == shelterList[j].shcode){
                    let shelter = shelterList[j].shname
                }
            }
        }
    }
    //출력
    let html = `<div class="전체">
                    <div class="상단">
                        <div id="강아지이미지박스">
                            <img id="강아지이미지" src=${img}> 
                        </div>
                    </div>
                    <!--pet 정보-->
                    <div class="상단2">
                        <div class="강아지">${type}</div>
                        <div class="보리">${name}</div>
                        <div class="펫의정보">${age}살 · ${gender}아 · ${weight}kg</div>
                    </div>
                    <div>
                        <table class="테이블">
                            <tbody>
                                <tr>
                                    <td> 성격 </td> <td> ${personality} </td> 
                                </tr>
                                <tr>
                                    <td> 건강상태 </td> <td> 중성화 "${joong}" · "예방접종 ${yeah}" </td>
                                </tr>
                                <tr>
                                    <td> 구조일 </td>  <td> ${date}  </td>
                                </tr>
                                    <td> 보호소 </td> <td> ${shelter} </td>
                                </tr>
                                <tr>
                                    <td> 위치 </td> <td> 서울 강남구 </td>
                                </tr>
                                <tr>
                                    <td> 기타 </td> <td><div id="기타내용">보리는 구조 당시 몸과 마음이 많이 다친 상태였기 때문에 가까이 다가가면 무서워 해요. 천천히 다가가 주세요.</div></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div id="교회캠프">
                        <div class="중간">
                            <div class="아이"> 아이에 대해 더 알려드릴게요! </div>
                            <div class="겁"> 보리는 구조 당시 겁이 많았지만 지금은 사람을 정말 좋아하고 활발한 아이로<br/>지냈답니다.따뜻한 가족이 생기면 세상 누구보다 행복해할 거예요</div>
                        </div>
                    </div>
                    <div class="하단"> 
                        <div class="입양버튼박스">
                            <button class="입양버튼">입양 신청하기</button>
                        </div>
                    </div>
                    <div class="좋아요버튼">
                        <button class="좋아요">🤍좋아요</button>
                    </div>
                </div>`
    }










// 링크 이동
// location.href='write.html'