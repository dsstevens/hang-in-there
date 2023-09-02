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
// cover, title descriptor
var posterImg = document.querySelector(".poster-img");
var posterTitle = document.querySelector(".poster-title");
var posterQuote = document.querySelector(".poster-quote");
// buttons
var saveButton = document.querySelector(".save-poster");
var showSavedBtn = document.querySelector(".show-saved");
var showRandomBtn = document.querySelector(".show-random");
var showFormBtn = document.querySelector(".show-form");
var showMainBtn = document.querySelector(".show-main");
var showMyPosterBtn = document.querySelector(".make-poster")
var goBackToMainBtn = document.querySelector(".back-to-main")
// views
var showMainPoster = document.querySelector(".main-poster")
var posterForm = document.querySelector(".poster-form")
var savedPostersView = document.querySelector(".saved-posters")
var savedPostersGrid = document.querySelector(".saved-posters-grid")
// user created
var userCreatedTitle = document.querySelector("#poster-title")
var userCreatedQuote = document.querySelector("#poster-quote")
var userCreatedImage = document.querySelector("#poster-image-url")

// event listeners go here 👇
window.addEventListener("load", displayRandom);
saveButton.addEventListener("click", savePoster);
showSavedBtn.addEventListener("click", function(event){
  event.preventDefault()
  displaySavedPosters()
  displaySavedSection()
});
showRandomBtn.addEventListener("click", displayRandom);
showFormBtn.addEventListener("click", createCustomView);
showMainBtn.addEventListener("click", displayMain);
showMyPosterBtn.addEventListener("click",function(event){
  event.preventDefault()
  createCustomPoster()
  displayMain()
});
goBackToMainBtn.addEventListener("click",displayMain);

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
  showElement(showMainPoster)
  hideElement(posterForm)
  hideElement(savedPostersView)
}

function showElement(element) {
  element.classList.remove("hidden");
}
function hideElement(element) {
  element.classList.add("hidden");
}

function createCustomView() {
  hideElement(showMainPoster)
  showElement(posterForm)
}

function createCustomPoster(){
  currentPoster = createPoster(userCreatedImage, userCreatedTitle, userCreatedQuote )
  posterImg.src = userCreatedImage.value 
  posterTitle.innerHTML = userCreatedTitle.value
  posterQuote.innerHTML = userCreatedQuote.value
 hideElement(posterForm)
 showElement(showMainPoster)
 return currentPoster
}

function savePoster() {
  var currentPoster = createPoster(posterImg.src, posterTitle.innerText, posterQuote.innerText);

  function posterMatches(poster) {
    return (
      poster.imageURL === currentPoster.imageURL &&
      poster.title === currentPoster.title &&
      poster.quote === currentPoster.quote
    )
  }

  if (!savedPosters.some(posterMatches)) {
    savedPosters.push(currentPoster);
  }
}

function displaySavedPosters() {
  hideElement(showMainPoster)
  showElement(savedPostersView)
}

function displaySavedSection() {
  savedPostersGrid.innerHTML = savedPosters.map(function (poster) {
    return `
      <div class="mini-poster" data-id="${poster.id}">
        <img src="${poster.imageURL}" alt="${poster.title}">
        <h2>${poster.title}</h2>
        <h4>${poster.quote}</h4>
      </div>
    `;
  }).join('');
}

savedPostersGrid.addEventListener("dblclick", function (event) {
  var miniPoster = event.target.closest(".mini-poster");
  if (miniPoster) {
    var id = miniPoster.getAttribute("data-id");
    var index = savedPosters.findIndex((poster) => poster.id.toString() === id);
    if (index !== -1) {
      savedPosters.splice(index, 1);

      displaySavedSection();
    }
  }
});


/*

iteration 2
~~~~~~~~~~~~
TARGET THE INNERHTML TO CREATE NEW & SAVE
On the new poster form view, users should be able to fill out the three input fields and then hit the Show My Poster button
--> the query selector, event listener and function are made! :)
----> still need the show my poster button to work

When the Show My Poster button is clicked, several things will happen:
--> idk y it takes us back to main (for now)

Use the values from the inputs to create a new, unique poster object (part of your data model)
--> call upon the createPoster function to create the poster object

Save the submitted data into the respective arrays (image URL into the images array, etc - all part of your data model) so that future random posters can use the user-created data
--> create a function to push input into savedposters, caption, phrase, & image source array

Change back to the main poster view (hiding the form view again)
--> this should work w our hidden views, double check

Use the new, unique poster object (part of your data model) to display the newly created poster image, title, and quote in the main view on the DOM
--> write a function to display poster, using the currentCover variable given

*** hint***
Is something weird happening when you click the button? Try googling event.preventDefault()!

iteration 3
~~~~~~~~~~~
When a user clicks the “Save This Poster” button, the current main poster will be added to the savedPosters array.
--> savePoster function done
----> .push method

If a user clicks the “Save This Poster” more than once on a single poster, it will still only be saved once (no duplicates)
--> create a truthy/falsy variable for a conditional

When a user clicks the “Show Saved Posters” button, we should see the saved posters section
All the posters in the savedPosters array should be displayed in the saved posters grid section
--> create a function as an event handler?
----> target the section with innerHTML as an empty string
------> because working off an array, for loop?



iteration 4
~~~~~~~~~~~
From the saved posters view, if a user double clicks a saved poster, it will be deleted
HTML onclick attributes should not be used in any HTML code - all functionality should be through JavaScript
--> event listener for the image with the dblclick event
----> event bubbling to target the section where the image is in saved posters view


*/
