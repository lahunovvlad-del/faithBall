const container = document.createElement('div');
container.classList.add('box');

const pageText = document.createElement('p');
pageText.textContent = "Enter the question you are interested in";
container.appendChild(pageText);

const input = document.createElement('input');
input.type = 'text';
input.placeholder = 'My question is...';
container.appendChild(input);

const button = document.createElement('button');
button.classList.add('btn');
button.textContent = "Ask";
container.appendChild(button);



const answer = 
[
    {
        text: "Definitely",
        bg: "url('yes.jpg')",
        textColor: "#eff3f1"
    },
    {
        text: "Absolutely not",
        bg: "url('no.jpg')",
        textColor: "#eff3f1"
    },
    {
        text: "Maybe...",
        bg: "url('maybe.jpg')",
        textColor: "#eff3f1"
    },
    {
        text: "Not even close",
        bg: "url('notClose.jpg')",
        textColor: "#eff3f1"
    },
    {
        text: "Sure",
        bg: "url('sure.jpg')",
        textColor: "#eff3f1"
    }
]

button.addEventListener('click', () => {
    const text = input.value.trim();

    if (!text || !text.endsWith('?')) {
        alert('Fill the field and put the question mark at the end');
    } else {
        button.classList.add('animate-shake');
        
        button.textContent = "..."; 

        setTimeout(() => {
            button.classList.remove('animate-shake');

            const randomiser = Math.floor(Math.random() * answer.length);
            const result = answer[randomiser];
            
            button.textContent = result.text;
            button.style.backgroundImage = result.bg;
            button.style.color = result.textColor;
            button.style.backgroundSize = "cover";
            button.style.backgroundPosition = "center";
            
        }, 600);
    }
});

document.body.appendChild(container);