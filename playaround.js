
function sendMailBtn(){
    let params = {
        name: document.getElementById('name').value,
        bfname: document.getElementById('bfname').value,
        age: document.getElementById('age').value,
        nickname: document.getElementById('nickname').value,
        relationship: document.getElementById('relationship').value,
        goal: document.getElementById('goal').value,
        work: document.getElementById('work').value,
        Craziest: document.getElementById('Craziest').value,
        accomplishing: document.getElementById('accomplishing').value,
        accomplishing: document.getElementById('accomplishing').value,
        oname: document.getElementById('oname').value,
        message: document.getElementById('message').value,
    };

    const serviceID = 'service_nub3eri';
    const templateID = 'template_zitk6vy'; 

    emailjs.send(serviceID, templateID, params).then((res) => {
            document.getElementById('name').value = '';
            document.getElementById('bfname').value = '';
            document.getElementById('age').value = '';
            document.getElementById('nickname').value = '';
            document.getElementById('relationship').value = '';
            document.getElementById('goal').value = '';
            document.getElementById('work').value = '';
            document.getElementById('Craziest').value = '';
            document.getElementById('accomplishing').value = '';
            document.getElementById('accomplishing').value = '';
            document.getElementById('oname').value = '';
            document.getElementById('message').value = '';

            console.log(res);
            alert('Your message sent successfully');
        })
        .catch((err) => console.log(err))
}