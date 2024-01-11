// import React from 'react';
function setPost(data) {
    function diaMes() {
        let valor;
        valor = new Date();
        let month = valor.getMonth() + 1;
        if (month < 10) {
            month = '0' + month;
        }
        let day = valor.getDate();
        let year = valor.getFullYear();
        let minutes = valor.getMinutes();
        let hour = valor.getHours();
        return day + '/' + month + '/' + year + ' ' + hour + ':' + minutes;
    }
    alert('ta indo');
    let url = 'https://e23279ec-dbf2-46ea-9b5b-375037e64a96-00-lu8wikwdtwis.kirk.replit.dev/user';

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', //fala o tipo de conteudo. Por enquanto,estamos trabalhando somente com json
        },
        body: JSON.stringify({
            img: data.img,
            title: data.title,
            postTime: diaMes(),
            password: data.password,
            autor: data.autor,
            text: data.descricao,
        }),
    };

    fetch(url, options)
        .then(console.log('Post concluido'))
        .catch((resolve) => alert(resolve));
}

export default setPost;
