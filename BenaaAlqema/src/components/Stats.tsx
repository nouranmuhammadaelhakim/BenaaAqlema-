import React, { useState, useEffect, useRef } from 'react';
import { Building2, Users, Trophy, Calendar } from 'lucide-react';

interface StatItem {
  number: number;
  label: string;
  suffix: string;
  icon: React.ReactNode;
}

const Stats: React.FC = () => {
  const [counters, setCounters] = useState([0, 0, 0, 0]);
  const [hasStarted, setHasStarted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats: StatItem[] = [
    {
      number: 500,
      label: 'مشروع مكتمل',
      suffix: '+',
      icon: <Building2 className="w-8 h-8" />
    },
    {
      number: 25,
      label: 'سنة خبرة',
      suffix: '+',
      icon: <Calendar className="w-8 h-8" />
    },
    {
      number: 150,
      label: 'عميل راضي',
      suffix: '+',
      icon: <Users className="w-8 h-8" />
    },
    {
      number: 50,
      label: 'جائزة وشهادة',
      suffix: '+',
      icon: <Trophy className="w-8 h-8" />
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  const animateCounters = () => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    stats.forEach((stat, index) => {
      let current = 0;
      const increment = stat.number / steps;

      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.number) {
          current = stat.number;
          clearInterval(timer);
        }
        
        setCounters(prev => {
          const newCounters = [...prev];
          newCounters[index] = Math.floor(current);
          return newCounters;
        });
      }, stepDuration);
    });
  };

  return (
    <section id="stats" ref={sectionRef} className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            أرقامنا تتحدث عن نفسها
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            خبرة متراكمة ونجاحات مستمرة في تنفيذ المشاريع الإنشائية والتطويرية
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 hover:bg-opacity-20 transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-blue-200 mb-4 flex justify-center group-hover:text-white transition-colors">
                  {stat.icon}
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  {counters[index]}{stat.suffix}
                </div>
                <div className="text-blue-100 font-medium text-lg">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 max-w-4xl mx-auto">
            <p className="text-blue-100 text-lg leading-relaxed">
              منذ تأسيسها، حققت شركة القمة للمقاولات العامة نمواً مستداماً ونجاحات متتالية في تنفيذ مختلف أنواع المشاريع الإنشائية، 
              من المباني السكنية والتجارية إلى المشاريع الصناعية والبنية التحتية
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;