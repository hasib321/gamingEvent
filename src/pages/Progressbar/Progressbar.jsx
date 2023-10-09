const Progressbar = () => {
  return (
    <div className="bg-[#11052c]">
      <div className="max-w-screen-xl mx-auto py-20 px-8">
        <div className="flex items-center justify-between">
          <div className="text-center ">
            <div
              className="radial-progress bg-primary text-center text-primary-content border-4 border-primary"
              style={{ "--value": 92 }}
            >
              92%
            </div>
            <div className="mt-5">
              <h1 className="text-white text-xl">Gaming Skills </h1>
            </div>
          </div>
          <div className="text-center">
            <div
              className="radial-progress bg-primary text-center text-primary-content border-4 border-primary"
              style={{ "--value": 95 }}
            >
              95%
            </div>

            <div className="mt-5">
              <h1 className="text-white text-xl">Competitive Edge</h1>
            </div>
          </div>
          <div className="text-center">
            <div
              className="radial-progress bg-primary text-center text-primary-content border-4 border-primary"
              style={{ "--value": 85 }}
            >
              85%
            </div>
            <div className="mt-5">
              <h1 className="text-white text-xl">Strategic Proficiency</h1>
            </div>
          </div>
          <div className="text-center">
            <div
              className="radial-progress bg-primary text-center text-primary-content border-4 border-primary"
              style={{ "--value": 90 }}
            >
              90%
            </div>
            <div className="mt-5">
              <h1 className="text-white text-xl">Teamwork Excellence</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progressbar;
