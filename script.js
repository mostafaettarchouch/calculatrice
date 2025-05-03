let result = document.querySelector("#resulta")
let butn = document.querySelectorAll("button")
butn.forEach( function(e){
    e.onclick = function(){
        if (e.value != "=" && e.value != "--"){
            if(result.value == "0" && e.value == "0"){
                result.value = "0"
                return
            }
            result.value += e.value
        }
        if (e.value == "C"){
            result.value = "" 
        }
        if (e.value == "--"){
            let r = result.value.split("")
            r.pop()
            result.value = r.join("")
        }
        if (e.value == "="){
            result.value = eval(result.value)
        }
        
    }
}
)