
function origNaru() {
    var numberEpisode = document.getElementById("episodenumber").value
    if (numberEpisode >= 221) {
        alert('thats above the max episodes!')
    }

    if (numberEpisode == '') {
        numberEpisode = 1 //if blank then make 1
    }
    pref="original"
    var urlnow = 'Original'

    episNum = numberEpisode.toString()

    document.cookie = "epis=" + episNum;
    document.cookie = "pref=" + pref;

    window.location.href = (urlnow);
}



function shippu() {
    var numberEpisode = document.getElementById("episodenumber").value
    if (numberEpisode >= 501) {
        alert('thats above the max episodes!');
    }

    if (numberEpisode == "") {
        numberEpisode = 1 //if blank then make 1
    }

    pref = "shippuden"
    episNum = numberEpisode.toString()

    document.cookie = "epis=" + episNum;
    document.cookie = "pref=" + pref;



    var urlnow = 'Shippuden'


    window.location.href = (urlnow);

}