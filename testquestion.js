
/* In order to understand your process, please try to think out loud and walk us through what you're doing.

Are you familiar with a multiplication table? 

[If not] A multiplication table is a table with numbers along the top and left, where each entry in the table is the multiplied value of that entry’s row and column.

We’d like for you to write a function that outputs a 10 by 10 multiplication table with the following requirements:

The table should print out to a console or output; no need for any CSS or HTML
The table should include headers, with an X in the top left corner
The table outputs in a square shape

Consider creating a code that you will be comfortable to put in production, even if you do it with pseudo code.
X   1   2   3   4   5   6   7   8   9  10
 1   1   2   3   4   5   6   7   8   9  10
 2   2   4   6   8  10  12  14  16  18  20
 3   3   6   9  12  15  18  21  24  27  30
 4   4   8  12  16  20  24  28  32  36  40
 5   5  10  15  20  25  30  35  40  45  50
 6   6  12  18  24  30  36  42  48  54  60
 7   7  14  21  28  35  42  49  56  63  70
 8   8  16  24  32  40  48  56  64  72  80
 9   9  18  27  36  45  54  63  72  81  90
10  10  20  30  40  50  60  70  80  90 100 
 */

const numLength = 10
let arr = []

const padding = (value, max) => {
    let temp = ""
    value = value.toString()
    for(let i = 0; i <= max - value.length ; i++){
        temp += "."
    }
    return temp
}

for(let i = 0; i <= numLength; i++){
    for(let j = 0; j<= numLength; j++){
        if(i === 0 && j === 0) {
            arr.push(padding(i, 3)+ "X")
        }else if(i === 0){
            arr.push(padding(j, 3) + j)
        }else if(j === 0){
            arr.push(padding(i, 3) + i)
        }
        else{
            arr.push(padding(i*j, 3) +(i*j))
        } 
    }
    const joinedarr = arr.join("")
    console.log(joinedarr)
    arr = []
    //console.log((numLength * numLength).toString().length)
}