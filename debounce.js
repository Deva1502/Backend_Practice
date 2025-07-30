function debounce(fn,delay){
    let timer;
   return function(...args){
    clearTimeout(timer)
    timer = setTimeout(()=>{
        fn(...args)
    },delay)
   } 
}

const search = (query)=>{
    console.log(`search for ${query}`);
    
}
const searchwithdebounce = debounce(search,1000)    

searchwithdebounce("h") 
searchwithdebounce("he")
searchwithdebounce("hel")
searchwithdebounce("hell")
searchwithdebounce("hello")