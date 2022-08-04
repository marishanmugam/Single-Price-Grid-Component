 
function check () {
    let input = document.getElementById('inputbox');
    data = input.value;
    let mailCheck = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    console.log(data == mailCheck);
    // if(data == '')
    // {
    //     console.log('not correct')
    //     document.getElementById('error').style.display = "block";
    //     document.getElementById('errormsg').style.display = "block";
    // }
    // else if(data == mailCheck)
    // {
    //     console.log('incorrect correct')
       
    // }
    // else
    // {
    //     document.getElementById('error').style.display = "none";
    //     document.getElementById('errormsg').style.display = "none";
    // }

//     if(data.match(mailCheck) && data =='')
// {
//    console.log('incorrect');
// }
// else
// console.log('sucess');
    if(data == '')
    {
        document.getElementById('errormsg').style.display = "block";
        document.getElementById('error').style.display = "block";
    }
    else if (data.match(mailCheck))
    {
        document.getElementById('errormsg').style.display = "none";
        document.getElementById('errormsg1').style.display = "none";
        document.getElementById('error').style.display = "none";
    }
    else 
    {
        document.getElementById('errormsg1').style.display = "block";
        document.getElementById('errormsg').style.display = "none"; 
    }
}