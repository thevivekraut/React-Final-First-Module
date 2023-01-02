import ExpenseItem from "./components/Expenses/ExpenseItem";

const App = () => {
  const expenses = [
    { 
      id: "1",
      title: "Shopping", 
      amount: 40, 
      date: new Date(2020, 7, 8) 
    },
    { 
      id: "2", 
      title: "Holiday", 
      amount: 400, 
      date: new Date(2022, 7, 4) 
    },
    {
      id: "3",
      title: "Car Service",
      amount: 50,
      date: new Date(2022, 10, 2),
    },
    {
      id: "4",
      title: "Car Insurance",
      amount: 500,
      date: new Date(2022, 3, 5),
    },
  ];

  return (
    <div className='expenses'>
     
      <h2>Let's get started!</h2>
     
      {expenses.map(props => (
        <ExpenseItem key={props.title} props={props} />
      ))}
    </div>
  );
}

export default App;
