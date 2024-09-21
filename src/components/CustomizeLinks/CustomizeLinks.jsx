import { useState } from "react";
import CustomizeIntro from "./CustomizeIntro";
import Navbar from "../../static/NavBar/Navbar"
import Phonedisplay from "../PhoneDisplay/Phonedisplay"
import LinkFormat from "./LinkFormat";
import AlertMessage from "../../static/alertMessage";
import { useCustomContext } from "../../utils/useCustomContext";
const Customizelinks = () => {
  const [showNewLinks, setShowNewLinks] = useState(false);
  const {alert}=useCustomContext()
  const addLink = () => {
    setShowNewLinks(true);
  };
  const cancel = () => {
    setShowNewLinks(false);
  };
  return (
    <>
    <Navbar/>
      <section className="flex justify-between items-start">
        <Phonedisplay/>
        <section className="w-[47rem] bg-white py-10 px-8 rounded-lg grid place-content-stretch gap-y-5">
          <CustomizeIntro addlink={addLink} />
          <LinkFormat newlink={showNewLinks} cancel={cancel} />
        </section>
      </section>
      {alert && <AlertMessage message={alert.message} icon={alert.icon} color={alert.color}/>}
    </>
  );
};

export default Customizelinks;
