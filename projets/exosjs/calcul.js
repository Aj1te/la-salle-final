function calcul(a, b, sign) {
    a = Number(a);
    b = Number(b);
  
    switch (sign) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return b !== 0 ? a / b : 'Division par zéro impossible';
    default: return 'Divise pas par 0 mofo'
  }
}
  console.log(calcul(10,5,'*'));