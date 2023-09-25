document.body.style.fontFamily = 'Montserrat';

const h1 = document.querySelector('h1');
h1.style.textAlign = 'center';
h1.style.color = '#50C878';
h1.style.margin = 'auto';

const h2 = document.querySelector('h2');
h2.style.textAlign = 'center';
h2.style.fontWeight = '200';
h2.style.fontSize = '1.2rem';
h2.style.margin = '0';

const h3 = document.querySelector('h3');
h3.style.textAlign = 'center';
h3.style.fontWeight = '200';
h3.style.margin = '.2rem auto 2rem auto';
h3.style.fontSize = '1rem';

const wrapper = document.querySelector('.wrapper');
wrapper.style.textAlign = 'center';

const wrapperTwo = document.querySelector('.wrapperTwo');
wrapperTwo.style.display = 'flex';
wrapperTwo.style.flexWrap = 'wrap';
wrapperTwo.style.justifyContent = 'flex-start';
wrapperTwo.style.width = '60%';
wrapperTwo.style.margin = 'auto';
wrapperTwo.style.alignContent = 'left';


const input = document.querySelector('#number');
input.style.outline = 'none';
input.style.borderColor = '#50C878';
input.style.borderStyle = 'solid';
input.style.width = '40%';
input.style.height = '2rem';
input.style.paddingLeft = '1rem';
input.style.fontSize = '1rem';
input.style.marginBottom = '2rem';

const button = document.querySelector('button');
button.style.color = 'white';
button.style.backgroundColor = '#50C878';
button.style.borderStyle = 'solid';
button.style.borderColor = '#50C878';
button.style.height = '2.3rem';
button.style.width = '10rem';
button.style.fontSize = '1rem';
button.style.margin = 'auto auto auto 1rem';


const p = document.querySelector('#error');
p.style.color = 'red';
p.style.fontSize = '.9rem';
p.style.padding = 'none';
p.style.textAlign = 'left';
p.style.margin = 'auto auto .4rem 19rem';
p.style.fontWeight = '400';


button.addEventListener('click', () =>{
    const inputValue = document.querySelector('#number').value;
    if(isNaN(inputValue)){
        p.textContent = 'Input value must be a number.';
    }else if(inputValue === ''){
        p.textContent = 'Enter number value in the text field to generate numbers.';
    }else{
        p.textContent = '';
    }
    
    wrapperTwo.textContent = '';
    
        for(let i = 1; i <= inputValue; i++){
        let num = document.createElement('div');
        num.className = 'nums';
        num.style.width = '6rem';
        num.style.padding = '.3rem'
        num.style.margin = '.1rem';
        num.style.fontSize = '2rem';
        num.style.backgroundColor = 'red';
        num.style.color = 'white';
        num.style.fontWeight = 'bolder';
        num.textContent = i;
        wrapperTwo.appendChild(num);
        if(i % 2 === 0){
            num.style.backgroundColor = '#0BDA51';
        }else if(i % 2 != 0){
            num.style.backgroundColor = '#FF5733';
        }
        }
})











