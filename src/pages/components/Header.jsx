import Image from "next/image";

function Header() {
    return (
        <>
            <div className="flex justify-center my-8">
                <Image src="/../public/images/logo.png" alt="logo" width="180" height="180" />
            </div>
            <div className="bg-sky-50 w-full">
                <div className="flex flex-col justify-center items-center py-40">
                    <button className="bg-transparent text-sm font-semibold py-1 px-4 border border-2 customRounded">
                        <span className="font-bold">WEBINARS </span> EXCLUSIVOS
                    </button>
                    <span className="mt-3 text-5xl-sm font-normal leading-none">Menos Conversinha,</span>
                    <div className="flex justify-end">
                        <div className="customHeaderAssetImage">
                            <Image src="/../public/images/asset-header.png" alt="Asset Header" fill objectFit="cover" />
                        </div>
                        <span className="text-7xl-sm font-bold leading-none text-header-blue">Mais Conversão</span>
                    </div>
                    <hr className="w-5/12 h-1 mx-auto bg-gray-200 border-0 rounded md:my-6 dark:bg-gray-700" />
                    <span className="text-llg leading-none">Conheça as estratégias que <strong>mudaram o jogo</strong> e como aplicá-las no seu negócio</span>
                </div>
            </div>
        </>
    );
}

export default Header;