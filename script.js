
document.getElementById('submit').addEventListener("submit",check())   //Event Listener for onsubmit
function check(){
 let c=false,d=false,e=false,f=false,g=false;
while(c==false||d==false||e==false||f==false||g==false) {  //Calling respective functions within the loop,till all conditions are satisfied
    c=checkname();
    d=checkemail();
    e=checkphn();
    f=checkpass();
    g=checkconpass();
    return false;
}
print();
}
function print(){
document.getElementById('disp').value="Account Created Successfully";}

document.getElementById('name').addEventListener("change",checkname())  //For checking the name
function checkname() {
     let name=document.getElementById('name').value;
    if(name.length<5){   //checking if the length of name is less than 5
        window.alert("enter name with more than 5 characters");
        return false;}
        else{
            return true;}
        }

        document.getElementById('email').addEventListener("change", checkemail())  //Checking for valid email input
function checkemail() {
     let email=document.getElementById('email').value;
     if(email.indexOf('@')==-1||email[email.length-1]=='@'){  //If email address doesn't contain @ symbol
        window.alert("Invalid Email Entered");
        return false;}
        else{
            return true;}
        }

        document.getElementById('phn').addEventListener("change", checkphn()) //for valid phone number
        function checkphn() {
             let phone=document.getElementById('phn').value;
             if(phone=="0123456789"||phone=="1234567890"||phone.length!=10){ //conditions for a valid phone number
                window.alert("Invalid Phone Number entered");
                return false;}
                else{
                    return true;}
                }

                document.getElementById('pass').addEventListener("change", checkpass()) //for valid password
                function checkpass() {
                     let password=document.getElementById('pass').value;
                     let name=document.getElementById('name').value;
                     if(password==name||password=="password"||password.length<8){  //checking for a valid password
                        window.alert("Password is not Strong");
                        return false;
                    }
                        else{
                            return true;}
                        }

                        document.getElementById('cpass').addEventListener("change", checkconpass())  //for verification of password
                        function checkconpass() {
                             let confirmpass=document.getElementById('cpass').value;
                             let password=document.getElementById('pass').value;
                             if(password!=confirmpass){  //confirming the two passwords
                                window.alert("Passwords do not match");
                                return false;}
                                else{
                                    return true;}
                                }