document.addEventListener("DOMContentLoaded", () => {
    const expenseForm = document.getElementById("expense-form");
    const expenseList = document.getElementById("expense-list");
    const summary = document.getElementById("summary");
    const logoutBtn = document.getElementById("logout-btn");
  
    let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
  
    const updateSummary = () => {
      const currentMonth = new Date().getMonth();
      const monthlyExpenses = expenses.filter(expense => 
        new Date(expense.date).getMonth() === currentMonth
      );
  
      const totalAmount = monthlyExpenses.reduce((sum, expense) => sum + expense.amount, 0);
  
      summary.innerText = `Total Spending: $${totalAmount}`;
    };
  
    const renderExpenses = () => {
      expenseList.innerHTML = "";
      expenses.forEach((expense, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
          <span>${expense.date} - ${expense.description} - $${expense.amount} (${expense.category})</span>
          <button onclick="deleteExpense(${index})">Delete</button>
        `;
        expenseList.appendChild(li);
      });
    };
  
    const deleteExpense = (index) => {
      expenses.splice(index, 1);
      localStorage.setItem("expenses", JSON.stringify(expenses));
      renderExpenses();
      updateSummary();
    };
  
    expenseForm.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const description = document.getElementById("description").value;
      const amount = parseFloat(document.getElementById("amount").value);
      const date = document.getElementById("date").value;
      const category = document.getElementById("category").value;
  
      expenses.push({ description, amount, date, category });
      localStorage.setItem("expenses", JSON.stringify(expenses));
  
      expenseForm.reset();
      renderExpenses();
      updateSummary();
    });
  
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("isLoggedIn");
      window.location.href = "index.html"; // Redirect to login
    });
  
    renderExpenses();
    updateSummary();
  
    window.deleteExpense = deleteExpense;
  });
// Select the logout button
const logoutButton = document.getElementById("logout-button");

// Add event listener to the logout button
logoutButton.addEventListener("click", () => {
  // Clear user session data (if stored in localStorage or sessionStorage)
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("username"); // Assuming you stored the username

  // Redirect to the login page
  window.location.href = "index.html";
});
  