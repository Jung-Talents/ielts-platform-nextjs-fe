import React from 'react';
import Image from 'next/image';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="card-base">
      <div className="card-padding flex flex-col gap-[var(--spacing-card-gap)] h-full">
        <div className="icon-wrapper">
          <Image
            alt={title}
            loading="lazy"
            width={0}
            height={0}
            className="icon-image-normal-size"
            src={icon}
          />
        </div>
        <h3 className="text-card-title capitalize m-0">{title}</h3>
        <p className="text-body m-0">
          {description}
        </p>
      </div>
    </div>
  );
};
