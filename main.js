$("#finalexam").on("click", function(){
  $("#thehidingform").show();
  $("#finalexam").hide();
});


$("#btnSubmit2").on("click", function(){
  var queryString = $("#cotacform2").serialize();
  $.ajax({
    url:"http://www.fadomain.com/formpost?"+queryString,
    success: function(resp, txt, xhr){
    //assume server responds either "ok" or "error"
    if (resp == "ok"){
      $("#thehidingform").hide();
      $("#finalexam").html("Success");
      alert(resp);

    }else {
      alert("Please try again, "+resp);
    }
  },
    error: function(error){
      console.log(error);
    },
    method: "POST"
  });


})
