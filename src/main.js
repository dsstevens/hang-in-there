// we've provided you with some data to work with 👇
var images = [
  "./assets/bees.jpg",
  "./assets/bridge.jpg",
  "./assets/butterfly.jpg",
  "./assets/cliff.jpg",
  "./assets/elephant.jpg",
  "./assets/flock.jpg",
  "./assets/fox.jpg",
  "./assets/frog.jpg",
  "./assets/horse.jpg",
  "./assets/lion.jpg",
  "./assets/mountain.jpg",
  "./assets/pier.jpg",
  "./assets/puffins.jpg",
  "./assets/pug.jpg",
  "./assets/runner.jpg",
  "./assets/squirrel.jpg",
  "./assets/tiger.jpg",
  "./assets/turtle.jpg",
];
var titles = [
  "determination",
  "success",
  "inspiration",
  "perspiration",
  "grit",
  "empathy",
  "feelings",
  "hope",
  "believe",
  "try",
  "conviction",
  "accomplishment",
  "achievement",
  "ambition",
  "clarity",
  "challenge",
  "commitment",
  "confidence",
  "action",
  "courage",
  "focus",
  "breathe",
  "gratitude",
  "imagination",
  "kindness",
  "mindfulness",
  "knowledge",
  "opportunity",
  "passion",
  "patience",
  "practice",
  "smile",
  "trust",
  "understanding",
  "wisdom",
];
var quotes = [
  "Don’t downgrade your dream just to fit your reality, upgrade your conviction to match your destiny.",
  "You are braver than you believe, stronger than you seem and smarter than you think.",
  "You are confined only by the walls you build yourself.",
  "The one who has confidence gains the confidence of others.",
  "Act as if what you do makes a difference. It does.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Never bend your head. Always hold it high. Look the world straight in the eye.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "Believe you can and you're halfway there.",
  "When you have a dream, you've got to grab it and never let go.",
  "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
  "No matter what you're going through, there's a light at the end of the tunnel.",
  "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.",
  "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
  'Limit your "always" and your "nevers."',
  "You are never too old to set another goal or to dream a new dream.",
  "Try to be a rainbow in someone else's cloud.",
  "You do not find the happy life. You make it.",
  "Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen.",
  "Sometimes you will never know the value of a moment, until it becomes a memory.",
  "The most wasted of days is one without laughter.",
  "You must do the things you think you cannot do.",
  "It isn't where you came from. It's where you're going that counts.",
  "It is never too late to be what you might have been.",
  "Happiness often sneaks in through a door you didn't know you left open.",
  "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
  "Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination.",
  "Be the change that you wish to see in the world.",
  "Let us make our future now, and let us make our dreams tomorrow's reality.",
  "You don't always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens.",
  "If I cannot do great things, I can do small things in a great way.",
  "Don't wait. The time will never be just right.",
  "With the right kind of coaching and determination you can accomplish anything.",
  "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.",
  "No matter what people tell you, words and ideas can change the world.",
  "Each person must live their life as a model for others.",
  "A champion is defined not by their wins but by how they can recover when they fall.",
];

var savedPosters = [];
var currentPoster;

// query selector variables go here 👇
var saveButton = document.querySelector(".save-poster");
var showSavedBtn = document.querySelector(".show-saved");
var showRandomBtn = document.querySelector(".show-random");
var showFormBtn = document.querySelector(".show-form");
var posterImg = document.querySelector(".poster-img");
var posterTitle = document.querySelector(".poster-title");
var posterQuote = document.querySelector(".poster-quote");
var showMainBtn = document.querySelector(".show-main");
var showMainPoster = document.querySelector(".main-poster")
var posterForm = document.querySelector(".poster-form")
var makePosterBtn = document.querySelector(".make-poster")
var goBackToMain = document.querySelector(".back-to-main")

// event listeners go here 👇
window.addEventListener("load", displayRandom);
saveButton.addEventListener("click", savePoster);
showSavedBtn.addEventListener("click", displaySaved);
showRandomBtn.addEventListener("click", displayRandom);
showFormBtn.addEventListener("click", createCustomView);
showMainBtn.addEventListener("click", displayMain);
makePosterBtn.addEventListener("click", createCustomView)
goBackToMain.addEventListener("click",displayMain)
// functions and event handlers go here 👇

// (we've provided two to get you started)!
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function createPoster(imageURL, title, quote) {
  return {
    id: Date.now(),
    imageURL: imageURL,
    title: title,
    quote: quote,
  };
}

function generateRandom() {
  var imageURL = getRandomIndex(images);
  var title = getRandomIndex(titles);
  var quote = getRandomIndex(quotes);

  return createPoster(imageURL, title, quote);
}

function displayRandom() {
  var randomPoster = generateRandom();
  posterImg.src = images[randomPoster.imageURL];
  posterTitle.innerHTML = titles[randomPoster.title];
  posterQuote.innerHTML = quotes[randomPoster.quote];
}
function displayMain() {
  // take us back to the main page from the custom form
  showElement(showMainPoster)
  hideElement(posterForm)
  hideElement(savedPosters)
}

//hidden and visible toggle vs conditional statements that are repetitive
// two functions to add or remove the hidden property
//classList
//methods like add and remove and toggle
//elements can have a classList property

function showElement(element) {
  element.classList.remove("hidden");
}
function hideElement(element) {
  element.classList.add("hidden");
}

function createCustomView() {
  showElement(makePosterBtn)
  hideElement(showMainPoster)
  showElement(posterForm)
}
// target input value = innerHTML for poster title
// target input value = innerHTML for poster quote
// target input value = src for poster image url

function savePoster() {

}
function displaySaved() {
  hideElement(showMainPoster)
  showElement(savedPosters)
  showElement(goBackToMain)
}
/*
iteration 1
~~~~~~~~~~
BUTTONS!
When a user clicks the “Make Your Own Poster” button, we should see the form, and the main poster should be hidden
--> event listener for make your own poster button
----> toggle function for showing the form & hiding the landing page

When a user clicks the “View Saved Posters” button, we should see the saved posters area, and the main poster should be hidden
--> event listener for the view saved posters button
----> toggle function for showing the saved posters and hiding the main poster

When a user clicks the “Nevermind, take me back!” or “Back to Main” buttons, we should only see the main poster section
--> event listener for the return button
----> toggle function to hide the posters and show main page

In summary: Be able to switch between the three views (main poster, form, and saved posters) on the correct button clicks

***go check out the HTML and CSS files to see how the form and saved posters sections are being hidden in the first place

iteration 2
~~~~~~~~~~~~
TARGET THE INNERHTML TO CREATE NEW & SAVE
On the new poster form view, users should be able to fill out the three input fields and then hit the Show My Poster button

When the Show My Poster button is clicked, several things will happen:

Use the values from the inputs to create a new, unique poster object (part of your data model)

Save the submitted data into the respective arrays (image URL into the images array, etc - all part of your data model) so that future random posters can use the user-created data

Change back to the main poster view (hiding the form view again)

Use the new, unique poster object (part of your data model) to display the newly created poster image, title, and quote in the main view on the DOM
*/
