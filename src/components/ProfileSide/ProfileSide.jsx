import Avatar from "../Avatar/Avatar";
import ProfileSideSection from "../ProfileSideSection/ProfileSideSection";
import "./ProfileSide.css";
import {avatarImages} from '../../constants/AvatarImages.js'
export default function ProfileSide() {
  return (
    <div className="profile-side">
      <div className="profile-side-top">
        <Avatar 
        source={avatarImages[0]}
     size={80}
        />
        <h2>Kişisel Bilgiler</h2>
      </div>
      <ProfileSideSection
        titleColor="red"
        sectionTitle="Adınız"
        sectionValue="Hasan"
      />
      <ProfileSideSection
        titleColor="green"
        sectionTitle="Soyadınız"
        sectionValue="Çelik"
      />
      <ProfileSideSection
        titleColor="orangered"
        sectionTitle="Mesleğiniz"
        sectionValue="React React Native Developer"
      />
    </div>
  );
}
