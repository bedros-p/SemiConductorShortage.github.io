square = document.getElementsByClassName("grabMe")[0]

decayStrength = 50; //out of 100
copyCount = 70;
decaySpeed = 1; //speed it up by increasing to 2, or slow it down with decimals
function deleteBall(){
    clones = document.querySelectorAll(`[name="clone"]`)
    elemMap = {}
    clones.forEach(element=>{
        elemMap[element.getAttribute("timestamp")] = element
    })

    smallest = Math.min(...Object.keys(elemMap))
    elemMap[smallest].parentNode.removeChild(clones[0])
}

square.addEventListener("dragstart", function(target){
    canv = document.createElement('canvas');
    canv.style.display="none";
    canv.width=0;
    canv.height=0;
    target.dataTransfer.setDragImage(canv, 999999999, 99999999999);
})
let gen=1

decayStrength/=25;

let previousEvent = undefined;
clearedBefore = false
square.addEventListener('drag', function(data){

    console.log(data)
    if (data.screenX+data.screenY != 0){
        window.scroll(data.x-(square.clientWidth/2),data.y-(square.clientHeight/2))
        square.style.top = `${data.pageY-(square.clientHeight/2)}px`;
        square.style.left = `${data.pageX-(square.clientWidth/2)}px`;
    }


    previousEvent=data;

    cloneNode = square.cloneNode();

    if (data.screenX+data.screenY != 0){
        cloneNode.style.top = `${previousEvent.pageY-(square.clientHeight/2)}px`;
        cloneNode.style.left = `${previousEvent.pageX-(square.clientWidth/2)}px`;
    }

    cloneNode.setAttribute("name", "clone");
    cloneNode.setAttribute("draggable", "false");
    cloneNode.setAttribute("timestamp", Date.now());

    cloneNode.style.zIndex = 1;
    //cloneNode.style.opacity = 1/(gen*2) //HOLY FUCK ITS GEN2 GENTOO [commented out because its just there for the memes!!!]


    clones = document.querySelectorAll(`[name="clone"]`)

    cloneNode.style.opacity = 1*(1+(5/100))**(cloneNode.getAttribute("timestamp")) //HOLY SHIT ITS EXPONENTIAL DECAY  original(1-rate)^time

    gen+=1
    document.body.append(cloneNode)

    previousEvent=data;
    console.log(gen)

    if (clones.length<=copyCount-5){
        clearedBefore=false
    }


    if (gen >= copyCount){
        gen = 1;

    }

    if (clearedBefore){
        elemMap = {}
        clones.forEach(element=>{
            elemMap[element.getAttribute("timestamp")] = element

        })

        smallest = Math.min(...Object.keys(elemMap))
        elemMap[smallest].parentNode.removeChild(clones[0])
    }
    else {
        if (clones.length >=copyCount) {
            elemMap = {}
            clones.forEach(element=>{
                elemMap[element.getAttribute("timestamp")] = element
            })

            smallest = Math.min(...Object.keys(elemMap))
            elemMap[smallest].parentNode.removeChild(clones[0])

            clearedBefore = true
        }
    }

})


setInterval(function(){
    clones = document.querySelectorAll(`[name="clone"]`)
    clones.forEach(element=>{
        element.style.opacity = 1*(1+(decayStrength/100))**((element.getAttribute("timestamp")-Date.now())*decaySpeed)
    })


},5)


let isDragged = false;
square.addEventListener("dragstart", function(){
    isDragged = true
})
square.addEventListener("dragend", function(){
    isDragged=false;
})

let clearElems = setInterval(function(){
    if (!isDragged) {
        clones = document.querySelectorAll(`[name="clone"]`)
        if (clones.length != 0){

            elemMap = {}
            clones.forEach(element=>{
                elemMap[element.getAttribute("timestamp")] = element
            })

            smallest = Math.min(...Object.keys(elemMap))
            elemMap[smallest].style.opacity='0.001 !important';
            elemMap[smallest].style.boxShadow="none";


            elemMap[smallest].parentNode.removeChild(clones[0])
        };
    }
},100)
