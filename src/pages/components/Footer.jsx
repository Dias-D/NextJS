import Image from "next/image";

function Footer() {
    return (
        <>
            <div className="max-w-6xl m-auto">
                <div className="flex flex-col items-center justify-center py-12">
                    <Image src="/../public/images/logo.png" alt="logo" width="256" height="256" />
                    <span className="text-neutral-400">Transformando visitantes em clientes.</span>
                </div>
                <div className="flex flex-row justify-center">
                    <div className="customFooterToFourColumn">
                        <h1 className="customFooterTitle">Links Principais</h1>
                        <span className="customFooterSpan">Home</span>
                        <span className="customFooterSpan">Ferramenta</span>
                        <span className="customFooterSpan">Preços</span>
                        <span className="customFooterSpan">Contato</span>
                    </div>
                    <div className="customFooterToFourColumn">
                        <h1 className="customFooterTitle">Cases</h1>
                        <span className="customFooterSpan">Geração de Leads B2B</span>
                        <span className="customFooterSpan">Geração de Leads em Software</span>
                        <span className="customFooterSpan">Geração de Leads em Imobiliária</span>
                        <span className="customFooterSpan">Cases de Sucesso</span>
                    </div>
                    <div className="customFooterToFourColumn">
                        <h1 className="customFooterTitle">Materiais</h1>
                        <span className="customFooterSpan">Blog</span>
                        <span className="customFooterSpan">Parceria com Agências</span>
                        <span className="customFooterSpan">Guia Definitivo de Marketing</span>
                        <span className="customFooterSpan">Materiais Gratuitos</span>
                    </div>
                    <div className="customFooterToFourColumn">
                        <h1 className="font-medium text-xl">Siga a Leadster</h1>
                        <div className="flex flex-row py-6">
                            <div className="customFooterImage">
                                <Image className="opacity-50" src="/../public/images/linkedin-icon.png" alt="linkedin-logo" width="14" height="14" />
                            </div>
                            <div className="customFooterImage">
                                <Image className="opacity-50" src="/../public/images/facebook-icon.png" alt="facebook-logo" width="14" height="14" />
                            </div>
                            <div className="customFooterImage">
                                <Image className="opacity-50" src="/../public/images/instagram-icon.png" alt="instagram-logo" width="16" height="16" />
                            </div>
                        </div>
                        <div className="py-1">
                            <span>E-mail: </span><span className="text-neutral-400">contato@leadster.com.br</span>
                        </div>
                        <div className="py-1">                        
                            <span>Telefone: </span><span className="text-neutral-400">(42) 98828-9851</span>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="w-full h-1 bg-gray-100 border-0 rounded mt-20 dark:bg-gray-700" /> 
            <div className="max-w-6xl m-auto">
                <div className="flex flex-row py-8">
                    <div className="flex flex-row w-6/12 px-14">
                        <span className="text-sm text-neutral-400">
                            Copyright &copy; 2015 - 2022 Todos os direitos reservados |</span>
                        <span className="customFooterBlue text-sm text-neutral-400">&nbsp; Leadster</span>
                    </div>
                    <div className="flex justify-end w-6/12 px-10">
                        <span className="text-sm text-neutral-400">
                            Rua José Loureiro, 464 - Centro - Curituba PR CEP: 80010-000 | Termos de uso
                        </span>
                    </div>
                </div>
            </div>             
        </>
    );
}

export default Footer;