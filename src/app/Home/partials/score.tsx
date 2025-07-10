import Image from "next/image"

const stats = [
    {
        value: "40X",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing.",
    },
    {
        value: "40X",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing.",
    },
    {
        value: "40X",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing.",
    },
];

export default function DropTheChaos() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-20">
            <Image
                src="/LandingPage/score.svg" // Path to your logo image
                alt="Krivisio logo"
                width={652}
                height={124}
            />
            <div className="flex flex-col items-center justify-center text-center mt-10 w-6xl">
                <span className="text-center mt-15">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, illum molestiae autem accusantium doloremque saepe nesciunt id perspiciatis eligendi. Quo quasi ducimus aperiam ipsa consequuntur, nam corporis mollitia numquam explicabo!
                </span>

                <div className="flex flex-wrap justify-center gap-20 py-10 mt-15">
                    {stats.map((item, idx) => (
                        <div key={idx} className="text-center max-w-[200px]">
                            <div className="text-[56px]">{item.value}</div>
                            <p className="text-sm text-gray-700 mt-2">{item.description}</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}