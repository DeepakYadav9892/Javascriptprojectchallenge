const question=[
    {
        'que':'Which of the following is a markup language?',
        'a': 'HTML',
        'b':'CSS',
        'c':'Javascript',
        'd':'PHP',
        'correct':'a'
    },
    {
        'que':"What year was javascript Launched ",
        'a': '1996',
        'b':'1995',
        'c':'1994',
        'd':'None',
        'correct':'b'
    },
    {
        'que':'what is css stand for ?',
        'a': 'Hyper text markup Language ',
        'b':'CSS',
        'c':'Javascript',
        'd':'PHP',
        'correct':'a'
    },
]
let index=0;
const quesBox=document.getElementById("quesBox") 
const loadQuestion=()=>{
const data=question[index]
quesBox.innerText=data.que;
console.log(data)
quesBox.innerText='${index+1})${data.que}';


}
//initial call 
loadQuestion();
