import { MdPayment } from "react-icons/md";
export const plans = [
  {
    title: "Basic Plan",
    logo: <MdPayment className="plan-icon basic" />,
    price: 2500,
    classname : "basic",
    buttonText : "Get 1 Month Free",
    checked: [
      "24/7 Alltime live support system access",
      "Domain & Hosting Support",
    ],
    unchecked: [
      "AI chatbot Support",
      "20 GB of Hositng",
      "5TB Read/Write Access Support",
      "All Plugin System Included",
    ],
  },
  {
    title: "Gold Plan",
    logo: <MdPayment className="plan-icon gold" />,
    price: 4500,
    classname : "gold",
    buttonText : "Buy Now",
    checked: [
      "24/7 Alltime live support system access",
      "Domain & Hosting Support",
      "AI chatbot Support",
      "20 GB of Hositng",
    ],
    unchecked: ["5TB Read/Write Access Support", "All Plugin System Included"],
  },
  {
    title: "Platinum Plan",
    logo: <MdPayment className="plan-icon platinum" />,
    price: 4500,
    classname : "platinum",
    buttonText : "Buy Now",
    checked: [
      "24/7 Alltime live support system access",
      "Domain & Hosting Support",
      "AI chatbot Support",
      "20 GB of Hositng",
      "5TB Read/Write Access Support",
      "All Plugin System Included",
    ],
    unchecked: [],
  },
];
