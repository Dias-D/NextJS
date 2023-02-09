import Image from "next/image";
import { useState } from "react";
import Download from "public/images/download.jpg"
import Thumbnail from "public/images/thumbnail.png"
import Youtube from "public/images/youtube.png"

function LibraryList({ list }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div className="grid grid-cols-3 gap-3">
                { list.map((l) => {
                    return (
                        <>
                            <div className="customLibraryListCard" onClick={() => setShowModal(true)}>
                                <div className="flex w-full h-48 relative">
                                    <Image src={ Thumbnail } alt="thumbnail" fill object-fit="cover" />
                                </div>
                                <div className="flex items-center h-20">
                                    <span className="px-10 text-lg font-semibold leading-none">{ l.title }</span>
                                </div>
                            </div>
                        </>
                    );
                }) }
            </div>
            {
                showModal ? (
                    <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
                        <div class="w-4/12 overflow-hidden bg-white rounded-2xl">
                            <div class="bg-white">
                                <div className="h-1.5 bg-header-blue"></div>
                                <div className="flex justify-end">
                                    <button type="button" className="text-gray-600 bg-transparent rounded-lg p-3" onClick={() => setShowModal(false)}>
                                        <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                        <span class="sr-only">Close modal</span>
                                    </button>
                                </div>
                                <div className="w-full max-w-xs m-auto">
                                    <span className="text-2xl font-semibold text-header-blue leading-none tracking-tighter">Webinar:</span>&nbsp;
                                    <span className="font-semibold text-2xl text-gray-700 leading-none tracking-tighter">Como aumentar sua Geração de Leads feat. Traktor</span>
                                </div>
                                <div className="flex w-full h-96 mt-8 relative">
                                    <Image src={ Youtube } alt="youtube" fill object-fit="cover" />
                                </div>
                                <div className="flex flex-col py-5 px-4">
                                    <span className="font-semibold">Descrição</span>
                                    <hr className="w-full h-1 bg-gray-200 my-1 border-0 rounded" />
                                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium ipsum eget nisl dignissim, ut tempus mauris pharetra.</span>
                                    <span className="mt-3 font-semibold">Downloads</span>
                                    <hr className="w-full h-1 bg-gray-200 my-1 border-0 rounded" />
                                    <div className="flex flex-row mt-3">
                                        <div class="inline-flex rounded-md" role="group">
                                            <button class="p-2 bg-green-400/75 rounded-l-lg">
                                                <div className="flex w-3 h-3 relative">
                                                    <Image src={ Download } alt="download" fill  />
                                                </div>
                                            </button>
                                            <button class="px-2 py-1 text-sm font-medium text-green-700 bg-green-400/40 rounded-r-lg">
                                                Spreadsheet.xls
                                            </button>
                                        </div>
                                        <div class="inline-flex rounded-md px-2" role="group">
                                            <button class="p-2 rounded-l-lg bg-blue-400/75">
                                                <div className="flex w-3 h-3 relative">
                                                    <Image src={ Download } alt="download" fill  />
                                                </div>
                                            </button>
                                            <button class="px-2 py-1 text-sm font-medium text-blue-700 bg-blue-400/40 rounded-r-lg">
                                                Document.doc
                                            </button>
                                        </div>
                                        <div class="inline-flex rounded-md" role="group">
                                            <button class="p-2 bg-yellow-400/75 rounded-l-lg ">
                                                <div className="flex w-3 h-3 relative">
                                                    <Image src={ Download } alt="download" fill  />
                                                </div>
                                            </button>
                                            <button class="px-2 py-1 text-sm text-yellow-700 bg-yellow-400/40 rounded-r-lg">
                                                Presentation.ppt
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null
            }
        </>
    )
}

export default LibraryList;