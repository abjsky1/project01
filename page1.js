

function 아이들보러가기버튼(){
    location.href = "page2.html"
}


let html = ''


for(i=0 ; i<=3 ; i++){

    let gender = ''

    if(petInfo[i].pgender == 1){gender = '여'}
    else{gender = '남'}

    let type = ''

    for(a=0 ; a<=1 ; a++){

        if( petInfo[i].tcode == typeList[a].tcode){
            type = typeList[a].tname
        }
    }
    
    html += `<a class="목록리스트링크" href="page3.html?pcode=${petInfo[i].pcode}">
                <div class="목록리스트박스">

                    <div><img src="${petInfo[i].pimg}"></div>
                    <div class="펫이름">${petInfo[i].pname}</div>
                    <div class="펫정보">${type} · ${petInfo[i].page}살 · ${gender}아</div>

                </div>
            </a>`
    
}

document.querySelector('#메인목록리스트들').innerHTML = html


console.log(petInfo[0].pimg) // = ./img/pet1.png
// petInfo[0].pimg

let reviewCardCount = 1

function reviewCard(){
    let html = ''
    let html1 = `<div id="입양후기내용">
                        <div>아이를 만나고 제 삶이 더 따뜻해졌어요.</div>
                        <div>함께하는 매일이 행복입니다!</div>
                        <div id="입양후기내용하단">-입양자 안OO님-</div>
                    </div>

                    <div id="입양후기이미지"></div>`
                    
    let html2 = `<div id="입양후기내용">
                        <div>별이를 데려오고 집안에 활기가 돌아요.</div>
                        <div>사지말고 입양하세요!</div>
                        <div id="입양후기내용하단">-입양자 황OO님-</div>
                    </div>

                    <div id="입양후기이미지"></div>`

    let html3 = `<div id="입양후기내용">
                        <div>좋은 기회로 새 가족이 생겨 기뻐요.</div>
                        <div>파우미를 통해 예쁜 아이들을 만나셨으면 좋겠습니다.</div>
                        <div id="입양후기내용하단">-입양자 권OO님-</div>
                    </div>

                    <div id="입양후기이미지"></div>`

    if (reviewCardCount==1)
        html = html1
    else if(reviewCardCount==2)
        html = html2
    else
        html = html3


    document.querySelector('#입양후기내용박스').innerHTML= html

    reviewCardCount++
    if(3<reviewCardCount)
        reviewCardCount=1
}

timeInter = setInterval(reviewCard,3000)