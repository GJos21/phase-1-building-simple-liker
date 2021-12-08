// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

function handleError(flag, errorMessage) {
  const errorDiv = document.querySelector("div#modal");

  if (flag) {
    document.getElementById("modal-message").textContent = errorMessage;
    errorDiv.classList.remove("hiddne");
  } else {
    errorDiv.classList.add("hidden");
  }
    
}

const activateHeart = (e) => {
  const heart = e.target;

  if (heart.className.split(" ").includes("activated-heart")) {
    heart.innerHTML = EMPTY_HEART;
    heart.classList.remove("activated-heart");
  }
  else {
    mimicServerCall()
      .then(message => { 
        handleError(false);
        heart.innerHTML = FULL_HEART;
        heart.classList.add("activated-heart");
      })
      .catch (message => handleError(true, message));
  }
 
}

const hearts = document.querySelectorAll(".like-glyph")
hearts.forEach(el => el.addEventListener("click", activateHeart));
handleError(false);

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
