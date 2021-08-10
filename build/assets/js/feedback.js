const fbOpen=document.querySelector('.fb-button');
const body=document.querySelector('body');
if(fbOpen){
	const fbMenu=document.querySelector('.feedback');
	fbOpen.addEventListener("click", function(e){
		fbMenu.classList.add('__fbactive');
		body.classList.add('__lock');
	})
}

const fbClose=document.querySelector('.feedback-close');
if(fbClose){
	const fbMenu=document.querySelector('.feedback');
	fbClose.addEventListener("click", function(e){
		fbMenu.classList.remove('__fbactive');
		body.classList.remove('__lock');
	})
}
