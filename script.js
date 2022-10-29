 let string=" ";
let buttons=document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML=='='){
            try{
            string=eval(string);
            document.querySelector('input').value=string;
            }
            catch(err){
                alert("Invalid");
            }
        }
       if(e.target.innerHTML=='CE'){
            var a = string.length - 1;
            string= string.slice(0,a);
            document.querySelector('input').value=string;
        }
        else{
        console.log(e.target);
        string = string + e.target.innerHTML;
        if(e.target.innerHTML=='=')
        string=string.slice(0,string.length-1);
        document.querySelector('input').value=string;
        }
    })
})
