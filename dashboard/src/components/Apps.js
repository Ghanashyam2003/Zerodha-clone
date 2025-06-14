import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const apps = [
  {
    name: "Smallcase",
    desc: "Invest in theme-based portfolios",
    url: "https://www.smallcase.com",
    icon: "📦",
  },
  {
    name: "Sensibull",
    desc: "Options trading platform for beginners & pros",
    url: "https://sensibull.com",
    icon: "📈",
  },
  {
    name: "Streak",
    desc: "Algo trading without coding",
    url: "https://streak.tech",
    icon: "🤖",
  },
  {
    name: "Tickertape",
    desc: "Stock analysis & screeners",
    url: "https://www.tickertape.in",
    icon: "📊",
  },
  {
    name: "GoldenPi",
    desc: "Invest in bonds & fixed income products",
    url: "https://www.goldenpi.com",
    icon: "🏦",
  },
  {
    name: "Refinitiv",
    desc: "Advanced analytics and market data",
    url: "https://www.refinitiv.com",
    icon: "🧠",
  },
];

const AppCard = ({ name, desc, url, icon }) => (
  <div className="col-md-4 col-sm-6 mb-4">
    <div className="card shadow-sm h-100 border-0">
      <div className="card-body">
        <h5 className="card-title">
          <span style={{ fontSize: "1.5rem", marginRight: "0.5rem" }}>{icon}</span>
          {name}
        </h5>
        <p className="card-text text-muted" style={{ fontSize: "0.9rem" }}>{desc}</p>
        <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary btn-sm">
          Open App
        </a>
      </div>
    </div>
  </div>
);

const AppsSection = () => {
  return (
    <div className="container-fluid px-5 py-4">
      <h2 className="mb-4" style={{ fontWeight: 600 }}>Explore Apps</h2>
      <div className="row">
        {apps.map((app, idx) => (
          <AppCard
            key={idx}
            name={app.name}
            desc={app.desc}
            url={app.url}
            icon={app.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default AppsSection;
