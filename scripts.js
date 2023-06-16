function sumCheckedRadios() {
  let sum = 0;

  for (let i = 0; i <= 10; i++) {
    let radios = document.getElementsByName('quest' + i);
    for (var j = 0; j < radios.length; j++) {
      if (radios[j].checked) {
        sum += parseInt(radios[j].value);
      }
    }
  }
  return sum;
}

let button = document.getElementById('sumButton');
button.addEventListener('click', function () {
  let result = document.getElementById('result');
  result.style.display = 'block'
  if (sumCheckedRadios() < 6) {
    result.style.backgroundColor = 'rgba(255, 0, 0, 0.4)';
    result.innerHTML = `Resultado: ${sumCheckedRadios()} <br>
                        Você foi Reprovado! 😢`;
  } else {
    result.style.backgroundColor = 'rgba(60, 255, 0, 0.4)';
    result.innerHTML = `Resultado: ${sumCheckedRadios()} <br>
                        Você foi Aprovado!! 😁`;
  }

  setTimeout(function () {
    result.style.display = 'none'
  }, 7000);


});


let remake = document.getElementById('remake');
remake.addEventListener('click', function () {
  for (let i = 0; i <= 10; i++) {
    let radios = document.getElementsByName('quest' + i);
    for (var j = 0; j < radios.length; j++) {
      radios[j].checked = false
    }
  }
});
