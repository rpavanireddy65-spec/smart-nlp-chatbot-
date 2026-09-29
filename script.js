const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");
const typing = document.getElementById("typing");


// Send message when Enter is pressed
userInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        sendMessage();
    }

});


// ================= SEND MESSAGE =================

function sendMessage() {

    const message = userInput.value.trim();

    if (message === "") {
        return;
    }

    addMessage(message, "user");

    userInput.value = "";

    typing.classList.remove("hidden");

    setTimeout(function() {

        typing.classList.add("hidden");

        const response = getBotResponse(message);

        addMessage(response, "bot");

    }, 900);

}


// ================= ADD MESSAGE =================

function addMessage(text, sender) {

    const messageDiv = document.createElement("div");

    messageDiv.classList.add(
        "message",
        sender === "user" ? "user-message" : "bot-message"
    );


    const avatar = document.createElement("div");

    avatar.classList.add("message-avatar");

    avatar.innerHTML = sender === "user" ? "👤" : "🤖";


    const contentContainer = document.createElement("div");


    const content = document.createElement("div");

    content.classList.add("message-content");

    content.innerHTML = text;


    const time = document.createElement("div");

    time.classList.add("time");

    time.textContent = getTime();


    contentContainer.appendChild(content);
    contentContainer.appendChild(time);

    messageDiv.appendChild(avatar);
    messageDiv.appendChild(contentContainer);

    chatBox.appendChild(messageDiv);

    chatBox.scrollTop = chatBox.scrollHeight;

}


// ================= NLP RESPONSE SYSTEM =================

function getBotResponse(message) {

    const text = message.toLowerCase().trim();


    // Greeting
    if (
        text.includes("hello") ||
        text.includes("hi") ||
        text.includes("hey")
    ) {

        return "Hello! 👋 Nice to meet you. How can I help you today?";

    }


    // Name
    if (
        text.includes("your name") ||
        text.includes("who are you")
    ) {

        return "I'm <b>SmartBot</b> 🤖, a simple NLP-based chatbot created using HTML, CSS and JavaScript.";

    }


    // NLP
    if (
        text.includes("what is nlp") ||
        text.includes("define nlp") ||
        text.includes("natural language processing")
    ) {

        return `
        <b>NLP means Natural Language Processing.</b><br><br>

        It is a branch of Artificial Intelligence that helps computers understand, process and respond to human language. 🧠
        `;

    }


    // Capabilities
    if (
        text.includes("what can you do") ||
        text.includes("features") ||
        text.includes("help")
    ) {

        return `
        I can currently help with:<br><br>

        🤖 Chatting<br>
        🧠 Basic NLP questions<br>
        📚 Study tips<br>
        💻 Programming topics<br>
        🌐 Technology questions<br>
        😊 General conversation
        `;

    }


    // Study
    if (
        text.includes("study") ||
        text.includes("exam") ||
        text.includes("learning")
    ) {

        return `
        📚 <b>Study Tip</b><br><br>

        Try the <b>25-5 method</b>: study for 25 minutes, take a 5-minute break, and repeat. Keep your phone away while studying.
        `;

    }


    // Java
    if (
        text.includes("java")
    ) {

        return `
        ☕ <b>Java</b> is an object-oriented programming language.

        <br><br>

        Important beginner topics include:
        <br>
        • Classes and Objects<br>
        • Inheritance<br>
        • Polymorphism<br>
        • Exception Handling<br>
        • Arrays<br>
        • Collections
        `;

    }


    // Python
    if (
        text.includes("python")
    ) {

        return `
        🐍 <b>Python</b> is a high-level programming language known for its simple syntax.

        <br><br>

        It is widely used for:
        <br>
        • AI<br>
        • Data Science<br>
        • Web Development<br>
        • Automation<br>
        • Machine Learning
        `;

    }


    // AI
    if (
        text.includes("artificial intelligence") ||
        text === "ai" ||
        text.includes("what is ai")
    ) {

        return `
        🤖 <b>Artificial Intelligence</b> is the field of creating computer systems that can perform tasks that normally require human intelligence, such as understanding language, recognizing patterns and making decisions.
        `;

    }


    // Programming
    if (
        text.includes("programming") ||
        text.includes("coding")
    ) {

        return `
        💻 Programming means giving instructions to a computer using a programming language.

        <br><br>

        Popular languages include Java, Python, C, C++, JavaScript and many others.
        `;

    }


    // Thank you
    if (
        text.includes("thank")
    ) {

        return "You're welcome! 😊 I'm happy to help.";

    }


    // Bye
    if (
        text.includes("bye") ||
        text.includes("goodbye")
    ) {

        return "Goodbye! 👋 Have a great day!";

    }


    // Unknown query
    return `
        🤔 I'm still learning!

        <br><br>

        I couldn't find a suitable answer for that question.

        <br><br>

        Try asking something like:
        <br>
        • What is NLP?<br>
        • What is AI?<br>
        • What can you do?<br>
        • Give me a study tip<br>
        • What is Java?
    `;

}


// ================= QUICK QUESTION =================

function quickMessage(message) {

    userInput.value = message;

    sendMessage();

}


// ================= NEW CHAT =================

function newChat() {

    chatBox.innerHTML = `

        <div class="message bot-message">

            <div class="message-avatar">
                🤖
            </div>

            <div>

                <div class="message-content">
                    New conversation started! 👋<br><br>
                    How can I help you?
                </div>

                <div class="time">
                    Just now
                </div>

            </div>

        </div>

    `;

}


// ================= CLEAR CHAT =================

function clearChat() {

    chatBox.innerHTML = "";

}


// ================= EMOJI =================

function addEmoji() {

    userInput.value += " 😊";

    userInput.focus();

}


// ================= TIME =================

function getTime() {

    const now = new Date();

    return now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
    });

}