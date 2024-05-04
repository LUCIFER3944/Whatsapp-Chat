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
        console.time("conversation");
    
        // Get DOM elements
        const messageInput = document.querySelector('.conversation-form-input');
        const submitButton = document.querySelector('.conversation-form-submit');
        const conversationMain = document.querySelector('.conversation-main');
    
        // Add event listeners
        submitButton.addEventListener('click', sendMessage);
        messageInput.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                sendMessage(event);
            }
        });
    
        function sendMessage(event) {
            event.preventDefault();
    
            const message = messageInput.value.trim();
    
            if (message !== '') {
                // Create the image element
                const image = document.createElement('img');
                image.src = 'image/img (1).jpg'; // Replace with the actual path to your image
                image.alt = 'Profile Picture';
                image.style.borderRadius = "50%";
                image.style.width = '20px';
                image.style.height = '20x';
                image.style.objectFit = 'cover';
                image.style.marginRight = '10px'; // Add some margin between image and message
    
                // Append image to conversation main
                conversationMain.appendChild(image);
    
                // Create a new chat container for the message
                const chatContainer = document.createElement('div');
                chatContainer.classList.add('conversation-item-wrapper');
                chatContainer.classList.add('me');
    
                // Create the message paragraph
                const messageParagraph = document.createElement('p');
                messageParagraph.textContent = message;
                messageParagraph.style.display = 'block';
                messageParagraph.style.backgroundColor = '#10B981';
               
                messageParagraph.style.borderRadius = '5%';
    
                // Append message paragraph to chat container
                chatContainer.appendChild(messageParagraph);
    
                // Apply styling to the chat container
                chatContainer.style.color = 'white';
                chatContainer.style.backgroundColor = '#10B981';
                chatContainer.style.width = 'fit-content'; // Adjust container width based on content
                chatContainer.style.marginBottom = '10px'; // Add some margin between chat items
                chatContainer.style.borderRadius = '10%';
    
                // Append chat container to conversation main
                conversationMain.appendChild(chatContainer);
           
    
                // Reset input value
                messageInput.value = '';
            }
        }
    
        console.timeEnd("conversation");
    }
    
    // Call the conversation function
    conversation();
    



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
// ----------------------------------------------------------camera---------------------------------------------------------------
const startCameraButton = document.getElementById('startCamera');
const videoElement = document.getElementById('video');
const downloadLink = document.getElementById('downloadLink');

let stream;

// Function to start the camera
async function startCamera() {
    try {
        if (!stream) {
            stream = await navigator.mediaDevices.getUserMedia({ video: true });
            videoElement.srcObject = stream;
            videoElement.play();
            videoElement.style.display = 'block';
            downloadLink.style.display = 'none';
        } else {
            takePhoto();
        }
    } catch (err) {
        console.error('Error accessing camera:', err);
    }
}

// Function to take a photo
function takePhoto() {
    const canvas = document.createElement('canvas');
    canvas.width = videoElement.videoWidth;
    canvas.height = videoElement.videoHeight;
    canvas.getContext('2d').drawImage(videoElement, 0, 0);
    const photoData = canvas.toDataURL('image/jpeg');
    downloadLink.href = photoData;
    downloadLink.style.display = 'inline-block';
}

// Event listener for starting the camera
startCameraButton.addEventListener('click', startCamera);


// --------------------------------------------------------------attachment-----------------------------------------------------------------------------
var messageInput = document.querySelector('.conversation-form-input');
var submitButton = document.querySelector('.conversation-form-submit');
var conversationMain = document.querySelector('.conversation-main');

document.getElementById('attachment').addEventListener('click', function() {
    // Triggering click event on the hidden file input
    document.getElementById('file-input').click();
});

// Handling file selection
document.getElementById('file-input').addEventListener('change', function(event) {
    var file = event.target.files[0]; // Get the selected file
    if (file) {
        // Display image in chat
        displayImageInChat(file);
    }
});

// Function to display image in chat
function displayImageInChat(file) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function(event) {
        // Create a new chat container for the image
        var chatContainer = document.createElement('div');
        chatContainer.classList.add('conversation-item-wrapper');
        chatContainer.classList.add('me');

        // Create the image element
        var image = document.createElement('img');
        image.src = event.target.result;
        image.alt = 'Image'; // Provide appropriate alt text
        image.style.maxWidth = '300px'; // Adjust image size as needed

        // Append image to chat container
        chatContainer.appendChild(image);

        // Apply styling to the chat container
        chatContainer.style.display = 'flex';
        chatContainer.style.justifyContent = 'flex-start'; // Align items to the left
        chatContainer.style.alignItems = 'center';
        chatContainer.style.color = 'white';
        chatContainer.style.backgroundColor = '#10B981';
        chatContainer.style.width = 'fit-content'; // Adjust container width based on content
        chatContainer.style.marginBottom = '10px'; // Add some margin between chat items

        // Append chat container to conversation main
        conversationMain.appendChild(chatContainer);
    };
    reader.onerror = function(error) {
        console.error('Error reading file:', error);
    };
}

// //---------------------------------------------------Setting----------------------------------------

// document.addEventListener('DOMContentLoaded', function() {
//     var dropdownBtn = document.getElementById('setting');
//     var dropdownContent = document.querySelector('.dropdown-content');
  
//     dropdownBtn.addEventListener('click', function() {
//       if (dropdownContent.style.display === 'block') {
//         dropdownContent.style.display = 'none';
//       } else {
//         dropdownContent.style.display = 'block';
//       }
//     });
//   });
//   //---------------------------------------------------Folder----------------------------------------
//   document.addEventListener('DOMContentLoaded', function() {
//     var dropdownBtn = document.getElementById('folder');
//     var dropdownContent = document.querySelector('.dropdown-content1');
  
//     dropdownBtn.addEventListener('click', function() {
//       if (dropdownContent.style.display === 'block') {
//         dropdownContent.style.display = 'none';
//       } else {
//         dropdownContent.style.display = 'block';
//       }
//     });
//   });