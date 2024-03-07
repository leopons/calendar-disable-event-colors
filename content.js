function updateColors() {
  // For each event element
  const elements = document.querySelectorAll(".GTG3wb");

  elements.forEach((element) => {
    // Use the left border element (.jSrjCf) to get the correct color.
    const child = element.querySelector(".jSrjCf");
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
        // Update text color of .Jcb6qd elements if container is white
        element.querySelectorAll(".Jcb6qd").forEach((innerChild) => {
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
