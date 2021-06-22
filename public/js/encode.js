function en(text){
  if(text.includes("a")||text.includes("A")){
text =  text.split("a").join("2 "); 
 if(text.includes("A")){
 text = text.split("A").join("2 ");    
 }
  }if(text.includes("b")||text.includes("B")){
 text =   text.split("b").join("22 "); 
 if(text.includes("B")){
text =  text.split("B").join("22 ");    
 } }if(text.includes("c")||text.includes("C")){
text =   text.split("c").join("222 ");  
 if(text.includes("C")){
text =  text.split("C").join("222 ");    
 } }if(text.includes("d")||text.includes("D")){
 text =  text.split("d").join("3 ");  
 if(text.includes("D")){
text =  text.split("D").join("3 ");    
 } }if(text.includes("e")||text.includes("E")){
   text =  text.split("e").join("33 ");
  if(text.includes("E")){
 text = text.split("E").join("33 ");    
 }}if(text.includes("f")||text.includes("F")){
   if(text.includes("F")){
text =  text.split("F").join("333 ");    
 } 
 text =  text.split("f").join("333 ");
  }if(text.includes("g")||text.includes("G")){
   text =  text.split("g").join("4 ");
 if(text.includes("G")){
 text = text.split("G").join("4 ");    
 } }if(text.includes("h")||text.includes("H")){
    text = text.split("h").join("44 ");
 if(text.includes("H")){
 text = text.split("H").join("44 ");    
 } }if(text.includes("i")||text.includes("I")){
  text =   text.split("i").join("444 ");
  if(text.includes("I")){
text =  text.split("I").join("444 ");    
 }}if(text.includes("j")||text.includes("J")){
    text = text.split("j").join("5 ");
 if(text.includes("J")){
 text = text.split("J").join("5 ");    
 } }if(text.includes("k")||text.includes("K")){
  text =   text.split("k").join("55 ");
  if(text.includes("K")){
text =  text.split("K").join("55 ");    
 }}if(text.includes("l")||text.includes("L")){
  text =   text.split("l").join("555 ");
  if(text.includes("L")){
 text = text.split("L").join("555 ");    
 }}if(text.includes("m")||text.includes("M")){
  text =  text.split("m").join("6 ");
  if(text.includes("M")){
text =  text.split("M").join("6 ");    
 }}if(text.includes("n")||text.includes("N")){
  text =   text.split("n").join("66 ");
  if(text.includes("N")){
 text = text.split("N").join("66 ");    
 }}if(text.includes("o")||text.includes("O")){
 text =  text.split("o").join("666 ");
 if(text.includes("O")){
text =  text.split("O").join("666 ");    
 } }if(text.includes("p")||text.includes("P")){
   text =  text.split("p").join("7 ");
  if(text.includes("P")){
text =  text.split("P").join("7 ");    
 }}if(text.includes("q")||text.includes("Q")){
   text =  text.split("q").join("77 ");
 if(text.includes("Q")){
text =  text.split("Q").join("77 ");    
 } }if(text.includes("r")||text.includes("R")){
   text =  text.split("r").join("777 ");
 if(text.includes("R")){
text =  text.split("R").join("7777 ");    
 } }if(text.includes("s")||text.includes("S")){
  text =   text.split("s").join("7777 ");
 if(text.includes("S")){
text =  text.split("S").join("7777 ");    
 } }if(text.includes("t")||text.includes("T")){
  text =   text.split("t").join("8 ");
  if(text.includes("T")){
text =  text.split("T").join("8 ");    
 }}if(text.includes("u")||text.includes("U")){
  text =   text.split("u").join("88 ");
 if(text.includes("U")){
text =  text.split("U").join("88 ");    
 } }if(text.includes("v")||text.includes("V")){
  text =   text.split("v").join("888 ");
 if(text.includes("V")){
text =  text.split("V").join("888 ");    
 } }if(text.includes("w")||text.includes("W")){
  text =   text.split("w").join("9 ");
 if(text.includes("W")){
text =  text.split("W").join("9 ");    
 } }if(text.includes("x")||text.includes("X")){
  text =   text.split("x").join("99 ");
  if(text.includes("X")){
 text = text.split("X").join("99 ");    
 }}if(text.includes("y")||text.includes("Y")){
  text =   text.split("y").join("999 ");
 if(text.includes("Y")){
text =  text.split("Y").join("999 ");    
 } }if(text.includes("z")||text.includes("Z")){
  text =  text.split("z").join("9999 ");
if(text.includes("Z")){
text =  text.split("Z").join("9999 ");    
 }    
  }if(text.includes("+")){  
    text = text.split("+").join("0 ");
  }
  return text; 
}

function endensub(){
  let h = document.getElementById('endentext').value;
  console.log(h);
 let data = {
   uri: h,
    };
if(h){
fetch("/en", {
       method: "POST",
       headers: {
      'Content-Type': 'application/json'
    },
       body: JSON.stringify(data)
    }).then(body => body.json()).then(body => {

if (body.success) {
$("#output").text(body.output);
} else {
alert("😅 | try later...");
}
}).catch(e => {
  console.log(e);
  alert("Server problem");
  });
} else {
alert("Enter Some World!");
}
}

function sub(){
 let h = $("#entext").val();
 
  if(!h){
    $("#output").text("Enter Something..");
  } else {   
    let f = en(h);
 $("#output").text(f); 
    }
}

function decode(){
  
 $("#decode").show();
 $("#encode").hide();
 $("#decode1").hide();
 $("#encode1").show();
 $("#endencode1").hide();
 $("#endencode").hide();
$("#enddecode1").show(); 
}

function encode(){
  
 $("#decode").hide();
 $("#encode").show();
 $("#decode1").show();
 $("#encode1").hide();  
 $("#enddecode1").hide(); 
 $("#enddecode").hide(); 
 $("#endencode").hide(); 
 $("#endencode1").show(); 
}

function endencode(){
  $("#enddecode").hide();
  $("#endencode").show();
  $("#endencode1").hide();
  $("#enddecode1").show();
  $("#decode").hide();
  $("#decode1").hide();
  $("#encode1").show();
  $("#encode").hide();
}

function enddecode(){
  $("#enddecode").show();
  $("#endencode1").show();  
 $("#enddecode1").hide();
  $("#endencode").hide();
  $("#decode").hide();
  $("#encode").hide();
}

$(document).ready(function() {

  $("#enddecode1").hide(); 
  $("#enddecode").hide();
  $("#endencode").hide();
  $("#decode").hide();
  $("#encode1").hide();
  });
