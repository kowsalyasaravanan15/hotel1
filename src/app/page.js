import HeroSection from '@/pages/Landingpage/herosection'
import ThreePanelFeature from '@/component/ThreePanelFeature'
import SelectYourChalet from '@/component/SelectYourChalet'
import ServicesSection from '@/component/ServicesSection'
import ActivitiesSection from '@/component/ActivitiesSection'
import TestimonialSection from '@/component/ActivitiesSection'
import NewsletterSection from '@/component/NewsletterSection'
import CozyStayFooter from '@/component/utils/CozyStayFooter'


// You can probably delete this utility import unless you know you need it:
// import { abortOnSynchronousPlatformIOAccess } from 'next/dist/server/app-render/dynamic-rendering'

function Home() {
  return (
    <>
      <HeroSection />
      <ThreePanelFeature />
      <SelectYourChalet/>
      <ServicesSection/>
      <ActivitiesSection />
      <NewsletterSection />

    </>
  )
}

export default Home