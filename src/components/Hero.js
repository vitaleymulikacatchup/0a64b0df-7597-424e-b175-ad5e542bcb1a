import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Check } from 'lucide-react';

const fadeUpPreset = (delay = 0, duration = 1.2) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { delay, duration, ease: 'easeOut' }
});

const fadeInPreset = (delay = 0, duration = 1.0) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, amount: 0.2 },
  transition: { delay, duration, ease: 'easeOut' }
});

function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const MotionSection = shouldReduceMotion ? 'section' : motion.section;
  const MotionDiv = shouldReduceMotion ? 'div' : motion.div;
  const MotionH1 = shouldReduceMotion ? 'h1' : motion.h1;
  const MotionP = shouldReduceMotion ? 'p' : motion.p;
  const MotionUl = shouldReduceMotion ? 'ul' : motion.ul;

  const sectionProps = shouldReduceMotion ? {} : fadeUpPreset(0.1, 1.0);
  const headingProps = shouldReduceMotion ? {} : fadeUpPreset(0.2, 1.2);
  const descriptionProps = shouldReduceMotion ? {} : fadeUpPreset(0.3, 1.0);
  const buttonsProps = shouldReduceMotion ? {} : fadeUpPreset(0.4, 0.8);
  const featuresProps = shouldReduceMotion ? {} : fadeInPreset(0.5, 1.0);

  const features = [
    'Pause or cancel anytime',
    'Average 48 hour delivery',
    'Fixed monthly rate'
  ];

  return (
    <MotionSection 
      {...sectionProps}
      className="relative bg-gradient-to-b from-gray-50 to-white py-20 sm:py-32 lg:py-40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <MotionH1 
            {...headingProps}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-900 mb-6 text-balance"
          >
            A full Shopify{' '}
            <span className="block">
              design & dev team on
            </span>
            <span className="block">
              a simple monthly plan
            </span>
          </MotionH1>
          
          <MotionP 
            {...descriptionProps}
            className="text-lg sm:text-xl text-primary-600 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Get unlimited Shopify design & development requests for one flat monthly fee. 
            No contracts, pause or cancel anytime.
          </MotionP>
          
          <MotionDiv 
            {...buttonsProps}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <a href="#get-started" className="btn-primary text-base px-8 py-4">
              Get Started
            </a>
            <a href="#pricing" className="btn-secondary text-base px-8 py-4">
              View Pricing
            </a>
          </MotionDiv>
          
          <MotionUl 
            {...featuresProps}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-sm text-primary-600"
          >
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <div className="flex-shrink-0 w-2 h-2 bg-success-500 rounded-full"></div>
                <span>{feature}</span>
              </li>
            ))}
          </MotionUl>
        </div>
      </div>
    </MotionSection>
  );
}

export default Hero;