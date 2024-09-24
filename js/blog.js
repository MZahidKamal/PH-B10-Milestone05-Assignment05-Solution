/*===== ALL NECESSARY HTML ELEMENTS ==================================================================================*/
const HOME_PAGE = './index.html';


/*===== IF THE 'HOME' BUTTON IS CLICKED ==============================================================================*/
document.addEventListener("DOMContentLoaded", function () {
    const HOME_BUTTON = document.getElementById("home-button");

    if (HOME_BUTTON){
        HOME_BUTTON.addEventListener("click", function () {
            redirectToThisPage(HOME_PAGE);
        })
    }
})


/*====================================================================================================================*/
