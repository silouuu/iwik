$(document).ready(function () {
    $('#scrollho').on("mousewheel", function(e, delta) {
        this.scrollLeft -= (delta * 70);
        e.preventDefault();
    });

});