$(document).ready(function () {
    // Load the selected item from localStorage and apply the 'selected' class
    var selectedLink = localStorage.getItem('selectedLink');
    if (selectedLink) {
        $('#' + selectedLink).addClass('selected');
    }

    // Handle menu item click to add 'selected' class and save to localStorage
    $('#sidebarMenu li a').click(function () {
        $('#sidebarMenu li a').removeClass('selected'); // Remove 'selected' from all items
        $(this).addClass('selected'); // Add 'selected' to clicked item
        localStorage.setItem('selectedLink', this.id); // Store selected item's ID
    });

    // Toggle sidebar visibility on medium and smaller screens
    $('#menuButton').click(function () {
        if ($(window).width() <= 768) {  // Only toggle on medium screens or smaller
            $('#sidebar').toggleClass('-translate-x-full'); // Show or hide sidebar
        }
    });

    // Close the sidebar if a click is detected outside of it
    $(document).click(function (event) {
        var $target = $(event.target);
        if (!$target.closest('#sidebar').length && !$target.closest('#menuButton').length) {
            $('#sidebar').addClass('-translate-x-full'); // Close sidebar if click outside
        }
    });
});
