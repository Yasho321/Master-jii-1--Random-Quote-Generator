
const colorThemes = {
    "#1E1E1E": "#F5F5F5",  
    "#F8F9FA": "#212529",  
    "#FFEBE0": "#4A4A4A",  
    "#FF5722": "#FFFFFF",  
}

async function randomquote() {
    const url ="https://api.freeapi.app/api/v1/public/quotes/quote/random";
    const response = await fetch(url);
    const data = await response.json();
    document.getElementById("author").innerText=":- "+data.data.author;
    document.getElementById("content").innerText=`"${data.data.content}"`;
    let x=Object.keys(colorThemes).length;
    let randomTheme = Object.keys(colorThemes)[Math.floor(Math.random() * x)];
    document.body.style.backgroundColor = randomTheme;
    document.body.style.color = colorThemes[randomTheme];
    document.getElementById("copy-quote").innerText="Copy Quote";
    document.getElementById("tweet-quote").innerText="Tweet Quote";

    
} 
randomquote();
document.getElementById("new-quote").addEventListener("click",function(){
    randomquote();
    
})
document.getElementById("copy-quote").addEventListener("click",function(){
    navigator.clipboard.writeText(document.getElementById("content").innerText +  document.getElementById("author").innerText);
    this.innerText="Copied"
})

document.getElementById("tweet-quote").addEventListener("click",function(){
    const tweetText = `${document.getElementById("content").innerText}  ${document.getElementById("author").innerText}`;
    const finalText=encodeURIComponent(tweetText);
    const tweetUrl = `https://twitter.com/intent/tweet?text=${finalText}`;
    window.open(tweetUrl, '_blank');
    this.innerText="Tweeted";

})