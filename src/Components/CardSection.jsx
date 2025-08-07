
import React from 'react';
import Items from './Items';

const CardSection = () => {
  const items = [
    {
      id: 1,
      title: "Item 1",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCetdXawtT9K6iDU8rD0ZC2DpSGvpDNxRb0n2_ipQd8A&s&ec=72940543",
      price: "₹1,200"
    },
    {
      id: 2,
      title: "Item 2",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTA3SnCDGTd49lT3BynEIhwyjXbclV78sQe-shweMIag&s&ec=72940543",
      price: "₹1,450"
    },
    {
      id: 3,
      title: "Item 3",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfjS12K-PGURHib8BmzYzjdMBGkd22-Mv-2slxrut8FA&s&ec=72940543",
      price: "₹990"
    },
    {
      id: 4,
      title: "Item 4",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNM6NrCOKqkK-9h4qk0f-NmdGivx47t8JiT8QKvHfWvQ&s&ec=72940543",
      price: "₹1,100"
    },
    {
      id: 5,
      title: "Item 5",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThXSDRtm3sIHjK7nMdkEbr-64ya01hSU4pzw7NV6sNAw&s&ec=72940543",
      price: "₹1,350"
    },
    {
      id: 6,
      title: "Item 6",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOqii-IGAHeMmlf-KNC8UGzYsOFbBRecZBUu6CipUXWg&s&ec=72940543",
      price: "₹870"
    },
    {
      id: 7,
      title: "Item 7",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyDU9RWzdX8umr5VcxL3fHhDRt-D6hQX7qLy5KBCmb_Q&s&ec=72940543",
      price: "₹1,750"
    },
    {
      id: 8,
      title: "Item 8",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7TymNgI6ZC565gycx8SXu_Z9wiyiPFdPFacs7SL1ZVw&s&ec=72940543",
      price: "₹1,990"
    },
    {
      id: 9,
      title: "Item 9",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ1vnSnQ4T1ZDlHLiIqlt2tRPNSsryNs2FW2uNJ3sSdQ&s&ec=72940543",
      price: "₹1,250"
    },
    {
      id: 10,
      title: "Item 10",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr1s1fnk9UzRNfq14qc-2RLG1Kf4e_k1cX59P026E2Tw&s&ec=72940543",
      price: "₹1,150"
    },
    {
      id: 11,
      title: "Item 11",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS53RzSRPZFykenOSyKX3VgkxckeI4sT4HOx9LS39dqOw&s&ec=72940543",
      price: "₹1,480"
    },
    {
      id: 12,
      title: "Item 12",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5VhYTW_JIW4oNWS_bzmI2q1Wh-2_MytXuvZYzNB8njA&s&ec=72940543",
      price: "₹1,600"
    },
    {
      id: 13,
      title: "Item 13",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY1I8Q0C3j36H0aK6n6G9gbJDlW90ZYHdo7z4RkIWtIw&s&ec=72940543",
      price: "₹1,300"
    },
    {
      id: 14,
      title: "Item 14",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbxb33Mv5pC0Muoly6afPtdyNAWfIanUAFA54ui5QKkg&s&ec=72940543",
      price: "₹1,820"
    },
    {
      id: 15,
      title: "Item 15",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9TCHuLuNG3PXUvKaTMH2kZCt1KpMPXyqhW1o55USStA&s&ec=72940543",
      price: "₹1,100"
    }
  ];

  return (
    <div className="px-8 py-10 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-semibold mb-8 text-center text-gray-800">Featured Products</h1>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {items.map((item) => (
          <Items key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default CardSection;

