window.onload=function(){
    var alnput=document.getElementsByTagName('input');
    var oName=alnput[0];
    var pwd=alnput[1];
    var pwd2=alnput[2];
    var aP=document.getElementsByTagName('p');
    var name_msg=aP[0];
    var pwd_msg=aP[1];
    var pwd2_msg=aP[2];
    var count=document.getElementById('count');
    var aEm=document.getElementsByTagName('em');
    
    var str="adaewerwerwer234";
    var re=/a[d-g]{2}/i;
    alert(re.test(str));

}
