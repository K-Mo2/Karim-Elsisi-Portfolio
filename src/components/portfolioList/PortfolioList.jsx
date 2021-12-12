import "./portfolioList.scss";

export default function PortfolioList({ title, active, id, setSelected }) {
  return (
    <li
      key={id}
      className={active ? "portfolioList active" : "portfolioList"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}
