const Footer = () => {
  return (
    <footer className="justify-center mt-20">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="flex flex-row justify-center items-center">
          {/* Copyright and Credits */}
          <div className="flex text-center">
            <p className="text-window-500 text-2xlsm">
              © {new Date().getFullYear()} Developed by{" "}
              <a
                href="https://github.com/CupOfMakiato"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#DBECF9] hover:text-white hover:scale-105 inline-block transition-all duration-300 font-semibold"
              >
                Makiato
              </a>
              <h> and</h>
              <a
                href="https://github.com/NaVBas1c"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FE5359] text-2xlsm hover:scale-110 transition-all duration-300 font-medium"
              >
                {" "}
                Sharuru
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
