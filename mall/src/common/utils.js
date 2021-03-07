export function debounce(func,delay){
    let timer = null
    return function(...args){
      if(timer) clearTimeout(timer)
      timer = setTimeout(()=>{
        console.log('++')
        func.apply(this,args)
      },delay)
    }
  }