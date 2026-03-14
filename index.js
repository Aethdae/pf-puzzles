const runes = document.getElementsByClassName("rune");
const unlocked = document.getElementById("unlocked");
const runeOne = runes[0],
  runeTwo = runes[1],
  runeThree = runes[2],
  runeFour = runes[3],
  runeFive = runes[4],
  runeSix = runes[5],
  runeSeven = runes[6],
  runeEight = runes[7],
  runeNine = runes[8];

function main() {
  unlocked.classList.add("left-5", "bottom-20");
  for (let i = 0; i < runes.length; i++) {
    const rune = runes[i];
    runes[i].addEventListener("click", () => {
      if (runes[i].dataset.isChecked == "false") {
        runes[i].dataset.isChecked = "true";
        console.log(`${runes[i].id} is clicked`);
        //runes[i].classList.add("shadow-[0 4px 6px]", "shadow-white");
      } else {
        runes[i].dataset.isChecked = "false";
        //runes[i].classList.remove("shadow-2xl", "shadow-white");
      }
    });
  }
  checkRunes();
}

main();

function checkRunes() {
  if (
    runeTwo.dataset.isChecked == "true" &&
    runeThree.dataset.isChecked == "true" &&
    runeFive.dataset.isChecked == "true" &&
    runeNine.dataset.isChecked == "true" &&
    runes[0].dataset.isChecked == "false" &&
    runes[3].dataset.isChecked == "false" &&
    runes[5].dataset.isChecked == "false" &&
    runes[6].dataset.isChecked == "false" &&
    runes[7].dataset.isChecked == "false"
  ) {
    unlocked.hidden = false;
    console.log("hey");
  } else {
    console.log("Failed");
    setTimeout(checkRunes, 2000);
  }
}
