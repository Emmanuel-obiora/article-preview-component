
let tog = true;

function shareLinks(){
    if(tog){
        const share = document.getElementById('Share');

        share.classList.add('show');
        tog= false;
    } else{
        const quake = document.getElementById('Share');

        quake.classList.remove('show');
        tog= true;
    }
    
}