

export function get_balance(user) {
  // Retrieve user data from local storage
  const userData = JSON.parse(localStorage.getItem(user));

  // Check if user data exists
  if (userData) {
    // Assuming the balance is stored in userData.balance
    const balance = parseFloat(userData.balance); // Convert balance to a number

    // Format the balance
    const formattedBalance = formatCurrency(balance);

    return formattedBalance;
  } else {
    // Handle the case when user data is not found
    console.error(`User data not found for ${user}`);
    return null;
  }
}


function formatCurrency(amount) {
    return `₱${amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
  }
  