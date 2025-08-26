import React, { useState } from 'react';
import { ExternalLink, MapPin, Calendar, User } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  completionDate: string;
  client: string;
  image: string;
  description: string;
}

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('الكل');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['الكل', 'سكني', 'تجاري', 'صناعي', 'بنية تحتية'];

  const projects: Project[] = [
    {
      id: 1,
      title: 'مجمع الأندلس السكني',
      category: 'سكني',
      location: 'الرياض، المملكة العربية السعودية',
      completionDate: '2023',
      client: 'شركة الأندلس العقارية',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'مجمع سكني متكامل يضم 200 وحدة سكنية مع مرافق ترفيهية وتجارية'
    },
    {
      id: 2,
      title: 'برج النخيل التجاري',
      category: 'تجاري',
      location: 'جدة، المملكة العربية السعودية',
      completionDate: '2022',
      client: 'مجموعة النخيل القابضة',
      image: 'https://images.pexels.com/photos/2142227/pexels-photo-2142227.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'مبنى تجاري من 25 طابق يحتوي على مكاتب ومحلات تجارية راقية'
    },
    {
      id: 3,
      title: 'مصنع الخليج للبتروكيماويات',
      category: 'صناعي',
      location: 'الجبيل، المملكة العربية السعودية',
      completionDate: '2023',
      client: 'شركة الخليج للصناعات',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'منشأة صناعية متطورة لإنتاج المواد البتروكيماوية بأعلى معايير البيئة'
    },
    {
      id: 4,
      title: 'طريق الملك فهد السريع',
      category: 'بنية تحتية',
      location: 'المنطقة الشرقية، المملكة العربية السعودية',
      completionDate: '2022',
      client: 'وزارة النقل والخدمات اللوجستية',
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'طريق سريع بطول 50 كم مع جسور وأنفاق حديثة'
    },
    {
      id: 5,
      title: 'فندق قصر الذهب',
      category: 'تجاري',
      location: 'مكة المكرمة، المملكة العربية السعودية',
      completionDate: '2023',
      client: 'مجموعة الضيافة الذهبية',
      image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'فندق 5 نجوم يضم 300 غرفة مع مرافق ترفيهية وتجارية متكاملة'
    },
    {
      id: 6,
      title: 'مدينة الواحة السكنية',
      category: 'سكني',
      location: 'الدمام، المملكة العربية السعودية',
      completionDate: '2024',
      client: 'شركة الواحة للتطوير العقاري',
      image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'مدينة سكنية متكاملة تضم 500 فيلا مع مرافق تعليمية وصحية'
    }
  ];

  const filteredProjects = activeCategory === 'الكل' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
            مشاريعنا
          </span>
          <h2 className="text-4xl font-bold text-gray-800 mt-6 mb-4">
            نماذج من أعمالنا المتميزة
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            اكتشف مجموعة من أبرز المشاريع التي نفذتها شركة القمة بنجاح وتميز
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  {project.category}
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ExternalLink className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                
                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 ml-2" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 ml-2" />
                    <span>مكتمل في {project.completionDate}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 md:h-80 object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 left-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-colors"
                >
                  <ExternalLink className="w-5 h-5 transform rotate-180" />
                </button>
                <div className="absolute bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full">
                  {selectedProject.category}
                </div>
              </div>
              
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">{selectedProject.title}</h2>
                <p className="text-lg text-gray-600 mb-6">{selectedProject.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-blue-600 ml-3" />
                    <div>
                      <div className="text-sm text-gray-500">الموقع</div>
                      <div className="font-medium">{selectedProject.location}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-blue-600 ml-3" />
                    <div>
                      <div className="text-sm text-gray-500">تاريخ الانتهاء</div>
                      <div className="font-medium">{selectedProject.completionDate}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <User className="w-5 h-5 text-blue-600 ml-3" />
                    <div>
                      <div className="text-sm text-gray-500">العميل</div>
                      <div className="font-medium">{selectedProject.client}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-16">
          <button 
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            ابدأ مشروعك التالي معنا
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;