function quizFunction(){

let quiz = [
    {
          prompt: "What is my education?\n (1) Computer Science\n\ (2) Multimediedesign\n (3) Construction Management",
          answer: "2"
    },
    {
         prompt: "How old am I?\n (1) 24\n\ (2) 22\n (3) 28",
         answer: "2"
    },
    {
         prompt: "Where am I from?\n (1) Tanzania\n\ (2) Peru\n (3) Palestine",
         answer: "3"
    },
    {   
        prompt: "What is my favorite sport?\n (1) Football\n\ (2) Tennis\n (3) Basketball",
        answer: "1"

    }
];
let results = 0;

for(let i = 0; i < quiz.length; i++){
    let game = window.prompt(quiz[i].prompt);
    if(game == quiz[i].answer){
         results++;
         alert("Correct answer");
    } else {
         alert("Wrong answer");   
    }
}
alert("you got " + results + "/" + quiz.length);



}

let age = 2;
let go = 23;

console.log(age - go);