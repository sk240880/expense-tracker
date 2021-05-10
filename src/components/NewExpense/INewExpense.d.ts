interface IUserExpenseFormProps {
  onSaveExpenseData: (props: IExpenseItemProps) => void;
}

interface IExpenseProps {
  onAddExpense: (props: IExpenseItemProps) => void;
}
