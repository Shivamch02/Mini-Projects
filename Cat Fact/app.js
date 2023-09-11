let url = "https://catfact.ninja/fact";

async function getFacts(){
    try{
        let res = await axios.get(url);
        return res.data.fact;
    }catch(e){
        return "No fact found";
    }

}

let btn = document.querySelector('button');

btn.addEventListener('click',async()=>{
    let fact = await getFacts();
    let p = document.querySelector('p');
    p.innerText=fact;
})