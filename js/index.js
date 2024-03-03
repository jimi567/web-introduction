
    function countCheckedBox(){
    let name = document.getElementById("nameInput").value;
    let checkBoxes= document.querySelectorAll('input[type="checkbox"][name="music"]');
    let count = 0;
    checkBoxes.forEach(function(checkBox){
    if(checkBox.checked){
    count++;
}
});
    alert( name +"님, 저와"+ count + "개 취향이 같으시네요!")
}

    function reset(){
    document.getElementById("nameInput").value = "";
    let checkBoxes= document.querySelectorAll('input[type="checkbox"][name="music"]');
    checkBoxes.forEach(function(checkBox){
    if(checkBox.checked){
    checkBox.checked = false;
}
});
}
