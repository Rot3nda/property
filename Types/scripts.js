const sideOff=()=>{
    document.getElementById('pop').style.display="flex";
    document.getElementById('left').style.display="none";
    document.getElementById('right').style.width="98%";
    let items = document.getElementsByClassName("rightaa");
    for(let i = 0; i < items.length; i++) {
      items[i].style.width="21rem";
    }
}

const sideOn=()=>{
    document.getElementById('pop').style.display="none";
    document.getElementById('left').style.display="block";
    document.getElementById('right').style.width="75%";
    let items = document.getElementsByClassName("rightaa");
    for(let i = 0; i < items.length; i++) {
      items[i].style.width="25rem";
    }
}