//전역변수
let filterArray={}

//함수 선언
//필터 함수: filterArray에 필터 정보 저장
function filter(){
    //전역변수 초기화
    filterArray={}
    //id = filterN 에서 N:1~6
    let filterLength=6
    for(let i=0; i<=filterLength-1; i++){
        let inputCheck = document.querySelector(`#filter${i+1}`).value
        //name
        if(i+1==1){
            filterArray.name=inputCheck
            //입력값 없으면 name:' '으로 저장
        }
        //type
        else if(i+1==2){
            filterArray.type=inputCheck
        }
        //gender
        else if(i+1==3){
            filterArray.gender=inputCheck
        }
        //age
        else if(i+1==4){
            filterArray.age=inputCheck
        }
        //si
        else if(i+1==5){
            filterArray.si=inputCheck
        }
        //gu,dong
        else if(i+1==6){
            filterArray.gu=inputCheck
        }
    }
    console.log(filterArray)
}

//기본 출력 함수
function petInfoShow(){
    //필터 값 확인
    filter()
    let filterLength=6 //filterArray의 속성 개수
    let filterPetInfoList=[] //filter에 걸러진 객체 배열
    for(let i=0; i<=petInfo.length-1; i++){
        let filterPetInfo={}
        //이름
        if(filterArray.name != ''){

        }
        if(filterArray.type !=' '){

        }
        if(filterArray.gender !=' '){
            
        }
        if(filterArray.age !=' '){
            
        }
    }
    let html=''
    for(let i=0; i<=petInfo.length-1; i++){
        //새로운행 생성
        if((i+1)%4==1){
            //1번재일때
            if(i+1==1){
                html+=`<div class ="row">`
            }
            //1번째아닐때 기존행 닫고 새로운행
            else{
                html+=`</div><div class ="row">`
            }
        }
        //type(강아지:1/고양이:2)
        let petType=''
        if(petInfo[i].tcode==1){
            petType = '강아지'
        }
        else{
            petType = '고양이'
        }
        //gender(여:true/남:flase)
        let gender=''
        if(petInfo[i].pgender==true){
            gender = '여'
        }
        else{
            gender = '남'
        }
        //지역
        let area=''
        //시이름 찾기
        for(let j=0;j<=siList.length-1;j++){
            if(petInfo[i].scode==siList[j].scode){
                area = siList[j].siName
                break
            }
        }
        //동/구 이름찾기
        for(let j=0;j<=dongList.length-1;j++){
            if(petInfo[i].dcode==dongList[j].dcode){
                //dcode:0 '구 없음'이 아니면 구이름 추가
                if(dongList[j].dcode=!0){
                    area+=' '+dongList[j].dongName
                }
            }
        }
        html+=`<div class = "box">
                        <img src="./img/pet${i+1}.png">
                        <!--petInfo-->
                        <div>
                            <div class="petBoxTitle">
                                <div class = "name">${petInfo[i].pname}</div>
                                <div class = "petTypeBox">${petType}</div>
                            </div>
                            <div class="petComment">
                                ${petInfo[i].page}살 ${gender}아<br/>${area}
                            </div>
                        </div><!--petInfo end-->
                    </div>`
    }//for문 end

    //html 출력
    document.querySelector('#pets').innerHTML=html
}

//구/동 출력 함수
function guDongShow(){
    //시코드 저장
    let si = document.querySelector('#filter5').value
    //비우기(전 선택 지우기)
    //시흥이면 '구없음'만 표시
    if(si==41390){
        document.querySelector('#filter6').innerHTML=''
    }
    //시흥이 아니면 선택지1번에 '선택지없음'추가
    else{
        document.querySelector('#filter6').innerHTML=`<option value=''>선택없음</option>`
    }
    let html =''
    //console.log(si)
    for(let i=0; i<=dongList.length-1;i++){
        //서울
        if(si==11000){
                if(dongList[i].dcode<12000&&11000<=dongList[i].dcode){
                    html+=`<option value=${dongList[i].dcode}>${dongList[i].dongName}</option>`
                }
        }
        //인천
        else if(si==23000){
            if(dongList[i].dcode<24000&&23000<=dongList[i].dcode){
                html+=`<option value=${dongList[i].dcode}>${dongList[i].dongName}</option>`
            }
        }
        //안양
        else if(si==41170){
            if(dongList[i].dcode==41171||dongList[i].dcode==41173){
                html+=`<option value=${dongList[i].dcode}>${dongList[i].dongName}</option>`
            }
        }
        //시흥
        else if(si==41390){
            if(dongList[i].dcode==0){
                html+=`<option value=${dongList[i].dcode}>${dongList[i].dongName}</option>`
            }
        }
    }
    //console.log(html)
    document.querySelector('#filter6').innerHTML+=html
    return
}

//함수실행
petInfoShow()