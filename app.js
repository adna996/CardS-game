const cards=document.querySelectorAll('.card');
const dug=document.querySelectorAll('#novaigra');
let rezA=0; //rezultat
let rezB=0;
let reza=0;
let rezb=0;
const a_span = document.getElementById('igracar');
const b_span = document.getElementById('igracbr');

const c1=document.getElementById('card1');
const c2=document.getElementById('card2');
const c3=document.getElementById('card3');
const c4=document.getElementById('card4');
const c5=document.getElementById('card5');
const c6=document.getElementById('card6');
const c7=document.getElementById('card7');
const c8=document.getElementById('card8');
const c9=document.getElementById('card9');
const c10=document.getElementById('card10');
const c11=document.getElementById('card11');
const c12=document.getElementById('card12');
const c13=document.getElementById('card13');
const c14=document.getElementById('card14');
const c15=document.getElementById('card15');
const c16=document.getElementById('card16');
const c17=document.getElementById('card17');
const c18=document.getElementById('card18');
const c19=document.getElementById('card19');
const c20=document.getElementById('card20');
const c21=document.getElementById('card21');
const c22=document.getElementById('card22');
const c23=document.getElementById('card23');
const c24=document.getElementById('card24');
const c25=document.getElementById('card25');


function flipCard(){ //okretanje kratica
	this.classList.add('okret');
	setTimeout(() => {
		this.classList.remove('okret');
		this.classList.add('zaokret');
	},1000);
	this.classList.remove('zaokret');
}

cards.forEach(card => card.addEventListener('click', flipCard));

let brojevi=[];
function randomBroj(){//genertorrandom broja
	for(var i=0;i<25;i++){
		var min=0;
		var max=10;
		var random =Math.floor(Math.random()*(max-min+1))+min;
		brojevi[i]=random;
	}
}

var random_slike=new Array(); //generator random slika
random_slike[0]="smile.png";
random_slike[1]="angry.png";
function randomSlika(){
	var num=Math.floor(Math.random()*2);
	var img = random_slike[num];
    document.getElementsByClassName("broj").textContent= ('<img src="' + 'slike/' + img + '" width="250px">');
}
cards.forEach(card => card.addEventListener('click', randomSlika));

let index=[c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15,c16,c17,c18,c19,c20,c21,c22,c23,c24,c25];
var r=Math.floor(Math.random()*25);
var ind=index[r];

var count; //brojaci klikanja
var count1;
var count2;
var count3;
var count4;
var count5;
var count6;
var count7;
var count8;
var count9;
var count10;
var count11;
var count12;
var count13;
var count14;
var count15;
var count16;
var count17;
var count18;
var count19;
var count20;
var count21;
var count22;
var count23;
var count24;
var klik=0;

function ispisi(){ //prvo random ispisivanje brojeva

	randomBroj();
	for(var i=0;i<25;i++){
		document.getElementsByClassName('broj')[i].innerHTML=brojevi[i];
	}
	count=-1;
	count1=-1;
	count2=-1
	count3=-1;
	count4=-1;
	count5=-1;
	count6=-1;
	count7=-1;
	count8=-1;
	count9=-1;
	count10=-1;
	count11=-1;
	count12=-1;
	count13=-1;
	count14=-1;
	count15=-1;
	count16=-1;
	count17=-1;
	count18=-1;
	count19=-1;
	count20=-1;
	count21=-1;
	count22=-1;
	count23=-1;
	count24=-1;	
	klik=-1;
}
ispisi();

