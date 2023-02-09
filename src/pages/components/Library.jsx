import LibraryList from "./LibraryList";

function Library({ list }) {
    return (
        <>
            <section className="max-w-6xl m-auto px-5 py-20">
                <div className="flex flex-row justify-between items-center mx-4">
                    <div className="flex flex-row">
                        <div className="flex pr-2">
                            <input type="checkbox" id="agency" className="peer hidden" />
                            <label for="agency" className="customLibraryCheckboxLabel">Agências</label>
                        </div>
                        <div className="flex px-2">
                            <input type="checkbox" id="chatbot" className="peer hidden" />
                            <label for="chatbot" className="customLibraryCheckboxLabel">Chatbot</label>
                        </div>
                        <div className="flex px-2">
                            <input type="checkbox" id="marketing" className="peer hidden" />
                            <label for="marketing" className="customLibraryCheckboxLabel">Marketing Digital</label>
                        </div>
                        <div className="flex px-2">
                            <input type="checkbox" id="leads" className="peer hidden" />
                            <label for="leads" className="customLibraryCheckboxLabel">Geração de Leads</label>
                        </div>
                        <div className="flex px-2">
                            <input type="checkbox" id="media" className="peer hidden" />
                            <label for="media" className="customLibraryCheckboxLabel">Mídia Paga</label>
                        </div>
                    </div>
                    <div className="inline-block relative">
                        <label className="px-3 font-semibold" for="order">Ordenar por</label>
                        <select className="rounded border border-black py-2 px-2" name="order" id="order">
                            <option value="">Data de Publicação</option>
                        </select>
                    </div>
                </div>
                <hr className="h-1 mx-4 bg-gray-200 border-0 rounded md:my-6 dark:bg-gray-700" />
                <LibraryList list={ list } />
                <hr className="h-1 mx-4 bg-gray-200 border-0 rounded md:my-6 dark:bg-gray-700" />
                <div className="flex items-center justify-center px-4 py-3 sm:px-6">
                    <span className="px-3 font-semibold text-2xl">Página</span>
                    <button className="customLibratyPaginateButton text-gray-500 ">1</button>
                    <button className="customLibratyPaginateButton text-gray-500 ">2</button>
                    <button className="customLibratyPaginateButton text-header-blue border border-header-blue rounded-lg">3</button>
                    <button className="customLibratyPaginateButton text-gray-500 ">4</button>
                </div>
            </section>
        </>
    )
}

export default Library;