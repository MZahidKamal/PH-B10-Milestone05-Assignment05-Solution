/*===== ALL NECESSARY HTML ELEMENTS ==================================================================================*/
const HOME_BUTTON = document.getElementById("home-button");
const HOME_PAGE = './PH-B10-Milestone05-Assignment05-Solution/index.html';
// const HOME_PAGE = 'https://mzahidkamal.github.io/PH-B10-Milestone05-Assignment05-Solution/index.html';


/*===== IF THE 'HOME' BUTTON IS CLICKED ==============================================================================*/
HOME_BUTTON.addEventListener("click", function (event) {
    redirectToThisPage(HOME_PAGE);
})


/*====================================================================================================================*/
