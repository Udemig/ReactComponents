import "./ProfileSideSection.css";
/*
=====Props kavramı=====

--Componentleri özelleştirmek ve compopennetler ile
veri alışverişi için props yapısı kullnaılır

*/

const ProfileSideSection = ({titleColor,sectionTitle,sectionValue}) => {
  //console.log("gelen props", props.titleColor);
  //const {titleColor,sectionTitle,sectionValue}=props
  return (
    <div className="profile-side-section">
      <h3 style={{ color: titleColor }}>{sectionTitle}: </h3>
      <span>{sectionValue}</span>
    </div>
  );
};

export default ProfileSideSection;
