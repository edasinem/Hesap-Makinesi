var optDurum=false, opt="", sonuc=0;
var btnRakam=document.querySelectorAll(".btnRakam");
var gosterge=document.querySelector("#gosterge");
var btnOpt=document.querySelectorAll(".btnOpt");
var islem=document.querySelector("#islem");
var btnC=document.querySelector(".btnC");
var btnCE=document.querySelector(".btnCE");
var btnEsit=document.querySelector(".btnEsit");
btnRakam.forEach(function(element){
    element.onclick=function(e){
        if(gosterge.textContent=="0" || optDurum)
        gosterge.textContent="";
        gosterge.textContent+=this.textContent;
        optDurum=false;
    }
});
btnOpt.forEach(function(element){
    element.onclick=function(e){
        optDurum=true;
       var yeniOpt=this.textContent;
       islem.textContent=islem.textContent+" "+gosterge.textContent+" "+yeniOpt;
        switch(opt)
        {
            case "+":gosterge.textContent=(sonuc + Number(gosterge.textContent)); break;
            case "-":gosterge.textContent=(sonuc - Number(gosterge.textContent)); break;
            case "*":gosterge.textContent=(sonuc * Number(gosterge.textContent)); break;
            case "/":gosterge.textContent=(sonuc / Number(gosterge.textContent)); break;
            default:break;
        }
        sonuc=Number(gosterge.textContent);
        opt=yeniOpt;       
    }
   });

btnC.onclick=function(e){
    gosterge.textContent="0";
    var sil="Sayınız silindi.";
        alert(sil);
}

btnCE.onclick=function(e){
    gosterge.textContent="0";
    islem.textContent="";
    sonuc=0;
    opt="";
    var sil="Sayınız silindi.";
        alert(sil);
}

btnEsit.onclick=function(e)
{
    islem.textContent="";
    optDurum=true;
    switch(opt)
        {
            case "+":gosterge.textContent=(sonuc + Number(gosterge.textContent)); break;
            case "-":gosterge.textContent=(sonuc - Number(gosterge.textContent)); break;
            case "*":gosterge.textContent=(sonuc * Number(gosterge.textContent)); break;
            case "/":gosterge.textContent=(sonuc / Number(gosterge.textContent)); break;
            default:break;
        }
        sonuc=Number(gosterge.textContent);
        gosterge.textContent=sonuc;
        sonuc=0;
        opt="";
        var esittir="Sonuç Bulundu.";
        alert(esittir);
}
