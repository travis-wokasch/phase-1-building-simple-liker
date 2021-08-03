// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'


// Your JavaScript code goes here!

//add .hidden to error modal in HTML
let errorModal = document.querySelector('#modal')
errorModal.className = 'hidden'

//click on empty heart button: span class ='like-glyph'
const hearts = document.querySelectorAll('.like-glyph')
//Invoke server call to similate request

function liking(heart){
  if(heart.innerText === EMPTY_HEART) {
    heart.innerText = FULL_HEART
    heart.className = 'activated-heart'
  } else {
    heart.innerText = EMPTY_HEART
    heart.classList.remove('activated-heart')
  }
}

hearts.forEach(heart => {
    heart.addEventListener('click', () => {
    mimicServerCall()
      .then(res => {
        liking(heart)
      })
      // .then(res => {
      //   heart.innerText = EMPTY_HEART
      //   heart.classList.remove('activated-heart')
      // })
      .catch(function(error) {
        errorModal.hidden = false
        alert('Random server error. Try again.')
        document.getElementById('modal-message').innerText = error
        setTimeout(() => errorModal.hidden = true, 3000)
      })
    })
  })

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
