$(document).ready(function(){

    $("#facilities_one a").click(function(){
      var pos = $(this).attr()*(-600)

      $("#facilities_list ul li").animate({left:pos})
      return false;
    })



})
