import { useState } from "react";

function Footer() {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    {
      id: 1,
      name: "Афиша",
      icon: "/TabBar/Subtract.svg",
      activeIcon: "/TabBar/SubtractActive.svg",
    },
    {
      id: 2,
      name: "Билеты",
      icon: "/TabBar/Ticket.svg",
      activeIcon: "/TabBar/TicketActive.svg",
    },
    {
      id: 3,
      name: "Профиль",
      icon: "/TabBar/Person.svg",
      activeIcon: "/TabBar/PersonActive.svg",
    },
  ];

  return (
    <div className="footer">
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className={`blocks ${activeTab === tab.id ? "active" : ""}`}
          onClick={() => setActiveTab(tab.id)}
        >
          <div className="elements">
            <img
              src={activeTab === tab.id ? tab.activeIcon : tab.icon}
              alt={tab.name}
            />
            <p>{tab.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Footer;
