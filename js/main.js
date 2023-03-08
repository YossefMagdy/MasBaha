let count=0
   if(localStorage.getItem("count")!=null){
    
        count=JSON.parse(localStorage.getItem("count"))
        $(".counter p").html(count)
   }

   $(".counter").click(function(){
        count++
        $(".counter p").html(count)
        localStorage.setItem("count",JSON.stringify(count))
    })

    $(".Res").click(function(){
        count=0
        $(".counter p").html(count)
        localStorage.setItem("count",JSON.stringify(count))
    })
$(".form-select").click(function(){
    $(".Target-text").html(`${$(".form-select").val()}`)
})
$(".Target-text").html(`${$(".form-select").val()}`)

window.addEventListener("keyup",(e)=>{
    if(e.key=="Escape"){
        count=0
        $(".counter p").html(count)
        localStorage.setItem("count",JSON.stringify(count))
    }
    if(e.key==" "){
        count++
        $(".counter p").html(count)
        localStorage.setItem("count",JSON.stringify(count))
    }
    console.log(e.key)
})