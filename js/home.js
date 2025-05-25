$(document).ready(function () {
    // Load the selected item from localStorage
    var selectedLink = localStorage.getItem('selectedLink');
    if (selectedLink) {
        $('#' + selectedLink).addClass('selected');
    }

    // When a sidebar item is clicked
    $('#sidebarMenu li a').click(function () {
        // Remove 'selected' class from all items
        $('#sidebarMenu li a').removeClass('selected');

        // Add 'selected' class to the clicked item
        $(this).addClass('selected');

        // Store the selected item's ID in localStorage
        localStorage.setItem('selectedLink', this.id);
    });
});

// this is sidebar hidden er jonno
$(document).ready(function () {
    // Load the selected item from localStorage
    var selectedLink = localStorage.getItem('selectedLink');
    if (selectedLink) {
        $('#' + selectedLink).addClass('selected');
    }

    // When a sidebar item is clicked
    $('#sidebarMenu li a').click(function () {
        // Remove 'selected' class from all items
        $('#sidebarMenu li a').removeClass('selected');

        // Add 'selected' class to the clicked item
        $(this).addClass('selected');

        // Store the selected item's ID in localStorage
        localStorage.setItem('selectedLink', this.id);
    });
});

$(document).ready(function() {
    // Handle menu item click to add 'selected' class
    $('#sidebarMenu li a').click(function() {
        $('#sidebarMenu li a').removeClass('selected');
        $(this).addClass('selected');
    });

    // Toggle sidebar visibility on medium and smaller screens
    $('#menuButton').click(function() {
        if ($(window).width() <= 768) {  // Check for medium screen (md) or smaller
            $('#sidebar').toggleClass('-translate-x-full'); // Show or hide sidebar
        }
    });

    // Close the sidebar if clicked outside of it
    $(document).click(function(event) {
        var $target = $(event.target);
        if (!$target.closest('#sidebar').length && !$target.closest('#menuButton').length) {
            // Close the sidebar if the click is outside the sidebar and the menu button
            $('#sidebar').addClass('-translate-x-full');
        }
    });

});
