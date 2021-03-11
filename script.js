const url = 'https://api.quotable.io/random';

function handleQuotes(){
    fetch(url)
    .then(response => response.json())
    .then(data => {
        document.getElementById("quotes").innerHTML = data.content;
        document.getElementById("author").innerHTML = "~ "+data.author+" ~";
    }).catch(() => {alert("Server Error")})
}