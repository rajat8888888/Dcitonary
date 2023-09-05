


const inputEl=document.getElementById('input');
const paraEl=document.getElementById('para')
const meaningCounter=document.getElementById('meaning-counter')

const titleEl=document.getElementsByClassName('title')[0];

const meaning=document.getElementsByClassName('meaning')[0];
const audioEl=document.getElementById('audio')
  async function fetchApi(word){
   console.log(word);
   try {

    paraEl.style.display="block";
    meaningCounter.style.display="none"
    paraEl.innerText=`serching the result of "${word}"`
    const url=`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    const result=await fetch(url).then((res)=>{
     return  res.json()});


     if(result.title){
      
        meaningCounter.style.display="block"
        titleEl.innerText=result[0].word;
        meaning.innerText='N/A'
        audioEl.style.display='none'
     }
     else{
        
     paraEl.style.display="none";
     meaningCounter.style.display="block"
        titleEl.innerText=result[0].word;
        meaning.innerText=result[0].meanings[0].definitions[0].definition
         audioEl.src=result[0].phonetics[0].audio
     }

    console.log(result);
  }

   catch (error) {
    console.log(error);
   }
}

inputEl.addEventListener("keyup",(e)=>{
   if(e.target.value && e.key==="Enter"){
    
       fetchApi(e.target.value)
   }
})