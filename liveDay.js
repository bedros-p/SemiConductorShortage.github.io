let bdayMS = new Date()-new Date("June 19, 2007")
let age = Math.floor(bdayMS/(8.64e+7)/365)

let programmingStart = new Date()-new Date("October 20, 2018")
let daysPassed = Math.floor(programmingStart/(8.64e+7))




document.querySelectorAll("liveBirthday").forEach(elem=>{
    elem.innerText = age
})

document.querySelectorAll("liveProgramCounter").forEach(elem=>{
    elem.innerText = daysPassed
})

