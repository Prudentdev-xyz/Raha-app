import { CharityService } from "../components/layouts/CharityService";
import { Hero } from "../components/layouts/Hero";
import { StartDonation } from "../components/layouts/StartDonation";

export const Home = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <CharityService />
      <StartDonation />
    </div>
  );
};

export default Home;
