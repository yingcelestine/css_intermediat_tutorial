$("a[href^='#']").on("click", function (event) {
    event.preventDefault();
    history.pushState({}, "", this.href);
});
