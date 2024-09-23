
# PH-B10 Milestone 05: Assignment 05 Solution

This was the assignment for the 5th milestone of the 10th batch of the Web Development course offered by Programming Hero. After HTML, CSS, Tailwind CSS and JS basic, the JS DOM was taught in this milestone, and this Donation campaign page was created using all of these. This project is done with a focus on the DOM in JavaScript. There are some basic level, interesting implementations of the DOM here. Additionally, to organize the code, some common reusable functions have been used by following the DRY (Don't Repeat Yourself) principle.

The page has been made responsive for all the breakpoints mentioned in Tailwind CSS, meaning it is responsive for all devices.

This will remain just as an assignment, and there are no plans to update it.
## Author

- [@Mohammad Zahid Kamal](https://github.com/MZahidKamal)


## Visit & see Live

https://mzahidkamal.github.io/PH-B10-Milestone05-Assignment05-Solution/
## Features
Functionalities

- **Donation and History Button Functionality**:
  - Clicking the "History" button will hide the donation data and display the history.
  - Clicking the "Donation" button will hide the history and display the donation data.
- **Donation Functionality for Each Card**:
  - When the "Donate Now" button is clicked:
    - The donation input will be deducted from the total account balance, and the updated balance will be shown.
    - The card’s current donation amount will increase.
    - A meaningful notification will be added to the History section.
- **Input Validation**:
  - Show an alert if invalid data is found and stop the transaction.
  - Validate the donation amount:
    - If the donation amount is greater than the account balance.
    - If the input field contains an invalid number.
    - If the input field is empty.
- **History Section**:
  - The history section will display transaction notifications, including:
    - Date and time of the transaction.
    - Donation amount.
    - Donation campaign name.
