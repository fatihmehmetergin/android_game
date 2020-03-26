let taslar = ["b0","b1","b2","b3","b4","b5","b6","b7","b8"]



//tabloya dolduruyor
function yerlestir(rndList){
    var count = 0;
    for(i=0;i<rndList.length-1;i++){
        if(rndList[i] == 0){
            continue;
        }
        for(j=i+1;j<rndList.length;j++){
            if(rndList[j] == 0){
                continue;
            }else if(rndList[i]>rndList[j]){
                count++;
            }
        }
        
    }
    
    if(count%2 == 0){
        return(true);
    }else{
        return(false);
    }
}

function randomTaslar()
{
    renkKaristir();
    var rndList = []
    while(true){
        rndList = []
        while(rndList.length < 9){
            var randomnumber = Math.ceil(Math.random()*9)-1
            //random number aynı gelmesini engelliyor indexOf
            if(rndList.indexOf(randomnumber) > -1) continue;
            rndList[rndList.length] = randomnumber;
        }
        if(yerlestir(rndList)){
            break;
        }
    }
    for (i = 0; i < taslar.length; i++) 
    {
        if(rndList[i] == 0)
        {
            //O olan taşı boş bırakıyoruz
            val = " "
        }else{
            val = rndList[i].toString()
        }
        document.getElementById(taslar[i]).firstChild.data = val
    }
}

////////////////////taşları karma 

function tasBul(val){
    for (i = 0; i < taslar.length; i++) { 
            if(document.getElementById(taslar[i]).firstChild.data == val){
                return(taslar[i])
            }
        }
}

function degisme(id, bosTasId){
    let yakinlar = []
    if([2,5,8].includes(parseInt(bosTasId[1]))){
        yakinlar = [+3,-3,-1]
    }else if([0,3,6].includes(parseInt(bosTasId[1]))){
        yakinlar = [+3,+1,-3]
    }else{
        yakinlar = [+3,+1,-3,-1]
    }
    for(i = 0; i < taslar.length; i++){
        if(parseInt(bosTasId[1])+parseInt(yakinlar[i]) == parseInt(id[1])){
            return(true);
        }
    }
    return(false)
}


function pushed(id)
{
    var btn = document.getElementById(id);
    if (btn.firstChild.data!=" "){
        bosTasId = tasBul(" ") 
        if(degisme(id, bosTasId) == false) return;
        document.getElementById(bosTasId).firstChild.data = btn.firstChild.data;
        btn.firstChild.data = " "
    }
    kontrol();
    renkKontrol();
}

function kontrol(){
    let element 
    for (let i = 0; i < 9; i++) {
        element= document.getElementById("b"+i);
        if(element.innerText == (i+1).toString()) 
        {
            element.style.color="red";
        }else {
            element.style.color="blue";
        }
        
    }
}

function renkKaristir(){
    let element 
    for (let i = 0; i < 9; i++) {
        element= document.getElementById("b"+i);
        if(element.innerText == (i+1).toString()) 
        {
            element.style.color="blue";
        }
       
    }
}

function renkKontrol()
{
    if(document.getElementById("b0").style.color=="red"&&
       document.getElementById("b1").style.color=="red"&&
       document.getElementById("b2").style.color=="red"&&
       document.getElementById("b3").style.color=="red"&&
       document.getElementById("b4").style.color=="red"&&
       document.getElementById("b5").style.color=="red"&&
       document.getElementById("b6").style.color=="red"&&
       document.getElementById("b7").style.color=="red")
       {
        alert("Tebrikler,Oyunu KAZANDINIZ");
       }

}
function alertMesaj()
{
    alert("Tebrikler,Oyunu KAZANDINIZ");
}
