var staticActualUser = { id: 4, name: "Arvind", age: 18, email: "ar@gmail.com", phoneno: 4444, messages: [] }

var person = [

    { id: 1, name: "Dinesh", age: 18, email: "di@gmail.com", phoneno: 1111, messages: [] },
    { id: 2, name: "Vijay", age: 19, email: "vi@gmail.com", phoneno: 2222, messages: [] },
    { id: 3, name: "Rama", age: 18, email: "ra@gmail.com", phoneno: 3333, messages: [] },
    { id: 4, name: "Arvind", age: 18, email: "ar@gmail.com", phoneno: 4444, messages: [] },
    { id: 5, name: "Sundar", age: 18, email: "su@gmail.com", phoneno: 5555, messages: [] },
    { id: 6, name: "Sri", age: 20, email: "sr@gmail.com", phoneno: 6666, messages: [] },
    { id: 7, name: "Sanju", age: 18, email: "sa@gmail.com", phoneno: 7777, messages: [] },
    { id: 8, name: "Sandy", age: 18, email: "sa@gmail.com", phoneno: 8888, messages: [] },
    { id: 9, name: "Nandy", age: 18, email: "na@gmail.com", phoneno: 9999, messages: [] },
    { id: 10, name: "Swathi", age: 18, email: "swa@gmail.com", phoneno: 101010, messages: [] },
    { id: 11, name: "Aliyaa", age: 18, email: "al@gmail.com", phoneno: 111111, messages: [] },
    { id: 12, name: "Ram", age: 18, email: "ra@gmail.com", phoneno: 121212, messages: [] },
    { id: 13, name: "Sabi", age: 18, email: "sa@gmail.com", phoneno: 121333, messages: [] }
];


let colors = [
    "bg-primary",
    "bg-dark",
    "bg-info",
    "bg-danger",
    "bg-warning",
    "bg-secondary"
];
let random = Math.floor(Math.random() * colors.length);

let row = document.querySelector(".contacts");
var today = new Date();
let month = today.getMonth();
var date = today.getDate() + "/" + (month + 1);

let current = person.length;
person.map((p, current) => {
    if (p.id != 4) {

        row.innerHTML += `<div onClick="onTouch('${p.name}', ${current})" class="item position-relative align-items-center d-flex">
                        <div class="d-flex align-items-center justify-content-center img-avator ${colors[random]} ">
                            <div class="font-weight-normal  text-white">
                            ${p.name.toUpperCase().slice(0, 2)}</div>
                        </div>
                        <div class=" d-flex flex-column">
                            <div class="h5 m-0">${p.name}</div>
                            <div>${p.email}</div>
                        </div>
                        <div class="time position-absolute">${date}</div>
                        </div>            
                    `;
    }
});

var today = new Date();
var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date + " " + time;


function onTouch(name, id) {
    // console.log(name);
    // console.log(index);
    if (screen.width < 770) {
        // let list=document.querySelector('.item')
        let displayLeftHead = document.querySelector(".toggle");
        let displayLeftBody = document.querySelector(".content-area-left");
        let displayRightHead = document.querySelector(".chat-messages-header");
        let displayRightBody = document.querySelector(".msg-body");
        // hideHead.display.style:none;
        displayLeftHead.style.display = "none";
        displayLeftBody.style.display = "none";
        displayRightHead.style.display = "block";
        displayRightBody.style.display = "block";
        // list.style.background = 'green';
        // displayLB.style.background = '#3A6D99';
    }

    let keyboard = document.querySelector('.chat-footer');
    keyboard.style.display = "block";

    // person.forEach((p, index) => {
    // console.log(person[index]);
    // if()

    let conversation = person.find((oo) => {
        return id == oo.id
    })
    if (name) {
        conversation = person.find((oo) => {
            return name == oo.name
        })
    }


    if (conversation) {
        // console.log(conversation);
        document.getElementById("message-input-area").dataset.sender = conversation.id;
        document.getElementById("message-input-area").dataset.receiver = conversation.id;

        // console.log(conversation.id);

        document.querySelector(".chat-messages-header").innerHTML =
            // console.log(123);
            `
        <div>
            <div class="escape-back m-2" onClick="onExit(this)">
                <i class="fa fa-arrow-left" aria-hidden="true"></i>
            </div>
            <div class=" d-flex p-1 ml-5">
                <div class="d-flex flex-column pr-3">
                    <div>${conversation.name}</div>
                </div>
                <div>${conversation.phoneno}</div>
                <div class="icon-holder">
                    <span id="search-icon">
                        <i class="fa fa-search " aria-hidden="true"></i>
                    </span>
                    <span id="ellipsis">
                        <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                </div>
            </div>
        </div>`;

        $("#chat-body-items").html('')
        conversation.messages.map((message) => {
            // console.log(document.getElementById("chat-body-items"))
            let messageElement = `
            <div class="d-flex ${message.isSender ? 'sender' : 'receiver'}">            
                <div class="d-flex align-items-center justify-content-center img-avator-message ${colors[random]} ">
                    <div class=" font-weight-normal img-avator-text-message text-white">${message.owner.toUpperCase().slice(0, 1)}</div>
                </div>
                
                <div id="chat-highlighter">
                    <h5>${message.owner}</h5>
                    <input type="text" class="item_input"   value="${message.text}" disabled>
                </div>
            </div>`;
            $("#chat-body-items").append(messageElement)
            // document.getElementById("chat-body-items").appendChild = 
        })
        var messageBody = document.querySelector('#chat-body-items');
        messageBody.scrollTop = messageBody.scrollHeight - messageBody.clientHeight;
    }
    document.getElementById("message-input-area").value = "";

    var conversations = [
        {
            id: 1,
            between: [staticActualUser.id, id],
            messages: [
                {
                    text: $('#message-input-area').val(),
                    sender: staticActualUser.id,
                    receiver: id
                },
                // {
                //     text: $('#message-input-area').val(),
                //     sender: staticActualUser.id,
                //     receiver: 1
                // },
                {
                    text: $('#message-input-area').val(),
                    sender: id,
                    receiver: staticActualUser.id
                }
            ]
        }
        // ,
        // {
        //     id: 2,
        //     between: [4, 2],
        //     messages: [
        //         {
        //             text: "",
        //             sender: 4,
        //             receiver: 2
        //         }
        //     ]
        // },
    ]


    // Onclicking any user from user list
    const user1 = staticActualUser.id // static user ie,. YOU > id 4
    const user2 = id // userId of the person whom we click from the userList
    let getConversationId = conversations.find(oo => {
        return oo.between.includes(user1) && oo.between.includes(user2)
    })

    if (getConversationId) {
        conversationId = getConversationId.id

    } else {
        let payload = {
            id: id,
            between: [user1, user2],
            messages: []
        }
        conversations.push(payload)

    }

    // Onclicking the send button
    $("#message-send-button").on('click', function () {
        let senderId = $('#message-input-area').data('sender')
        let receiverId = $('#message-input-area').data('receiver')
        let conversationId = $('#message-input-area').data('conversation')

        let getConversationDetails = conversations.find(oo => {
            return oo.id == conversationId
        })
        getConversationDetails.push(
            {
                text: $('#message-input-area').val(),
                sender: senderId,
                receiver: receiverId
            }
        )
    })

    // Onclicking the receive button
    $("#message-receive-button").on('click', function () {

        let senderId = $('#message-input-area').data('receiver')
        let receiverId = $('#message-input-area').data('sender')
        let conversationId = $('#message-input-area').data('conversation')

        let getConversationDetails = conversations.find(oo => {
            return oo.id == conversationId
        })
        getConversationDetails.push(
            {
                text: $('#message-input-area').val(),
                sender: senderId,
                receiver: receiverId
            }
        )
    })
}
function onExit(e) {
    let displayLeftHead = document.querySelector(".toggle");
    let displayLeftBody = document.querySelector(".content-area-left");
    let displayRightHead = document.querySelector(".chat-messages-header");
    let displayRightBody = document.querySelector(".msg-body");
    displayLeftHead.style.display = "block";
    displayLeftBody.style.display = "block";
    displayRightHead.style.display = "none";
    displayRightBody.style.display = "none";
}

