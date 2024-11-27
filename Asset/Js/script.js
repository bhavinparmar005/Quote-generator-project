
let quoteText = document.getElementsByClassName("quote_text");
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






changeQuoteBotton.addEventListener('click', () => {


 quoteText.textContent = quoteList[0].quote
 writerName.textContent = quoteList[0].writer
    
});








   


