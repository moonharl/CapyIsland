var guess,random,input,riddle,usedArr;

usedArr=[];

over=3;

score=0;

i=0;

wrong=0;

while(wrong<over && score<3){
  random=Math.ceil(Math.random()*6);
  
    if(random==1){
    input=prompt("It is greater than God and more evil than the devil. The poor have it, the rich need it and if you eat it you’ll die. What is it?").toLowerCase();
      
      if(input!=="nothing"){
        wrong++
      alert("Wrong, The answer is nothing. You now have guessed "+wrong+" question(s) wrong");
      }else{
        alert("Correct")
       score++
        usedArr.push(random);
     }
  }
  if(random==2){
    input=prompt("Until I am measured I am not known,Yet how you miss me when I have flown").toLowerCase();
      
      if(input!=="time"){
        wrong++
      alert("Wrong, The answer is time. You now have guessed "+wrong+" question(s) wrong");
      
        
      }else{
        alert("Correct")
       scorusedArr.push(random);e++
        usedArr.push(random);
    }
  }
      

  if(random==3){
    input=prompt("What starts with a T, ends with a T, and has T in it?").toLowerCase();
      
      if(input!=="teapot"){
        wrong++
      alert("Wrong, The answer is teapot. You now have guessed "+wrong+" question(s) wrong");
     
        
      }else{
        alert("Correct")
       score++
        usedArr.push(random);
    }
  }
    if(random==4){
    input=prompt("Say my name and I disappear. What am I?").toLowerCase();
      
      if(input!=="silence"){
        wrong++
      alert("Wrong, The answer is silence. You now have guessed "+wrong+" question(s) wrong");
      
        
}else{
       score++
  usedArr.push(random);
  alert("Correct")
    }
    }
  if(random==5){
    input=prompt("A box without hinges, lock or key, yet golden treasure lies within. What is it?").toLowerCase();
      
      if(input!=="egg"){
        wrong++
      alert("Wrong, The answer is egg . You now have guessed "+wrong+" question(s) wrong");
      
        
}else{
       score++
  usedArr.push(random);
  alert("Correct")
    }
  }
  if(random==6){
    input=prompt("What gets wetter as it dries?").toLowerCase();
      alert(input);
      if(input!=="towel"){
        wrong++
      alert("Wrong, The answer is towel. You now have guessed "+wrong+" question(s) wrong");
      
        
      
  }else{
       score++
    alert("Correct")
    usedArr.push(random);
    }
    
  

  }
  i++;

}
if(score!==3){
  alert("You only scored "+score+" point(s) better luck next time!")
}
if(score==3){
  alert("Congratulations, you scored "+score+" points, you win!")
}
alert(usedArr);
alert(i)