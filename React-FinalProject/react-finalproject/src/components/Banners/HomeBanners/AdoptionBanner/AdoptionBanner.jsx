import Banner from "../../../../common/Banner/Banner";
import adoptionBanner from "../../../../assets/banner/adoptionBanner.svg";

const AdoptionBanner = () => {
  return (
    <div>
      <div className="pt-5 px-5 pt-lg-0 container bg-body-tertiary rounded-4">
        <Banner
          title="Adoption"
          sizetitle="3.25rem"
          color="#003459"
          subTitle="We need help. so do they."
          subTitleSize="2.25rem"
          description="Adopt a pet and give it a home, it will be love you back unconditionally."
          image={adoptionBanner}
          reverse="null"
        />
      </div>
    </div>
  );
};

export default AdoptionBanner;
