// Code your solutions in this file

function writeCards(array, string){
    let notes = []
    for (let i = 0; i < array.length; i++) {
        notes.push(`Thank you, ${array[i]}, for the wonderful ${string} gift!`)
    }

    return notes
}

function countDown(int) {
    while (int >= 0) {
        console.log(int)
        int--
    }
}