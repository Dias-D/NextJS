import Image from "next/image";
import Comparative from "public/images/comparativo_img_CTA.png";
import NoCard from "public/images/no-card-dark.webp";
import Rating from "public/images/rating.webp";
import Selo from "public/images/selo_RD.png";

function Informative() {
    return (
        <>
            <section className="flex flex-row bg-sky-50 w-full h-auto pt-12 pb-4">
                <div className="flex flex-row m-auto">
                    <div className="customInformativeImage">
                        <Image src={ Comparative } alt="comparativo" fill  />
                    </div>
                    <div className="flex flex flex-col justify-center w-6/12 ml-16">
                        <span className="text-5xl py-1 text-neutral-800 font-semibold leading-none">Pronto para triplicar sua</span>
                        <span className="text-5xl py-1 text-neutral-800 font-bold leading-none">Geração de Leads?</span>
                        <span className="text-3xl py-1 text-neutral-600 leading-none">Criação e ativação em 4 minutos.</span>
                        <hr className="w-full h-1 mx-auto bg-gray-200 border-0 rounded md:my-6 dark:bg-gray-700" />
                        <div className="flex flex-row">
                            <button className="customInformativeButton">
                                <span className="px-5 text-lg">VER DEMONSTRAÇÃO</span>
                            </button>
                            <div className="customInformativeSeloImage">
                                <Image src={ Selo } alt="selo RD" fill  />
                            </div>
                        </div>
                        <div className="flex flex-row mt-2 items-center">
                            <div className="h-4 w-4 relative">
                                <Image src={ NoCard } alt="selo RD" fill  />
                            </div>&nbsp;
                            <span className="text-neutral-600 font-bold">Não</span>&nbsp;
                            <span className="text-neutral-600">é necessário Cartão de Crédito |</span>&nbsp;                            
                            <div className="h-4 w-24 relative">
                                <Image src={ Rating } alt="selo RD" fill  />
                            </div>&nbsp;
                            <span className="text-neutral-600 font-bold">4.9</span>&nbsp;
                            <span className="text-neutral-600">/5 média de satiwsfação</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Informative;