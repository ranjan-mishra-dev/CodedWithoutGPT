const quotes = [
    "The best way to predict the future is to create it. - Peter Drucker",
    "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer",
    "Do what you can, with what you have, where you are. - Theodore Roosevelt",
    "In the middle of every difficulty lies opportunity. - Albert Einstein",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "Opportunities don't happen. You create them. - Chris Grosser",
    "Your time is limited, so don’t waste it living someone else’s life. - Steve Jobs",
    "Dream big and dare to fail. - Norman Vaughan",
    "Act as if what you do makes a difference. It does. - William James",
    "Do not wait to strike till the iron is hot, but make it hot by striking. - William Butler Yeats",
    "We are what we repeatedly do. Excellence, then, is not an act, but a habit. - Aristotle",
    "Happiness depends upon ourselves. - Aristotle",
    "What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar",
    "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
    "With the new day comes new strength and new thoughts. - Eleanor Roosevelt",
    "If you want to achieve greatness, stop asking for permission. - Anonymous",
    "Great things never come from comfort zones. - Anonymous",
    "Don’t watch the clock; do what it does. Keep going. - Sam Levenson",
    "The secret of getting ahead is getting started. - Mark Twain",
    "Quality means doing it right when no one is looking. - Henry Ford",
    "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart. - Roy T. Bennett",
    "The road to success and the road to failure are almost exactly the same. - Colin R. Davis",
    "Either you run the day or the day runs you. - Jim Rohn",
    "If opportunity doesn’t knock, build a door. - Milton Berle",
    "Everything you’ve ever wanted is on the other side of fear. - George Addair",
    "You don’t have to be great to start, but you have to start to be great. - Zig Ziglar",
    "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
    "Don’t count the days, make the days count. - Muhammad Ali",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "The successful warrior is the average man, with laser-like focus. - Bruce Lee",
    "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
    "Do what you love and the money will follow. - Marsha Sinetar",
    "Everything you can imagine is real. - Pablo Picasso",
    "Hardships often prepare ordinary people for an extraordinary destiny. - C.S. Lewis",
    "All our dreams can come true, if we have the courage to pursue them. - Walt Disney",
    "Start where you are. Use what you have. Do what you can. - Arthur Ashe",
    "Go confidently in the direction of your dreams. Live the life you have imagined. - Henry David Thoreau",
    "Doubt kills more dreams than failure ever will. - Suzy Kassem",
    "We may encounter many defeats but we must not be defeated. - Maya Angelou",
    "Don’t let what you cannot do interfere with what you can do. - John Wooden",
    "Act as though it is impossible to fail. - Dorothea Brande",
    "Perseverance is not a long race; it is many short races one after the other. - Walter Elliot",
    "There are no limits to what you can accomplish, except the limits you place on your own thinking. - Brian Tracy",
    "Success is getting what you want. Happiness is wanting what you get. - Dale Carnegie",
    "Hustle in silence and let your success make the noise. - Anonymous",
    "The expert in anything was once a beginner. - Helen Hayes",
    "Courage is resistance to fear, mastery of fear, not absence of fear. - Mark Twain",
    "Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway. - Earl Nightingale"
];


const get = document.getElementById("get");
const div = document.querySelector(".box");

get.addEventListener("click", () => {
    let index = getRandomInt(0, quotes.length - 1);
    let quote = quotes[index];
    div.innerHTML = "";

    let p = document.createElement("p");
    p.classList.add("styled-quote");
    p.innerText = quote;
    div.appendChild(p);

    
})

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}