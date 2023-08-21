import TextWithLine from "./Utils/TextWithLine";
import bride from "~/images/mariela-img.png";
import groom from "~/images/jared-img.png";

const BrideAndGroom = () => {
  return (
    <div className="pt-20 pb-4">
      <h3 className="text-3xl text-center font-sans font-bold text-gray-700 mb-6">
        Nuestra boda
      </h3>
      <div className="w-full flex flex-wrap">
        <div className="w-full md:w-1/2 px-4">
          <div className="flex flex-col items-center py-6 sm:px-8 lg:p-20 text-center">
            <img
              src={bride}
              alt="Novia"
              className="w-48 h-48 rounded-full mb-8"
            />
            <h3 className="text-5xl font-medium font-head mb-4 text-gray-800">
              Mariela Gomez
            </h3>
            <div className="mb-4">
              <TextWithLine>Novia</TextWithLine>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 px-4">
          <div className="flex flex-col h-full items-center py-14 sm:px-8 lg:p-20 text-center justify-between">
            <div className="flex flex-col items-center">
              <img
                src={groom}
                alt="Novio"
                className="w-48 h-48 rounded-full mb-8"
              />
              <h3 className="text-5xl font-medium font-head mb-4 text-gray-800">
                Jared Zena
              </h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-4">
                <TextWithLine>Novio</TextWithLine>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrideAndGroom;
