//링크 가져오기
function petLink(){
    let url=new URLSearchParams(location.search)
    let pcode = url.get('pcode')
    //console.log(pcode)

    let img=''
    let type =''
    let name=''
    let age=0
    let gender=''
    let weight=0
    let personality=''
    let joong=0
    let yeah=0
    let date=''
    let shelter=''
    let si=''
    let gu=''
    let comment=''
    //console.log("반복문 전")
    //petInfo 검증
    for(let i=0; i<=petInfo.length-1; i++){
        //console.log("반복문 후")
        //동일한 pcode 찾으면 
        if(petInfo[i].pcode == pcode){
            //이미지
            img = petInfo[i].pimg
            //console.log(img)
            //타입
            petInfo[i].tcode == 1? type="강아지":type="고양이"
            //이름
            name = petInfo[i].pname
            //나이
            age = petInfo[i].page
            //성별
            petInfo[i].pgender == 1? gender="여":gender="남" 
            //몸무게
            weight = petInfo[i].pkg
            //성격
            personality = petInfo[i].ppersonality
            //중성화
            petInfo[i].pjoong == 1? joong="완료":joong="전"
            //예방접종
            petInfo[i].pyeah == 1? yeah="완료":yeah="전"
            //구조일
            date = petInfo[i].pdate

            //보호소
            for(let j=0; j<=shelterList.length-1; j++){
                if(petInfo[i].shcode == shelterList[j].shcode){
                    shelter = shelterList[j].shname
                }
            }

            //시
            for(let j=0; j<=siList.length-1; j++){
                if(petInfo[i].scode==siList[j].scode){
                    si = siList[j].siName
                }
            }            
            //구
            for(let j=0; j<=dongList.length-1; j++){
                if(petInfo[i].dcode==dongList[j].dcode){
                    gu = dongList[j].dongName
                }
            }       
            //comment
            comment = petInfo[i].pcomment
        }

    }

    //출력
    let html = `<div class="전체">
                    <div class="상단">
                        <div id="강아지이미지박스">
                            <img id="강아지이미지" src="${img}"> 
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
                                <tr>
                                    <td> 보호소 </td> <td> ${shelter} </td>
                                
                                </tr>
                                <tr>
                                    <td> 위치 </td> <td> ${si} ${gu} </td>
                                </tr>
                                <tr>
                                    <td> 기타 </td> <td><div id="기타내용"> ${comment} </div></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div id="교회캠프">
                        <div class="중간">
                            <div class="아이"> 아이에 대해 더 알려드릴게요! </div>
                            <div class="겁"> ${comment} </div>
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

    console.log(html)
    document.querySelector('#petInfoBox').innerHTML=html
}


//함수실행
petLink();







// 링크 이동
// location.href='write.html'