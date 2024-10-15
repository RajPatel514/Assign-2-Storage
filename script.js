
const usernameInput = document.getElementById("getUsername");
const saveButton = document.getElementById("save-btn");
const displayName = document.getElementById("display-name");
const clearName = document.getElementById("clear-name");


// Store name in local storage
saveButton.addEventListener("click", function (event) {
    event.preventDefault();
    let savedName = usernameInput.value;

    if (savedName) {
        localStorage.setItem("getUsername", savedName);
        displayName.textContent = savedName;
    }
});


// Get name from local storage
const reloadName = localStorage.getItem("getUsername");
if (reloadName) {
    displayName.textContent = reloadName;

}


// Clear names from storage
clearName.addEventListener("click", function () {
    localStorage.removeItem("getUsername");
    displayName.textContent = null;
});
