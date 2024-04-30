// start: Sidebar
document.querySelector('.chat-sidebar-profile-toggle').addEventListener('click', function(e) {
    e.preventDefault()
    this.parentElement.classList.toggle('active')
})

document.addEventListener('click', function(e) {
    if(!e.target.matches('.chat-sidebar-profile, .chat-sidebar-profile *')) {
        document.querySelector('.chat-sidebar-profile').classList.remove('active')
    }
})
// end: Sidebar



// start: Coversation
document.querySelectorAll('.conversation-item-dropdown-toggle').forEach(function(item) {
    item.addEventListener('click', function(e) {
        e.preventDefault()
        if(this.parentElement.classList.contains('active')) {
            this.parentElement.classList.remove('active')
        } else {
            document.querySelectorAll('.conversation-item-dropdown').forEach(function(i) {
                i.classList.remove('active')
            })
            this.parentElement.classList.add('active')
        }
    })
})

document.addEventListener('click', function(e) {
    if(!e.target.matches('.conversation-item-dropdown, .conversation-item-dropdown *')) {
        document.querySelectorAll('.conversation-item-dropdown').forEach(function(i) {
            i.classList.remove('active')
        })
    }
})

document.querySelectorAll('.conversation-form-input').forEach(function(item) {
    item.addEventListener('input', function() {
        this.rows = this.value.split('\n').length
    })
})

document.querySelectorAll('[data-conversation]').forEach(function(item) {
    item.addEventListener('click', function(e) {
        e.preventDefault()
        document.querySelectorAll('.conversation').forEach(function(i) {
            i.classList.remove('active')
        })
        document.querySelector(this.dataset.conversation).classList.add('active')
    })
})

document.querySelectorAll('.conversation-back').forEach(function(item) {
    item.addEventListener('click', function(e) {
        e.preventDefault()
        this.closest('.conversation').classList.remove('active')
        document.querySelector('.conversation-default').classList.add('active')
    })
})
// end: Coversation

// <----------------------------------Conversation js----------------------------->
// let conversation2 = document.querySelector("#conversation-2");
// let conversation3 = document.querySelector("#conversation3");

// conversation3.addEventListener("click", () => {

//     document.conversation2.innerHTML += conversation2.innerHTML;
    
//     let newPhotoUrl1 = "image/img (10).jpg";
//     let conversation3Photo = document.querySelector("#conversation3img");
//     let conversation4Photo = document.querySelector("#conversation4img");
    
//     conversation3Photo.src = newPhotoUrl1;
//     conversation4Photo.src = newPhotoUrl1;
  
// });
//Don't know it's does not work as it should be so we should just leave it like that lol 

// <----------------------------------Conversation js----------------------------->

    // ----------------------------------Function to handle sending a message---------------------------------------------------
  function conversation() {
    console.time("test")
    var messageInput = document.querySelector('.conversation-form-input');
      const submitButton = document.querySelector('.conversation-form-submit');
      const chatMessagesContainer = document.querySelector('#me');
      const conversationmain = document.querySelector('.conversation-main');
      
      submitButton.addEventListener('click', sendMessage);
      messageInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
          sendMessage(event);
        }
      });
      
      function sendMessage(event) {
        event.preventDefault();
        
        const message = messageInput.value.trim();
        
        if (message !== '') {// It's NOT
          // Show the chat container
          chatMessagesContainer.style.display = 'block';
          chatMessagesContainer.style.color = 'white';
          chatMessagesContainer.style.backgroundColor = '#10B981';
          chatMessagesContainer.style.width = '40vw';
  
          
          // Show the message paragraph
          const messageParagraph = document.createElement('p');
          messageParagraph.textContent = message;
          messageParagraph.style.display = 'block';
          chatMessagesContainer.style.borderRadius = '3%';
  
          
          chatMessagesContainer.appendChild(messageParagraph); // Append message paragraph to chatMessagesContainer
          
          messageInput.value = '';
        }
      } console.timeEnd("test")
  }
    // ---------------------------------------Emotes-------------------------------------------------------------------------------
   function emotepicker() {

    const emoticonButton = document.getElementById('emoticon-button');
    const emoticonPicker = document.querySelector('.emoticon-picker');
    var  messageInput = document.querySelector('.conversation-form-input');
    
    // Toggle emoticon picker visibility when the emoticon button is clicked
    emoticonButton.addEventListener('click', function() {
        emoticonPicker.style.display = emoticonPicker.style.display === 'block' ? 'none' : 'block';
    });
    
    // Add event listener to each emoticon option
    const emoticonOptions = document.querySelectorAll('.emoticon-option');
    emoticonOptions.forEach(option => {
        option.addEventListener('click', function() {
            const selectedEmoticon = option.textContent;
            // Insert the selected emoticon into the textarea
            insertEmoticon(selectedEmoticon);
            // Hide the emoticon picker
            emoticonPicker.style.display = 'none';
        });
    });
    
    function insertEmoticon(emoticon) {
        // Insert the emoticon at the cursor position or at the end of the textarea
        const cursorPosition = messageInput.selectionStart;
        const currentValue = messageInput.value;
        const newValue =
            currentValue.substring(0, cursorPosition) +
            emoticon +
            currentValue.substring(cursorPosition);
        messageInput.value = newValue;
    }


   }
   document.addEventListener('DOMContentLoaded', function() {
    conversation();
    emotepicker();
});
   
//example
// let you=document.createElement("div");
// let me =document.createTextNode("hello")

// let example=you.appendChild(me);
// console.log(example);

// document.body.addEventListener("keydown",(e)=>{
// e.key=="enter"
// console.log(e)
// })