const instaDIV = document.getElementById('instagram');
const whatsDIV = document.getElementById('whatsapp');
const faceDIV = document.getElementById('facebook');

const projects = document.getElementById('projects');
const divs = document.querySelectorAll('.project');

        divs.forEach(div => {
            div.addEventListener('mouseover', () => {
                divs.forEach(d => {
                    if (d !== div) {
                        d.classList.add('dimmed');
                        projects.classList.add('dimmed');
                    }
                });
            });

            div.addEventListener('mouseout', () => {
                divs.forEach(d => {
                    d.classList.remove('dimmed');
                    projects.classList.remove('dimmed');
                });
            });
        });


instaDIV.addEventListener('click', () => {
    alert('instagram click');
})

whatsDIV.addEventListener('click', () => {
    alert('whatsapp click');
})

faceDIV.addEventListener('click', () => {
    alert('facebook click');
})