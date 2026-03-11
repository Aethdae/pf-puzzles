const runes = document.getElementsByClassName("rune");

function main() {
  for (let i = 0; i < runes.length; i++) {
    const rune = runes[i];
    runes[i].addEventListener("click", () => {
      if (runes[i].dataset.isChecked == "false") {
        runes[i].dataset.isChecked = "true";
      } else {
        runes[i].dataset.isChecked = "false";
      }
    });
  }
}

main();
