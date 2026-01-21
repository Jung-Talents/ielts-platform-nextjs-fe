import React from 'react';
import Image from 'next/image';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="feature-card">
      <div className="feature-card-content">
        <div className="feature-icon-wrapper">
          <Image
            alt={title}
            loading="lazy"
            width={45}
            height={36}
            className="feature-icon"
            src={icon}
          />
        </div>
        <h3 className="feature-card-title">{title}</h3>
        <p className="feature-card-description">
          {description}
        </p>
      </div>
    </div>
  );
};
