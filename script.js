document.addEventListener("contextmenu", function(event) {
    event.preventDefault();
});

document.addEventListener("keydown", function(event) {
    if (event.ctrlKey && (event.key === "u" || event.key === "U")) {
        event.preventDefault();
    }
    if (event.ctrlKey && event.shiftKey && (event.key === "i" || event.key === "I") {
        event.preventDefault();
});

document.addEventListener("selectstart", function(event) {
    event.preventDefault();
});
