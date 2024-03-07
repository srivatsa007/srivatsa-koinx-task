function Navbar() {
  return (
    <div>
      <header className="flex justify-between px-6 py-2 items-center align-middle bg-white shadow-md">
        <a href="https://www.koinx.com/">
          <h1 className="text-xl font-bold text-[#0052FE]">
            Koin
            <span className="text-[#FE7801]">X</span>™
          </h1>
        </a>
        <div className="flex items-center space-x-4 gap-4">
          <a className="text-sm font-medium" href="#">
            Crypto Taxes
          </a>
          <a className="text-sm font-medium" href="#">
            Free Tools
          </a>
          <a className="text-sm font-medium" href="#">
            Resource Center
          </a>
          <a
            className=" btn btn-primary hover:bg-blue-500 py-1"
            role="button"
            href="https://app.koinx.com/get-started"
          >
            Get Started
          </a>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
