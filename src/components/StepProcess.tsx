
import { ReactNode } from 'react';
import AnimateOnScroll from './AnimateOnScroll';

interface Step {
  title: string;
  description: string;
  icon: ReactNode;
}

interface StepProcessProps {
  steps: Step[];
  title: string;
  subtitle?: string;
}

const StepProcess = ({ steps, title, subtitle }: StepProcessProps) => {
  return (
    <section className="container-section">
      <div className="text-center mb-12">
        <AnimateOnScroll animation="slide-up">
          <h2 className="heading-lg text-center mb-4">{title}</h2>
          {subtitle && <p className="paragraph max-w-3xl mx-auto">{subtitle}</p>}
        </AnimateOnScroll>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <AnimateOnScroll 
            key={index}
            animation="slide-up"
            delay={index * 100}
          >
            <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 h-full">
              <div className="bg-brand-50 w-14 h-14 rounded-full flex items-center justify-center text-brand-500 mb-4">
                {step.icon}
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
};

export default StepProcess;
