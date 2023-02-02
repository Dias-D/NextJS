import Image from "next/image";

function Header() {
    return (
        <>
            <div className="flex justify-center my-6">
                <Image src="/../public/images/logo.png" alt="logo" width="128" height="128" />
            </div>
            <div className="flex flex-col justify-center items-center bg-sky-50 w-full h-80">
                <div>
                    <button className="bg-transparent text-blue-600 font-medium py-2 px-4 border border-2 border-blue-500 customRounded">
                        <span className="font-semibold">WEBINARS </span> EXCLUSIVOS
                    </button>
                </div>
                <div className="mt-4">
                    <span className="text-6xl font-medium">Menos Conversinha,</span>
                </div>
            </div>
        </>
    );
}

export default Header;