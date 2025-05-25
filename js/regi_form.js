 const searchInput = document.getElementById("searchInput");
  const dropdownOptions = document.getElementById("dropdownOptions");
  const options = dropdownOptions.querySelectorAll(".option");
  const dropdownArrow = document.getElementById("dropdownArrow");

  // Toggle dropdown visibility
  function toggleDropdown() {
    dropdownOptions.classList.toggle("hidden");
  }

  // Show dropdown when input is focused
  searchInput.addEventListener("focus", () => {
    dropdownOptions.classList.remove("hidden");
  });

  // Hide dropdown when input loses focus
  searchInput.addEventListener("blur", () => {
    setTimeout(() => dropdownOptions.classList.add("hidden"), 200); // Delay to allow option click
  });

  // Filter dropdown options based on input
  function filterDropdown() {
    const query = searchInput.value.toLowerCase();
    options.forEach((option) => {
      if (option.innerText.toLowerCase().includes(query)) {
        option.classList.remove("hidden");
      } else {
        option.classList.add("hidden");
      }
    });
  }

  // Handle option selection
  options.forEach((option) => {
    option.addEventListener("click", () => {
      searchInput.value = option.dataset.value;
      dropdownOptions.classList.add("hidden");
    });
  });

  // Close dropdown if clicked outside
  document.addEventListener("click", (event) => {
    if (!dropdownOptions.contains(event.target) && event.target !== searchInput && event.target !== dropdownArrow) {
      dropdownOptions.classList.add("hidden");
    }
  });



  // image previer
