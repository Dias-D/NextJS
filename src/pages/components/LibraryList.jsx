import Image from "next/image";

function LibraryList({ list }) {
    return (
        <>
            <div className="grid grid-cols-3 gap-3">
                { list.map((l) => {
                    return (
                        <>
                            <div className="customLibraryListCard">
                                <div className="flex w-full h-48 relative">
                                    <Image src="/../public/images/thumbnail.png" alt="thumbnail" layout="fill" objectFit="cover" />
                                </div>
                                <div className="flex items-center h-20">
                                    <span className="px-10 text-lg font-semibold leading-none">{ l.title }</span>
                                </div>
                            </div>
                        </>
                    );
                }) }
            </div>
        </>
    )
}

export default LibraryList;