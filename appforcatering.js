function sendEmail() {
    const name=document.querySelector('#fname').value;
    const location=document.querySelector('#locate').value;
    const event=document.querySelector('#event').value;
    const strength=document.querySelector("#strength").value;
    const mobile=document.querySelector('#num').value;
    const subj=name+" is planning to celebrate "+event;
    const body='Full Name: '+name+'<br>Current Location: '+location+'<br> Strength: '+strength+'<br> Mobile: '+mobile+'<br> Event: '+event;
  Email.send({
    Host: "smtp.gmail.com",
    Username: "tejapatel2709@gmail.com",
    Password: "kopwnzmettvayyrl",
    To: "tejapatel2709@gmail.com",
    From: "tejapatel2709@gmail.com",
    Subject: subj,
    Body: body,
  })
  .then(function (message) {
    if(message=='OK')
    {
      alert("Successfull")
        
    }
    else
    alert("try again after some time"+message);
  });
}