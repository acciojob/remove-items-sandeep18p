document.addEventListener("DOMContentLoaded", function() {
    var select = document.getElementById("colorSelect");
    var button = document.querySelector("input[type='button']");

    button.addEventListener("click", function() {
        var selectedOption = select.options[select.selectedIndex];
        if (selectedOption) {
            select.removeChild(selectedOption);
        }
    });
});
