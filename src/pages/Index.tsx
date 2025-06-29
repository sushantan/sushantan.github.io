
import { useState, useEffect } from 'react';
import { Mail, Phone, User, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'sports', 'music', 'studies', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'sports', label: 'Sports' },
    { id: 'music', label: 'Music' },
    { id: 'studies', label: 'Studies' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-100 to-slate-200 text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-200/60 shadow-lg shadow-slate-200/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">Portfolio</div>
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-all duration-300 hover:text-slate-700 hover:scale-105 ${
                    activeSection === item.id ? 'text-slate-800 font-semibold scale-105' : 'text-slate-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-white to-slate-200">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(148,163,184,0.1),transparent_70%)]"></div>
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <div className="mb-8 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-slate-800/20 to-slate-600/20 blur-3xl transform scale-150"></div>
              <h1 className="relative text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 bg-clip-text text-transparent drop-shadow-sm">
                Sushantan
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-2xl mx-auto font-medium">
              Showcasing excellence in sports, music, studies, and skills
            </p>
            <Button 
              onClick={() => scrollToSection('sports')}
              className="bg-gradient-to-r from-slate-800 to-slate-700 text-white hover:from-slate-700 hover:to-slate-600 transition-all duration-300 px-8 py-3 text-lg font-semibold shadow-xl hover:shadow-2xl hover:scale-105 border border-slate-600/20"
            >
              Explore My Journey
            </Button>
          </div>
        </div>
      </section>

      {/* Sports Section */}
      <section id="sports" className="min-h-screen py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-200/80 to-slate-100/80">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(148,163,184,0.15),transparent_50%)]"></div>
        </div>
        <div className="relative z-10 container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            Sports Achievements
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white/90 backdrop-blur-sm border-slate-200 hover:bg-white hover:border-slate-300 transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-slate-200/50 group">
              <CardContent className="p-6">
                <div className="h-2 w-12 bg-gradient-to-r from-slate-600 to-slate-500 rounded-full mb-4 group-hover:w-16 transition-all duration-300"></div>
                <h3 className="text-xl font-semibold mb-3 text-slate-800 group-hover:text-slate-900 transition-colors">Basketball Excellence</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">Team Captain of EX School basketball team, leading the squad with dedication and strategic gameplay.</p>
                <div className="text-sm text-slate-500 font-medium">Leadership Role</div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/90 backdrop-blur-sm border-slate-200 hover:bg-white hover:border-slate-300 transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-slate-200/50 group">
              <CardContent className="p-6">
                <div className="h-2 w-12 bg-gradient-to-r from-slate-600 to-slate-500 rounded-full mb-4 group-hover:w-16 transition-all duration-300"></div>
                <h3 className="text-xl font-semibold mb-3 text-slate-800 group-hover:text-slate-900 transition-colors">Tournament Achievement</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">Secured second place in the prestigious APL interschool tournament, showcasing competitive excellence.</p>
                <div className="text-sm text-slate-500 font-medium">APL Tournament - 2nd Place</div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/90 backdrop-blur-sm border-slate-200 hover:bg-white hover:border-slate-300 transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-slate-200/50 group">
              <CardContent className="p-6">
                <div className="h-2 w-12 bg-gradient-to-r from-slate-600 to-slate-500 rounded-full mb-4 group-hover:w-16 transition-all duration-300"></div>
                <h3 className="text-xl font-semibold mb-3 text-slate-800 group-hover:text-slate-900 transition-colors">Track & Field Champion</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">Gold medal in shotput during class 12, with consistent placements in 100m, 200m races and long jump throughout high school.</p>
                <div className="text-sm text-slate-500 font-medium">Athletics - Multiple Events</div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/90 backdrop-blur-sm border-slate-200 hover:bg-white hover:border-slate-300 transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-slate-200/50 group md:col-span-2 lg:col-span-3">
              <CardContent className="p-6">
                <div className="h-2 w-12 bg-gradient-to-r from-slate-600 to-slate-500 rounded-full mb-4 group-hover:w-20 transition-all duration-300"></div>
                <h3 className="text-xl font-semibold mb-3 text-slate-800 group-hover:text-slate-900 transition-colors">Multi-Sport Experience</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">Diverse athletic background spanning multiple disciplines, demonstrating versatility and passion for sports.</p>
                <div className="flex flex-wrap gap-3 mt-4">
                  {['Football', 'Tennis', 'Cricket', 'Badminton', 'Table Tennis'].map((sport) => (
                    <span key={sport} className="px-4 py-2 bg-gradient-to-r from-slate-100 to-slate-50 hover:from-slate-200 hover:to-slate-100 border border-slate-200 rounded-full text-sm text-slate-700 transition-all duration-300 hover:scale-105 hover:shadow-md">
                      {sport}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Music Section */}
      <section id="music" className="min-h-screen py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-l from-slate-100/80 to-white/90">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(148,163,184,0.12),transparent_60%)]"></div>
        </div>
        <div className="relative z-10 container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            Musical Journey
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/90 backdrop-blur-sm border-slate-200 hover:bg-white hover:border-slate-300 transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-slate-200/50 group">
              <CardContent className="p-8">
                <div className="h-2 w-12 bg-gradient-to-r from-slate-600 to-slate-500 rounded-full mb-6 group-hover:w-16 transition-all duration-300"></div>
                <h3 className="text-2xl font-semibold mb-4 text-slate-800 group-hover:text-slate-900 transition-colors">Trinity College London Grades</h3>
                <div className="space-y-3">
                  {[
                    { grade: 'Initial Grade', status: 'completed' },
                    { grade: 'Grade 1', status: 'completed' },
                    { grade: 'Grade 2', status: 'completed' },
                    { grade: 'Grade 4', status: 'completed' },
                    { grade: 'Grade 6', status: 'completed' },
                    { grade: 'Grade 8', status: 'progress' }
                  ].map((item) => (
                    <div key={item.grade} className="flex justify-between items-center p-2 rounded-lg hover:bg-slate-50 transition-colors">
                      <span className="text-slate-700 font-medium">{item.grade}</span>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        item.status === 'completed' 
                          ? 'text-green-700 bg-green-100 border border-green-200' 
                          : 'text-amber-700 bg-amber-100 border border-amber-200'
                      }`}>
                        {item.status === 'completed' ? '✓ Completed' : 'In Progress'}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/90 backdrop-blur-sm border-slate-200 hover:bg-white hover:border-slate-300 transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-slate-200/50 group">
              <CardContent className="p-8">
                <div className="h-2 w-12 bg-gradient-to-r from-slate-600 to-slate-500 rounded-full mb-6 group-hover:w-16 transition-all duration-300"></div>
                <h3 className="text-2xl font-semibold mb-4 text-slate-800 group-hover:text-slate-900 transition-colors">YouTube Success</h3>
                <div className="space-y-4">
                  <p className="text-slate-700 mb-3 leading-relaxed">
                    My YouTube channel showcases my musical performances and achievements.
                  </p>
                  <div className="bg-gradient-to-r from-slate-50 to-slate-100/50 rounded-xl p-6 mb-4 border border-slate-200/60">
                    <div className="text-slate-800 font-semibold mb-3 text-lg">Channel Highlights</div>
                    <div className="space-y-2">
                      <div className="text-slate-700 flex items-center">
                        <div className="w-2 h-2 bg-slate-500 rounded-full mr-3"></div>
                        Over 50K views on featured video
                      </div>
                      <div className="text-slate-700 flex items-center">
                        <div className="w-2 h-2 bg-slate-500 rounded-full mr-3"></div>
                        Regular musical content uploads
                      </div>
                    </div>
                  </div>
                  <a 
                    href="https://www.youtube.com/@SushantanS" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 font-semibold"
                  >
                    Visit My Channel
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Studies Section */}
      <section id="studies" className="min-h-screen py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-slate-100/80">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,rgba(148,163,184,0.1),transparent_50%)]"></div>
        </div>
        <div className="relative z-10 container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            Academic Excellence
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  title: 'Class 12 - ISC Board',
                  subtitle: 'Science with Mathematics and Computer Science',
                  score: '91%',
                  description: 'Specialized in Science stream with focus on Mathematics and Computer Science, achieving excellent academic performance.'
                },
                {
                  title: 'Class 10 - ICSE Board',
                  subtitle: 'Secondary Education',
                  score: '85%',
                  description: 'Strong foundation in secondary education with consistent academic performance across all subjects.'
                },
                {
                  title: 'Higher Education',
                  subtitle: 'College Admission',
                  score: 'In Progress',
                  description: 'Currently exploring college options and preparing for the next phase of academic journey.',
                  isProgress: true
                }
              ].map((item, index) => (
                <Card key={index} className="bg-white/90 backdrop-blur-sm border-slate-200 hover:bg-white hover:border-slate-300 transition-all duration-500 shadow-lg hover:shadow-xl hover:shadow-slate-200/50 group">
                  <CardContent className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <div className="h-2 w-12 bg-gradient-to-r from-slate-600 to-slate-500 rounded-full mb-4 group-hover:w-16 transition-all duration-300"></div>
                        <h3 className="text-2xl font-semibold text-slate-800 group-hover:text-slate-900 transition-colors">{item.title}</h3>
                        <p className="text-slate-700 font-medium">{item.subtitle}</p>
                      </div>
                      <div className="text-right">
                        <div className={`font-bold text-xl ${item.isProgress ? 'text-amber-600' : 'text-slate-800'}`}>
                          {item.score}
                        </div>
                        <div className="text-slate-500 text-sm">
                          {item.isProgress ? 'Status' : 'Average'}
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-600 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-100/80 via-white to-slate-200/80">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(148,163,184,0.15),transparent_70%)]"></div>
        </div>
        <div className="relative z-10 container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'Technical Skills',
                skills: ['Programming', 'Data Analysis', 'Web Development', 'Software Design']
              },
              {
                title: 'Soft Skills',
                skills: ['Leadership', 'Communication', 'Problem Solving', 'Team Collaboration']
              },
              {
                title: 'Languages',
                skills: ['English', 'Spanish', 'French', 'German']
              }
            ].map((category, index) => (
              <Card key={index} className="bg-white/90 backdrop-blur-sm border-slate-200 hover:bg-white hover:border-slate-300 transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-slate-200/50 group">
                <CardContent className="p-6">
                  <div className="h-2 w-12 bg-gradient-to-r from-slate-600 to-slate-500 rounded-full mb-4 group-hover:w-16 transition-all duration-300"></div>
                  <h3 className="text-xl font-semibold mb-4 text-slate-800 group-hover:text-slate-900 transition-colors">{category.title}</h3>
                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill} className="flex justify-between items-center">
                        <span className="text-slate-700 font-medium">{skill}</span>
                        <div className="w-24 bg-slate-200 rounded-full h-2.5 overflow-hidden">
                          <div className="bg-gradient-to-r from-slate-700 to-slate-600 h-2.5 rounded-full transition-all duration-1000 hover:from-slate-800 hover:to-slate-700" 
                               style={{width: '80%'}}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-100/80 via-white to-slate-50/90">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(148,163,184,0.1),transparent_60%)]"></div>
        </div>
        <div className="relative z-10 container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <div className="h-2 w-12 bg-gradient-to-r from-slate-600 to-slate-500 rounded-full mb-6"></div>
              <h3 className="text-2xl font-semibold mb-6 text-slate-800">Let's Connect</h3>
              <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                I'm always open to discussing new opportunities, collaborations, or just having a conversation about shared interests.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                  <Mail className="w-6 h-6 text-slate-500" />
                  <span className="text-slate-700 font-medium">your.email@example.com</span>
                </div>
                <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                  <Phone className="w-6 h-6 text-slate-500" />
                  <span className="text-slate-700 font-medium">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                  <User className="w-6 h-6 text-slate-500" />
                  <span className="text-slate-700 font-medium">LinkedIn Profile</span>
                </div>
              </div>
            </div>
            <Card className="bg-white/90 backdrop-blur-sm border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div>
                    <label className="block text-slate-700 mb-2 font-medium">Name</label>
                    <Input className="bg-slate-50/50 border-slate-300 text-slate-900 placeholder-slate-500 focus:border-slate-500 transition-colors" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-slate-700 mb-2 font-medium">Email</label>
                    <Input type="email" className="bg-slate-50/50 border-slate-300 text-slate-900 placeholder-slate-500 focus:border-slate-500 transition-colors" placeholder="your.email@example.com" />
                  </div>
                  <div>
                    <label className="block text-slate-700 mb-2 font-medium">Message</label>
                    <Textarea className="bg-slate-50/50 border-slate-300 text-slate-900 placeholder-slate-500 min-h-32 focus:border-slate-500 transition-colors" placeholder="Your message..." />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-slate-800 to-slate-700 text-white hover:from-slate-700 hover:to-slate-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 py-3">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-800 to-slate-700 py-8 border-t border-slate-300/20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-300">© 2024 Sushantan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
