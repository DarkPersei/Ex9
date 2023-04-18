function checkAndelToOLdElements(elementclass) {
    let OldElements = document.querySelectorAll(elementclass);
    if (OldElements.length > 0) {
        for (let i = 0; i < OldElements.length; i++) OldElements[i].parentNode.removeChild(OldElements[i]);

    }
}


function Quadratic_equation() {
    //search and del old equation
    checkAndelToOLdElements('.h2textjs')
    checkAndelToOLdElements('.ptextjs')
    let txtQuadratic_equation = document.QE.quadratic_equation.value;
    //create a b c
    let a, b, c;

    // function cuts out a b c in txtQuadratic_equation
    function setABC(sA, eA, sB, eB, sC, eC) {
        a = txtQuadratic_equation.slice(sA, eA);
        a = a == '+' || a == 0 ? 1 : a == '-' ? -1 : +a;
        b = txtQuadratic_equation.slice(sB, eB);
        b = b == '+' || b == 0 ? 1 : b == '-' ? -1 : +b;
        c = txtQuadratic_equation.slice(sC, eC);
        c = +c;

    }
    if (txtQuadratic_equation.length > 0) {


        let startingNumberL = new Array();
        let endingNumberL = new Array();
        //search  ending Number position for the quadratic equation
        let pos = 0;
        if (txtQuadratic_equation.indexOf("x") != -1) {
            //search  ending and starting Number for the quadratic equation
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
            setABC(0, endingNumberL[0], startingNumberL[0] + 3, endingNumberL[1], startingNumberL[1] + 1, endingNumberL[2])

        } else if (txtQuadratic_equation.indexOf("a") != -1) {
            if (txtQuadratic_equation.indexOf(",") != -1) {
                startingNumberL.push(txtQuadratic_equation.indexOf("a"));
                endingNumberL.push(txtQuadratic_equation.indexOf(",", pos));
                pos = endingNumberL.at(-1) + 1;
                startingNumberL.push(txtQuadratic_equation.indexOf("b"));
                endingNumberL.push(txtQuadratic_equation.indexOf(",", pos));
                startingNumberL.push(txtQuadratic_equation.indexOf("c"));
                setABC(startingNumberL[0] + 2, endingNumberL[0], startingNumberL[1] + 2, endingNumberL[1], startingNumberL[2] + 2, txtQuadratic_equation.length)
            } else {
                startingNumberL.push(txtQuadratic_equation.indexOf("a"));
                startingNumberL.push(txtQuadratic_equation.indexOf("b"));
                startingNumberL.push(txtQuadratic_equation.indexOf("c"));
                setABC(startingNumberL[0] + 2, startingNumberL[1], startingNumberL[1] + 2, startingNumberL[2], startingNumberL[2] + 2, txtQuadratic_equation.length)

            }

            //search X for the txt quadratic equation
        } else {
            //search  ending Number for the quadratic equation
            if (txtQuadratic_equation.indexOf(",") != -1) {
                while (endingNumberL.at(-1) != -1) {
                    endingNumberL.push(txtQuadratic_equation.indexOf(",", pos));
                    pos = endingNumberL.at(-1) + 1;
                }
                setABC(0, endingNumberL[0], endingNumberL[0] + 1, endingNumberL[1], endingNumberL[1] + 1, txtQuadratic_equation.length)

            } else {
                while (endingNumberL.at(-1) != -1) {
                    endingNumberL.push(txtQuadratic_equation.indexOf(" ", pos));
                    pos = endingNumberL.at(-1) + 1;
                }
                setABC(0, endingNumberL[0], endingNumberL[0], endingNumberL[1], endingNumberL[1], txtQuadratic_equation.length)
            }
        }
        let textElement = document.querySelector('#QEjscreate');
        textElement.insertAdjacentHTML('beforeend', `<h2 class="h2textjs">Дано:</h2><p class="ptextjs"> a = ` + a + `,b = ` + b + `, c = ` + c + ` .</p>`);
        let D = b ** 2 - 4 * a * c;
        textElement.insertAdjacentHTML('beforeend', `<h2 class="h2textjs">Розвязок:</h2><p class="ptextjs">D = b<sup>2</sup>-4ac<br> 
    D= ` + b + `<sup>2</sup>-4*` + a + `*` + c + `=` + D + `</p>`);
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


function openTab(evt, tabName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function closeTab(evt, tabName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "block";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "none";
    evt.currentTarget.className += " active";
}