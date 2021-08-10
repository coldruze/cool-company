const btnAuto=document.querySelector('.auto-btn');
if(btnAuto){
	const menuAuto=document.querySelector('.auto-menu');
	btnAuto.addEventListener("click", function(e){
		menuAuto.classList.toggle('__activeMenu');
	})
}

const btnHouse=document.querySelector('.house-btn');
if(btnHouse){
	const menuHouse=document.querySelector('.house-menu');
	btnHouse.addEventListener("click", function(e){
		menuHouse.classList.toggle('__activeMenu');
	})
}

const btnClothes=document.querySelector('.clothes-btn');
if(btnClothes){
	const menuClothes=document.querySelector('.clothes-menu');
	btnClothes.addEventListener("click", function(e){
		menuClothes.classList.toggle('__activeMenu');
	})
}

const btnComputer=document.querySelector('.computer-btn');
if(btnComputer){
	const menuComputer=document.querySelector('.computer-menu');
	btnComputer.addEventListener("click", function(e){
		menuComputer.classList.toggle('__activeMenu');
	})
}
