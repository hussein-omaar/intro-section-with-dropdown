const firstDropMenue = document.querySelector('.first-li');
const secondDropdMeune = document.querySelector('.second-li');
const dropMenue1 = document.querySelector('.drowp-menue1');
const dropmenue2 = document.querySelector('.drowp-menue2');
const arrowUp = document.querySelector('.arrow-up1');
const arrowDown = document.querySelector('.arrow-down1');
const secondArrowUp = document.querySelector('.arrow-up2');
const secondArrowDown = document.querySelector('.arrow-down2');
const openMenue = document.querySelector('.open-menue');
const menueIcon = document.querySelector('.menue-icon');
const closeIcon = document.querySelector('.close-icon');
const firstLiMenue = document.querySelector('.first-li-menue');
const secondLiMenue = document.querySelector('.second-li-menue');
const menueArrowDown1 = document.querySelector('.menue-arrow-down1');
const menueArrowUp1 = document.querySelector('.menue-arrow-up1');
const menueArrowDown2 = document.querySelector('.menue-arrow-down2');
const menueArrowUp2 = document.querySelector('.menue-arrow-up2');
const firstDropMenue1 = document.querySelector('.first-drop-menue1');
const secondDropMenue2 = document.querySelector('.second-drop-menue2');




firstDropMenue.addEventListener('click', menue1);
secondDropdMeune.addEventListener('click', menue2);
menueIcon.addEventListener('click', menueOpen);
closeIcon.addEventListener('click', removeMenueIcon);
firstLiMenue.addEventListener('click', removeUpLi);
secondLiMenue.addEventListener('click', removeliIcon);


function menue1() {


    dropMenue1.classList.toggle('hiden');
    arrowUp.classList.toggle('hide-arrow-up');
    arrowDown.classList.toggle('hiden');


}


function menue2() {


    dropmenue2.classList.toggle('hiden');
    secondArrowUp.classList.toggle('hiden-second-arrow');
    secondArrowDown.classList.toggle('hiden')


}

function menueOpen() {

    openMenue.classList.remove('hide');
    menueIcon.classList.add('hide');
    closeIcon.classList.remove('hide');
}

function removeMenueIcon() {


    menueIcon.classList.remove('hide');
    closeIcon.classList.add('hide');
    openMenue.classList.add('hide');



}

function removeUpLi() {


    menueArrowDown1.classList.toggle('hide');
    menueArrowUp1.classList.toggle('hide');
    firstDropMenue1.classList.toggle('hide');


}

function removeliIcon() {


    menueArrowDown2.classList.toggle('hide');
    menueArrowUp2.classList.toggle('hide');
    secondDropMenue2.classList.toggle('hide')



}