var bd  = document.getElementById('bd');
var dollar = document.getElementById('dollar')

bd.addEventListener('input', function(){
    let f = this.value;
    let i = f*117.48;
    dollar.value=  i;
});


dollar.addEventListener('input', function(){
    let i = this.value;
    let f = i/117.48;
    if(!Number.isInteger(f)){
        f= f.toFixed(2);
    };
    bd.value=  f;
})

