const modalbg = document.querySelector('.modal-bg')


class Message{
  constructor(type,message){
    this.type = type
    this.message = message
  }
    display(){
      var div = document.querySelector('.modal')
      var icon = document.querySelector('#icon')
      modalbg.style.display = 'block'
      document.querySelector('.modal-head').innerHTML = `<h3 style='text-align: center'>${this.type.toUpperCase()}</h3>`
      div.style = 'background: #eee; width: 75%; padding: 0.75rem; z-index: 1; position: fixed; left: 12.5%; border-radius: 12px; text-align: justify'
      document.querySelector('.modal-body').innerHTML = `<p>${this.message}</p><br> <button id='closebtn'>OK</button>`
      switch (this.type){
      case 'warning':
      	icon.innerHTML = '<i style="color: tomato" class="fas fa-exclamation-circle"></i>'
        //div.style.color = 'tomato';
        break;
      case 'error':
      	icon.innerHTML = '<i style="color: red" class="fas fa-times"></i>'
        //div.style.color = 'red'
        break;
      case 'success':
      	icon.innerHTML = '<i style="color: green" class="fas fa-check-circle"></i>'
        //div.style.color = 'green'
        break;
      case 'info':
      	icon.innerHTML = '<i style="color: blue" class="fas fa-info-circle"></i>'
        //div.style.color = 'blue'
        break;
      case 'loading':
      	icon.innerHTML = '<div class="loader"></div>'
      	//div.style.color = '#333'
      default:
        div.style.color = '#333'
      }
      if (this.type === 'loading') {
      	document.querySelector('#closebtn').style.display = 'none'
      }
      document.querySelector('#closebtn').addEventListener('click',function(){
           modalbg.style.display = 'none'
      })
   }
}
