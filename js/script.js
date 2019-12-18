'use strict'
$(document).ready(function(){
	let im =document.querySelectorAll('.wrap div');
	let buttons=document.querySelector('.buttons');
		let i=1;
		sld();
		function sld(){
			for (let j=0; j<im.length;j++){
				$(im[j]).removeClass()};
			let k;
		$(im[i]).addClass('center');
		console.log(im.length);
		console.log(i);
				k=i-1;
		if (i>0){$(im[k]).addClass('left')} else {$(im[im.length-1]).addClass('left')};
				console.log(i);
				k=i+1;
		if (i<im.length-1){$(im[k]).addClass('right')} else {$(im[0]).addClass('right')}
		console.log(i);

	}
		$('#previous').on('click', function(){
			if (i>0) {i=i-1;
			sld();} else {i=im.length-1; sld();}
		});
		$('#next').on('click', function(){
			if (i<im.length-1) {i=i+1;
			sld();} else {i=0; sld();}
		})
	})