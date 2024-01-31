function encrypt(text) {
  let textToEncrypt = text;
  textToEncrypt = textToEncrypt.split("");
  textToEncrypt = textToEncrypt.map((letter) => letter.charCodeAt(0));
  textToEncrypt = textToEncrypt.map((letter) => letter + 3);
  textToEncrypt = textToEncrypt.map((letter) => String.fromCharCode(letter));
  console.log(textToEncrypt.join(""));
}
const exampleText = "Hello, Friends";
encrypt(exampleText);

function mergeArray(array1, array2) {
  const mergedArray = [...array1, ...array2];
  return mergedArray;
}
const result = mergeArray([2, 5], [3, 7]);
console.log(result);

function drawRow(space, hashCount) {
  return " ".repeat(space) + "#".repeat(hashCount);
}

function drawTree() {
  const tree = [
    drawRow(5, 1),
    drawRow(4, 3),
    drawRow(3, 5),
    drawRow(4, 3),
    drawRow(3, 5),
    drawRow(2, 7),
    drawRow(3, 5),
    drawRow(2, 7),
    drawRow(1, 9),
    drawRow(4, 3),
    drawRow(4, 3),
  ];

  return tree.join("\n");
}

const treeDiv = document.getElementById("tree");
treeDiv.innerText = drawTree();
