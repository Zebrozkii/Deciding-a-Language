$(document).ready(function(){
  $("#formLanguage").submit(function(event) {
var theName = $("input#name").val();
var theEnviroment = $("#enviroment").val();
var interest1 =$("#interest1").val();
var firstChoice;
if(theName){
  if(theEnviroment==="Large Company or Business Software"||theEnviroment==="Enterprise-level Company or High Performance Applications"){
    if(interest1==="C#"){
      firstChoice=interest1;
      }else{
        firstChoice=interest1;
      }
    }else{
    if (theEnviroment==="Fast Paced and possible government work"||theEnviroment==="Start ups and Smaller companies") {
      }else {

            }
