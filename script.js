var firstname=createlabels("label","for","firstName","Firstname");
var br1=createlinebreak("br");
var firstNameinput=createinput("input","type","text","id","firstName");
var br2=createlinebreak("br");

//            //** lastname
var lastname=createlabels("label","for","lastName","Lastname");
var br3=createlinebreak("br");
var lastNameinput=createinput("input","type","text","id","lastName");
var br4=createlinebreak("br");



//  //**address 
var Address=createlabels("label","for","Address","Address");
var br5=createlinebreak("br");
var Addressinput=createinput("input","type","text","id","Address");
var br6=createlinebreak("br");


//            //** Picode
var pincode=createlabels("label","for","pincode","Pincode");
var br7=createlinebreak("br");
var Pincodeinput=createinput("input","type","text","id","pincode");
var br8=createlinebreak("br");

//  //**gender
var gender=createlabels("label","for","gender","gender");
var br9=createlinebreak("br");
var genderinput=createinput("input","type","text","id","gender");
var br10=createlinebreak("br");


          //** food
var food=createlabels("label","for","choiceoffood","choice of food");
var br11=createlinebreak("br");
var foodinput=createinput("input","type","number","id","choice of food");
var br12=createlinebreak("br");

          //** state
var state=createlabels("label","for","state","state");
var br13=createlinebreak("br");
var stateinput=createinput("input","type","state","id","state");
var br14=createlinebreak("br");

var country=createlabels("label","for","country","country");
var br15=createlinebreak("br");
var countryinput=createinput("input","type","country","id","country");
var br16=createlinebreak("br"); 



let button=document.createElement("button");
button.innerHTML="submit";

let cancel=document.createElement("button");
cancel.innerHTML="clear";

document.body.append(firstname,br1,firstNameinput,br2,lastname,br3,lastNameinput,br4,Address,br5,Addressinput,br6,pincode,br7,Pincodeinput,br8,gender,br9,genderinput,br10,food,br11,foodinput,br12,state,br13,stateinput,br14,country,br15,countryinput,br16,)
document.body.append(button);
document.body.append(cancel);
function createlabels(tagname,attrname,attrvalue,content){
var ele=document.createElement(tagname);
ele.setAttribute(attrname,attrvalue);
ele.innerHTML=content;
return ele;
}
//it is returning an HTML element
//<label for="email">Mail</label>

function createinput(tagname,attrname,attrvalue,attrname1,attrvalue1){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.setAttribute(attrname1,attrvalue1);
    return ele;
}
function createlinebreak(tagname){
var ele=document.createElement(tagname);
return ele;
}