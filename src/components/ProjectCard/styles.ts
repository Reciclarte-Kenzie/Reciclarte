import styled from "styled-components";

export const ProjectCard = styled.li`
  background: #ffffff;
  border: 1px solid #dedede;
  border-radius: 8px;
  padding: 22px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  h2 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 20px;
    /* or 111% */
    color: #1d1d1d;
  }

  p {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    /* or 125% */
    display: flex;
    align-items: center;
    /* grey-100 */
    color: #7a7a7a;
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 10px;

    /* identical to box height, or 62% */
    text-align: center;

    /* grey-50 */
    color: #f5f5f5;
  }
`;

export const EditButton = styled.button`
  /* orange-80 */
  background: #f7941d;
  border-radius: 8px;
  color: white;
  padding: 10px 20px;
`;

export const DeleteButton = styled.button`
  /* grey-60 */
  background: #d2d2d2;
  border-radius: 8px;
  color: white;
  padding: 10px 20px;
`;
