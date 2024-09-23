/*===== ALL NECESSARY HTML ELEMENTS ==================================================================================*/
const HOME_BUTTON = document.getElementById("home-button");
const HOME_PAGE = './index.html';


/*===== IF THE 'HOME' BUTTON IS CLICKED ==============================================================================*/
HOME_BUTTON.addEventListener("click", function (event) {
    redirectToThisPage(HOME_PAGE);
})


/*====================================================================================================================*/