var min=0;
var max=10;
function klikanja(){ //zadrzi karticu odredjen broj puta

	if(this.id=='card1'){
		count++;
		if(count==2){
			//console.log(count);
			var rand =Math.floor(Math.random()*(max-min+1))+min;
			document.getElementsByClassName('broj')[0].innerHTML=rand;
			count=0;
		}

	}
	if(this.id=='card2'){
		count1++;
		if(count1==3){
			//console.log(count);
			var rand =Math.floor(Math.random()*(max-min+1))+min;
			document.getElementsByClassName('broj')[1].innerHTML=rand;
			count1=0;
		}
	}
	if(this.id=='card3'){
		count2++;
		if(count2==4){
			//console.log(count);
			var rand =Math.floor(Math.random()*(max-min+1))+min;
			document.getElementsByClassName('broj')[2].innerHTML=rand;
			count2=0;
		}
	}
	if(this.id=='card4'){
		count3++;
		if(count3==5){
			//console.log(count);
			var rand =Math.floor(Math.random()*(max-min+1))+min;
			document.getElementsByClassName('broj')[3].innerHTML=rand;
			count3=0;
		}
	}
	if(this.id=='card5'){
		count4++;
		if(count4==6){
			//console.log(count);
			var rand =Math.floor(Math.random()*(max-min+1))+min;
			document.getElementsByClassName('broj')[4].innerHTML=rand;
			count4=0;
		}
	}
	if(this.id=='card6'){
		count5++;
		if(count5==3){
			//console.log(count);
			var rand =Math.floor(Math.random()*(max-min+1))+min;
			document.getElementsByClassName('broj')[5].innerHTML=rand;
			count5=0;
		}
	}
	if(this.id=='card7'){
		count6++;
		if(count6==4){
			//console.log(count);
			var rand =Math.floor(Math.random()*(max-min+1))+min;
			document.getElementsByClassName('broj')[6].innerHTML=rand;
			count6=0;
		}
	}
	if(this.id=='card8'){
		count7++;
		if(count7==5){
			//console.log(count);
			var rand =Math.floor(Math.random()*(max-min+1))+min;
			document.getElementsByClassName('broj')[7].innerHTML=rand;
			count7=0;
		}
	}
	if(this.id=='card9'){
		count8++;
		if(count8==6){
			//console.log(count);
			var rand =Math.floor(Math.random()*(max-min+1))+min;
			document.getElementsByClassName('broj')[8].innerHTML=rand;
			count8=0;
		}
	}
	if(this.id=='card10'){
		count9++;
		if(count9==7){
			//console.log(count);
			var rand =Math.floor(Math.random()*(max-min+1))+min;
			document.getElementsByClassName('broj')[9].innerHTML=rand;
			count9=0;
		}
	}
	if(this.id=='card11'){
		count10++;
		if(count10==4){
			//console.log(count);
			var rand =Math.floor(Math.random()*(max-min+1))+min;
			document.getElementsByClassName('broj')[10].innerHTML=rand;
			count10=0;
		}
	}
	if(this.id=='card12'){
		count11++;
		if(count11==5){
			//console.log(count);
			var rand =Math.floor(Math.random()*(max-min+1))+min;
			document.getElementsByClassName('broj')[11].innerHTML=rand;
			count11=0;
		}
	}
	if(this.id=='card13'){
		count12++;
		if(count12==6){
			//console.log(count);
			var rand =Math.floor(Math.random()*(max-min+1))+min;
			document.getElementsByClassName('broj')[12].innerHTML=rand;
			count12=0;
		}
	}
	if(this.id=='card14'){
		count13++;
		if(count13==7){
			//console.log(count);
			var rand =Math.floor(Math.random()*(max-min+1))+min;
			document.getElementsByClassName('broj')[13].innerHTML=rand;
			count13=0;
		}
	}
	if(this.id=='card15'){
		count14++;
		if(count14==8){
			//console.log(count);
			var rand =Math.floor(Math.random()*(max-min+1))+min;
			document.getElementsByClassName('broj')[14].innerHTML=rand;
			count14=0;
		}
	}
	if(this.id=='card16'){
		count15++;
		if(count15==5){
			//console.log(count);
			var rand =Math.floor(Math.random()*(max-min+1))+min;
			document.getElementsByClassName('broj')[15].innerHTML=rand;
			count15=0;
		}
	}
	if(this.id=='card17'){
		count16++;
		if(count16==6){
			//console.log(count);
			var rand =Math.floor(Math.random()*(max-min+1))+min;
			document.getElementsByClassName('broj')[16].innerHTML=rand;
			count16=0;
		}
	}
	if(this.id=='card18'){
		count17++;
		if(count17==7){
			//console.log(count);
			var rand =Math.floor(Math.random()*(max-min+1))+min;
			document.getElementsByClassName('broj')[17].innerHTML=rand;
			count17=0;
		}
	}
	if(this.id=='card19'){
		count18++;
		if(count18==8){
			//console.log(count);
			var rand =Math.floor(Math.random()*(max-min+1))+min;
			document.getElementsByClassName('broj')[18].innerHTML=rand;
			count=0;
		}
	}
	if(this.id=='card20'){
		count19++;
		if(count19==9){
			//console.log(count);
			var rand =Math.floor(Math.random()*(max-min+1))+min;
			document.getElementsByClassName('broj')[19].innerHTML=rand;
			count19=0;
		}
	}
	if(this.id=='card21'){
		count20++;
		if(count20==6){
			//console.log(count);
			var rand =Math.floor(Math.random()*(max-min+1))+min;
			document.getElementsByClassName('broj')[20].innerHTML=rand;
			count20=0;
		}
	}
	if(this.id=='card22'){
		count21++;
		if(count21==7){
			//console.log(count);
			var rand =Math.floor(Math.random()*(max-min+1))+min;
			document.getElementsByClassName('broj')[21].innerHTML=rand;
			count21=0;
		}
	}
	if(this.id=='card23'){
		count22++;
		if(count22==8){
			//console.log(count);
			var rand =Math.floor(Math.random()*(max-min+1))+min;
			document.getElementsByClassName('broj')[22].innerHTML=rand;
			count22=0;
		}
	}
	if(this.id=='card24'){
		count23++;
		if(count23==9){
			//console.log(count);
			var rand =Math.floor(Math.random()*(max-min+1))+min;
			document.getElementsByClassName('broj')[23].innerHTML=rand;
			count23=0;
		}
	}
	if(this.id=='card25'){
		count24++;
		if(count24==10){
			//console.log(count);
			var rand =Math.floor(Math.random()*(max-min+1))+min;
			document.getElementsByClassName('broj')[24].innerHTML=rand;
			count24=0;
		}
	}
}
cards.forEach(card=>card.addEventListener('click',klikanja));

