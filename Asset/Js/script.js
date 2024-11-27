
let quoteText = document.getElementsByClassName("quote_text")[0];
let writerName = document.getElementById("writer_name");
let changeQuoteBotton = document.getElementById("quote_change_button");



let  quoteList =[{
    
    quote: " Believe you can and you're halfway there.",
    writer: "Theodore Roosevelt..."
},
{
    quote: "The way to get started is to quit talking and begin doing.",
    writer: "Walt Disney..."

},
{
    quote: "Success is not final, failure is not fatal It is the courage to continu that counts.",
    writer: "Winston Churchill..."
   

},
{
    quote: "Don't watch the clock do what it does Keep going.",
    writer: "Sam Levenson..."
}
];





let count =0;

function hello(){
    count++
}
changeQuoteBotton.addEventListener('click', () => {
hello();
if(count ==1){
    quoteText.textContent= quoteList[0].quote
    writerName.textContent =quoteList[0].writer
} else if(count==2){
    quoteText.textContent=quoteList[1].quote
    writerName.textContent =quoteList[1].writer
}else if(count==3){
    quoteText.textContent=quoteList[2].quote
    writerName.textContent =quoteList[2].writer
}else if(count==4){
    quoteText.textContent=quoteList[3].quote
    writerName.textContent =quoteList[3].writer
}else{
    count=1;
}
console.log(count);
});










   


