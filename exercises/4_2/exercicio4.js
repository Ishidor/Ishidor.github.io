
 
let n=5;

let asr4='';

let controle2=(n+1)/2;
let controlemais=controle2;
let controlemenos=controle2;

for(i=0;i<=controle2;i++){
    for(j=1;j<=n;j++){
        if(j>controlemenos && j<controlemais ){
            asr4=asr4+'*';
        }else{
            asr4=asr4+' ';
        }
       
    }
    console.log(asr4);
    asr4='';
    controlemenos--;
    controlemais++;
}
