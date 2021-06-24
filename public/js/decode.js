function de(tet){
 
  for (var text in tet) {

if(text.includes("2")){

} if(text.includes("22")){

} if(text.includes("222")){

} if(text.includes("3")){

} if(text.includes("33")){

} if(text.includes("333")){

} if(text.includes("4")){

} if(text.includes("44")){

} if(text.includes("444")){

} if(text.includes("5")){

} if(text.includes("55")){

} if(text.includes("555")){

} if(text.includes("6")){

} if(text.includes("66")){

} if(text.includes("666")){

} if(text.includes("7")){

} if(text.includes("77")){

} if(text.includes("777")){

} if(text.includes("7777")){

} if(text.includes("8")){

} if(text.includes("88")){

} if(text.includes("888")){

} if(text.includes("9")){

} if(text.includes("99")){

} if(text.includes("999")){

} if(text.includes("9999")){

} if(text.includes("0")){

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
