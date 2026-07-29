import { siList, dongList, petInfo } from './main.js'

//함수 선언
//기본 출력 함수
function petInfoShow(){
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
                area = siList[j].siname
                break
            }
        }
        //동/구 이름찾기
        for(let j=0;j<=dongList.length-1;j++){
            if(petInfo[i].dcode==dongList[j].dcode){
                area+=' '+dongList[j].dongName
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
    let si = document.querySelector(#filterSi).value
    for(let i=0; i<=dongList.length-1;i++){
        if(si=='서울시'){
                if(donLsit[i].dcode<12000&&1100<=donLsit[i].dcode)
            }
        }
    }
}

//함수실행
petInfoShow()