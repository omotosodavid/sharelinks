import ProfileIntro from "./ProfileIntro";
import ProfilePicture from "./ProfilePicture";
import UserInfo from "./UserInfo";
import Navbar from "../../static/NavBar/Navbar"
import Phonedisplay from "../PhoneDisplay/Phonedisplay"

const ProfileDeatils = () => {
  return (<>
  <Navbar/>
  <section className="flex justify-between items-start">
    <Phonedisplay/>
    <section className="w-[47rem] bg-white py-10 px-8 rounded-lg grid place-content-stretch gap-y-5">
      <ProfileIntro />
      <ProfilePicture />
      <UserInfo />
      </section>
    </section></>
  );
};

export default ProfileDeatils;
