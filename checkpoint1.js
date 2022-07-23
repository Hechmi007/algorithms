// number of characters
const str = 'Life, the universe and everything. Answer:';

console.log(`${str} ${str.length}`);

//number of words
function countWord(str)
{
return str.split(" ").length;
}
//number of Vowels
function countVowels(subject) {
    return subject.match(/[aeiou]/gi).length;
}