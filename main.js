function changeVar(){
    if(true){
    var name="water";
    document.getElementById("assign1").textContent=name;
    name="air";
    }
    document.getElementById("varLabel").textContent=name;
    
}

function changeLet(){
    if(true){
    let flower="lotus";
    document.getElementById("assign2").textContent=flower;
    flower="rose";
    document.getElementById("letLabel").textContent=flower;
    }
    
}

function changeConst(){
    const star="sun";
    document.getElementById("assign3").textContent=star;
    document.getElementById("constLabel").textContent="can't change the const variable"
}

    