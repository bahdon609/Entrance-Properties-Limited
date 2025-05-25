const imageModal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");

function handleImage(imageUrl) {
    modalImage.src = imageUrl;
    imageModal.classList.remove("hidden");
    imageModal.classList.add("flex"); // Show modal with flex display for centering
}

function closeModal() {
    imageModal.classList.add("hidden");
    imageModal.classList.remove("flex");
}

// Close the modal when clicking outside of it
window.addEventListener("click", function (e) {
    if (e.target === imageModal) {
        closeModal();
    }
});