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
  },
  {
    accountNumber: "1000000000002",
    email: "johnsnow@gmail.com",
    password: "pass",
    fullName: "John Snow",
    isAdmin: false,
    balance: "100000",
    accountType: "Savings Account",
    loginStatus: false,
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
  },
  {
    accountNumber: "1000000000005",
    email: "daenerystargaryen@example.com",
    password: "johndoe123",
    fullName: "Daenerys Targaryen",
    isAdmin: false,
    balance: "500000",
    accountType: "Checking Account",
    loginStatus: false,
  },
  {
    accountNumber: "1000000000006",
    email: "cerseilannister@example.com",
    password: "janedoe123",
    fullName: "Cersei Lannister",
    isAdmin: false,
    balance: "75000000",
    accountType: "Savings Account",
    loginStatus: false,
  },
];

export const currentUser = JSON.parse(localStorage.getItem("currentUser"));

export const userRole =
  currentUser && currentUser.isAdmin ? "admin" : "customer";



