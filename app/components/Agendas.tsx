const CALENDAR_URL = `https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MXB1Z2J0MTZwcWhpYmk3OG11ZmduYXZhbjYgMzg1MTk2ODMzNmNjZDQ5NDI1ZDBjNDNjMTVhYTA4M2JlZDQ1MTE3ZGE1YTg0YWViMDE1ZmExZjJmN2ZiNzM4MEBn&tmsrc=3851968336ccd49425d0c43c15aa083bed45117da5a84aeb015fa1f2f7fb7380%40group.calendar.google.com`;

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
          Agregar A Mi Calendario
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
