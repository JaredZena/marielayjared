import SectionWrapper from "./Utils/SectionWrapper";

const MAP_EMBEDED_URL =
"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31381.299981119057!2d-104.99637083302181!3d24.81549601386682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x869a010e222dd2fd%3A0x10016ceafae5b0a4!2sLienzo%20Charro%20San%20Miguel!5e0!3m2!1sen!2smx!4v1690703171261!5m2!1sen!2smx";
const MAP_REDIRECT_URL =
  "https://www.google.com/maps/place/Lienzo+Charro+San+Miguel/@24.8159439,-105.0002616,17z/data=!3m1!4b1!4m6!3m5!1s0x869a010e222dd2fd:0x10016ceafae5b0a4!8m2!3d24.8159439!4d-104.9976867!16s%2Fg%2F11kqx7kcsn?entry=ttu";
const MAP_TITLE = "Lienzo Charro San Miguel";
const MAP_ADDRESS =
  "Domicilio Conocido Esfuerzos Unidos, Nuevo Ideal, Durango, Mexico";

const LocationMap = () => {
  return (
    <div className="py-10 bg-[#EFEFEF]">
      <SectionWrapper>
        <div className="flex flex-col-reverse md:flex-row">
          <div className="w-full px-4 md:w-1/2">
            <div className="p-2 bg-white rounded-lg shadow-lg">
              <iframe
                src={MAP_EMBEDED_URL}
                className="w-full h-[580px] md:h-[450px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={MAP_TITLE}
                scrolling="no"
                aria-label={MAP_TITLE}
              />
            </div>
          </div>

          <div className="md:w-1/2 w-full px-4 mb-6 md:mb-0">
            <div className="sticky top-8 text-center md:text-left">
              <h3 className="text-3xl font-head font-bold mb-3 text-gray-700">
                Lugar
              </h3>
              <h4 className="text-xl md:text-2xl mb-4 font-sans font-semibold text-gray-700">
                {MAP_TITLE}
              </h4>
              <p className="mb-16 md:mb-10 font-sans">{MAP_ADDRESS}</p>
              <div className="flex md:justify-start justify-center">
                <a
                  href={MAP_REDIRECT_URL}
                  target="_blank"
                  className="px-5 py-2 transition-all text-lg font-semibold rounded-md bg-contrast hover:bg-contrast-2 outline-contrast-3 text-white outline-4 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
                  rel="noreferrer"
                >
                  Ver Mapa
                </a>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default LocationMap;
