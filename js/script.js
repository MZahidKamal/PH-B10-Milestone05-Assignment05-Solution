/*===== ALL NECESSARY HTML ELEMENTS ==================================================================================*/
const BLOG_BUTTON = document.getElementById("blog-button");
const DONATION_BUTTON = document.querySelector("#donation-button");
const HISTORY_BUTTON = document.querySelector("#history-button");

const DONATION_SECTION = document.querySelector('.donation-section')
const HISTORY_SECTION = document.querySelector('.history-section')

const DONATION_CARD_CONTAINER = document.getElementById("donation-card-container");
const DONATION_CONFIRMATION_MODAL = document.getElementById("donation_confirmation_modal");

const BLOG_PAGE = './templates/blog.html';


/*===== IF THE 'BLOG' BUTTON IS CLICKED ==============================================================================*/
document.addEventListener("DOMContentLoaded", function () {
    if (BLOG_BUTTON) {
        BLOG_BUTTON.addEventListener("click", function () {
            redirectToThisPage(BLOG_PAGE);
        })
    }
})


/*===== IF THE 'DONATION' BUTTON IS CLICKED ==========================================================================*/
document.addEventListener("DOMContentLoaded", function () {
    if (DONATION_BUTTON) {
        DONATION_BUTTON.addEventListener("click", function () {
            selectThisOption(DONATION_BUTTON);
            showThisElement(DONATION_SECTION);
            hideThisElement(HISTORY_SECTION);
        })
    }
})


/*===== IF THE 'HISTORY' BUTTON IS CLICKED ===========================================================================*/
document.addEventListener("DOMContentLoaded", function () {
    if (HISTORY_BUTTON) {
        HISTORY_BUTTON.addEventListener("click", function () {
            selectThisOption(HISTORY_BUTTON);
            showThisElement(HISTORY_SECTION);
            hideThisElement(DONATION_SECTION);
        })
    }
})


/*===== INPUT VALIDATION & MAKE DONATION =============================================================================*/
document.addEventListener("DOMContentLoaded", function () {
    if (DONATION_CARD_CONTAINER) {
        for (const child of DONATION_CARD_CONTAINER.children) {

            const AMOUNT_INPUT_FIELD = child.querySelector('.amount-input-field');
            const DONATE_NOW_BUTTON = child.querySelector('.donate-now-button');

            AMOUNT_INPUT_FIELD.addEventListener('input', function () {

                if (checkDepositAmountValidity(AMOUNT_INPUT_FIELD)) {
                    hideWarning(AMOUNT_INPUT_FIELD);
                    enableThis(DONATE_NOW_BUTTON);
                } else {
                    showWarning(AMOUNT_INPUT_FIELD);
                    disableThis(DONATE_NOW_BUTTON);
                }
            })

            DONATE_NOW_BUTTON.addEventListener('click', function () {
                if (checkDepositAmountValidity(AMOUNT_INPUT_FIELD) && AMOUNT_INPUT_FIELD.value.length !== 0) {
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
    }
})


/*====================================================================================================================*/
