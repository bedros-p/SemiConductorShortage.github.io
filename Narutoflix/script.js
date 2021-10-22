var date = new Date();
days = 2
date.setTime(date.getTime() + (days * 24 * 3600 * 1000)); // 2 days from now
expires = ";path=/Narutoflix; expires=" + date.toUTCString(); //expire the user Cookie after 2 days

function chooseSas() {
    document.cookie = "character=sas" + expires;
    window.location.href = 'episelect.html';
    return (1)
}

function chooseSak() {
    document.cookie = "character=sak" + expires;
    window.location.href = 'episelect.html';
    return (2)
}

function chooseNar() {
    document.cookie = "character=nar" + expires;
    window.location.href = 'episelect.html';
    return (3)
}

function chooseChar(charId) {
    charList = ["sas","sak","nar"]
    document.cookie = `character=${charList[charId-1]}` + expires;
    window.location.href = 'episelect.html';
    return (charId)
}

function logoutOpt() {
    document.cookie = "ref=episelect"
    window.location.href = 'logout.html';
}

function logout() {
    var date = new Date();
    days = 2
    date.setTime(date.getTime() + (days * 24 * 3600 * 1000)); // 2 days from now
    expires = ";path=/Narutoflix; expires=" + date.toUTCString(); //expire the user Cookie after 2 days

    document.cookie = 'epis=NONERETURN' + expires
    document.cookie = 'character=NONERETURN' + expires
    document.cookie = 'pref=NONERETURN' + expires
    window.location.href = "/Narutoflix"
}