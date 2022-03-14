const submit = document.getElementById("submit");
const foodr = document.getElementById("foodr");
const output = document.getElementById("output");
const ans = document.getElementById("answer");

const getInfo = async (event)=>{ 
    event.preventDefault();
    let val = foodr.value;
    if(val === ""){
      output.innerText="Sorry enter valid input"
    }
    else{
        try{
        let url = `https://source.unsplash.com/random/1920×1080/?${val}`
        ans.src = url
        }
        catch{
            output.innerText="Enter again"
        }
    }
}




submit.addEventListener('click',getInfo);