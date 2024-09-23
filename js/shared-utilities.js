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


/* It will check if the given donation amount valid and is following the general convention or not. ==================*/
function checkDepositAmountValidity(htmlFieldElement) {
    return !(
        (htmlFieldElement.value.length >= 1
            && parseFloat(htmlFieldElement.value) <= 0)
        || htmlFieldElement.value[0] === '-'
        || isNaN(htmlFieldElement.value)
        || parseFloat(htmlFieldElement.value) > parseFloat(document.getElementById('wallet-balance').innerText)
    )
}


/* It will enable a button ===========================================================================================*/
function enableThis(htmlButtonElement){
    htmlButtonElement.removeAttribute('disabled');
}


/* It will disable a button ==========================================================================================*/
function disableThis(htmlButtonElement){
    htmlButtonElement.setAttribute('disabled', 'disabled');
}


/* It will show the pre-stored warning message via p-tag. ============================================================*/
function showWarning(htmlElement) {
    htmlElement.nextElementSibling.classList.remove('hidden');
}


/* It will hide the pre-stored warning message via p-tag. ============================================================*/
function hideWarning(htmlElement) {
    htmlElement.nextElementSibling.classList.add('hidden');
}


/* It will deduct the donation amount from the wallet ================================================================*/
function makeDebitFromWallet(htmlFieldElement) {
    let walletBalance = parseFloat(document.getElementById('wallet-balance').innerText)
    let givenAmount = parseFloat(htmlFieldElement.value)
    walletBalance -= givenAmount;
    document.getElementById('wallet-balance').innerText = walletBalance.toFixed(2);
}


/* It will add the donation amount to the respective donation campaign ===============================================*/
function makeCreditToDonationCampaign(htmlFieldElement) {
    let collectedDonationAmount = parseFloat(htmlFieldElement.parentElement.parentElement.firstElementChild.firstElementChild.nextElementSibling.innerText)
    let givenAmount = parseFloat(htmlFieldElement.value)
    collectedDonationAmount += givenAmount;
    htmlFieldElement.parentElement.parentElement.firstElementChild.firstElementChild.nextElementSibling.innerText = collectedDonationAmount.toFixed(2);
}


/* It will make any input field empty. ===============================================================================*/
function makeThisFieldEmpty(inputField) {
    inputField.value = '';
}


/* It will create a history log and will save it =====================================================================*/
function createHistoryLog (htmlFieldElement){

    let donationCampaignName = htmlFieldElement.parentElement.parentElement.firstElementChild.nextElementSibling.innerText
    let givenAmount = parseFloat(htmlFieldElement.value)

    let paymentTime = new Date();
    let formattedTime = paymentTime.toDateString() + ' ' + paymentTime.toTimeString();
    //console.table({donationCampaignName, givenAmount, paymentTime});

    let htmlHistoryCard = `
    <!-- HISTORY CARD 01 -->
    <div class="border-2 rounded-xl p-8 2xl:w-full xl:w-11/12 lg:w-11/12 md:w-11/12 sm:w-11/12 w-11/12 mx-auto">
        <div class="flex flex-col gap-y-5">
            <h1 class="text-xl font-bold">${givenAmount} Taka is Donated for ${donationCampaignName}</h1>
            <div class="px-5 py-3 rounded-lg bg-gray-50">
                <p class="text-base font-light text-justify">Date : ${formattedTime}</p>
            </div>
        </div>
    </div>`;

    document.getElementById('history-cards-container').insertAdjacentHTML('beforeend', htmlHistoryCard);
}


/*====================================================================================================================*/
