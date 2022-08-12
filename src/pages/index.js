export default function Landing() {
  return (
    <div>
      {/* Content Here */}
      <div className="grid place-items-center m-20">
        <h1 className="text-primary text-2xl pb-10">DeGods NextJS Template</h1>
        <div className="grid bg-container rounded p-5">
          <h1 className="text-primary text-xl p-2">Text / Font</h1>
          <div className="grid p-5 gap-4 grid-cols-3 grid-rows-2">
            <p className="text-primary text-center">text-primary</p>
            <p className="text-secondary text-center">text-secondary</p>
            <p className="text-center text-transparent bg-clip-text bg-gradient-to-r from-[#FF7C01] via-[#FF5301] to-[#A819EB]">text-alternative</p>
            <p className="font-degods text-primary text-center">font-degods</p>
            <p className="font-belygod text-center">font-belygod</p>
            <p className="font-justBreathe text-center">font-justBreathe</p>
          </div>
          <h1 className="text-primary text-xl p-2">Backgrounds</h1>
          <div className="grid p-5 gap-4 grid-cols-3 grid-rows-1">
            <div className="flex flex-col items-center bg-dark p-4 rounded">
              <div className="bg-light w-40 h-40 border-2 border-black" />
              <div className="text-primary text-center pt-4">bg-light</div>
            </div>
            <div className="flex flex-col items-center bg-dark p-4 rounded">
              <div className="bg-dark w-40 h-40 border-2 border-black" />
              <div className="text-primary text-center pt-4">bg-dark</div>
            </div>
            <div className="flex flex-col items-center bg-dark p-4 rounded">
              <div className="bg-container w-40 h-40 border-2 border-black" />
              <div className="text-primary text-center pt-4">bg-container</div>
            </div>
          </div>
          <h1 className="text-primary text-xl p-2">Colors</h1>
          <div className="grid p-5 gap-4 grid-cols-3 grid-rows-3">
            <div className="flex flex-col items-center bg-dark p-4 rounded">
              <div className="bg-degodPurple w-40 h-40 border-2 border-black" />
              <div className="text-primary text-center pt-4">degodPurple</div>
            </div>
            <div className="flex flex-col items-center bg-dark p-4 rounded">
              <div className="bg-degodGreen w-40 h-40 border-2 border-black" />
              <div className="text-primary text-center pt-4">degodGreen</div>
            </div>
            <div className="flex flex-col items-center bg-dark p-4 rounded">
              <div className="bg-degodRed w-40 h-40 border-2 border-black" />
              <div className="text-primary text-center pt-4">degodRed</div>
            </div>
            <div className="flex flex-col items-center bg-dark p-4 rounded">
              <div className="bg-degodWhite w-40 h-40 border-2 border-black" />
              <div className="text-primary text-center pt-4">degodWhite</div>
            </div>
            <div className="flex flex-col items-center bg-dark p-4 rounded">
              <div className="bg-degodOffWhite w-40 h-40 border-2 border-black" />
              <div className="text-primary text-center pt-4">degodOffWhite</div>
            </div>
            <div className="flex flex-col items-center bg-dark p-4 rounded">
              <div className="bg-degodBlack w-40 h-40 border-2 border-black" />
              <div className="text-primary text-center pt-4">degodBlack</div>
            </div>
            <div className="flex flex-col items-center bg-dark p-4 rounded">
              <div className="bg-degodOrange w-40 h-40 border-2 border-black" />
              <div className="text-primary text-center pt-4">degodOrange</div>
            </div>
            <div className="flex flex-col items-center bg-dark p-4 rounded">
              <div className="bg-degodYellow w-40 h-40 border-2 border-black" />
              <div className="text-primary text-center pt-4">degodYellow</div>
            </div>
            <div className="flex flex-col items-center bg-dark p-4 rounded">
              <div className="bg-degodBlue w-40 h-40 border-2 border-black" />
              <div className="text-primary text-center pt-4">degodBlue</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
