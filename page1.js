

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