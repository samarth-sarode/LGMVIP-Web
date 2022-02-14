
/*
$(document).ready(function(){
	$('#one').click(function(){
		document.forms.display.value+=1;
	});
})*/
var zero=document.getElementById('zero');
	zero.addEventListener('click',function(){
		forms.display.value+='0';

	});
var one=document.getElementById('one');
	one.addEventListener('click',function(){
		forms.display.value+='1';

	});
var two=document.getElementById('two');
	two.addEventListener('click',function(){
		forms.display.value+='2';
		
	});
var three=document.getElementById('three');
	three.addEventListener('click',function(){
		forms.display.value+='3';
		
	});
var four=document.getElementById('four');
	four.addEventListener('click',function(){
		forms.display.value+='4';
		
	});
var five=document.getElementById('five');
	five.addEventListener('click',function(){
		forms.display.value+='5';
		
	});
var six=document.getElementById('six');
	six.addEventListener('click',function(){
		forms.display.value+='6';
		
	});
var seven=document.getElementById('seven');
	seven.addEventListener('click',function(){
		forms.display.value+='7';
		
	});
var eight=document.getElementById('eight');
	eight.addEventListener('click',function(){
		forms.display.value+='8';
		
	});

var nine=document.getElementById('nine');
	nine.addEventListener('click',function(){
		forms.display.value+='9';
		
	});
var b=document.getElementById('b');
	b.addEventListener('click',function(){
		forms.display.value+='.';
		
	});
var divide=document.getElementById('divide');
	divide.addEventListener('click',function(){
		forms.display.value+='/';
		
	});
var add=document.getElementById('add');
	add.addEventListener('click',function(){
		forms.display.value+='+';
		
	});
var sub=document.getElementById('sub');
	sub.addEventListener('click',function(){
		forms.display.value+='-';
		
	});
var mul=document.getElementById('mul');
	mul.addEventListener('click',function(){
		forms.display.value+='*';
		
	});
var equal=document.getElementById('equal');
	equal.addEventListener('click',function(){
		forms.display.value=eval(forms.display.value);
	});
var c=document.getElementById('c');
	c.addEventListener('click',function(){
		forms.display.value='';
	})

