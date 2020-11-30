


function allPrices(){
	//Get JSON file from data folder
alert("check 4")
var request = new XMLHttpRequest();
request.open("GET", "data/file.json", false);
request.overrideMimeType("application/json");
request.send(null);
var jsonData = JSON.parse(request.responseText);
//alert("E3000 - "+jsonData.E1000.EUR+" EUR")
	
//let url = 'https://raw.githubusercontent.com/mishelmishev/DentalManager/main/PriceListVOP.json';	
//fetch(url)
//.then(res => res.json())
//.then((out) => {
//var PL=Object.keys(out);
var PL=Object.keys(jsonData);
	//alert(PL)
PL.forEach(myFunction1);


function myFunction1(item, index) {
	//alert(item)
	//var BGN=out[item].BGN;
	var BGN=jsonData[item].BGN;
	//alert(BGN)
	var EUR=jsonData[item].EUR;
	var MD=jsonData[item].MD;
	var pos=jsonData[item].pos;
	var cc=document.getElementById("currency").value

	//var x = document.getElementById("id"+pos).nodeName;
	//if(x=="TEXT"||x=="P"){
		//document.getElementById("id"+pos).innerHTML = item;
	//}
	//if(x=="INPUT"){
		//document.getElementById("id"+pos).value = item;
		//if(cc=="BGN"){
			//document.getElementById("price"+pos).value = BGN;
		//}else{
			//document.getElementById("price"+pos).value = EUR;
		//}
	//}
	//document.getElementById("discount"+pos).max = MD;
	//document.getElementById("discount"+pos).placeholder = "max. discount - "+MD+"%";

if(document.body.contains(document.getElementById('table'+pos))){
}else{
	var bb=document.createElement("TABLE");
	bb.setAttribute("style", "width:100%;border-radius:7px");
	bb.setAttribute("id", "table"+pos);
	var div=document.getElementById("ordersDivScroll");
	div.appendChild(bb);

  	var table = document.getElementById("table"+pos);
	var row1 = table.insertRow(-1);
	var cell0 = row1.insertCell(0);
	var cell1 = row1.insertCell(1);
	var cell2 = row1.insertCell(2);
	var row2 = table.insertRow(-1);
	var cell3 = row2.insertCell(0);
	var cell4 = row2.insertCell(1);

	cell0.setAttribute("style", "width:5%");
	cell1.setAttribute("style", "width:70%");
	cell1.setAttribute("id", "cell"+pos);
	cell2.setAttribute("style", "width:25%");
	cell3.setAttribute("colspan", "2");

	var checkbox = document.createElement("input");
	checkbox.setAttribute("type" , "checkbox");
	checkbox.setAttribute("id" , "myCheckbox"+pos);
	checkbox.setAttribute("class" , "myCheckbox");
	checkbox.setAttribute("form" , "myForm");
	checkbox.onclick=(function(){fShowDiscount();CalculateDiscount();fWorkoutSelectHaptic();});

	cell0.appendChild(checkbox);

	var input1 = document.createElement("INPUT");
	input1.setAttribute("style", "width:100%;height:40px;box-sizing: border-box;font-size:22px;font-weight:900;border:none;");
	input1.setAttribute("value", item);
	input1.setAttribute("placeholder", "");
	input1.setAttribute("readonly",true);
	cell1.appendChild(input1);

	var input2 = document.createElement("INPUT");
	input2.setAttribute("style", "width:100%;height:40px;border:none; color:grey; box-sizing: border-box;font-size:22px;font-weight:900;");
	input2.setAttribute("value", BGN);
	input2.setAttribute("id", "myPrice"+pos);
	input2.setAttribute("readonly",true);
	input2.setAttribute("placeholder", "");
	cell2.appendChild(input2);

	var input3 = document.createElement("INPUT");
	input3.setAttribute("max", MD);
	input3.setAttribute("type", "number");
	input3.setAttribute("style","width:100%;height:40px; box-sizing:border-box;font-size:22px;font-weight:900;");
	input3.setAttribute("id", "discount"+pos);
	input3.setAttribute("hidden",true);
	input3.setAttribute("name", "discount");
	input3.onchange=(function(){elementId(this.id); CalculateDiscount();});
	input3.oninput=(function(){elementId(this.id); CalculateDiscount()});
	input3. onfocus =(function(){ffocuschangekeyboard()});
	cell3.appendChild(input3);

	var input4 = document.createElement("INPUT");
	input4.setAttribute("style", "width:100%;height:40px; box-sizing:border-box;border:none;font-size:22px;font-weight:900;color:  #009900;");
	input4.setAttribute("id", "myPercent"+pos);
	input4.setAttribute("readonly",true);
	input4.setAttribute("name","myPercent");
	input4.setAttribute("hidden",true);
	cell4.appendChild(input4);

	var br = document.createElement("BR");
	div.appendChild(br);
}
}

}





function elementId(getId){
	var max=document.getElementById(getId).max;
	var val=document.getElementById(getId).value;
	if(val.length>1&&val>max){
	alert("max. discount is "+max+ "%")
	document.getElementById(getId).value=max;
	}
}



function fExit(){
  var confirmExit = confirm("EXIT application???");
  if (confirmExit === false) {
   return;
  }
window.close();
}

