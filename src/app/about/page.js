import NewsletterSection from "@/component/NewsletterSection";
import AboutHotelHeroSection from "@/pages/about/AboutHotelHeroSection";
import BanffParkExperience from "@/pages/about/BanffParkExperience";
import HotelExperienceGrid from "@/pages/about/HotelExperience";
import ServicesAndFacilitiesSection from "@/pages/about/ServicesAndFacilities";


 function AboutPage() {
  return (
    <>
      <AboutHotelHeroSection />
      <BanffParkExperience />
      <ServicesAndFacilitiesSection />
      {/* <HotelExperienceGrid /> */}
      <NewsletterSection/>
   
    </>
  );
}

export default AboutPage