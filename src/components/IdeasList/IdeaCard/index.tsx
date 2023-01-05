interface iIdeaCardProps {
    img: string;
    title: string;
    steps: string;
}

export const IdeaCard = ({ img, title, steps } : iIdeaCardProps) => {
  return (
    <li>
      <img src={img} alt="ideia" />
      <div>
        <h3>{title}</h3>
        <p>{steps}</p>
        <div>
          <button>Ver ideia</button>
        </div>
      </div>
    </li>
  );
};
