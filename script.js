
let tog = true;

function shareLinks(){
    if(tog){
        const share = document.getElementById('Share');
        const trans = document.getElementById('transform');

        share.classList.add('show');
        trans.classList.add('reveal');
        tog= false;
    } else{
        const quake = document.getElementById('Share');
        const ret = document.getElementById('transform');

        quake.classList.remove('show');
        ret.classList.remove('reveal');
        tog= true;
    }
    
}