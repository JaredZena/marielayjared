import SectionWrapper from "./Utils/SectionWrapper";

const MAP_EMBEDED_URL =
"https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3621.25239544662!2d-104.99585691228033!3d24.821040790005686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDQ5JzE1LjciTiAxMDTCsDU5JzI3LjYiVw!5e0!3m2!1ses-419!2smx!4v1693781704952!5m2!1ses-419!2smx";
const MAP_REDIRECT_URL =
  "https://www.google.com/maps/place/24%C2%B049'15.7%22N+104%C2%B059'27.6%22W/@24.8210408,-104.9958569,17z/data=!3m1!4b1!4m12!1m7!3m6!1s0x869bc815ae7efc65:0xe5fe52238a9547c0!2sParroqu%C3%ADa+de+San+Juan+Bautista!8m2!3d24.0184529!4d-104.672584!16s%2Fg%2F11btngssn7!3m3!8m2!3d24.821036!4d-104.990986?entry=ttu";
const MAP_TITLE = "Templo de San Juan Bautista";
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
