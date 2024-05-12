import Head from "next/head";
import NewContactBanner from "@/components/Home/NewContactBanner";
import NewBanner from "@/components/Home/NewBanner";
import NewProyects from "@/components/Home/Proyects/NewProyects";
import Team from "@/components/Home/Team/Team";
import ContactUs from "@/components/Home/ContactUs/ContactUs";
import Clientes from "@/components/Home/Clientes/Clientes";
import WhatsAppButton from "@/components/Home/WhatsAppButton/WhatsAppButton";
import AboutSectionWithCards from "@/components/Home/AboutUs/AboutSectionWithCards";
import AboutSection from "@/components/Home/AboutUs/AboutSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sibartech | Desarrollo Web Profesional</title>
        <meta
          name="description"
          content="Sitio web de Sibartech, una empresa especializada en desarrollo web profesional. Ofrecemos soluciones innovadoras y personalizadas para tus necesidades en línea."
        />
      </Head>
      <NewBanner />
      <NewContactBanner />
      <AboutSectionWithCards />
      <NewProyects />
      <Clientes />
      <Team />
      <ContactUs />
      <WhatsAppButton />
    </>
  );
}
