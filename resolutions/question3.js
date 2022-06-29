const responseJson = require("../faturamento.json");

function maxValue() {
  const value = responseJson.map(({ valor }) => valor);
  const max = Math.max(...value);
  return console.log(`Valor mais alto ${max}`);
}
maxValue();

function minValue() {
  let filterValue = [];
  const value = responseJson.map(({ valor }) => valor);
  for (let i = 0; i <= value.length; i++) {
    if (value[i] > 0) {
      filterValue.push(value[i]);
    }
  }
  const min = Math.min(...filterValue);
  console.log(`valor mais baixo ${min}`);
}

minValue();

function valueAndDay() {
  const value = responseJson.map(({ valor }) => valor);
  const summ = value.reduce((acc, valor) => acc + valor, 0);
  const resultSumm = summ / 30;
  console.log(`Média ${resultSumm.toFixed(2)}`);

  let filterDayAndValue = [];
  const day = responseJson.map((allValues) => allValues);

  for (let i = 0; i < day.length; i++) {
    if (day[i].valor >= resultSumm) {
      filterDayAndValue.push(`dia ${day[i].dia}, valor ${day[i].valor}`);
    }
  }
  return console.log(
    ` Dias que ultrapassaram a média do mês: ${filterDayAndValue}`
  );
}

valueAndDay();
