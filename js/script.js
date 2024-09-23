/*===== ALL NECESSARY HTML ELEMENTS ==================================================================================*/

const BLOG_BUTTON = document.getElementById("blog-button");
const DONATION_BUTTON = document.querySelector("#donation-button");
const HISTORY_BUTTON = document.querySelector("#history-button");

const DONATION_SECTION = document.querySelector('.donation-section')
const HISTORY_SECTION = document.querySelector('.history-section')

const DONATION_CARD_CONTAINER = document.getElementById("donation-card-container");
const DONATION_CONFIRMATION_MODAL = document.getElementById("donation_confirmation_modal");

const BLOG_PAGE = '../blog.html';


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
