import styled from "styled-components";

export const ProfileCard = styled.div`
  /* Branco */
  background: #ffffff;
  box-shadow: 0px 0px 5px rgba(78, 32, 150, 0.25);

  @media screen and (min-width: 968px) {
    max-width: 600px;
    margin: 40px auto;
    border-radius: 8px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 33px;
`;

export const ContentInfo = styled.div`
  display: flex;
  gap: 10px;
`;

export const ContentText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
`;

export const ContentActions = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 968px) {
    justify-content: center;
    gap: 16px;

    button {
      width: 170px;
    }
  }
`;

export const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 100%;
  border: none;
`;

export const Name = styled.span`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  /* or 125% */
  /* green-100 */
  color: #011b0c;
`;

export const Bio = styled.span`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px; /* or 125% */
  /* grey-100 */
  color: #7a7a7a;
`;

export const Button = styled.button`
  /* green-80 */
  background: #015f28;
  border-radius: 8px;
  padding: 10px 16px;
  /* Text */
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height, or 125% */
  /* Branco */
  color: #ffffff;
`;
