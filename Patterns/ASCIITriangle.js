"use strict";
function ASCIITriangle(str, rows) {
    let chars = str.split("");
    let sorted = chars.sort((a, b) => (a.charCodeAt(0) - b.charCodeAt(0)));
    let index = 0;
    for (let i = 1; i <= rows; i++) {
        let row = "";
        for (let j = 1; j < rows - i; j++) {
            row = row + " ";
        }
        for (let j = 1; j <= i; j++) {
            row = row + sorted[index++] + " ";
        }
        console.log(row);
    }
}
ASCIITriangle("LISTEN", 3);
