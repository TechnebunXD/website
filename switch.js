var previousCatButton = "";
var currentDisplayedDiv = "";

function subPageSwitch(buttonId,divTarget) {
    if (!previousCatButton == "") {
        document.getElementById(previousCatButton).classList.replace('isSelected','dummy');
    }
    document.getElementById(buttonId).classList.replace('dummy','isSelected');

    if (!currentDisplayedDiv == "") {
        var old_item = document.getElementById(currentDisplayedDiv);
        old_item.style.opacity = 0;
        old_item.style.display = "inline";
        old_item.style.zIndex = 1;
        old_item.classList.replace('dummy','isDisabled');
    }
    
    var new_item = document.getElementById(divTarget);
    new_item.style.opacity = 1;
    new_item.style.display = "block";
    new_item.style.zIndex = 10;
    new_item.classList.replace('isDisabled','dummy');

    previousCatButton = buttonId;
    currentDisplayedDiv = divTarget;
}