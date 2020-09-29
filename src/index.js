module.exports = function toReadable (number) {
	var n = number.toString();
	var v='';
	
 


if (n.length === 3 && n[1] === '0' && n[2] === '0'){
	 switch(n[0]){  	
  	case '1':
  	v+= 'one hundred';
  	break;
  	case '2':
  	v+= 'two hundred';
  	break;
  	case '3':
  	v+= 'three hundred';
  	break;
  	case '4':
  	v+= 'four hundred';
  	break;
  	case '5':
  	v+= 'five hundred';
  	break;
  	case '6':
  	v+= 'six hundred';
  	break;
  	case '7':
  	v+= 'seven hundred';
  	break;
  	case '8':
  	v+= 'eight hundred';
  	break;
  	case '9':
  	v+= 'nine hundred';
  	break;
  	};
}
else if (n.length === 3 && n[1] === '1'){
 switch(n[0]){  	
  	case '1':
  	v+= 'one hundred ';
  	break;
  	case '2':
  	v+= 'two hundred ';
  	break;
  	case '3':
  	v+= 'three hundred ';
  	break;
  	case '4':
  	v+= 'four hundred ';
  	break;
  	case '5':
  	v+= 'five hundred ';
  	break;
  	case '6':
  	v+= 'six hundred ';
  	break;
  	case '7':
  	v+= 'seven hundred ';
  	break;
  	case '8':
  	v+= 'eight hundred ';
  	break;
  	case '9':
  	v+= 'nine hundred ';
  	break;
  	};

	switch(n[2]){
case '0':
  	v+= 'ten';
  	break;
  	case '1':
  	v+= 'eleven';
  	break;
  	case '2':
  	v+= 'twelve';
  	break;
  	case '3':
  	v+= 'thirteen';
  	break;
  	case '4':
  	v+= 'fourteen';
  	break;
  	case '5':
  	v+= 'fifteen';
  	break;
  	case '6':
  	v+= 'sixteen';
  	break;
  	case '7':
  	v+= 'seventeen';
  	break;
  	case '8':
  	v+= 'eighteen';
  	break;
  	case '9':
  	v+= 'nineteen';
  	break;
	};
}

else if(n.length === 3 && n[1] === '0'){
	 switch(n[0]){  	
  	case '1':
  	v+= 'one hundred ';
  	break;
  	case '2':
  	v+= 'two hundred ';
  	break;
  	case '3':
  	v+= 'three hundred ';
  	break;
  	case '4':
  	v+= 'four hundred ';
  	break;
  	case '5':
  	v+= 'five hundred ';
  	break;
  	case '6':
  	v+= 'six hundred ';
  	break;
  	case '7':
  	v+= 'seven hundred ';
  	break;
  	case '8':
  	v+= 'eight hundred ';
  	break;
  	case '9':
  	v+= 'nine hundred ';
  	break;
  	};
	switch(n[2]){
  	case '1':
  	v+= 'one';
  	break;
  	case '2':
  	v+= 'two';
  	break;
  	case '3':
  	v+= 'three';
  	break;
  	case '4':
  	v+= 'four';
  	break;
  	case '5':
  	v+= 'five';
  	break;
  	case '6':
  	v+= 'six';
  	break;
  	case '7':
  	v+= 'seven';
  	break;
  	case '8':
  	v+= 'eight';
  	break;
  	case '9':
  	v+= 'nine';
  	break;
  };
}

else if (n.length===3){
	 switch(n[0]){  	
  	case '1':
  	v+= 'one hundred ';
  	break;
  	case '2':
  	v+= 'two hundred ';
  	break;
  	case '3':
  	v+= 'three hundred ';
  	break;
  	case '4':
  	v+= 'four hundred ';
  	break;
  	case '5':
  	v+= 'five hundred ';
  	break;
  	case '6':
  	v+= 'six hundred ';
  	break;
  	case '7':
  	v+= 'seven hundred ';
  	break;
  	case '8':
  	v+= 'eight hundred ';
  	break;
  	case '9':
  	v+= 'nine hundred ';
  	break;
  	};
  	 

  switch(n[1]){
  	case '0':
  	v+=" ";
  	break;
    	case '2':
  
  	v+= 'twenty';
  	break;
  		case '3':
  	v+= 'thirty';
  	break;
  		case '4':
  	v+= 'forty';
  	break;
  		case '5':
  	v+= 'fifty';
  	break;
  		case '6':
  	v+= 'sixty';
  	break;
  		case '7':
  	v+= 'seventy';
  	break;
  		case '8':
  	v+= 'eighty';
  	break;
  		case '9':
  	v+= 'ninety';
  	break;
  };
   switch(n[2]){
  	case '1':
  	v+= ' one';
  	break;
  	case '2':
  	v+= ' two';
  	break;
  	case '3':
  	v+= ' three';
  	break;
  	case '4':
  	v+= ' four';
  	break;
  	case '5':
  	v+= ' five';
  	break;
  	case '6':
  	v+= ' six';
  	break;
  	case '7':
  	v+= ' seven';
  	break;
  	case '8':
  	v+= ' eight';
  	break;
  	case '9':
  	v+= ' nine';
  	break;
  };
};


  
 
if(n.length === 2 && n[0] === '1' ){

switch(n[1]){
  	case '0':
  	v+= 'ten';
  	break;
  	case '1':
  	v+= 'eleven';
  	break;
  	case '2':
  	v+= 'twelve';
  	break;
  	case '3':
  	v+= 'thirteen';
  	break;
  	case '4':
  	v+= 'fourteen';
  	break;
  	case '5':
  	v+= 'fifteen';
  	break;
  	case '6':
  	v+= 'sixteen';
  	break;
  	case '7':
  	v+= 'seventeen';
  	break;
  	case '8':
  	v+= 'eighteen';
  	break;
  	case '9':
  	v+= 'nineteen';
  	break;
  };

}

else if (n.length === 2 && n[1] === '0' ){
  switch(n[0]){
  	case '0':
  	v+="";
  	break;
    	case '2':
  
  	v+= 'twenty';
  	break;
  		case '3':
  	v+= 'thirty';
  	break;
  		case '4':
  	v+= 'forty';
  	break;
  		case '5':
  	v+= 'fifty';
  	break;
  		case '6':
  	v+= 'sixty';
  	break;
  		case '7':
  	v+= 'seventy';
  	break;
  		case '8':
  	v+= 'eighty';
  	break;
  		case '9':
  	v+= 'ninety';
  	break;
  };
}
else if (n.length === 2 && n[0] !== '1' ){
  switch(n[0]){
  	case '0':
  	v+="";
  	break;
    	case '2':
  
  	v+= 'twenty ';
  	break;
  		case '3':
  	v+= 'thirty ';
  	break;
  		case '4':
  	v+= 'forty ';
  	break;
  		case '5':
  	v+= 'fifty ';
  	break;
  		case '6':
  	v+= 'sixty ';
  	break;
  		case '7':
  	v+= 'seventy ';
  	break;
  		case '8':
  	v+= 'eighty ';
  	break;
  		case '9':
  	v+= 'ninety ';
  	break;
  };
    switch(n[1]){
  	case '1':
  	v+= 'one';
  	break;
  	case '2':
  	v+= 'two';
  	break;
  	case '3':
  	v+= 'three';
  	break;
  	case '4':
  	v+= 'four';
  	break;
  	case '5':
  	v+= 'five';
  	break;
  	case '6':
  	v+= 'six';
  	break;
  	case '7':
  	v+= 'seven';
  	break;
  	case '8':
  	v+= 'eight';
  	break;
  	case '9':
  	v+= 'nine';
  	break;
  };
};

  if(n.length === 1){
  switch(n){
  	case '0':
  	v+= 'zero';
  	break;
  	case '1':
  	v+= 'one';
  	break;
  	case '2':
  	v+= 'two';
  	break;
  	case '3':
  	v+= 'three';
  	break;
  	case '4':
  	v+= 'four';
  	break;
  	case '5':
  	v+= 'five';
  	break;
  	case '6':
  	v+= 'six';
  	break;
  	case '7':
  	v+= 'seven';
  	break;
  	case '8':
  	v+= 'eight';
  	break;
  	case '9':
  	v+= 'nine';
  	break;
  };
  };
 
  return v;
}
