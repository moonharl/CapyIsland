var guess,random,input,riddle,usedArr;

usedArr=[];

over=2;

score=0;

i=0;

wrong=0;

while(wrong<over && score<6){
  random=Math.ceil(Math.random()*6);
  
    if(random==1){
    input=prompt("Slogan da Lótus Studios.").toLowerCase();
      
      if(input!=="experimentando os limites da criação"){
        wrong++
      alert("ERRO! Resposta errada. Você respondeu "+wrong+" perguntas de forma incorreta.");
      }else{
        alert("Resposta CORRETA")
       score++
        usedArr.push(random);
     }
  }
  if(random==2){
    input=prompt("Nosso experimento de representante. ").toLowerCase();
      
      if(input!=="capy staff"){
        wrong++
      alert("ERRO! Resposta errada. Você respondeu "+wrong+" perguntas de forma incorreta.");       
      }else{
        alert("Resposta CORRETA")
       score++
        usedArr.push(random);
    }
  }      

  if(random==3){
    input=prompt("Data de abertura da ilha ao público novamente. Formato: 00/00/00").toLowerCase();
      
      if(input!=="21/07/23"){
        wrong++
      alert("ERRO! Resposta errada. Você respondeu "+wrong+" perguntas de forma incorreta.");
      }else{
        alert("Resposta CORRETA")
       score++
        usedArr.push(random);
    }
  }
    if(random==4){
    input=prompt("Nome da ilha.").toLowerCase();
      
      if(input!=="capy island"){
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
      
      if(input!=="viniesen"){
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
  alert("Respostas de segurança corretas atingidas ("+score+"). Sua chave de acesso é: C-637. Use CI-FILE-637 como extensão do encurtador de link da administração para acessar o documento.")
}