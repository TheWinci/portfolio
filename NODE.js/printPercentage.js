const readLine = require("readline");
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});
var percentage = 0;
function printPercentage(){
    if(percentage >= 100){
        rl.write("\nZakoczono wczytywanie.")
        return rl.close()
    }
    percentage += 1;
    readLine.clearLine(rl,0);
    readLine.cursorTo(rl,0);
    rl.write(`Postep: ${percentage}%`)

    setTimeout(printPercentage,100);
}

printPercentage();