import React from "react";
import { StyledVideoBox } from "./styles";

interface iEmbed {
  url: string;
}

export const EmbeddedVideo = ({ url }: iEmbed) => (
  <StyledVideoBox className="embedVideo">
    {
      <iframe
        width="560"
        height="315"
        src={url}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    }
  </StyledVideoBox>
);
