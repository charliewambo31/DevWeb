function rotationCouleurs () {
    let case1 = document.querySelector('#case1');
    let case2 = document.querySelector('#case2');
    let case3 = document.querySelector('#case3');
    let case4 = document.querySelector('#case4');

    let classCase1 = case1.getAttribute('class');
    let classCase2 = case2.getAttribute('class');
    let classCase3 = case3.getAttribute('class');
    let classCase4 = case4.getAttribute('class');

    case1.setAttribute('class', classCase3);
    case2.setAttribute('class', classCase1);
    case3.setAttribute('class', classCase4);
    case4.setAttribute('class', classCase2);
}

let bouton = document.querySelector('#bouton');
bouton.addEventListener('click', rotationCouleurs);


function calculer () {
    let a = document.querySelector('#A').value;
    let b = document.querySelector('#B').value;
    let c = document.querySelector('#C').value;
    let d = document.querySelector('#D').value;

    a = parseFloat(a);
    b = parseFloat(b);
    c = parseFloat(c);
    d = parseFloat(d);

    document.querySelector('#repAdd').textContent = (a + c).toString();
    document.querySelector('#repMult').textContent = (b * d).toString();
    document.querySelector('#repDiv').textContent = (c / d).toString();
    document.querySelector('#repSous').textContent = (a - b).toString();
}

let bouton2 = document.querySelector('#bouton2');
bouton2.addEventListener('click', calculer);