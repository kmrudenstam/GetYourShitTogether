const randGifPics = {
    "1": "https://media.giphy.com/media/acttIrNAHaoco/giphy.gif",
    "2": "https://media.giphy.com/media/l0HlGfiU5tgP5k7JK/giphy.gif",
    "3": "https://media.giphy.com/media/l0HFkA6omUyjVYqw8/giphy.gif",
    "4": "https://media.giphy.com/media/uOgj4DRPrfvJ6/giphy.gif",
    "5": "https://media.giphy.com/media/3orieKdD0wbWm5wexW/giphy.gif",
    "6": "https://media.giphy.com/media/3o6ZsVZwQ43bTfhXOM/giphy.gif",
    "7": "https://media.giphy.com/media/TJFjRsvvYST4Y/giphy.gif",
    "8": "https://media.giphy.com/media/3MgLhAYvkqIz2UP5g9/giphy.gif",
    "9": "https://media.giphy.com/media/26ufmrFR3PCFDwqyc/giphy.gif",
    "10": "https://media.giphy.com/media/26tP41fh76vmLO3iU/giphy.gif",
    "11": "https://media.giphy.com/media/l0HlvLUTZLNJYE2m4/giphy.gif",
    "12": "https://media.giphy.com/media/yRNSxsl1rJEwU/giphy.gif",
}
const values = Object.values(randGifPics)

const randomValue = values[parseInt(Math.random() * values.length)]

console.log("<img src='"+randomValue+"'>")

document.getElementById("randomGif").innerHTML = "<img class='randomimg' src='"+randomValue+"'>";


function randomQuotes() {
   const randQuotes = {
        "1": "&quot;Learn to enjoy every minute of your life. Be happy now. Don't wait for something outside of yourself to make you happy in the future.&quot; -Earl Nightingale",
        "2": "&quot;Peace is the beauty of life. It is sunshine. It is the smile of a child, the love of a mother, the joy of a father, the togetherness of a family. It is the advancement of man, the victory of a just cause, the triumph of truth.&quot; -Menachem Begin",
        "3": "&quot;Don't depend on other people to be responsible for you. Don't make yourself stressed out over nonsensical things like material things&quot; -Eartha Kitt",
        "4": "&quot;Children will not remember you for the material things you provided but for the feeling that you cherished them.&quot; -Richard L. Evans",
        "5": "&quot;Somehow, we have come to the erroneous belief that we are all but flesh, blood, and bones, and that's all. So we direct our values to material things. &quot; -Maya Angelou",
        "6": "&quot;I have a notion that if you are going to be spiritually curious, you better not get cluttered up with too many material things.&quot; -Alicia Keys",
        "7": "&quot;I thought material things would bring me happiness, which they didn't. But through this, I have learned what things are important and what aren't. &quot; -Tom Ford",
        
    }


const values = Object.values(randQuotes)

const randomValue = values[parseInt(Math.random() * values.length)]

console.log(randomValue)

document.getElementById("randomQuote").innerHTML = "<p class='randomquote'>"+randomValue+"</p>"; 
};

randomQuotes();
