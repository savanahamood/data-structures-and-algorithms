function RepeatedWord (string)
{
    let arr= string.split(" ");
    let word = {};
    
    for(let i=0;i<arr.length;i++)
    {
        if(! word[arr[i]])
        {
            word[arr[i]] =1;
        }
        else
        return arr[i];
    }
    return null;
}

module.exports = RepeatedWord;

const exampleInput = "Once upon a time, there was a brave princess who...";
const exampleInput1 ="It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...";
const exampleInput2 = "It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...";

const repeatedWord = RepeatedWord(exampleInput);
const repeatedWord1 = RepeatedWord(exampleInput1);
const repeatedWord2 = RepeatedWord(exampleInput2);

console.log("First repeated word:", repeatedWord);
console.log("First repeated word:", repeatedWord1);
console.log("First repeated word:", repeatedWord2);