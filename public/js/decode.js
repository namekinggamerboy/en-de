function de(text){
  if(text.includes("")){

} if(text.includes("")){

} if(text.includes("")){

} if(text.includes("")){

} if(text.includes("")){

} if(text.includes("")){

} if(text.includes("")){

} if(text.includes("")){

} if(text.includes("")){

} if(text.includes("")){

} if(text.includes("")){

} if(text.includes("")){

} if(text.includes("")){

} if(text.includes("")){

} if(text.includes("")){

} if(text.includes("")){

} if(text.includes("")){

} if(text.includes("")){

} if(text.includes("")){

} if(text.includes("")){

} if(text.includes("")){

} if(text.includes("")){

} if(text.includes("")){

} if(text.includes("")){

} if(text.includes("")){

} if(text.includes("")){
}
 return text;
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
