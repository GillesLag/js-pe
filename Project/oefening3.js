const questions = [
  'Where did Frodo destroy the One Ring?',
  'What is Batman\'s real name?',
  'Which company developed the video game Minecraft?',
  'Which character is portrayed by Henry Cavill in the Netflix adaptation of The Witcher?',
  'Who likes to jump around on his tail in the Winnie The Pooh stories?'];
const answers = ['Mount Doom', 'Bruce Wayne', 'Mojang', 'Geralt of Rivia', 'Tigger'];

function oefening3(){
  let element = document.querySelector(".oefening3");
  element.classList.add("invisible");

  while (element.lastChild) {
    element.removeChild(element.lastChild);
  }

  const tags = [];

  for (let i = 0; i < questions.length; i++) {
    
    let answerUser = prompt(questions[i])

    console.log(answerUser);
    console.log(answers[i]);
    
    let div = document.createElement("div");
    let h4 = document.createElement("h4");
    let p = document.createElement("p");
    
    div.setAttribute("id", `answer${i+1}`);
    div.setAttribute("role", "alert");
    div.classList.add("text-center");

    h4.setAttribute("class", "alert-heading");
    h4.setAttribute("id", `alertHeadAnswer${i+1}`);
    h4.innerHTML = questions[i];

    p.setAttribute("id", `alertAnswer${i}`);

    if (answerUser === answers[i]) {
      div.classList.add("alert", "alert-success");
      p.innerHTML = `You answered: ${answerUser}`;
    }

    else{
      div.classList.add("alert", "alert-danger");
      p.innerHTML = `You answered: ${answerUser}<br/>` +
        `The correct answer was: ${answers[i]}`;
    }

    div.appendChild(h4);
    div.appendChild(p);
    element.appendChild(div);
  }

  element.classList.remove("invisible");
}