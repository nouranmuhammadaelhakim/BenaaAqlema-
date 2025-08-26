import React, { useState } from 'react';
import { Building, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const footerSections = [
    {
      title: 'شركة القمة',
      links: [
        { name: 'من نحن', href: '#about' },
        { name: 'رؤيتنا ورسالتنا', href: '#about' },
        { name: 'فريق العمل', href: '#about' },
        { name: 'شهاداتنا', href: '#about' }
      ]
    },
    {
      title: 'خدماتنا',
      links: [
        { name: 'المباني السكنية', href: '#services' },
        { name: 'المباني التجارية', href: '#services' },
        { name: 'المشاريع الصناعية', href: '#services' },
        { name: 'البنية التحتية', href: '#services' }
      ]
    },
    {
      title: 'مشاريعنا',
      links: [
        { name: 'المشاريع المنجزة', href: '#projects' },
        { name: 'المشاريع الجارية', href: '#projects' },
        { name: 'المشاريع المستقبلية', href: '#projects' },
        { name: 'دراسات الحالة', href: '#projects' }
      ]
    },
    {
      title: 'الدعم',
      links: [
        { name: 'اتصل بنا', href: '#contact' },
        { name: 'خدمة العملاء', href: '#contact' },
        { name: 'الأسئلة الشائعة', href: '#contact' },
        { name: 'طلب عرض سعر', href: '#contact' }
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              ابق على اطلاع بأحدث مشاريعنا وخدماتنا
            </h3>
            <p className="text-blue-100 mb-8">
              اشترك في نشرتنا الإخبارية لتصلك آخر الأخبار والعروض الخاصة
            </p>
            
            {!isSubscribed ? (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="أدخل بريدك الإلكتروني"
                  required
                  className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button
                  type="submit"
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
                >
                  <Send className="w-5 h-5 ml-2" />
                  اشترك
                </button>
              </form>
            ) : (
              <div className="bg-green-500 bg-opacity-20 border border-green-400 rounded-lg p-4 max-w-md mx-auto">
                <p className="text-green-100">شكراً لاشتراكك! ستصلك رسالة تأكيد قريباً.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <div className="bg-blue-600 text-white p-3 rounded-lg ml-4">
                  <Building className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">القمة</h3>
                  <p className="text-gray-400">للمقاولات العامة والتوريدات</p>
                </div>
              </div>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                شركة رائدة في مجال المقاولات العامة والتطوير العقاري في المملكة العربية السعودية، 
                نقدم حلولاً متكاملة ومبتكرة لجميع احتياجاتكم الإنشائية.
              </p>

              <div className="space-y-3">
                <div className="flex items-center text-gray-400">
                  <Phone className="w-5 h-5 ml-3 text-blue-500" />
                  <span>+966 12 345 6789</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <Mail className="w-5 h-5 ml-3 text-blue-500" />
                  <span>info@alqimmah.com</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <MapPin className="w-5 h-5 ml-3 text-blue-500" />
                  <span>الرياض، حي الملز، طريق الملك فهد</span>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <div key={index} className="lg:col-span-1">
                <h4 className="text-lg font-semibold mb-6 text-white">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors duration-300 hover:underline"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 lg:mb-0">
              © 2024 شركة القمة للمقاولات العامة والتوريدات. جميع الحقوق محفوظة.
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-4 space-x-reverse mb-4 lg:mb-0">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-lg hover:bg-blue-400 transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-lg hover:bg-pink-600 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            {/* Legal Links */}
            <div className="flex space-x-6 space-x-reverse text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">سياسة الخصوصية</a>
              <a href="#" className="hover:text-white transition-colors">شروط الاستخدام</a>
              <a href="#" className="hover:text-white transition-colors">سياسة ملفات الارتباط</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;