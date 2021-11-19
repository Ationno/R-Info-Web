const modeSelector = document.querySelectorAll('input[name="mode"]');
const windowsContainer = document.querySelector(".windows-container");
const windowsMode = {
  editor: document.querySelector("#windowEditor"),
  runner: document.querySelector("#windowRunner"),
};

const handleModeChange = ({ target }) => {
  if (target.value === "both") {
    windowsContainer.classList.replace(
      "container--lg",
      "windows-container--extended"
    );
    document.querySelector(".window.hidden").classList.remove("hidden");
  } else {
    windowsContainer.classList.replace(
      "windows-container--extended",
      "container--lg"
    );
    for (const key in windowsMode) {
      windowsMode[key].classList.add("hidden");
    }
    windowsMode[target.value].classList.remove("hidden");
  }
};

//
//
// Events
//

modeSelector.forEach((modeOption) => {
  modeOption.addEventListener("change", handleModeChange);
});

window.addEventListener("resize", () => {
  if (!modeSelector[2].checked || window.innerWidth >= 1024) return;

  modeSelector[0].checked = true;
  handleModeChange({ target: modeSelector[0] });
});
