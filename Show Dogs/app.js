// making dog pictures website 

let url2 = "https://dog.ceo/api/breeds/image/random";

async function getImage(){
        try{
            let res = await axios.get(url2);
            return res.data.message;
        }catch(e){
            return "Image not found";
        }
    
    }
    
    let btn = document.querySelector('button');
    
    btn.addEventListener('click',async()=>{
        let link = await getImage();
        let img = document.querySelector('img');
        img.setAttribute("src",link);
    })