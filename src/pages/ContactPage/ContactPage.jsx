import Header from "../../Component/Header";
import Footer from "../../Component/Footer";
import bgMain from "../../assets/raica.png";
import bgBehind from "../../assets/fox.png";

const TOS = () => {
    return (
        <div
            className="min-h-screen flex flex-col"
            style={{
                backgroundImage: `url(${bgBehind})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
                backgroundColor: "#1c1e25ff",
                backgroundBlendMode: "overlay",
            }}
        >
            {/* Page Content */}
            <div className="flex-grow py-12 px-4 flex items-center justify-center relative z-10">
                <div className="relative w-full max-w-3xl">
                    <div>
                        {/* Main Card with Background Image Overlay */}
                        <div className="bg-[#22232b] rounded-2xl shadow-2xl overflow-hidden relative">
                            {/* Background Image Overlay for Card */}
                            <div
                                className="absolute inset-0 opacity-20 z-0"
                                style={{
                                    backgroundImage: `url(${bgMain})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    pointerEvents: "none",
                                }}
                            ></div>

                            <div className="px-5 py-2 flex items-center gap-3 border-[#1E3E78] bg-[#1d254d]">
                                <Header />
                            </div>

                            {/* Content */}
                            <div className="px-5 py-2 flex items-center justify-center">Contact Page</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="w-full bg-transparent py-6 relative z-10">
                <Footer />
            </footer>
        </div>
    );
};
export default TOS;
