import React from 'react';
import Image from 'next/image';
import { FeatureCard } from './FeatureCard';

interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

interface ContentData {
  header: {
    title: string;
    titleSecondLine: string;
    subtitle: string;
    subtitleSecondLine: string;
  };
  button: {
    text: string;
    link: string;
    arrowIcon: string;
  };
}

interface FeaturesProps {
  benefits: FeatureItem[];
  content: ContentData;
}

const Features: React.FC<FeaturesProps> = ({ benefits, content }) => {
  const { header, button } = content;

  return (
    <div className="features-container">
      <div className="features-wrapper">
        <div className="features-header">
          <h1 className="features-title">
            {header.title} {header.titleSecondLine}
          </h1>
          <p className="features-subtitle">
            {header.subtitle} {header.subtitleSecondLine}
          </p>
        </div>
        <div className="features-grid">
          {benefits.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
        <button
          className="features-button"
          onClick={() => {
            window.location.href = button.link;
          }}
        >
          <span className="features-button-text">
            {button.text}
            <span className="features-button-underline" />
          </span>
          <Image
            alt="arrow right icon"
            loading="lazy"
            width={27}
            height={27}
            className="features-arrow-icon"
            src={button.arrowIcon}
          />
        </button>
      </div>
    </div>
  );
};

export default Features;
