const runes = document.getElementsByClassName("rune");

function main() {
  for (let i = 0; i < runes.length; i++) {
    const rune = runes[i];
    runes[i].addEventListener("click", () => {
      if (runes[i].dataset.isChecked == "false") {
        runes[i].dataset.isChecked = "true";
        //runes[i].classList.add("shadow-[0 4px 6px]", "shadow-white");
      } else {
        runes[i].dataset.isChecked = "false";
        //runes[i].classList.remove("shadow-2xl", "shadow-white");
      }
    });
  }
}

main();
