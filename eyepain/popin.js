
isDoing = false
document.querySelectorAll('h1').forEach(elem =>{

    elem.addEventListener("mouseover",function(){
        classname = "pop"
        if (!isDoing){
            isDoing = true
            
            //clean up past remnants
            document.querySelectorAll(`.${classname}`).forEach(element=>{
                element.outerHTML = element.innerHTML
            })
            
            h1 = elem //Its called h1 because im too lazy to replace my code 
            innerhtml = h1.innerHTML
            const length = innerhtml.length;
            i=0;
            const interval = setInterval(function(){
                if (i<length-1){
                    currentChar = innerhtml.slice(i,i+1)
                    h1.innerHTML = innerhtml.slice(0,i)+`<span class="${classname}" style="position:relative;top:-5px;color:red;">${currentChar}</span>`+innerhtml.slice(i+1,length)
                    i+=1
                }
                else {
                    currentChar = innerhtml.slice(i,i+1)
                    h1.innerHTML = innerhtml.slice(0,i)+`<span class="${classname}" style="top:10px;color:red;text-shadow:1px 2px 15px red,1px 2px 15px red,1px 2px 15px red">${currentChar}</span>`+innerhtml.slice(i+1,length)
                    
                    console.log("done")
                    //Extra cleaning (To be careful)
                    setTimeout(function(){
                        document.querySelectorAll(`.${classname}`).forEach(element=>{
                            element.outerHTML = element.innerHTML
                        })
                        isDoing=false
                    },1000)
                    
                    
                    clearInterval(interval)
                }
            },50)
            
        }
    })   
})