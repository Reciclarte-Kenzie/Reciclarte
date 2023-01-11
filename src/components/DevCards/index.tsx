interface iDevCard {
  dev: {
    avatar_url: string;
    name: string;
    login: string;
    html_url: string;
    company?: string;
    bio?: string;
    location?: string;
    blog?: string;
    position: string;
  };
}

export const DevCard = ({ dev }: iDevCard) => {
  return (
    <section>
      <figure>
        <img src={dev.avatar_url} alt={dev.name} />
        <figcaption style={{ display: "none" }}>Foto de perfil</figcaption>
      </figure>

      <section className="info">
        <h3>
          {dev.name} - {dev.position}
        </h3>
        <section className="subInfo">
          <p>{dev.location}</p>
          <p>{dev.company}</p>
        </section>
        <section className="externalLinks">
          <a href={dev.html_url} rel="noopener noreferer" target="blank">
            {dev.login}
          </a>
          <br />
          <a href={dev.blog} rel="noopener noreferer" target="blank">
            Linkedin
          </a>
        </section>
      </section>

      <p>{dev.bio}</p>
    </section>
  );
};
