import { useEffect, useState } from "react";
import { DevCard, iDevCard } from "../../components/DevCards";
import { Footer } from "../../components/Footer";
import Header from "../../components/Header";
import { gitHub } from "../../services/api";

export const DevelopersPage = () => {
  const devsUsers = [
    "CarolinaOlivaCruz",
    "CToH10",
    "Danielle-Luz",
    "freitassneto",
    "ThiagoBettinRamos",
    "tulio-albuquerque",
  ];
  const [devs, setDevs] = useState([] as iDevCard[]);
  const getInfo = async (dev: string) => {
    try {
      let info = await (await gitHub.get(`${dev}`)).data;
      console.log(info);
      return setDevs([...devs, info]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    devsUsers.map((dev) => getInfo(dev));
  }, []);
  console.log(devs);
  return (
    <>
      <Header />
      <main>
        {/* {devs.map((dev) => (
          <DevCard dev={dev} />
        ))} */}
      </main>
      <Footer />
    </>
  );
};
