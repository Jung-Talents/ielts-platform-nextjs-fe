import React from "react";
import Image from "next/image";
import type { CardBenefit } from "../../data";

type Props = {
    benefits: CardBenefit[];
};

const CardBenefitsList: React.FC<Props> = ({ benefits }) => {
    return (
        <div className="md:max-w-[850px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
            {benefits.map((benefit) => (
                <div key={benefit.id} className="bg-white px-5 py-8 rounded w-[270px] h-[280px]">
                    <Image
                        src={benefit.iconPath}
                        alt={benefit.title}
                        width={40}
                        height={40}
                        className="font-bold py-1"
                    />
                    <h3 className="text-sm font-bold py-4">
                        {benefit.title}
                    </h3>
                    <p className="text-sm">
                        {benefit.description}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default CardBenefitsList;
    