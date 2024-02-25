function updateColors() {
  // For each event element
  const elements = document.querySelectorAll(".EfQccc");

  elements.forEach((element) => {
    // Use the left border element (.uXJUmd) to get the correct color.
    const child = element.querySelector(".uXJUmd");
    if (child) {
      const childStyle = window.getComputedStyle(child);
      const targetColor = childStyle.backgroundColor;

      // Check if the current background color is not white before changing
      if (
        window.getComputedStyle(element).backgroundColor !==
        "rgb(255, 255, 255)"
      ) {
        element.style.backgroundColor = targetColor;
      } else {
        // Update color of .lFe10c elements if they are not white
        element.querySelectorAll(".lFe10c").forEach((innerChild) => {
          innerChild.style.color = targetColor;
        });
      }
      element.style.borderColor = targetColor;

      // Hide the border
      child.style.display = "none";
    }
  });
}

// Run the function on load and every time the DOM changes
document.addEventListener("DOMContentLoaded", updateColors);
const observer = new MutationObserver(updateColors);
observer.observe(document.body, { childList: true, subtree: true });
