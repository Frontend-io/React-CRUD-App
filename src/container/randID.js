export default function randID(){
    const charL = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q" , "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const numbers = [0,1,2,3,4,5,6,7,8,9,10]
    var letter = [] ;
    var string = ''

    // Generate a random number for 
    function randNum(array){
       return (
            Math.floor(Math.random() * array.length)
        )
    }
    // Get a character
    for( let item of charL){
        let randomIndex = randNum(charL)
        let letterIndex = charL[randomIndex];
        if (!letter.includes(letterIndex)) {
            letter.push(letterIndex)
        }
    }
    // Get a number
    for(let item of numbers){
        let randomIndex = randNum(numbers)
        let letterIndex = numbers[randomIndex];
        if (!letter.includes(letterIndex)) {
            letter.push(letterIndex)
        }
    }
    // Return arrays to string
    letter.map(item =>{
        return(
            string += item
        )
    })
     return string
}