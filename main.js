const Gobj={
'-3':{
 male:'great grandfather',
 female:'great grandmother'
  },

'-2':{
  male:'grandfather',
  female:'grandmother'
 },
'-1':{
  male:'father',
  female:'mother'
  },
'0':{
  male:'me!',
  female:'me!'
  },
'1':{
 male:'son',
 female:'daughter'
 },
 '2':{
  male:'grandson',
  female:'granddaughter'
 },
 '3':{
 male:'great grandson ',
 female:'great granddaughter'
  }
}
        
    function Generation(num,str){
if(str==='f'&&(num==-1||num==-2||num==-3||num==0||num==1||num==2||num==3)){
  console.log(Gobj[num].female)
}else{
  console.log(Gobj[num].male)
}
    }
    Generation(-3,"m") 
             
            