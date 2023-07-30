const CALENDAR_URL = `https://www.google.com/calendar/render?
action=TEMPLATE&
text=Nuestra%20Boda+Mariela+%26+Jared+%F0%9F%92%8C&
location=Lienzo%20Charro%20San%20Miguel%2C%20R282%2B9W%2C%2034430%20Esfuerzos%20Unidos%2C%20Durango,%2C%20Mexico&
details=Para%20nosotros%20es%20un%20honor%20poder%20compartir%20la%20alegr%C3%ADa%20de%20nuestro%20matrimonio%20contigo%20y%20tus%20seres%20amados%2C%20por%20eso%20nos%20gustar%C3%ADa%20que%20nos%20acompa%C3%B1en%20el%20d%C3%ADa%2030%20de%20Diciembre%20de%20este%202023%20a%20las%2012%20hrs%20en%20el%20templo%20San%20Juan%20Bautista%20de%20la%20comunidad%20de%20Esfuerzos%20Unidos%2C%20Nuevo%20Ideal%2C%20Durango.%0A%0ANos%20encantar%C3%ADa%20que%20nos%20acompa%C3%B1en%20y%2Fo%20nos%20escriban%20sus%20mejores%20deseos%20en%20el%20siguiente%20link%0A%3A%0Ahttps%3A%2F%2Fwww.marielayjared.com%2F%0A%0A%C2%A1Gracias%20por%20ser%20parte%20de%20uno%20de%20los%20mejores%20d%C3%ADas%20de%20nuestras%20vidas%21%0A%0AAtentamente%20los%20novios%2C%0AMariela%20%26%20Jared&
dates=20231230T120000Z%2F20231230T020000Z`;

const Agendas = () => {
  return (
    <div className="max-w-3xl mx-auto text-center">
      <div className="mb-4 text-gray-500 font-head md:text-lg font-medium">
        Te esperamos el:
      </div>
      <h3 className="text-3xl md:text-4xl font-black mb-6 text-cente text-gray-700 font-sans">
        SABADO, DICIEMBRE 30 2023
      </h3>
      <div className="px-12 flex max-w-md mx-auto mb-10">
        <a
          href={CALENDAR_URL}
          target={"_blank"}
          className="px-8 py-4 transition-all text-lg font-semibold w-full rounded-lg bg-contrast hover:bg-contrast-2 outline-contrast-3 text-white outline-4 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
          rel="noreferrer"
        >
          Agregar a mi calendario
        </a>
      </div>

      <div className="grid grid-cols-2 gap-4 text-center text-2xl px-4 py-8 md:py-16 md:px-0 md:text-3xl font-black">
        <div className="col-span-1 text-gray-400 text-left md:text-center font-sans">
          MISA
        </div>
        <div className="col-span-1 text-gray-700 text-right md:text-center font-sans">
          12:00 PM
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 text-center text-2xl px-4 py-8 md:py-16 md:px-0 md:text-3xl  font-black">
        <div className="col-span-1 text-gray-400 text-left md:text-center font-sans">
          RECEPCION
        </div>
        <div className="col-span-1 text-gray-700 text-right md:text-center font-sans">
          2:00 PM
        </div>
      </div>
    </div>
  );
};

export default Agendas;
