import { CheckCircle, Users, Trophy, Clock } from 'lucide-react';

const achievements = [
  { icon: Users, number: '25+', label: 'Satisfied Clients' },
  { icon: Trophy, number: '30+', label: 'Projects Completed' },
  { icon: Clock, number: '1+', label: 'Years Experience' },
  { icon: CheckCircle, number: '24/7', label: 'Support Available' }
];

const skills = [
  'React & Modern JavaScript',
  'Node.js & Express',
  'AI & Machine Learning',
  'Database Design & Management',
  'Cloud Deployment & DevOps',
  'UI/UX Design',
  'E-commerce Platforms',
  'Business Process Automation'
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Ajzenix Technologies</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              At Ajzenix Technologies, we specialize in creating modern, professional websites and digital solutions designed specifically for small businesses. Our mission is to help local shops, grocery stores, and service providers establish a strong online presence that drives real business results.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              With expertise in both traditional web development and cutting-edge AI technologies, we bridge the gap between small business needs and advanced digital solutions. Every project is tailored to your specific industry and business goals, ensuring maximum impact and efficiency.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="flex items-center justify-center mb-3">
                      <Icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">{achievement.number}</div>
                    <div className="text-sm text-gray-600">{achievement.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Expertise</h3>
              <div className="grid grid-cols-1 gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Why Choose Us?</h4>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Specialized focus on small business needs and challenges</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Competitive pricing with flexible payment options</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Ongoing support and maintenance after project completion</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Integration of modern AI tools to give you a competitive edge</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}