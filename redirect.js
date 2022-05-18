function redir(url){
    document.body.style.background = "#950000"
    setTimeout(function(){
        window.open(url, '_blank');  
        document.body.style.background = "black"
    },1000)
}