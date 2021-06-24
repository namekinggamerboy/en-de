function de(tet){
  for (var text in tet) {
if(text.includes("2 ")){
text = text.split("2 ").join("a "); 
} if(text.includes("22 ")){
text =   text.split("22 ").join("b "); 
} if(text.includes("222")){
text =   text.split("222 ").join("c "); 
} if(text.includes("3")){
text =   text.split("3 ").join("d "); 
} if(text.includes("33")){
text =   text.split("33 ").join("e "); 
} if(text.includes("333")){
text =   text.split("333 ").join("f "); 
} if(text.includes("4")){
text =   text.split("4 ").join("g "); 
} if(text.includes("44")){
text =   text.split("44 ").join("h "); 
} if(text.includes("444")){
text =   text.split("444 ").join("i "); 
} if(text.includes("5")){
text =   text.split("5 ").join("j "); 
} if(text.includes("55")){
text =   text.split("55 ").join("k "); 
} if(text.includes("555")){
text =   text.split("555 ").join("l "); 
} if(text.includes("6")){
text =   text.split("6 ").join("m "); 
} if(text.includes("66")){
text =   text.split("66 ").join("n "); 
} if(text.includes("666")){
text =   text.split("666 ").join("o "); 
} if(text.includes("7")){
text =   text.split("7 ").join("p "); 
} if(text.includes("77")){
text =   text.split("77 ").join("q "); 
} if(text.includes("777")){
text =   text.split("777 ").join("r "); 
} if(text.includes("7777")){
text =   text.split("7777 ").join("s "); 
} if(text.includes("8")){
text =   text.split("8 ").join("t "); 
} if(text.includes("88")){
text =   text.split("88 ").join("u "); 
} if(text.includes("888")){
text =   text.split("888 ").join("v "); 
} if(text.includes("9")){
text =   text.split("9 ").join("w "); 
} if(text.includes("99")){
text =   text.split("99 ").join("x "); 
} if(text.includes("999")){
text =   text.split("999 ").join("y "); 
} if(text.includes("9999")){
text =   text.split("9999 ").join("z "); 
} if(text.includes("0")){
text =   text.split("0 ").join("+ "); 
}
tet = text;
}
 return tet;
}

function enddesub(text){
let h = $("#enddetext").val();
if(h){
fetch("/de", {
method: "POST",
       body: JSON.stringify({ uri: h }),
       headers: {
      'Content-Type': 'application/json'
    }
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
alert("Enter End To End Encode!");
}
}

 function dsub(){
 let h = $("#detext").val();
  if(!h){
    $("#output").text("Enter Something..");
  } else {   
    let f = de(h);
 $("#output").text(f); 
    }
} 
