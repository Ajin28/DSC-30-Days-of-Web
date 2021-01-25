

//check off simple todo by clicking
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed")
})

//click on x to delete span
$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(300, function () {
        $(this).remove();
    })
    event.stopPropagation();
})

//inserting a new todo by hittinh enter
$("input[type='text']").keypress(event, function () {
    if (event.which === 13) {
        //add an new todo
        var text = $(this).val();
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + text + "</li>")
        $(this).val("");
    }
})


$("#toggle").click(function () {
    $("input[type='text']").fadeToggle();
})

