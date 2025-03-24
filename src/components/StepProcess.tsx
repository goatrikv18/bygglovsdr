
import { ReactNode } from 'react';
import AnimatedSection from './AnimatedSection';

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
    <section className="py-24 bg-white relative z-10">
      <div className="container mx-auto px-4">
        <AnimatedSection direction="up" className="text-center mb-16">
          <h2 className="heading-lg mb-4">{title}</h2>
          {subtitle && <p className="text-xl text-gray-700 max-w-4xl mx-auto">{subtitle}</p>}
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection line */}
          <div className="absolute top-14 left-0 right-0 h-0.5 bg-[#62c7fc]/20 z-0 hidden lg:block"></div>
          
          {steps.map((step, index) => (
            <AnimatedSection 
              key={index}
              delay={index * 0.15}
              direction="up"
              once={false}
              className="relative z-10"
            >
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 h-full hover-lift">
                <div className="relative">
                  <div className="bg-[#62c7fc]/10 w-16 h-16 rounded-full flex items-center justify-center text-[#62c7fc] mb-6">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#62c7fc] rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="font-display text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepProcess;
