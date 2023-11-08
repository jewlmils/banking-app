export const userData = [
  {
    accountNumber: "1000000000001",
    email: "admin@gmail.com",
    password: "pass",
    fullName: "Admin",
    isAdmin: true,
    balance: "0",
    accountType: "",
    loginStatus: false,
    expenseList: [],
    goals: [],
  },
  {
    accountNumber: "1000000000002",
    email: "user@gmail.com",
    password: "pass",
    fullName: "User",
    isAdmin: false,
    balance: "0",
    accountType: "Savings Account",
    loginStatus: false,
    expenseList: [],
    goals: [],
  },
  {
    accountNumber: "1000000000003",
    email: "jewel@gmail.com",
    password: "pass",
    fullName: "Jewel",
    isAdmin: false,
    balance: "0",
    accountType: "Savings Account",
    loginStatus: false,
    expenseList: [],
    goals: [],
  },
  {
    accountNumber: "1000000000004",
    email: "hakdog@gmail.com",
    password: "pass",
    fullName: "Hakdog",
    isAdmin: false,
    balance: "0",
    accountType: "Savings Account",
    loginStatus: false,
    expenseList: [],
    goals: [],
  },
  {
    accountNumber: "1000000000005",
    email: "john.doe@example.com",
    password: "johndoe123",
    fullName: "John Doe",
    isAdmin: false,
    balance: "1000",
    accountType: "Checking Account",
    loginStatus: false,
    expenseList: [],
    goals: [],
  },
  {
    accountNumber: "1000000000006",
    email: "jane.doe@example.com",
    password: "janedoe123",
    fullName: "Jane Doe",
    isAdmin: false,
    balance: "7500",
    accountType: "Savings Account",
    loginStatus: false,
    expenseList: [],
    goals: [],
  },
  {
    accountNumber: "1000000000007",
    email: "john.snow@example.com",
    password: "janedoe123",
    fullName: "John Snow",
    isAdmin: false,
    balance: "4500",
    accountType: "Checking Account",
    loginStatus: false,
    expenseList: [],
    goals: [],
  },
];

export const currentUser = JSON.parse(localStorage.getItem("currentUser"));

export const userRole =
  currentUser && currentUser.isAdmin ? "admin" : "customer";
