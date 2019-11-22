function Father(){
    this.bloodType ='A';
    
}
Father.prototype.wife='miss';

//构造son函数
function Son(bloodType,name,age,phone,mother){
    Father.call(this,bloodType);//继承father的血型
    this.name =name;
    this.age = age;
    this.phone = phone;
    this.mother =Father.prototype.wife;
}
Son.prototype = new Son();
Son.prototype.constructor =Son;
let Son1 =new Son('A','Mike',15,17612317003);
console.log(Son1);

//构造daughter函数
function Daughter(bloodType,name,age,phone,mother){
    Father.call(this,bloodType);
    this.name = name;
    this.age = age;
    this.phone = phone;
    this.mother=Father.prototype.wife;
}
Daughter.prototype = Object.create(Father.prototype);
Daughter.prototype.constructor =Daughter;
let Daughter2 =new Daughter('A','Mier',15,17612317003,);
console.log(Daughter2);
//
delete Son1.name;
let Son2=new Son();
Son2.name='draven';
console.log(Son2.name);
let a = Father.prototype.wife
console.log(a);
console.log(Father === Father.prototype.constructor);
//

let input2 = document.getElementById('input2');
input2.onclick=function isPoneAvailable(){
    let num = document.getElementById('input1');
    let newnum=num.value;
    var myreg=/^[1][3,4,5,7,8][0-9]{9}$/; 
 if( myreg.test(newnum)){
     alert("提交成功")
 }else{
     alert("格式有错误")
    }
}
//

let send = document.getElementById('send');
send.onclick = function ispassword(){
    let Mm =document.getElementById('mima').value;
    let Qr= document.getElementById('queren').value;
    var re =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if(re.test(Mm)){
        if(Mm==Qr){
            alert("提交成功");
        }else{
            alert("两次密码不一致");
        }
    }
}
