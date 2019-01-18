$(document).ready(function(){
  $("#formLanguage").submit(function(event) {
var theName = $("input#name").val();
var theEnviroment = $("#enviroment").val();
var interest1 =$("#interest1").val();
var interest2=$("#interest2").val();
var finale=$("#finale").val();
var firstChoice;
var secondChoice;
if(theName){
  if(theEnviroment==="Large Company or Business Software"||theEnviroment==="Enterprise-level Company or High Performance Applications"){
    if(interest1==="C#"){
      firstChoice=interest1;
      }else{
        firstChoice=interest1;
      }
  }else{
    if(interest2==="Ruby"){
      secondChoice=interest2;

    }else if(interest2==="CSS"){
      secondChoice=interest2;
    }else{
      secondChoice=interest2;
      }
  }
  if (finale==="Italian") {

  }else{

  }




}else {
  alert("Please Enter A Name!!!!");
}
event.preventDefault();
});
});
