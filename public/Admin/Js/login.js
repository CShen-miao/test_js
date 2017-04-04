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
    var name_length=0;
/*
    var str="adagwerwerwer";
    var re=/(a[d-g]){2}/i;
    alert(re.test(str));
*/
    // unicode 编码汉字范围 u4e00-u9fa5  
    var re=/[^\w\u4e00-u9fa5]/g;
    
    //check user name
    oName.onfocus=function(){
        name_msg.style.display="block";
        name_msg.innerHTML='<i class="ati"></i>5-25个字符';

    }
    oName.onkeyup=function(){
        count.style.visibility="visible";
        name_length=getLength(this.value);
        count.innerHTML=name_length+"个字符";
        if(name_length==0){
            count.style.visibility="hidden";
        }
    }
    oName.onblur=function(){
         var re=/[^\w\u4e00-\u9fa5]/g;
         if(re.test(this.value)){
             name_msg.innerHTML='<i class="err"></i> 含有非法字符！';  
         }
         else if (this.value==''){
             name_msg.innerHTML='<i class="err"></i> 不能为空';
         }
         else if (name_length>25){
             name_msg.innerHTML='<i class="err"></i> 长度不能超过25个字符';
         }
         else if (name_length<6){
             name_msg.innerHTML='<i class="err"></i> 长度超过25个字符';
         }
         else{
             name_msg.innerHTML='<i class="ok"></i> OK!';
         }
    }
    //check password
    pwd.onfocus=function(){
        pwd_msg.style.display="block";
        pwd_msg.innerHTML='<i class="ati"></i> 6-16个字符，请使用字母加数字或符号的组合密码，不能单独使用紫眸、数字或符号。';
    }
    pwd.onkeyup=function(){
        if(this.value.length>5){
            aEm[1].className="active";
            pwd2.removeAttribute('disabled');//移除属性
            pwd2_msg.style.display="block";
        }
        else{
            aEm[1].className="";
            pwd2.setAttribute("disabled");
            pwd2_msg.style.display="none";
        }
        if(this.value.length>10){
            aEm[2].className="active";
        }
        else{
            aEm[2].className="";
        }
    }
    pwd.onblur=function(){
        var m=findStr(pwd.value,pwd.value[0]);
        var re_n=/[^\d]/g;
        var re_t=/[^a-zA-Z]/g;
        if(this.value==""){
            pwd_msg.innerHTML='<i class="err"></i>不能为空';
        }
        else if(m==this.value.length){
            pwd_msg.innerHTML='<i class="err"></i>不能用相同字符';
        }
        else if(this.value.length<6 || this.value.length>16){
            pwd_msg.innerHTML='<i class="err"></i>长度应为6-16个字符';
        }
        else if(!re_n.test(this.value)){
            pwd_msg.innerHTML='<i class="err"></i>不能全为数字';
        }
        else if(!re_t.test(this.value)){
            pwd_msg.innerHTML='<i class="err"></i>不能全为字母';
        }
        else{
            pwd_msg.innerHTML='<I class="ok"></li>OK';
        }

    }
    pwd2.onblur=function(){
        if(this.value!=pwd.value){
            pwd2_msg.innerHTML='<i class="err"></i>两次输入的密码不一致！';
        }
        else{
            pwd2_msg.innerHTML='<i class="ok"></i>OK';
        }
    }

}

function getLength(str){
    return str.replace(/[^\x00-xff]/g,'xx').length;//\x00-xff范围在ascii 表里全部为单字节
}
function findStr(str,n){
    var tmp=0;
    for(var i=0; i<str.length; i++){
        if(str.charAt(i)==n){
            tmp++;
        }
        return tmp;
    }
}
