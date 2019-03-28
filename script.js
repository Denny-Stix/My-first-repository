
let money=prompt('Ваш бюджет на месяц?'),
    time=prompt("Введите дату в формате YYYY-MM-DD"),
    question1=prompt("Введите обязательную статью расходов в этом месяце"),
    question2=prompt( "Во сколько обойдется?"),
    question3=prompt( "Введите обязательную статью расходов в этом месяце"),
    question4=prompt( "Во сколько обойдется?"),
    appData={
    moneyData:money,
    timeData:time,
    expenses:{question1:question2},
    optionalExpenses:{},
    income:[],
    savings:false
};
console.log(money/30);
alert(money/30);