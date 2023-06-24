import reversedHeroImage from "../../../../assets/banner/reversedHeroImage.svg";
import Banner from "../../../../common/Banner/Banner";

const ReversedHero = () => {
  const title = "One more friend";
  const subTitle = "Thousands more fun!";
  const description =
    "Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!";
  return (
    <div className="pt-5 px-5 pt-lg-0 container bg-body-tertiary rounded-4">
      <Banner
        title={title}
        sizetitle='3.25rem'
        color='#003459'
        subTitle={subTitle}
        subTitleSize="2.25rem"
        description={description}
        image={reversedHeroImage}
        reverse="flex-row-reverse"
      />
    </div>
  );
};

export default ReversedHero;