const makeRow = arr => {
    let totalRows = ``;
    arr.forEach(p => {
        if (p.id != 4) {
            totalRows =
                `${totalRows} <div onClick="onTouch('${p.id}', ${current})" class="item position-relative align-items-center d-flex">
            <div class="d-flex align-items-center justify-content-center img-avator ${colors[random]} ">
                <div class="font-weight-normal  text-white">
                ${p.name.toUpperCase().slice(0, 2)}</div>
            </div>
            <div class=" d-flex flex-column">
                <div class="h5 m-0">${p.name}</div>
                <div>${p.email}</div>
            </div>
            <div class="time position-absolute">${time}</div>
            </div> 
        </div>    
    `;
        }
    });
    document.getElementById("contactList").innerHTML = totalRows;
};

function finder(name) {
    const input = document.getElementById("myInput").value.toUpperCase();
    if (!!input) {
        let filtered = person.filter((current, i) =>
            current.name.toUpperCase().includes(input)
        );
        makeRow(filtered);
    } else {
        makeRow(person);
    }
}

// function onEntered(e) {
//     let forWelcome = document.querySelector(".body-greetings");
//     forWelcome.style.display = "none";
// }

// class chatBody {
//     constructor(itemName) {
//         this.create(itemName);
//     }

//     create(itemName) {
//         const msgcontainer = document.querySelector(".msg-body");
//         let textarea = document.querySelector(".item_input");
//         // console.log(textarea.value);
//         textarea.value = itemName;

//         textarea.disabled = true;
//         textarea.classList.add(".msg-body");
//         textarea.type = "text";

//         let itemBox = document.querySelector(". message-holder");
//         itemBox.classList.add("chatBody");

//         // console.log(chatBody);
//         console.log(itemBox);

//         msgcontainer.appendChild(itemBox);

//         // itemBox.appendChild(chatBody);
//     }
// }

// function check() {
//     var textarea = document.querySelector("#message-input-area");
//     if (textarea.value != "") {
//         new chatBody(textarea.value);
//         textarea.value = "";
//     }
//     textarea.value = "";
// }

window.addEventListener("keydown", e => {
    if (e.which == 13) {
        $('#message-send-button').trigger('click')
    }
});
window.addEventListener("keydown", e => {
    if (e.which == 39) {
        $('#message-receive-button').trigger('click')
    }
});


$(document).on('click', '#message-send-button', function () {
    let userId = $('#message-input-area').data("sender")
    // console.log(userId);
    let conversation = person.find((oo) => {
        return userId == oo.id
    })
    // console.log(conversation.id);

    if (conversation) {
        let payload = {
            text: $('#message-input-area').val(),
            owner: 'Admin',
            isSender: true
        }
        conversation.messages.push(payload)
        onTouch(null, conversation.id)
    }
    // if(onTouch(name,userId)){
    //     location.reload;
    // }
    // else{
    //     location.reload();
    // }
})

$(document).on('click', '#message-receive-button', function () {
    let userId = $('#message-input-area').data("receiver")
    let conversation = person.find((oo) => {
        return userId == oo.id
    })
    if (conversation) {
        let payload = {
            text: $('#message-input-area').val(),
            owner: conversation.name,
            isSender: false
        }
        conversation.messages.push(payload)
        onTouch(null, conversation.id)
    }
})