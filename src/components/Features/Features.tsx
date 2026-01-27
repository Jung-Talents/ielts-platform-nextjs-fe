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
    <div className="bg-[var(--color-secondary)]">
      <div className="section-container flex flex-col section-gap items-center justify-center">
        <div className="header-container">
          <h1 className="text-heading-1 text-center m-0">
            {header.title} {header.titleSecondLine}
          </h1>
          <p className="text-subtitle text-center m-0 max-w-[var(--max-width-subtitle)]">
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
          className="relative flex items-center justify-center gap-[var(--spacing-button-gap)] text-button py-[var(--spacing-button-padding-vertical)] px-0 rounded-[var(--radius-button)] cursor-pointer bg-transparent border-none transition-all duration-100 ease-in-out hover:scale-[1.015] [&:hover_.button-underline]:w-full"
          onClick={() => {
            window.location.href = button.link;
          }}
        >
          <span className="relative">
            {button.text}
            <span className="button-underline absolute block w-0 left-0 -bottom-0.5 h-0.5 bg-[var(--color-primary)] transition-all duration-[400ms] ease-in-out" />
          </span>
          <Image
            alt="arrow right icon"
            loading="lazy"
            width={27}
            height={27}
            className="icon-image-small-size"
            src={button.arrowIcon}
          />
        </button>
      </div>
    </div>
  );
};

export default Features;
