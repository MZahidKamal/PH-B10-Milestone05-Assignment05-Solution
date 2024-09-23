/* Necessary function, used to check if any position of a code is executed or not. ===================================*/
function test() {
    console.log('Tested: This line has executed.');
}


/* It will redirect from one html page to another. ===================================================================*/
function redirectToThisPage(htmlPagePath) {
    window.location.href = htmlPagePath;
}


/* It determines, which option is selected, and according to that what are elements need to be displayed and what not to
be displayed. ========================================================================================================*/
function selectThisOption(button) {
    DONATION_BUTTON.classList.remove('bg-button_color_01');
    DONATION_BUTTON.classList.remove('bg-white');
    HISTORY_BUTTON.classList.remove('bg-button_color_01');
    HISTORY_BUTTON.classList.remove('bg-white');

    if (button === DONATION_BUTTON) {
        DONATION_BUTTON.classList.add('bg-button_color_01');
    } else if (button === HISTORY_BUTTON) {
        HISTORY_BUTTON.classList.add('bg-button_color_01');
    }
}


/* This is used to show an element if it's hidden ====================================================================*/
function showThisElement (htmlElement){
    htmlElement.classList.remove('hidden');
}


/* This is used to hide an element if it's being shown ===============================================================*/
function hideThisElement (htmlElement){
    htmlElement.classList.add('hidden');
}
