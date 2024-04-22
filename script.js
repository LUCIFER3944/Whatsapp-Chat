
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

