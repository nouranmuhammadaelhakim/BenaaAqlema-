import React from 'react';
import { CheckCircle, Target, Eye, Award } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'جودة عالية في التنفيذ',
      description: 'نلتزم بأعلى معايير الجودة في جميع مراحل المشروع'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'التسليم في الوقت المحدد',
      description: 'نحترم الجداول الزمنية ونسلم المشاريع في الأوقات المتفق عليها'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'فريق خبراء متخصص',
      description: 'نعمل مع أفضل المهندسين والفنيين في المملكة'
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: 'رؤية مستقبلية',
      description: 'نطبق أحدث التقنيات والحلول المبتكرة في مشاريعنا'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <div className="mb-8">
              <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
                من نحن
              </span>
            </div>
            
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              رواد في صناعة البناء والتشييد
              <span className="block text-blue-600 mt-2">منذ أكثر من 25 عاماً</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              شركة القمة للمقاولات العامة والتوريدات هي إحدى الشركات الرائدة في المملكة العربية السعودية في مجال المقاولات العامة والتطوير العقاري. 
              تأسست الشركة برؤية طموحة لتكون في المقدمة في تنفيذ المشاريع الإنشائية والتطويرية بأعلى معايير الجودة والاحترافية.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              نحن نفخر بتقديم خدمات شاملة تغطي جميع احتياجات عملائنا من التصميم والتخطيط وحتى التسليم النهائي، 
              مع الالتزام بأفضل الممارسات العالمية في إدارة المشاريع والسلامة المهنية.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 space-x-reverse">
                  <div className="bg-blue-100 text-blue-600 p-2 rounded-lg flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img 
                src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
                alt="فريق العمل في موقع البناء"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-transparent opacity-20"></div>
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 border">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">500+</div>
                <div className="text-gray-600 text-sm">مشروع منجز</div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-6 border">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-1">25+</div>
                <div className="text-gray-600 text-sm">سنة خبرة</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;