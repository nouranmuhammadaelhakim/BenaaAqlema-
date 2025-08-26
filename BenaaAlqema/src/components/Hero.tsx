import React from 'react';
import { ArrowDown, Building, Award } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToStats = () => {
    const statsSection = document.getElementById('stats');
    statsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/273922/pexels-photo-273922.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="inline-flex items-center bg-blue-600 bg-opacity-90 px-4 py-2 rounded-full mb-6">
            <Building className="w-5 h-5 ml-2" />
            <span className="text-sm font-medium">شركة رائدة في المقاولات</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            شركة بناء القمة للمقاولات
            <br />
            <span className="text-blue-400">العامة والتوريدات</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            نحن نبني أحلامك بخبرة تزيد عن 20 عاماً في مجال الإنشاءات والتطوير العقاري
            لنقدم لك أفضل الحلول الهندسية والمعمارية
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            ابدأ مشروعك الآن
          </button>
          
          <button 
            className="border-2 border-white hover:bg-white hover:text-gray-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            اطلع على أعمالنا
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="flex justify-center items-center space-x-8 space-x-reverse mb-8">
          <div className="flex items-center text-sm">
            <Award className="w-5 h-5 ml-2 text-yellow-400" />
            <span>معتمدون من الهيئة العامة للمقاولين</span>
          </div>
          <div className="flex items-center text-sm">
            <Building className="w-5 h-5 ml-2 text-green-400" />
            <span>أكثر من 500 مشروع منجز</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={scrollToStats}
          className="animate-bounce bg-white bg-opacity-20 p-3 rounded-full hover:bg-opacity-30 transition-all duration-300"
          aria-label="Scroll down"
        >
          <ArrowDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;