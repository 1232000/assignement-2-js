var quotes =[
        "“Be yourself; everyone else is already taken.”<br/>― Oscar Wilde" 
        ,"“You only live once, but if you do it right, once is enough.”<br/>― Mae West"
        ,"“Be the change that you wish to see in the world.”<br/>― Mahatma Gandhi"
        ,"“To live is the rarest thing in the world. Most people exist, that is all.”<br/>― Oscar Wilde"
        ,"“We accept the love we think we deserve.”<br/>― Stephen Chbosky, The Perks of Being a Wallflower"
        ,"“A room without books is like a body without a soul.”<br/>― Marcus Tullius Cicero"
        ,"“Resentment is like drinking poison and waiting for your enemies to die.”<br/>--Nelson Mandela"
    ];

function quote(){
    do{
        var printRandom = quotes[Math.floor(Math.random() * quotes.length)];
    }
    while(printRandom === lastIndex){
        document.getElementById("quote").innerHTML= printRandom;
    }
    var lastIndex = print ;
}
