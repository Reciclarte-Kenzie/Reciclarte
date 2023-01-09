import React from "react";
import { StyledVideoBox } from "./styles";

interface iEmbed {
  url: string;
}

export const EmbeddedVIdeo = ({ url }: iEmbed) => (
  <StyledVideoBox className="embedVideo">
    <iframe
      src={url}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Vídeo demonstrativo"
    />
  </StyledVideoBox>
);
