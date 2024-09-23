/*===== ALL NECESSARY HTML ELEMENTS ==================================================================================*/

const BLOG_BUTTON = document.getElementById("blog-button");
const DONATION_BUTTON = document.querySelector("#donation-button");
const HISTORY_BUTTON = document.querySelector("#history-button");

const DONATION_SECTION = document.querySelector('.donation-section')
const HISTORY_SECTION = document.querySelector('.history-section')

const DONATION_CARD_CONTAINER = document.getElementById("donation-card-container");
const DONATION_CONFIRMATION_MODAL = document.getElementById("donation_confirmation_modal");

const BLOG_PAGE = './blog.html';
// const BLOG_PAGE = 'https://mzahidkamal.github.io/PH-B10-Milestone05-Assignment05-Solution/blog.html';


/*===== IF THE 'BLOG' BUTTON IS CLICKED ==============================================================================*/
BLOG_BUTTON.addEventListener("click", function (event) {
    redirectToThisPage(BLOG_PAGE);
})


/*===== IF THE 'DONATION' BUTTON IS CLICKED ==========================================================================*/
DONATION_BUTTON.addEventListener("click", function (event) {
    selectThisOption(DONATION_BUTTON);
    showThisElement(DONATION_SECTION);
    hideThisElement(HISTORY_SECTION);
})


/*===== IF THE 'HISTORY' BUTTON IS CLICKED ===========================================================================*/
HISTORY_BUTTON.addEventListener("click", function (event) {
    selectThisOption(HISTORY_BUTTON);
    showThisElement(HISTORY_SECTION);
    hideThisElement(DONATION_SECTION);
})


/*===== INPUT VALIDATION & MAKE DONATION =============================================================================*/
for (const child of DONATION_CARD_CONTAINER.children) {

    const AMOUNT_INPUT_FIELD = child.querySelector('.amount-input-field');
    const DONATE_NOW_BUTTON = child.querySelector('.donate-now-button');

    AMOUNT_INPUT_FIELD.addEventListener('input', function (event) {

        if (checkDepositAmountValidity(AMOUNT_INPUT_FIELD)){
            hideWarning(AMOUNT_INPUT_FIELD);
            enableThis(DONATE_NOW_BUTTON);
        }else {
            showWarning(AMOUNT_INPUT_FIELD);
            disableThis(DONATE_NOW_BUTTON);
        }
    })

    DONATE_NOW_BUTTON.addEventListener('click', function (event) {
        if (checkDepositAmountValidity(AMOUNT_INPUT_FIELD) && AMOUNT_INPUT_FIELD.value.length !== 0){
            makeDebitFromWallet(AMOUNT_INPUT_FIELD);
            makeCreditToDonationCampaign(AMOUNT_INPUT_FIELD);
            createHistoryLog(AMOUNT_INPUT_FIELD);
            makeThisFieldEmpty(AMOUNT_INPUT_FIELD);
            DONATION_CONFIRMATION_MODAL.showModal();
        } else {
            showWarning(AMOUNT_INPUT_FIELD);
            makeThisFieldEmpty(AMOUNT_INPUT_FIELD)
        }
    })
}


/*====================================================================================================================*/
