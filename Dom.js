
function demo(){

    const div = document.getElementById('div');
    div.innerHTML = " ";
    div.style.background = 'blue';
    div.style.width = '100px';
    div.style.height = '200px';
    
}
function demo1(){
    const div=document.getElementById('div');
    div.innerHTML=" ";
    Object.assign(div.style,{
        backgroundColor:'red',
        width:'200px',
        height:'100px'
    })
}
