import Achivements from "@/components/Herosection/acheivements";
import Logo2 from "@/components/Herosection/Airbnb";
import Coursedetails from "@/components/Herosection/coursedetails";
import Courses from "@/components/Herosection/courses";
import Landingpage from "@/components/Herosection/landingpage";
import Navbar from "@/components/Navbar/navbar"
import Team from "@/components/Herosection/team";
import Footer from "@/components/Footer/footer";
import Contacts from "@/components/Herosection/contacts";


export default function Home() {
  return (
    <div >
      <Contacts/>
      <Navbar/>
      <Landingpage/>
      <Logo2/>
      <Courses/>
      <Achivements/>
      <Coursedetails/>
      <Team/>
      <Footer/>
      </div>
  );
}
