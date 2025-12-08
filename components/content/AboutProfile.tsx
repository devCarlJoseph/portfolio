export default function AboutProfile() {
    return (
        <div
            className="relative text-center mb-12 flex flex-col items-center justify-center
                       bg-cover bg-center bg-no-repeat rounded-xl overflow-hidden"
            style={{ backgroundImage: "url('/background.jpg')" }}
        >
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative z-10 px-4 py-16">
                <img
                    src="carl.jpg"
                    alt="Profile Picture"
                    className="w-65 h-65 mx-auto rounded-full border-4 border-sky-400 mb-4"
                />
                <h1 className="text-3xl font-bold text-white mb-2">Carl Joseph Sumagang</h1>
                <p className="text-slate-300 text-lg">
                    Future Software Developer | Cordova, Cebu, Philippines
                </p>
            </div>
        </div>
    );
}