//================ fShowDiscount ===================//
function fShowDiscount(){
var len= document.getElementsByName("myPercent");
var discount="discount";
var myPercent="myPercent";
var i;
	for(var i=1; i<len.length+1;i++){
		var myCheckbox=document.getElementById("myCheckbox"+i).checked;
		if(myCheckbox==true){
			document.getElementById("myPercent"+i).style.display="block";
			document.getElementById("myPercent"+i).value=document.getElementById("myPrice"+i).value;
			document.getElementById("discount"+i).style.display="block";
			document.getElementById("discount"+i).focus();
			CalculateDiscount();
			CalculateTotal();
		}else{
			document.getElementById("myPercent"+i).style.display="none";
			document.getElementById("myPercent"+i).value="0";
			document.getElementById("discount"+i).style.display="none";
			document.getElementById("discount"+i).value="";

			CalculateTotal();
		}
	}
}

function fChangeCurrency(){
//Get JSON file from data folder
//alert("check")
var request = new XMLHttpRequest();
request.open("GET", "data/file.json", false);
request.overrideMimeType("application/json");
request.send(null);
var jsonData = JSON.parse(request.responseText);
//alert("E1000 - "+jsonData.E1000.EUR+" EUR")
	
var PL=Object.keys(jsonData);
PL.forEach(myFunction2);

	function myFunction2(item, index) {
	var BGN=jsonData[item].BGN;
	var EUR=jsonData[item].EUR;
	var MD=jsonData[item].MD;
	var pos=jsonData[item].pos;
	var ccc=document.getElementById("currency").value;
		if(ccc=="BGN"){
			document.getElementById("myPrice"+pos).value = BGN;
		CalculateDiscount();
		}else{
			document.getElementById("myPrice"+pos).value = EUR;
		CalculateDiscount();
		}
	}
document.getElementById("currency").blur();
}



function CalculateTotal(){
   var inputs = document.getElementsByName('myPercent');
var s1= document.getElementById('currency').value;
        result = document.getElementById('myTotal');
        sum = 0;
	for(var i=1; i<inputs.length; i++) {
		sum += parseInt(document.getElementById('myPercent'+i).value);
	}
result.value = sum+ " "+s1;
}

function CalculateDiscount(){
var i, res, cal, discount;
var discL = document.getElementsByName('discount')
for(i=1; i<discL.length; i++){
var myDiscount=document.getElementById("discount"+i).value;
var myPrice=document.getElementById("myPrice"+i).value;
if(myDiscount>0){
	res=myDiscount/100;
	cal=myPrice-(myPrice*res);
	document.getElementById("myPercent"+i).value= Math.round(cal);
	//document.getElementById("discount"+i).blur();
	CalculateTotal();
}else{
	if(document.getElementById("myCheckbox"+i).checked==true){
	document.getElementById("myPercent"+i).value=document.getElementById("myPrice"+i).value;
	CalculateTotal();
	}else{
	document.getElementById("myPercent"+i).value="0";
	document.getElementById("discount"+i).blur();
	}
}
}
if(myDiscount.length>1){
	document.getElementById("discount"+i).blur();
}
CalculateTotal();
}


//================ Update_Total_Sum ===================//
  function Update_Total_Sum(){
    sum=0;
    $("input[name^='discount']").each(function(){
      sum+=Number($(this).val());
    });
    $("#total").val(sum);
  }
function fReset(){
	document.getElementById("myForm").reset();
	document.getElementById("btn4").blur();
	fShowDiscount();
}


function fLoad(){


}


//==================================================//
//==========================================//
//================== Audio  ==================//

function fTink(){
	document.getElementById("Tink").src = document.getElementById("Base64_Tink").innerHTML;
	document.getElementById("Tink").play();	
}

//==========================================//
//================== Audio  ==================//

function fendrecord(){
	document.getElementById("endrecord").src = document.getElementById("Base64_endrecord").innerHTML;
	document.getElementById("endrecord").play();
}



//==========================================//
//================== Audio  ==================//

function fAcknowledgementQuestionMark(){
	document.getElementById("AcknowledgementQuestionMark").src = document.getElementById("Base64_AcknowledgementQuestionMark").innerHTML;
	document.getElementById("AcknowledgementQuestionMark").play();
}

//==========================================//
//================== Audio  ==================//

function ffocuschangekeyboard(){
	document.getElementById("focuschangekeyboard").src = document.getElementById("Base64_focuschangekeyboard").innerHTML;
	document.getElementById("focuschangekeyboard").play();
}



//==========================================//
//================== Audio  ==================//

function fWorkoutSelectHaptic(){
	document.getElementById("WorkoutSelectHaptic").src = document.getElementById("Base64_WorkoutSelectHaptic").innerHTML;
	document.getElementById("WorkoutSelectHaptic").play();
}

//==========================================//
//================== Audio  ==================//

function fpaymentsuccess(){
	//document.getElementById("paymentsuccess").src = document.getElementById("Base64_paymentsuccess").innerHTML;
	document.getElementById("paymentsuccess").src = "UISounds/payment_success.mp3";
	document.getElementById("paymentsuccess").play();
}

//==========================================//
//================== Audio  ==================//

function fnavigationpop(){
	document.getElementById("navigationpop").src = document.getElementById("Base64_navigationpop").innerHTML;
	document.getElementById("navigationpop").play();
}
function Logo(){
	document.getElementById("VOPlogo").style.opacity="1";
}

