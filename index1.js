let key = document.querySelectorAll('#keyboard>div')
let bag = ""
key.forEach(function (el) {
    el.addEventListener('click', myCal)

    function myCal(event) {

        let targetNumber = event.target.innerText
        if (targetNumber == 'C') {
            bag = bag + ""
            document.querySelector('#display').innerText = ""
        }
        else if (targetNumber == '=') {
            console.log(eval(bag));

            bag += ''
            document.querySelector('#display').innerText = eval(bag)

        }
        else {
            bag = bag + targetNumber
            document.querySelector('#display').innerText = bag
        }


    }
})