function sabiranje(){
	klik++;
		if(this.id=='card1'){
			if(klik%2==0){
				var a=parseInt(document.getElementsByClassName('broj')[0].innerHTML);
				rezA+=a;
				rezb+=a;
			}
			if(klik%2!=0){
				var a=parseInt(document.getElementsByClassName('broj')[0].innerHTML);
				rezB+=a;
				rezb+=a;
			}
		}
		if(this.id=='card2'){
			if(klik%2!=0){
				var a=parseInt(document.getElementsByClassName('broj')[1].innerHTML);
				rezB+=a;
				reza+=a;
			}
			else{
				var a=parseInt(document.getElementsByClassName('broj')[1].innerHTML);
				rezA+=a;
				rezb+=a;
			}
		}
		if(this.id=='card3'){
			if(klik%2!=0){
				var a=parseInt(document.getElementsByClassName('broj')[2].innerHTML);
				rezB+=a;
				reza+=a;
			}
			else{
				var a=parseInt(document.getElementsByClassName('broj')[2].innerHTML);
				rezA+=a;
				rezb+=a;
			}
		}
		if(this.id=='card4'){
			if(klik%2!=0){
				var a=parseInt(document.getElementsByClassName('broj')[3].innerHTML);
				rezB+=a;
				reza+=a;
			}
			else{
				var a=parseInt(document.getElementsByClassName('broj')[3].innerHTML);
				rezA+=a;
				rezb+=a;
			}
		}
		if(this.id=='card5'){
			if(klik%2!=0){
				var a=parseInt(document.getElementsByClassName('broj')[4].innerHTML);
				rezB+=a;
				reza+=a;
			}
			else{
				var a=parseInt(document.getElementsByClassName('broj')[4].innerHTML);
				rezA+=a;
				rezb+=a;
			}
		}
		if(this.id=='card6'){
			if(klik%2!=0){
				var a=parseInt(document.getElementsByClassName('broj')[5].innerHTML);
				rezB+=a;
				reza+=a;
			}
			else{
				var a=parseInt(document.getElementsByClassName('broj')[5].innerHTML);
				rezA+=a;
				rezb+=a;
			}
		}
		if(this.id=='card7'){
			if(klik%2!=0){
				var a=parseInt(document.getElementsByClassName('broj')[6].innerHTML);
				rezB+=a;
				reza+=a;
			}
			else{
				var a=parseInt(document.getElementsByClassName('broj')[6].innerHTML);
				rezA+=a;
				rezb+=a;
			}
		}
		if(this.id=='card8'){
			if(klik%2!=0){
				var a=parseInt(document.getElementsByClassName('broj')[7].innerHTML);
				rezB+=a;
				reza+=a;
			}
			else{
				var a=parseInt(document.getElementsByClassName('broj')[7].innerHTML);
				rezA+=a;
				rezb+=a;
			}
		}
		if(this.id=='card9'){
			if(klik%2!=0){
				var a=parseInt(document.getElementsByClassName('broj')[8].innerHTML);
				rezB+=a;
				reza+=a;
			}
			else{
				var a=parseInt(document.getElementsByClassName('broj')[8].innerHTML);
				rezA+=a;
				rezb+=a;
			}
		}
		if(this.id=='card10'){
			if(klik%2!=0){
				var a=parseInt(document.getElementsByClassName('broj')[9].innerHTML);
				rezB+=a;
				reza+=a;
			}
			else{
				var a=parseInt(document.getElementsByClassName('broj')[9].innerHTML);
				rezA+=a;
				rezb+=a;
			}
		}
		if(this.id=='card11'){
			if(klik%2!=0){
				var a=parseInt(document.getElementsByClassName('broj')[10].innerHTML);
				rezB+=a;
				reza+=a;
			}
			else{
				var a=parseInt(document.getElementsByClassName('broj')[10].innerHTML);
				rezA+=a;
				rezb+=a;
			}
		}
		if(this.id=='card12'){
			if(klik%2!=0){
				var a=parseInt(document.getElementsByClassName('broj')[11].innerHTML);
				rezB+=a;
				reza+=a;
			}
			else{
				var a=parseInt(document.getElementsByClassName('broj')[11].innerHTML);
				rezA+=a;
				rezb+=a;
			}
		}
		if(this.id=='card13'){
			if(klik%2!=0){
				var a=parseInt(document.getElementsByClassName('broj')[12].innerHTML);
				rezB+=a;
				reza+=a;
			}
			else{
				var a=parseInt(document.getElementsByClassName('broj')[12].innerHTML);
				rezA+=a;
				rezb+=a;
			}
		}
		if(this.id=='card14'){
			if(klik%2!=0){
				var a=parseInt(document.getElementsByClassName('broj')[13].innerHTML);
				rezB+=a;
				reza+=a;
			}
			else{
				var a=parseInt(document.getElementsByClassName('broj')[13].innerHTML);
				rezA+=a;
				rezb+=a;
			}
		}
		if(this.id=='card15'){
			if(klik%2!=0){
				var a=parseInt(document.getElementsByClassName('broj')[14].innerHTML);
				rezB+=a;
				reza+=a;
			}
			else{
				var a=parseInt(document.getElementsByClassName('broj')[14].innerHTML);
				rezA+=a;
				rezb+=a;
			}
		}
		if(this.id=='card16'){
			if(klik%2!=0){
				var a=parseInt(document.getElementsByClassName('broj')[15].innerHTML);
				rezB+=a;
				reza+=a;
			}
			else{
				var a=parseInt(document.getElementsByClassName('broj')[15].innerHTML);
				rezA+=a;
				rezb+=a;
			}
		}
		if(this.id=='card17'){
			if(klik%2!=0){
				var a=parseInt(document.getElementsByClassName('broj')[16].innerHTML);
				rezB+=a;
				reza+=a;
			}
			else{
				var a=parseInt(document.getElementsByClassName('broj')[16].innerHTML);
				rezA+=a;
				rezb+=a;
			}
		}
		if(this.id=='card18'){
			if(klik%2!=0){
				var a=parseInt(document.getElementsByClassName('broj')[17].innerHTML);
				rezB+=a;
				reza+=a;
			}
			else{
				var a=parseInt(document.getElementsByClassName('broj')[17].innerHTML);
				rezA+=a;
				rezb+=a;
			}
		}
		if(this.id=='card19'){
			if(klik%2!=0){
				var a=parseInt(document.getElementsByClassName('broj')[18].innerHTML);
				rezB+=a;
				reza+=a;
			}
			else{
				var a=parseInt(document.getElementsByClassName('broj')[18].innerHTML);
				rezA+=a;
				rezb+=a;
			}
		}
		if(this.id=='card20'){
			if(klik%2!=0){
				var a=parseInt(document.getElementsByClassName('broj')[19].innerHTML);
				rezB+=a;
				reza+=a;
			}
			else{
				var a=parseInt(document.getElementsByClassName('broj')[19].innerHTML);
				rezA+=a;
				reza+=a;
			}
		}
		if(this.id=='card21'){
			if(klik%2!=0){
				var a=parseInt(document.getElementsByClassName('broj')[20].innerHTML);
				rezB+=a;
				reza+=a;
			}
			else{
				var a=parseInt(document.getElementsByClassName('broj')[20].innerHTML);
				rezA+=a;
				rezb+=a;
			}
		}
		if(this.id=='card22'){
			if(klik%2!=0){
				var a=parseInt(document.getElementsByClassName('broj')[21].innerHTML);
				rezB+=a;
				reza+=a;
			}
			else{
				var a=parseInt(document.getElementsByClassName('broj')[21].innerHTML);
				rezA+=a;
				rezb+=a;
			}
		}
		if(this.id=='card23'){
			if(klik%2!=0){
				var a=parseInt(document.getElementsByClassName('broj')[22].innerHTML);
				rezB+=a;
				reza+=a;
			}
			else{
				var a=parseInt(document.getElementsByClassName('broj')[22].innerHTML);
				rezA+=a;
				rezb+=a;
			}
		}
		if(this.id=='card24'){
			if(klik%2!=0){
				var a=parseInt(document.getElementsByClassName('broj')[23].innerHTML);
				rezB+=a;
				reza+=a;
			}
			else{
				var a=parseInt(document.getElementsByClassName('broj')[23].innerHTML);
				rezA+=a;
				rezb+=a;
			}
		}
		if(this.id=='card25'){
			if(klik%2!=0){
				var a=parseInt(document.getElementsByClassName('broj')[24].innerHTML);
				rezB+=a;
				reza+=a;
			}
			else{
				var a=parseInt(document.getElementsByClassName('broj')[24].innerHTML);
				rezA+=a;
				rezb+=a;
			}
		}
	
	a_span.innerHTML=rezA;
	b_span.innerHTML=rezB;
	
	ispisirez();
}

cards.forEach(card=>card.addEventListener('click',sabiranje));

document.getElementById('novaigra').style.display="none";

var novaklikanja=0;
function ispisirez(){
	if(rezA>=50){
		document.getElementById('novaigra').style.display="block";

	}
	if(rezB>=50){
		document.getElementById('novaigra').style.display="block";

	}
}

var novaklikanja;
function restart(){
	novaklikanja++;
	rezA=0;
	rezB=0;
	reza=0;
	rezb=0;
	if(novaklikanja%2!=0){
			var x=rezA;
			rezA=rezB;
			rezB=x;
			//sabiranje();
	}
	else{
		sabiranje();
	}
	document.getElementById('novaigra').style.display="none";
}
dug.forEach(novaigra=>novaigra.addEventListener('click',restart));
