import type { V2_MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useEffect, useState } from "react";
import WelcomeModal from "~/components/WelcomeModal";
import { indexAction, indexLoader } from "~/controls";
import type { LoaderDataType } from "~/controls";
import { useMediaQuery } from "react-responsive";
import heroBg from "~/images/hero-bg.jpg";
import heroBgMobile from "~/images/hero-bg-mobile.jpg";
import SectionWrapper from "~/components/Utils/SectionWrapper";
import BrideAndGroom from "~/components/BrideAndGroom";
import Countdown from "~/components/Countdown";
import Agendas from "~/components/Agendas";
import LocationMap from "~/components/LocationMap";
import Message from "~/components/Message";
import { GoogleOAuthProvider } from "@react-oauth/google";
import DigitalEnvelope from "~/components/DigitalEnvelope";
import MusicPlayer from "~/components/MusicPlayer";
import ogimage from "~/images/ogimage.jpg";
import GalleryPhotos from "~/components/GalleryPhotos";
import Prayer from "~/components/Prayer";

export const meta: V2_MetaFunction = () => {
  return [
    {
      title: "Nuestra Boda - Mariela & Jared",
    },
    {
      description:
        "SABADO, DICIEMBRE 30 2023 di Lienzo Charro San Miguel, Bengkulu",
    },
    {
      "og:image": ogimage,
    },
    {
      "og:image:type": "image/jpeg",
    },
    {
      "og:site_name": "marielayjared",
    },
    { "og:url": "https://www.marielayjared.com/" },
    { "og:title": "Nuestra Boda - Mariela & Jared" },
    {
      "og:description": `SABADO, DICIEMBRE 30 2023 di Lienzo Charro San Miguel, Bengkulu`,
    },
    { "og:type": "website" },

    { "twitter:image": ogimage },
    { "twitter:card": "summary_large_image" },
    {
      "twitter:description":
        "SABADO, DICIEMBRE 30 2023 di Lienzo Charro San Miguel, Bengkulu",
    },
  ];
};

export const loader = indexLoader;
export const action = indexAction;

export default function Index() {
  const { ENV } = useLoaderData<LoaderDataType>();
  const isSmallScreen = useMediaQuery({ query: `(max-width: 768px)` });

  const [openWelcome, setOpenWelcome] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  const onCloseWelcomeModal = () => {
    setOpenWelcome(false);
    document.body.style.overflow = "auto";
    window.scrollTo({ top: 0 });
  };

  useEffect(() => {
    setIsMobile(isSmallScreen);
  }, [isSmallScreen]);

  const thisYear = new Date().getFullYear();

  return (
    <div
      style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}
      className="bg-background-2"
    >
      <WelcomeModal isOpen={openWelcome} onClose={onCloseWelcomeModal} />

      <div
        className="flex justify-center items-center h-screen md:h-[750px] bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url(${isMobile ? heroBgMobile : heroBg})` }}
      >
        <div className="mb-1">
          <h4
            className="text-center font-head font-bold text-5xl mb-4 text-[#EFEFEF]"
            style={{ textShadow: "3px 3px 1px #B7410E" }}
          >
            Mariela & Jared
          </h4>
          <div
            className="text-center font-black font-sans text-md text-[#EFEFEF] italic border-t-2 border-[#B7410E] pt-3"
            style={{ textShadow: "2px 2px 1px #B7410E" }}
          >
            30.12.2023
          </div>
        </div>
      </div>

      <SectionWrapper className="mb-12">
        <Prayer />
      </SectionWrapper>

      <SectionWrapper className="bg-background">
        <BrideAndGroom />
      </SectionWrapper>

      <SectionWrapper className="mt-12 mb-12">
        <Agendas />
      </SectionWrapper>

      <SectionWrapper className="mb-12">
        <Countdown />
      </SectionWrapper>

      <div className="mb-6">
        <LocationMap />
      </div>

      <SectionWrapper className="mb-24">
        <GalleryPhotos />
      </SectionWrapper>

      <GoogleOAuthProvider clientId={ENV.GOOGLE_CLIENT_ID!}>
        <SectionWrapper className="mb-36">
          <Message isMobile={isMobile} />
        </SectionWrapper>
      </GoogleOAuthProvider>

      {/* <SectionWrapper className="mb-36">
        <DigitalEnvelope />
      </SectionWrapper> */}

      <div className="py-24 bg-background text-gray-700 relative text-center font-sans">
        © {thisYear} by <span className="font-semibold">Jared</span>
      </div>

      <MusicPlayer play={!openWelcome} />
    </div>
  );
}
