document.addEventListener('DOMContentLoaded',()=>{
  const result = document.getElementById('count');
  const subtractBtn = document.getElementById('subtract')
  subtractBtn.addEventListener('click',()=>{
    let temp = parseInt(document.querySelector('input').value);
    result.innerText = parseInt(result.innerText)-(temp);
    checkNeg()
  })
  const addBtn = document.getElementById('add')
  addBtn.addEventListener('click',()=>{
    let temp = parseInt(document.querySelector('input').value);
    result.innerText = parseInt(result.innerText) + temp;
    checkNeg()
  })
  const checkNeg = ()=>{
    if(parseInt(result.innerText)<0){
      result.classList.add('negative')
    } else{
      result.classList.remove('negative')
    }
  }
})
