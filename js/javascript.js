function Quadratic_equation(QuadraticEquationFormID) {
    let txtQuadratic_equation = document.QE.quadratic_equation.value;
    let startingNumberL = new Array();
    let endingNumberL = new Array();
    //search  ending Number for the quadratic equation
    let pos = 0;
    while (endingNumberL.at(-1) != -1) {
        endingNumberL.push(txtQuadratic_equation.indexOf("x", pos));
        pos = endingNumberL.at(-1) + 1;
    }
    endingNumberL.pop();
    endingNumberL.push(txtQuadratic_equation.indexOf("="));
    //search   starting Number for the quadratic equation
    startingNumberL.push(txtQuadratic_equation.indexOf("x^2", pos));
    pos = startingNumberL.at(-1) + 1;
    startingNumberL.push(txtQuadratic_equation.indexOf("x", pos));
    if (endingNumberL.length == 3 && startingNumberL.length == 2) {
        //записую числа в a b c

        let a = txtQuadratic_equation.slice(0, endingNumberL[0]);
        a = a == '+' || a == 0 ? 1 : a == '-' ? -1 : +a;
        let b = txtQuadratic_equation.slice(startingNumberL[0] + 3, endingNumberL[1]);
        b = b == '+' || b == 0 ? 1 : b == '-' ? -1 : +b;
        let c = txtQuadratic_equation.slice(startingNumberL[1] + 1, endingNumberL[2]);
        c = +c;

        let textElement = document.querySelector('#QEjscreate');
        textElement.insertAdjacentHTML('beforeend', `<h2 class="h2textjs">Дано:</h2><p class="ptextjs">Рiвняння: ` + txtQuadratic_equation + ` <br> a = ` + a + `,b = ` + b + `, c = ` + c + ` .</p>`);
        let D = b ** 2 + 4 * a * c;
        textElement.insertAdjacentHTML('beforeend', `<h2 class="h2textjs">Розвязок:</h2><p class="ptextjs">D = b<sup>2</sup>+4ac<br> 
        D= ` + b + `<sup>2</sup>+4*` + a + `*` + c + `=` + D + `</p>`);
        if (D < 0) {
            textElement.insertAdjacentHTML('beforeend', `<p class="ptextjs">Рiвняння не мае коренив</p>`);
        } else {
            let x1 = (-b + D ** 0.5) / (2 * a)
            if (D == 0) textElement.insertAdjacentHTML('beforeend', `<p class="ptextjs">Корень рiвняння = ` + x1 + `</p>`);
            else {
                let x2 = (-b - D ** 0.5) / (2 * a);
                textElement.insertAdjacentHTML('beforeend', `<p class="ptextjs">Рiвняння мае два коренни x1=` + x1 + ` ,x2=` + x2 + `</p >`);
            }
        }
    }
}