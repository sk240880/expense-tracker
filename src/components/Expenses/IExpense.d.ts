interface IExpenseItemProps {
  id: string;
  date: Date;
  title: string;
  amount: number;
}

interface IExpenseDateProps {
    date: Date;
}

interface IExpensesProps{
    expenses:IExpenseItemProps[];
}