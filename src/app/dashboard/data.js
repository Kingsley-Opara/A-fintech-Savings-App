"use client"
import marcus from "@/app/dashboard/images/marcus.jpg"
import jaydon from "@/app/dashboard/images/jaydon.jpg"
import corey from "@/app/dashboard/images/corey.jpg"
import cooper from "@/app/dashboard/images/cooper.jpg"
import phillip from "@/app/dashboard/images/phillip.jpg"
import download from "@/app/dashboard/images/document-download.jpg"



export const BarChartData = {

    labels: [
        "Jan", 
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ],
    datasets:[
        {
            label: "Current",
            data: [9.000, 10.000, 6.000, 25.000, 14.000, 10.000, 8.000, 20.000, 35.000, 20.00, 30.000, 35.000],
            borderColor: "rgb(75, 192, 192)",
            borderWidth: "12px",
            backgroundColor: [
                "rgb(253, 111, 65)", "rgb(253, 111, 65)", "rgb(253, 111, 65)", "rgb(253, 111, 65)", "rgb(253, 111, 65)", "rgb(253, 111, 65)", "rgb(253, 111, 65)", "rgb(253, 111, 65)","rgb(253, 111, 65)","rgb(253, 111, 65)","rgb(253, 111, 65)","rgb(253, 111, 65)",
            ],
            borderRadius: 20,
        },

        {
            label: 'Compare to last',
            data: [30.000, 20.000, 45.000, 15.000, 10.000, 20.000, 10.000, 30.000, 31.000, 30.00, 20.000, 30.000],
            borderColor: "rgb(75, 192, 192)",
            borderWidth: "12px",
            backgroundColor: [
                "black", "black", "black", "black", "black", "black", "black", "black", "black", "black","black", "black",
            ],
            borderRadius: 20,
        }



    ],
};

export const lastOrders = [
    {
        id: 1,
        pic: marcus,
        name: "For Utility bills",
        date: "Nov 15, 2024",
        amount: "$80,000",
        status: "Paid",
        invoice: download
    },
    {
        id: 2,
        pic: jaydon,
        name: "For Travel Expenses",
        date: "Nov 18, 2024",
        amount: "$150,000",
        status: "Refund",
        invoice: download
    },
    {
        id: 3,
        pic: corey,
        name: "For Water",
        date: "Dec 14, 2024",
        amount: "$87,000",
        status: "Paid",
        invoice: download
    },
    {
        id: 4,
        pic: cooper,
        name: "Rent bills",
        date: "Jan 14, 2025",
        amount: "$100,000",
        status: "Refund",
        invoice: download
    },
    {
        id: 5,
        pic: phillip,
        name: "School Fees",
        date: "Jan 13, 2025",
        amount: "$78,000",
        status: "Paid",
        invoice: download
    },
    {
        id: 6,
        pic: marcus,
        name: "Food items and Electronics",
        date: "Feb 02, 2025",
        amount: "$80,000",
        status: "Paid",
        invoice: download
    },
    {
        id: 7,
        pic: jaydon,
        name: "Helth Services",
        date: "Feb 15, 2025",
        amount: "$150,000",
        status: "Refund",
        invoice: download
    },
    {
        id: 8,
        pic: corey,
        name: "Laudries",
        date: "March 10, 2025",
        amount: "$87,000",
        status: "Paid",
        invoice: download
    },
    {
        id: 9,
        pic: cooper,
        name: "Commodities",
        date: "March 14, 2025",
        amount: "$100,000",
        status: "Refund",
        invoice: download
    },
    {
        id: 10,
        pic: phillip,
        name: "Laptop Repair",
        date: "March 20, 2025",
        amount: "$78,000",
        status: "Paid",
        invoice: download
    },
    
]

export const platforms = [
    {
        id: 1,
        name: "Salary",
        cost: "$10,000.000",
        color: "purple",
        extra: "+15%",
        level: "60%"
    },
    {
        id: 2,
        name: "Market Budget",
        cost: "$500.000",
        color: "blue",
        extra: "+10%",
        level: "50%"
    },
    {
        id: 3,
        name: "Reibursement",
        cost: "$1,000",
        color: "yellow",
        extra: "+8%",
        level: "40%",
    },
    {
        id: 4,
        name: "Investment",
        cost: "$100,000",
        color: "red",
        extra: "+5%",
        level: "70%"
    },
    {
        id: 5,
        name: "Emergency Fund",
        cost: "$2,000",
        color: "purple",
        extra: "+15%",
        level: "30%"
    },
    {
        id: 6,
        name: "Tech Budget",
        cost: "$2,000",
        color: "blue",
        extra: "+10%",
        level: "80%"
    },
    {
        id: 7,
        name: "Tax",
        cost: "$2,000",
        color: "yellow",
        extra: "+8%",
        level: "20%",
    },
    {
        id: 8,
        name: "Data Expenses",
        cost: "$1,000",
        color: "red",
        extra: "+5%",
        level: "70%"
    },

    
]

export const savingsList = [
    {
        id: 1,
        title: 'Saving For Laptop',
        description: 'Need To get a new laptop',
        budget: 2000,
        saving: 500
    },
    {
        id: 2,
        title: 'Saving For New Phone',
        description: 'Need To get a new Phone',
        budget: 3000,
        saving: 100
    },
    {
        id: 3,
        title: 'Electricity Bill',
        description: 'Need To Pay for light',
        budget: 2000,
        saving: 500
    }
]