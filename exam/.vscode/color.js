function changeColor() {
    var a = document.getElementsByTagName('div');
    for(i=0; i<a.length; i++){
        if(i%2==0){
            a[i].classList.add('class')
            a[i].style.color="blue"
        }
        else{
            a[i].classList.add('class1')
            a[i].style.color="red"
        }
    }
}
