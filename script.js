
update();
function update(){


fetch('https://api.adviceslip.com/advice').
then(res =>{
    if(res.ok){
        return res.json();  
    }
    else{
        return Promise.reject(`Http error: ${res.status}`);
    }
}).
then(res =>
     {
        document.getElementById('AdviceID').value="ADVICE #"+res.slip.id;
        document.getElementById('AdviceText').value="\"" + res.slip.advice + "\"";
    })
.catch(error => {console.error(error)});

}