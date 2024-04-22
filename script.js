
    document.addEventListener("DOMContentLoaded", function() {
        const inputField = document.querySelector(".chat_input input");
        const chatbox = document.querySelector(".chatbox");

        inputField.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                const message = inputField.value.trim();
                if (message !== "") {
                    appendMessage(message, "my_msg");
                    inputField.value = ""; // Clear the input field
                }
            }
        });

        function appendMessage(message, className) {
            const currentTime = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
            const messageHTML = `
                <div class="message ${className}">
                    <p>${message}<br><span>${currentTime}</span></p>
                </div>`;
            chatbox.insertAdjacentHTML("beforeend", messageHTML);
            chatbox.scrollTop = chatbox.scrollHeight; // Scroll to bottom
        }
    });

    function searchChats() {
        // Get input value
        var input = document.getElementById('searchInput');
        var filter = input.value.toUpperCase();

        // Get chat list
        var chatList = document.getElementsByClassName('block');

        // Loop through all list items, and hide those who don't match the search query
        for (var i = 0; i < chatList.length; i++) {
            var chatName = chatList[i].getElementsByClassName('listHead')[0].getElementsByTagName('h4')[0];
            var txtValue = chatName.textContent || chatName.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                chatList[i].style.display = "";
            } else {
                chatList[i].style.display = "none";
            }
        }
    }
    window.onload = function() {
        var chatList = document.getElementsByClassName('block');
        for (var i = 0; i < chatList.length; i++) {
            chatList[i].addEventListener('click', function() {
                var chatName = this.getElementsByClassName('listHead')[0].getElementsByTagName('h4')[0].innerText;
                openChat(chatName);
            });
        }
    }

    // Function to open chat for a specific contact
    function openChat(contactName) {
        // Here, you would implement the logic to load the chat messages for the selected contact
        // For demonstration purposes, let's just display the contact name in the chatbox
        document.getElementById('chatbox').innerHTML = '<h2>' + contactName + '</h2>';
    }