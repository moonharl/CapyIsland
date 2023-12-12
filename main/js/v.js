var guess,random,input,riddle,usedArr;

usedArr=[];

over=2;

score=0;

i=0;

wrong=0;

while(wrong<over && score<6){
  random=Math.ceil(Math.random()*6);
  
    if(random==1){
    input=prompt("It is greater than God and more evil than the devil. The poor have it, the rich need it and if you eat it you’ll die. What is it?").toLowerCase();
      
      if(input!=="nothing"){
        wrong++
      alert("ERRO! Resposta errada. Você respondeu "+wrong+" perguntas de forma incorreta.");
      }else{
        alert("Resposta CORRETA")
       score++
        usedArr.push(random);
     }
  }
  if(random==2){
    input=prompt("Until I am measured I am not known,Yet how you miss me when I have flown").toLowerCase();
      
      if(input!=="time"){
        wrong++
      alert("ERRO! Resposta errada. Você respondeu "+wrong+" perguntas de forma incorreta.");       
      }else{
        alert("Resposta CORRETA")
       scorusedArr.push(random);e++
        usedArr.push(random);
    }
  }      

  if(random==3){
    input=prompt("What starts with a T, ends with a T, and has T in it?").toLowerCase();
      
      if(input!=="teapot"){
        wrong++
      alert("ERRO! Resposta errada. Você respondeu "+wrong+" perguntas de forma incorreta.");
      }else{
        alert("Resposta CORRETA")
       score++
        usedArr.push(random);
    }
  }
    if(random==4){
    input=prompt("Say my name and I disappear. What am I?").toLowerCase();
      
      if(input!=="silence"){
        wrong++
      alert("ERRO! Resposta errada. Você respondeu "+wrong+" perguntas de forma incorreta.");
}else{
       score++
  usedArr.push(random);
  alert("Resposta CORRETA")
    }
    }
  if(random==5){
    input=prompt("Sobrenome para acesso.").toLowerCase();
      
      if(input!=="vienisen"){
        wrong++
      alert("ERRO! Resposta errada. Você respondeu "+wrong+" perguntas de forma incorreta.");
}else{
       score++
  usedArr.push(random);
  alert("Resposta CORRETA")
    }
  }
  if(random==6){
    input=prompt("O nome da nossa corporação. ").toLowerCase();
      alert(input);
      if(input!=="vitória-régia"){
        wrong++
      alert("ERRO! Resposta errada. Você respondeu "+wrong+" perguntas de forma incorreta.");
  }else{
       score++
    alert("Resposta CORRETA")
    usedArr.push(random);
    }
  }
  i++;

}
if(score!==6){
  alert("ERRO! Respostas de segurança corretas insuficientes (6). Tente novamente.")
}
if(score==6){
  alert("Respostas de segurança corretas atingidas ("+score+"). Sua chave de acesso é: C-637. Use-a como extensão do encurtador de link da administração.")
}