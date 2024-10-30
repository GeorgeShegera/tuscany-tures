import ToursPackages from "../../Layouts/TourPackages/ToursPackages";
import useHeaderOffset from "../../Hooks/useHeaderOffset";
import ServicesSection from "../../Layouts/ServicesSection/ServicesSection";
import PackageForm from "../../Layouts/PackageFormSection/PackageForm";
import Reviews from "../../Layouts/ReviewsSection/Reviews";

export default function TourPackages() {
  const offsetY = useHeaderOffset();

  return (
    <main
      className="main"
      style={{
        paddingTop: offsetY,
      }}
    >
      <ToursPackages className="main__section_space-between"></ToursPackages>
      {/* <ServicesSection className="main__section_space-between"></ServicesSection> */}
      <PackageForm className="main__section_full-width"></PackageForm>
      <Reviews className="main__section_space-between"></Reviews>
    </main>
  );
}
