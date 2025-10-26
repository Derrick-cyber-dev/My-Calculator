document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.calculator-form');
  const resultBox = document.getElementById('result');
  const resetBtn = form.querySelector('.reset');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const num1 = parseFloat(form.num1.value);
    const num2 = parseFloat(form.num2.value);
    const operator = form.opérateur.value;

    let result;

    if (isNaN(num1) || isNaN(num2)) {
      resultBox.innerHTML = `<p class="error">❌ Veuillez entrer des numéros valides.</p>`;
      return;
    }

    switch (operator) {
      case 'Ajouter ➕':
        result = num1 + num2;
        break;
      case 'soustraire ➖':
        result = num1 - num2;
        break;
      case 'Multiplier ✖️':
        result = num1 * num2;
        break;
      case 'Diviser ➗':
        if (num2 === 0) {
          resultBox.innerHTML = `<p class="error">🚫 Division par zéro non autorisée.</p>`;
          return;
        }
        result = num1 / num2;
        break;
      default:
        resultBox.innerHTML = `<p class="error">⚠️ Choisissez une opération valide.</p>`;
        return;
    }

    resultBox.innerHTML = `<p class="success">✅ Résultat: <strong>${result}</strong></p>`;
  });

  resetBtn.addEventListener('click', function () {
    resultBox.innerHTML = '';
  });
});
