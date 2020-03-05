//check Off Specific Todos By Clicking
$("ul").on("click", "li", function () {
  $(this).toggleClass("clicked")
});

//Click on X to deltete Todo
$("ul").on("click", "span", function (event) {
  $(this).parent().fadeOut(500, function () {
    $(this).remove()
  });
  event.stopPropagation();
});

//Creat Todo List
$("input[type='text']").keypress(function (event) {
  if (event.which === 13){
    //grabbing new todo text from input
    var todoText  = $(this).val();
    $(this).val("");
    //creat a new li and add to ul
    $("ul").append("<li><span><i class='far fa-trash-alt'></span></i> " + todoText + "</li>")
  }
})

$(".fa-plus").click(function () {
  $("input[type='text']").fadeToggle();
})