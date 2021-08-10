const iconMenu=document.querySelector('.menu-icon');
if(iconMenu){
	const menuBody=document.querySelector('.menu-nav');
	iconMenu.addEventListener("click", function(e){
		menuBody.classList.toggle('_active');
		iconMenu.classList.toggle('_active-icon');
	})
}
