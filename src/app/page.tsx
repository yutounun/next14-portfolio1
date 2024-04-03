import Hero from "@/components/hero";
import Image from "next/image";
import homeImg from "public/home.jpg";

export default function Home() {
  return (
    <Hero
      imgData={homeImg}
      title="Professional Cloud Hostingaa"
      imgAlt="Professional Cloud Hosting"
    />
  );
}
