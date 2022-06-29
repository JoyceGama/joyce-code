const states = [
  {
    State: "SP",
    Billing: 67836.43,
  },
  {
    State: "RJ",
    Billing: 36678.66,
  },
  {
    State: "MG",
    Billing: 29229.88,
  },
  {
    State: "ES",
    Billing: 27165.48,
  },
  {
    State: "Outros",
    Billing: 19849.53,
  },
];

function porcentage() {
  let totalAverage = [];
  const billingResult = states.reduce((acc, { Billing }) => acc + Billing, 0);

  for (let i = 0; i < states.length; i++) {
    let average = (states[i].Billing / billingResult).toFixed(1) * 100;

    totalAverage.push(
      `Estado ${states[i].State}, Faturamento ${average} % porcento `
    );
  }
  console.log(totalAverage);
}

porcentage();
