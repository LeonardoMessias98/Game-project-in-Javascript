alert('Tutorial: Utilize as teclas A D ou as setas para mover, para prosseguir pressione ENTER !')

document.addEventListener('keydown', handleKey);

const srcImg = ['./img/humanos.jpg','./img/elfo.jpg','./img/anoes.jpg','./img/orcs.jpg'];
const btnColor = ['btnHuman','btnElf','btnDwarf','btnOrc'];

let btnAnterior =''

let posi = 0;

function handleKey(event){
    if (event.key == "Enter" ){
        	
        window.location.href = '../Personagem/index.htm';

    }


    if (event.key == 'a' || event.key == 'ArrowLeft' ){
        
        if (posi == 0 ){
            posi = 3
        }
        else{
            posi--
        }
        trocaCorLeft()
    }
    else if(event.key == 'd' || event.key == 'ArrowRight'){
        
        if (posi == 3){
            posi = 0
        }
        else{
            posi++
            
        }
        trocaCorRight()
    }

    document.getElementById('classImg').src = srcImg[posi]
    
    let btn = document.getElementById(btnColor[posi])
    
    btn.classList.add('trocaCor')
    
    btn.classList.remove('quality')
    
    

    btnAnterior.classList.add('quality')

    btnAnterior.classList.remove('trocaCor')
      
  }

function trocaCorRight(){
    if (posi > 0){
        btnAnterior = document.getElementById(btnColor[posi-1])
        
    }
    else if (posi == 0){
        btnAnterior = document.getElementById(btnColor[3])
        
    }
    
    return (btnAnterior)
}

function trocaCorLeft(){
    if (posi <3){
        btnAnterior = document.getElementById(btnColor[posi+1])
        
    }
    
    else if (posi == 3){
        btnAnterior = document.getElementById(btnColor[0])
        
    }
    return (btnAnterior)
}

