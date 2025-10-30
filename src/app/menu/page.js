import CozyStayFooter from '@/pages/menu/CozyStayFooter';
import DessertsAndNewsletterSection from '@/pages/menu/DessertsAndNewsletter';
import MenuGridSection from '@/pages/menu/Resturentmenu';
import MenuHeroSection from '@/pages/menu/MenuHeroSection';
import RestaurantMenu from '@/pages/menu/Resturentmenu';
import FoodAndDrinksGallery from '@/pages/menu/FoodAndDrinksGallery';

export default function MenuPage() {
  return (
    <>
      <MenuHeroSection />
      <RestaurantMenu />
      <FoodAndDrinksGallery/>
      <DessertsAndNewsletterSection/>
    </>
  );
}