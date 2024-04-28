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
let conversation2 = document.querySelector("#conversation-2");
let conversation3 = document.querySelector("#conversation3");

conversation3.addEventListener("click", () => {

    document.conversation2.innerHTML += conversation2.innerHTML;
    
    let newPhotoUrl1 = "image/img (10).jpg";
    let conversation3Photo = document.querySelector("#conversation3img");
    let conversation4Photo = document.querySelector("#conversation4img");
    
    conversation3Photo.src = newPhotoUrl1;
    conversation4Photo.src = newPhotoUrl1;
  
});
//Don't know it's does not work as it should be so we should just leave it like that lol 


$(document).ready(function(){
    $("#fetchData").click(function(){
        $.ajax({
            url: 'profile.html',
            method: 'GET',
            success: function(data) {
                // Handle successful response
                $('#dataContainer').html(data);
            },
            error: function(xhr, status, error) {
                // Handle errors
                console.error(status, error);
            }
        });
    });
});