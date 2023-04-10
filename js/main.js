window.addEventListener('load',function(){
  const btn = document.querySelector('#btn')
  const retryBtn = document.querySelector('#retrybtn')
  const modalbg = document.querySelector('.modal-bg')
  
  new Message('info',`This is just for fun, so don\'t take anything too seriously... Results may vary 😏
  `).display()

	retryBtn.onclick = function(){
	  document.querySelector('.form').style.display = 'block'
	  document.querySelector('.output').style.display = 'none'
	  this.style.display = 'none'
	  document.querySelector('.meter').style.width = '0'
	}

	document.querySelector('#form').addEventListener('submit',function(e){
		event.preventDefault()
	  let guyName = document.getElementById('person1').value.trim()
	  let ladyName = document.getElementById('person2').value.trim()
	  let names = document.querySelectorAll('.name')
	  for (let i = 0; i < names.length; i++) {
	    if(names[i].value === '') {
	      new Message('error','Names cannot be empty').display()
	      return
	    }else if(names[i].value.length <= 2 || names[i].value.length >= 13){
	      new Message('error','Names should be between 2 and 12 characters in length').display()
	      return
	    }else if(ladyName === guyName){
	      new Message('error','Names should not be the same').display()
	      return
	    }
	  }
	  let arr = []
	  arr.push(guyName, ladyName)
	  let str = arr.join('')
	  for (let i = 0; i < str.length; i++) {
	    if (isNaN(str[i]) === false) {
	      new Message('error','Input cannot contain numbers').display()
	      return 
	    }
	  }
	  
	  this.reset()
	  let value = getRandInt(0,101)
	  let output = document.querySelector('.output')
	  let meter = document.querySelector('.meter')
	  let text = document.querySelector('.text')
	  let act_txt = document.querySelector('.actual_text')
	  new Message('loading','Please wait while I run the algorithm...').display()
	  setTimeout(function(){
	    document.querySelector('.form').style.display = 'none'
	    modalbg.style.display = 'none'
	  	output.style.opacity = '1'
	  	text.innerHTML = `Dear <strong><em>${guyName}</em></strong> and <strong><em>${ladyName}</em></strong> your Love test compability result is <br>` 
	  	act_txt.innerHTML = `${value}%`
	  	meter.style.width = value / 100 * 100 + '%'
	  	document.querySelector('.output').style.display = 'block'
	  	retryBtn.style.display = 'block'
	  },4000)
	})

//function that generates random value between 0 and 100
	function getRandInt(min,max){
  	return Math.floor(Math.random()*max)
	}
	
	document.querySelector('#abt_app').addEventListener('click', function(){
		new Message('info', `
		Love tester is a free online tool that helps you check the amount of live between two people. It is easy and free to use; just input the names, click on the <strong>"CHECK COMPATIBILITY"</strong> button and voila!.<br>App version: 1.0.1<br>All rights reserved &copy; 2022.
		`).display()
		modalbg.querySelector('.modal-head').innerHTML = `<h3 style='text-align: center;.
					font - weight: bold;'>ABOUT</h3>`
	})
	
	document.querySelector('#credit').addEventListener('click', function() {
		new Message('info', `
			<p>Developer Contacts</p>
			<div class='links'>
				<a style='text-decoration: none; color: red;' href='mailto: codinglabz20@gmail.com'><i class='fas fa-envelope'></i></a>
				<a style='text-decoration: none; color: black;' href='https://github.com/Temi-Tade'><i class='fab fa-github'></i></a>
				<a style='text-decoration: none; color: blue;' href='https://www.facebook.com/temiloluwa.akintade.10'><i class='fab fa-facebook'></i></a>
				<a style='text-decoration: none; color: skyblue;' href='https://twitter.com/Temi_tade2805?t=lfJM50RhBTrrrSb4hHfVgQ&s=09'><i class='fab fa-twitter'></i></a>
				</div>
			`).display()
			modalbg.querySelector('.modal-head').innerHTML = `<h3 style='text-align: center;
			font - weight: bold;'>CREDITS</h3>`
			modalbg.querySelector('#icon').innerHTML = `<i class='fas fa-thumbs-up'>`
	})
	
	document.querySelector('#priv_pol').addEventListener('click', function(){
			new Message('info', `
			We have a strong user privacy policy; by using our product, you agree to the terms of use and you've given us access to your device's browser local storage.<br>
			`).display()
			modalbg.querySelector('.modal-head').innerHTML = `<h3 style='text-align: center'>PRIVACY POLICY`
			modalbg.querySelector('#icon').innerHTML = `<i class='fas fa-user-shield'>`
		})
		
	document.querySelector('#feedback_btn').addEventListener('click', function(){
		window.open('mailto:codinglabz20@gmail.com?subject=FEEDBACK ON LOVE TESTER&body=')
	})
		
	document.querySelector('#more_btn').addEventListener('click', function(){
		new Message('info', `
		<h3>Other products by the developer</h3>
		<ul type='none'>
		<li><a href='https://temi-tade.github.io/countdown-timer/' style='color: var(--btnbg); text-decoration: none'>Countdown timer</a></li>
		</ul>
		`).display()
		modalbg.querySelector('.modal-head').innerHTML = `<h3 style='text-align: center;
					font - weight: bold;'>OTHER APPS</h3>`
		modalbg.querySelector('#icon').innerHTML = `<i class='fas fa-plus-circle'>`
	})
	
})