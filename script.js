

function success(){
    const form=document.getElementById("my-form")
const status=document.getElementById("status")
    form.reset();
    status.classList.add('success')
    status.innerHTML= "Thanks for your interest!!!!"
}

function error(){
    const status=document.getElementById("status")
    status.innerHTML="Oops! Something went wrong"
    status.classList.add('error')
}




function sendEmail(params){
    event.preventDefault()
    let tempParams={
        from_name:document.getElementById("firstName").value,
        from_lastName:document.getElementById("lastName").value,
        email:document.getElementById("email").value,
        message:document.getElementById("message").value,
    };
    emailjs.send('service_4qx9xdr','template_jx6zayf',tempParams)
    .then(function(res){
        console.log("success",res.status);
        success()
    })
    /* .catch(error=>console.log(error)) */
    if (res.status === 200){
        success()
    }else{
        error()
    }
};