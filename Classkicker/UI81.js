async function checkCode() {
    console.log('key has been pressed')
    var ClassCode = document.getElementsByClassName('ClassCode');
    console.log(ClassCode[1].value)




    if (ClassCode[1].value.length == 6) {
        //Check if class code exists:
        var ClassCode = document.getElementsByClassName('ClassCode')[1];
        const resp = await fetch("https://services.classkick.com/v1/users/login/anonymous-student", {
            "body": "{\"class_code\":\""+ ClassCode.value +"\",\"name\":\"asd\"}",
            "method": "POST",
        })
        
        if (resp.status == 404) {
            document.getElementsByClassName('Invalid')[0].style.visibility = "visible";


        }
        
        if (resp.status == 200) {
            if (document.getElementById('botContainer').style.visibility=="hidden") {
                document.getElementById('botContainer').style.visibility="visible";
                document.getElementById('botContainer').style.position="unset";
            }
        }

    }

    else{
        document.getElementsByClassName('Invalid')[0].style.visibility = "hidden";
        document.getElementById('botContainer').style.visibility= "hidden";
        document.getElementById('botContainer').style.position="absolute";
    }
}

async function checkPageFocus() {
    let body = document.querySelector('body');
  
    var ClassCode = document.getElementsByClassName('ClassCode');
    console.log(ClassCode[1].value)




    if (ClassCode[1].value.length == 6) {
        //Check if class code exists:
        var ClassCode = document.getElementsByClassName('ClassCode')[1];

    }


    if (document.hasFocus()) {
        var ClassCode = document.getElementsByClassName('ClassCode');
        if (document.activeElement == ClassCode[1]) {
            ClassCode[0].style.color ="#98D64A";
        } 

        else {
            var ClassCode = document.getElementsByClassName('ClassCode');
            ClassCode[0].style.color ="#5b5c5e";
        }
    }


    
}

setInterval(checkPageFocus, 100);