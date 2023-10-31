const Data = [
    {
        email: "admin@gmail.com",
        password: "abc123",
        fullname: "Admin TJ",
        type: "Savings Peso",
        number: "12345678910",
        balance: 1000,
        isAdmin: true, 
        transactions: []
    },
    {
        email: "tj@gmail.com",
        password: "abc123",
        fullname: "TJ Maurea",
        type: "Savings Peso",
        number: "12345678911",
        balance: 2000.45,
        isAdmin: true, 
        transactions: []
    },
    {
        email: "dhanniela@gmail.com",
        password: "abc123",
        fullname: "Dhanniela Lopez",
        type: "Savings Peso",
        number: "12345678913",
        balance: 11019.99,
        isAdmin: false, 
        transactions: []
    },
    {
        email: "jewls@gmail.com",
        password: "abc123",
        fullname: "Jewel Milagrosa",
        type: "Checking Peso",
        number: "12345678914",
        balance: 8097856.38, 
        isAdmin: false, 
        transactions: []
    },

    {
        email: "jujyne@gmail.com",
        password: "abc123",
        fullname: "Jyne Misa",
        type: "Checking Peso",
        number: "12345678915",
        balance: 99289377.01, 
        isAdmin: false, 
        transactions: []
    },
    {
        email: "erollcoaster@gmail.com",
        password: "abc123",
        fullname: "Eroll Fernandez",
        type: "Savings Peso",
        number: "12345678916",
        balance: 40000000,
        isAdmin: false, 
        transactions: []
    },
    {
        email: "jj@gmail.com",
        password: "abc123",
        fullname: "Jj Orpilla",
        type: "Savings Peso",
        number: "12345678917",
        balance: 80909000.90,
        isAdmin: false, 
        transactions: []
    },
    {
        email: "maurea@gmail.com",
        password: "abc123",
        fullname: "Maurea Dhanniela",
        type: "Savings Peso",
        number: "12345678912",
        balance: 61490116,
        isAdmin: false, 
        budget: [
            {
                title: "Gucci Bag",
                amount: 107400
            },
            {
                title: "Starbucks",
                amount: 10000
            }
        ], 
        transactions: [
            {
                title: "Fund transfer", 
                amount: 1600000,
                type: "debit", 
                date: "October 21, 2023"
            }, 
            {
                title: "Withdraw", 
                amount: 20000, 
                type: "debit",
                date: "October 21, 2023"
            }
        ]
    }
];

export default Data;