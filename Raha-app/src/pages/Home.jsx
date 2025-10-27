import { CharityService } from "../components/layouts/CharityService";
import { DonationNO } from "../components/DonationNO";
import { Hero } from "../components/layouts/Hero";
import { StartDonation } from "../components/layouts/StartDonation";
import { TrustedCompany } from "../components/layouts/TrustedCompany";
import { Testimonial } from "../components/Testimonial";

export const Home = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <CharityService />
      <StartDonation />
      <DonationNO />
      <TrustedCompany />
      <Testimonial />
    </div>
  );
};

export default Home;
