export interface iDevCard {
  dev: {
    avatar_url: string;
    name: string;
    login: string;
    html_url: string;
    company?: string;
    bio?: string;
    location?: string;
    blog?: string;
  };
}

export const DevCard = ({ dev }: iDevCard) => {
  return (
    <section>
      <figure>
        <img src={dev.avatar_url} alt={dev.name} />
        <figcaption>Foto de perfil</figcaption>
      </figure>

      <section className="info">
        <h3>{dev.name}</h3>
        <section className="subInfo">
          <p>{dev.location}</p>
          <p>{dev.company}</p>
        </section>
        <a href={dev.html_url}>{dev.login}</a>
      </section>

      <p>{dev.bio}</p>
    </section>
  );
};
