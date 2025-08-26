import React, { useState } from 'react';
import { Building, Home, Factory, Loader as Road, ArrowLeft } from 'lucide-react';

interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  features: string[];
}

const Services: React.FC = () => {
  const [activeService, setActiveService] = useState<number>(1);

  const services: Service[] = [
    {
      id: 1,
      title: 'المباني السكنية',
      description: 'تصميم وتنفيذ المجمعات السكنية والفلل الراقية بأعلى معايير الجودة والراحة',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      icon: <Home className="w-8 h-8" />,
      features: ['تصميم معماري حديث', 'مواد بناء عالية الجودة', 'أنظمة أمان متطورة', 'تشطيبات فاخرة']
    },
    {
      id: 2,
      title: 'المباني التجارية',
      description: 'إنشاء المراكز التجارية والمكاتب والمباني الإدارية بمعايير عالمية',
      image: 'https://images.pexels.com/photos/2142227/pexels-photo-2142227.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      icon: <Building className="w-8 h-8" />,
      features: ['تصميمات عملية ومبتكرة', 'مساحات مرنة للاستخدام', 'أنظمة تكييف متطورة', 'مواقف سيارات واسعة']
    },
    {
      id: 3,
      title: 'المشاريع الصناعية',
      description: 'تنفيذ المصانع والمنشآت الصناعية وفقاً لأعلى المعايير التقنية والبيئية',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      icon: <Factory className="w-8 h-8" />,
      features: ['معايير السلامة الصناعية', 'تصميم بيئي مستدام', 'أنظمة تشغيل متطورة', 'صيانة دورية شاملة']
    },
    {
      id: 4,
      title: 'البنية التحتية',
      description: 'تطوير شبكات الطرق والجسور والمرافق العامة بأحدث التقنيات الهندسية',
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      icon: <Road className="w-8 h-8" />,
      features: ['طرق عالية الجودة', 'أنظمة صرف متطورة', 'إضاءة ذكية', 'مواد مقاومة للعوامل الجوية']
    }
  ];

  const currentService = services.find(service => service.id === activeService) || services[0];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
            خدماتنا
          </span>
          <h2 className="text-4xl font-bold text-gray-800 mt-6 mb-4">
            نقدم حلولاً شاملة لجميع احتياجاتكم الإنشائية
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            من التخطيط والتصميم وحتى التسليم النهائي، نحن شريككم الموثوق في تحقيق مشاريعكم
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Services Menu */}
          <div className="space-y-6">
            {services.map((service) => (
              <div
                key={service.id}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                  activeService === service.id
                    ? 'bg-blue-50 border-2 border-blue-200'
                    : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
                }`}
                onClick={() => setActiveService(service.id)}
              >
                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className={`p-3 rounded-lg ${
                    activeService === service.id ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                  }`}>
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-xl font-bold mb-2 ${
                      activeService === service.id ? 'text-blue-600' : 'text-gray-800'
                    }`}>
                      {service.title}
                    </h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                  <ArrowLeft className={`w-5 h-5 transform transition-transform ${
                    activeService === service.id ? 'text-blue-600 rotate-180' : 'text-gray-400'
                  }`} />
                </div>

                {activeService === service.id && (
                  <div className="mt-6 pt-6 border-t border-blue-200">
                    <div className="grid grid-cols-2 gap-3">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-blue-600 rounded-full ml-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Service Image & Details */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={currentService.image}
                alt={currentService.title}
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>

            {/* Service Badge */}
            <div className="absolute bottom-6 left-6 bg-white bg-opacity-95 backdrop-blur-sm rounded-xl p-6 max-w-xs">
              <div className="flex items-center mb-3">
                <div className="bg-blue-600 text-white p-2 rounded-lg ml-3">
                  {currentService.icon}
                </div>
                <h4 className="font-bold text-gray-800">{currentService.title}</h4>
              </div>
              <p className="text-gray-600 text-sm">{currentService.description}</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            هل لديك مشروع تود تنفيذه؟
          </h3>
          <p className="text-blue-100 mb-6 text-lg">
            تواصل معنا اليوم للحصول على استشارة مجانية وعرض سعر مخصص لمشروعك
          </p>
          <button 
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            احصل على عرض سعر مجاني
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;