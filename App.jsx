
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/components/ui/use-toast';
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  Printer, 
  Palette, 
  Settings, 
  FileText, 
  Scissors, 
  Star,
  ChevronLeft,
  ChevronRight,
  Globe,
  MessageCircle,
  Download,
  Upload,
  ShoppingCart,
  CreditCard,
  Users,
  Award,
  Zap,
  Shield,
  Clock,
  CheckCircle
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [language, setLanguage] = useState('ar');
  const [currency, setCurrency] = useState('SAR');
  const [activeSection, setActiveSection] = useState('home');
  const { toast } = useToast();

  const translations = {
    ar: {
      nav: {
        home: 'الرئيسية',
        about: 'من نحن',
        services: 'خدماتنا',
        products: 'منتجاتنا',
        stamps: 'الأختام والقرطاسية',
        order: 'اطلب الآن',
        contact: 'اتصل بنا',
        policy: 'سياسة الدفع والاسترجاع'
      },
      hero: {
        title: 'LOONPRINT',
        subtitle: 'شريكك الموثوق في عالم الطباعة والأحبار',
        description: 'نقدم أحدث تقنيات الطباعة وأجود أنواع الأحبار والطابعات في المملكة العربية السعودية',
        cta: 'اطلب الآن',
        catalog: 'تحميل الكتالوج'
      },
      services: {
        title: 'خدماتنا المتميزة',
        dtf: 'طباعة DTF على الملابس',
        uv: 'طباعة UV على الهدايا',
        banners: 'طباعة البنرات والرول أب',
        books: 'طباعة الكتب والمجلات',
        laser: 'قص وحفر بالليزر'
      },
      about: {
        title: 'من نحن',
        description: 'شركة LOONPRINT هي شركة سعودية رائدة في مجال الطباعة وتوزيع الأحبار والطابعات. نتميز بخبرة واسعة وتقنيات حديثة لتلبية جميع احتياجاتكم في عالم الطباعة.',
        experience: 'سنوات من الخبرة',
        clients: 'عميل راضٍ',
        projects: 'مشروع منجز',
        quality: 'ضمان الجودة'
      },
      products: {
        title: 'منتجاتنا',
        printers: 'الطابعات',
        inks: 'الأحبار',
        machines: 'الماكينات',
        buyNow: 'اشترِ الآن'
      },
      contact: {
        title: 'اتصل بنا',
        name: 'الاسم',
        email: 'البريد الإلكتروني',
        phone: 'رقم الهاتف',
        message: 'الرسالة',
        send: 'إرسال',
        address: 'العنوان',
        workHours: 'ساعات العمل'
      },
      footer: {
        description: 'شريكك الموثوق في عالم الطباعة والأحبار',
        quickLinks: 'روابط سريعة',
        followUs: 'تابعنا',
        rights: 'جميع الحقوق محفوظة'
      }
    },
    en: {
      nav: {
        home: 'Home',
        about: 'About Us',
        services: 'Services',
        products: 'Products',
        stamps: 'Stamps & Stationery',
        order: 'Order Now',
        contact: 'Contact',
        policy: 'Payment & Return Policy'
      },
      hero: {
        title: 'LOONPRINT',
        subtitle: 'Your Trusted Partner in Printing & Inks',
        description: 'We provide the latest printing technologies and finest inks and printers in Saudi Arabia',
        cta: 'Order Now',
        catalog: 'Download Catalog'
      },
      services: {
        title: 'Our Premium Services',
        dtf: 'DTF Printing on Clothing',
        uv: 'UV Printing on Gifts',
        banners: 'Banners & Roll-up Printing',
        books: 'Books & Magazines Printing',
        laser: 'Laser Cutting & Engraving'
      },
      about: {
        title: 'About Us',
        description: 'LOONPRINT is a leading Saudi company in printing and distribution of inks and printers. We excel with extensive experience and modern technologies to meet all your printing needs.',
        experience: 'Years of Experience',
        clients: 'Satisfied Clients',
        projects: 'Completed Projects',
        quality: 'Quality Guarantee'
      },
      products: {
        title: 'Our Products',
        printers: 'Printers',
        inks: 'Inks',
        machines: 'Machines',
        buyNow: 'Buy Now'
      },
      contact: {
        title: 'Contact Us',
        name: 'Name',
        email: 'Email',
        phone: 'Phone',
        message: 'Message',
        send: 'Send',
        address: 'Address',
        workHours: 'Working Hours'
      },
      footer: {
        description: 'Your trusted partner in printing and inks',
        quickLinks: 'Quick Links',
        followUs: 'Follow Us',
        rights: 'All rights reserved'
      }
    }
  };

  const t = translations[language];

  const heroSlides = [
    {
      title: language === 'ar' ? 'طباعة DTF على الملابس' : 'DTF Printing on Clothing',
      description: language === 'ar' ? 'تقنية حديثة لطباعة عالية الجودة على جميع أنواع الأقمشة' : 'Modern technology for high-quality printing on all fabric types'
    },
    {
      title: language === 'ar' ? 'طباعة UV على الهدايا' : 'UV Printing on Gifts',
      description: language === 'ar' ? 'طباعة مباشرة على المواد الصلبة بألوان زاهية ومقاومة' : 'Direct printing on solid materials with vibrant and resistant colors'
    },
    {
      title: language === 'ar' ? 'طباعة البنرات والرول أب' : 'Banners & Roll-up Printing',
      description: language === 'ar' ? 'حلول إعلانية احترافية بجودة عالية وأحجام متنوعة' : 'Professional advertising solutions with high quality and various sizes'
    },
    {
      title: language === 'ar' ? 'طباعة الكتب والمجلات' : 'Books & Magazines Printing',
      description: language === 'ar' ? 'خدمات طباعة متكاملة للكتب والمجلات بأفضل المعايير' : 'Complete printing services for books and magazines with the best standards'
    },
    {
      title: language === 'ar' ? 'قص وحفر بالليزر' : 'Laser Cutting & Engraving',
      description: language === 'ar' ? 'تقنية الليزر المتطورة للقص والحفر بدقة عالية' : 'Advanced laser technology for high-precision cutting and engraving'
    }
  ];

  const currencies = [
    { code: 'SAR', symbol: 'ر.س', rate: 1 },
    { code: 'USD', symbol: '$', rate: 0.27 },
    { code: 'EUR', symbol: '€', rate: 0.24 },
    { code: 'AED', symbol: 'د.إ', rate: 0.98 },
    { code: 'KWD', symbol: 'د.ك', rate: 0.08 },
    { code: 'BHD', symbol: 'د.ب', rate: 0.10 },
    { code: 'OMR', symbol: 'ر.ع', rate: 0.10 },
    { code: 'QAR', symbol: 'ر.ق', rate: 0.97 }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  const handleNotImplemented = () => {
    toast({
      title: "🚧 هذه الميزة غير مطبقة بعد—لكن لا تقلق! يمكنك طلبها في رسالتك التالية! 🚀",
      duration: 3000,
    });
  };

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ar' ? 'en' : 'ar');
    document.documentElement.dir = language === 'ar' ? 'ltr' : 'rtl';
    document.documentElement.lang = language === 'ar' ? 'en' : 'ar';
  };

  return (
    <div className={`min-h-screen ${language === 'ar' ? 'font-arabic' : 'font-english'}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-effect">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div 
              className="flex items-center space-x-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Printer className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gradient">LOONPRINT</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {Object.entries(t.nav).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => scrollToSection(key === 'home' ? 'hero' : key)}
                  className={`nav-item text-white hover:text-purple-300 transition-colors ${
                    activeSection === (key === 'home' ? 'hero' : key) ? 'text-purple-300' : ''
                  }`}
                >
                  {value}
                </button>
              ))}
            </div>

            {/* Language & Currency Toggle */}
            <div className="hidden md:flex items-center space-x-4">
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="currency-selector rounded-lg px-3 py-1 text-sm text-gray-800"
              >
                {currencies.map(curr => (
                  <option key={curr.code} value={curr.code}>{curr.code}</option>
                ))}
              </select>
              
              <button
                onClick={toggleLanguage}
                className="language-toggle rounded-lg px-3 py-1 text-white text-sm flex items-center space-x-1"
              >
                <Globe className="w-4 h-4" />
                <span>{language === 'ar' ? 'EN' : 'عربي'}</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden glass-effect"
            >
              <div className="container mx-auto px-4 py-4 space-y-4">
                {Object.entries(t.nav).map(([key, value]) => (
                  <button
                    key={key}
                    onClick={() => scrollToSection(key === 'home' ? 'hero' : key)}
                    className="block w-full text-right text-white hover:text-purple-300 transition-colors"
                  >
                    {value}
                  </button>
                ))}
                <div className="flex items-center justify-between pt-4 border-t border-white/20">
                  <select
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    className="currency-selector rounded-lg px-3 py-1 text-sm text-gray-800"
                  >
                    {currencies.map(curr => (
                      <option key={curr.code} value={curr.code}>{curr.code}</option>
                    ))}
                  </select>
                  
                  <button
                    onClick={toggleLanguage}
                    className="language-toggle rounded-lg px-3 py-1 text-white text-sm flex items-center space-x-1"
                  >
                    <Globe className="w-4 h-4" />
                    <span>{language === 'ar' ? 'EN' : 'عربي'}</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen hero-gradient flex items-center overflow-hidden">
        <div className="absolute inset-0 hero-slider">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            >
              <img  
                className="w-full h-full object-cover opacity-30"
                alt={`خدمة ${slide.title}`}
               src="https://images.unsplash.com/photo-1516180500701-0685eb8301a2" />
            </div>
          ))}
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 floating-animation">
                {t.hero.title}
              </h1>
              <h2 className="text-2xl md:text-3xl mb-6 text-purple-200">
                {t.hero.subtitle}
              </h2>
              <p className="text-lg mb-8 text-purple-100 leading-relaxed">
                {t.hero.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleNotImplemented}
                  className="bg-white text-purple-900 hover:bg-purple-100 px-8 py-3 text-lg font-semibold"
                >
                  <ShoppingCart className="w-5 h-5 ml-2" />
                  {t.hero.cta}
                </Button>
                <Button 
                  onClick={handleNotImplemented}
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-purple-900 px-8 py-3 text-lg"
                >
                  <Download className="w-5 h-5 ml-2" />
                  {t.hero.catalog}
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="glass-effect rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {heroSlides[currentSlide].title}
                </h3>
                <p className="text-purple-200 mb-6">
                  {heroSlides[currentSlide].description}
                </p>
                
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
                    className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5 text-white" />
                  </button>
                  
                  <div className="flex space-x-2">
                    {heroSlides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          index === currentSlide ? 'bg-white' : 'bg-white/40'
                        }`}
                      />
                    ))}
                  </div>
                  
                  <button
                    onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
                    className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-title text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              {t.services.title}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Printer, title: t.services.dtf, color: 'from-blue-500 to-purple-600' },
              { icon: Palette, title: t.services.uv, color: 'from-purple-500 to-pink-600' },
              { icon: FileText, title: t.services.banners, color: 'from-green-500 to-blue-600' },
              { icon: FileText, title: t.services.books, color: 'from-orange-500 to-red-600' },
              { icon: Scissors, title: t.services.laser, color: 'from-indigo-500 to-purple-600' }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="service-card rounded-2xl p-8 text-center card-hover"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
                <Button 
                  onClick={handleNotImplemented}
                  variant="outline" 
                  className="w-full"
                >
                  {language === 'ar' ? 'اطلب الآن' : 'Order Now'}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <h2 className="section-title text-4xl md:text-5xl font-bold mb-8">
                {t.about.title}
              </h2>
              <p className="text-lg leading-relaxed mb-8 text-purple-100">
                {t.about.description}
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: '10+', label: t.about.experience, icon: Award },
                  { number: '500+', label: t.about.clients, icon: Users },
                  { number: '1000+', label: t.about.projects, icon: CheckCircle },
                  { number: '100%', label: t.about.quality, icon: Shield }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <stat.icon className="w-8 h-8 text-purple-300 mx-auto mb-2" />
                    <div className="text-3xl font-bold mb-1">{stat.number}</div>
                    <div className="text-sm text-purple-200">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img  
                className="rounded-2xl shadow-2xl w-full"
                alt="مكتب شركة LOONPRINT"
               src="https://images.unsplash.com/photo-1503694978374-8a2fa686963a" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-title text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              {t.products.title}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: t.products.printers,
                items: ['طابعات رقمية', 'Eco-Solvent', 'DTF', 'UV', 'UV DTF'],
                price: '15,000',
                image: 'طابعة حديثة عالية الجودة للطباعة التجارية'
              },
              {
                category: t.products.inks,
                items: ['أحبار Ricoh', 'أحبار Konica', 'أحبار Canon', 'أكياس وكارتريدج'],
                price: '500',
                image: 'مجموعة أحبار ملونة عالية الجودة للطابعات'
              },
              {
                category: t.products.machines,
                items: ['ماكينات الحفر بالليزر', 'ماكينات القص بالليزر', 'ماكينات CNC'],
                price: '25,000',
                image: 'ماكينة حفر وقص بالليزر متطورة'
              }
            ].map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="product-card"
              >
                <img  
                  className="w-full h-48 object-cover"
                  alt={`${product.category} - منتجات LOONPRINT`}
                 src="https://images.unsplash.com/photo-1635865165118-917ed9e20936" />
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{product.category}</h3>
                  <ul className="text-gray-600 mb-6 space-y-2">
                    {product.items.map((item, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 ml-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-purple-600">
                      {currencies.find(c => c.code === currency)?.symbol}{(parseFloat(product.price) * currencies.find(c => c.code === currency)?.rate).toFixed(0)}
                    </span>
                    <span className="text-sm text-gray-500">{currency}</span>
                  </div>
                  
                  <Button 
                    onClick={handleNotImplemented}
                    className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                  >
                    <ShoppingCart className="w-4 h-4 ml-2" />
                    {t.products.buyNow}
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stamps & Stationery Section */}
      <section id="stamps" className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-title text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              {language === 'ar' ? 'الأختام والقرطاسية' : 'Stamps & Stationery'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {language === 'ar' 
                ? 'نقدم خدمات تصميم وتصنيع الأختام الرسمية وجميع أنواع القرطاسية بأعلى معايير الجودة'
                : 'We provide design and manufacturing services for official stamps and all types of stationery with the highest quality standards'
              }
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: language === 'ar' ? 'أختام رسمية' : 'Official Stamps',
                description: language === 'ar' ? 'أختام للشركات والمؤسسات' : 'Stamps for companies and institutions',
                price: '150',
                image: 'ختم رسمي احترافي للشركات'
              },
              {
                title: language === 'ar' ? 'أختام شخصية' : 'Personal Stamps',
                description: language === 'ar' ? 'أختام للاستخدام الشخصي' : 'Stamps for personal use',
                price: '80',
                image: 'ختم شخصي أنيق'
              },
              {
                title: language === 'ar' ? 'قرطاسية مكتبية' : 'Office Stationery',
                description: language === 'ar' ? 'جميع احتياجات المكتب' : 'All office needs',
                price: '50',
                image: 'مجموعة قرطاسية مكتبية متنوعة'
              },
              {
                title: language === 'ar' ? 'قرطاسية مدرسية' : 'School Stationery',
                description: language === 'ar' ? 'مستلزمات الطلاب' : 'Student supplies',
                price: '30',
                image: 'قرطاسية مدرسية ملونة للطلاب'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover"
              >
                <img  
                  className="w-full h-40 object-cover"
                  alt={item.title}
                 src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xl font-bold text-purple-600">
                      {currencies.find(c => c.code === currency)?.symbol}{(parseFloat(item.price) * currencies.find(c => c.code === currency)?.rate).toFixed(0)}
                    </span>
                  </div>
                  
                  <Button 
                    onClick={handleNotImplemented}
                    size="sm" 
                    className="w-full"
                  >
                    {t.products.buyNow}
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Now Section */}
      <section id="order" className="py-20 hero-gradient">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-title text-4xl md:text-5xl font-bold text-white mb-6">
              {language === 'ar' ? 'اطلب الآن' : 'Order Now'}
            </h2>
            <p className="text-lg text-purple-200 max-w-2xl mx-auto">
              {language === 'ar' 
                ? 'احصل على خدماتنا المتميزة بسهولة. ارفع تصميمك أو ملفك وسنتولى الباقي'
                : 'Get our premium services easily. Upload your design or file and we\'ll handle the rest'
              }
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="contact-form rounded-2xl p-8"
            >
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      {language === 'ar' ? 'نوع الخدمة' : 'Service Type'}
                    </label>
                    <select className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-400">
                      <option value="">{language === 'ar' ? 'اختر الخدمة' : 'Select Service'}</option>
                      <option value="dtf">{t.services.dtf}</option>
                      <option value="uv">{t.services.uv}</option>
                      <option value="banners">{t.services.banners}</option>
                      <option value="books">{t.services.books}</option>
                      <option value="laser">{t.services.laser}</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      {language === 'ar' ? 'الكمية' : 'Quantity'}
                    </label>
                    <input
                      type="number"
                      min="1"
                      className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-400"
                      placeholder={language === 'ar' ? 'أدخل الكمية' : 'Enter quantity'}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    {language === 'ar' ? 'رفع التصميم أو الملف' : 'Upload Design or File'}
                  </label>
                  <div className="border-2 border-dashed border-white/30 rounded-lg p-8 text-center">
                    <Upload className="w-12 h-12 text-white/70 mx-auto mb-4" />
                    <p className="text-white/70 mb-2">
                      {language === 'ar' ? 'اسحب وأفلت الملف هنا أو' : 'Drag and drop file here or'}
                    </p>
                    <Button 
                      type="button"
                      onClick={handleNotImplemented}
                      variant="outline" 
                      className="border-white text-white hover:bg-white hover:text-purple-900"
                    >
                      {language === 'ar' ? 'تصفح الملفات' : 'Browse Files'}
                    </Button>
                    <p className="text-xs text-white/50 mt-2">
                      {language === 'ar' ? 'PDF, JPG, PNG, AI (حد أقصى 10MB)' : 'PDF, JPG, PNG, AI (Max 10MB)'}
                    </p>
                  </div>
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    {language === 'ar' ? 'ملاحظات إضافية' : 'Additional Notes'}
                  </label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    placeholder={language === 'ar' ? 'أي تفاصيل إضافية...' : 'Any additional details...'}
                  ></textarea>
                </div>

                <Button 
                  onClick={handleNotImplemented}
                  className="w-full bg-white text-purple-900 hover:bg-purple-100 py-3 text-lg font-semibold"
                >
                  <CreditCard className="w-5 h-5 ml-2" />
                  {language === 'ar' ? 'إرسال الطلب والدفع' : 'Submit Order & Pay'}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-title text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              {t.contact.title}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{language === 'ar' ? 'الهاتف' : 'Phone'}</h3>
                    <p className="text-gray-600">+966 50 123 4567</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{language === 'ar' ? 'البريد الإلكتروني' : 'Email'}</h3>
                    <p className="text-gray-600">info@loonprint.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{t.contact.address}</h3>
                    <p className="text-gray-600">
                      {language === 'ar' 
                        ? 'الرياض، المملكة العربية السعودية'
                        : 'Riyadh, Saudi Arabia'
                      }
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{t.contact.workHours}</h3>
                    <p className="text-gray-600">
                      {language === 'ar' 
                        ? 'الأحد - الخميس: 8:00 ص - 6:00 م'
                        : 'Sunday - Thursday: 8:00 AM - 6:00 PM'
                      }
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      {t.contact.name}
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                      placeholder={t.contact.name}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      {t.contact.phone}
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                      placeholder={t.contact.phone}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    {t.contact.email}
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    placeholder={t.contact.email}
                  />
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    {t.contact.message}
                  </label>
                  <textarea
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    placeholder={t.contact.message}
                  ></textarea>
                </div>

                <Button 
                  onClick={handleNotImplemented}
                  className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 py-3 text-lg"
                >
                  {t.contact.send}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Policy Section */}
      <section id="policy" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-title text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              {language === 'ar' ? 'سياسة الدفع والاسترجاع' : 'Payment & Return Policy'}
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  {language === 'ar' ? 'طرق الدفع' : 'Payment Methods'}
                </h3>
                <div className="space-y-4">
                  {[
                    { name: language === 'ar' ? 'مدى' : 'Mada', supported: true },
                    { name: 'Visa', supported: true },
                    { name: 'MasterCard', supported: true },
                    { name: 'Apple Pay', supported: true },
                    { name: 'STC Pay', supported: true },
                    { name: language === 'ar' ? 'تحويل بنكي (IBAN)' : 'Bank Transfer (IBAN)', supported: true }
                  ].map((method, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-gray-700">{method.name}</span>
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  {language === 'ar' ? 'سياسة الاسترجاع' : 'Return Policy'}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <p className="text-gray-700">
                      {language === 'ar' 
                        ? 'إمكانية الاسترجاع خلال 7 أيام من تاريخ الاستلام'
                        : '7-day return policy from delivery date'
                      }
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <p className="text-gray-700">
                      {language === 'ar' 
                        ? 'المنتج يجب أن يكون في حالته الأصلية'
                        : 'Product must be in original condition'
                      }
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <p className="text-gray-700">
                      {language === 'ar' 
                        ? 'استرداد كامل للمبلغ المدفوع'
                        : 'Full refund of paid amount'
                      }
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-gradient text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <Printer className="w-6 h-6 text-purple-600" />
                </div>
                <span className="text-2xl font-bold">LOONPRINT</span>
              </div>
              <p className="text-purple-200 mb-6">
                {t.footer.description}
              </p>
              <div className="flex space-x-4">
                {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                  <button
                    key={social}
                    onClick={handleNotImplemented}
                    className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    <div className="w-5 h-5 bg-white rounded"></div>
                  </button>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-6">{t.footer.quickLinks}</h3>
              <div className="space-y-3">
                {Object.entries(t.nav).map(([key, value]) => (
                  <button
                    key={key}
                    onClick={() => scrollToSection(key === 'home' ? 'hero' : key)}
                    className="block text-purple-200 hover:text-white transition-colors"
                  >
                    {value}
                  </button>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold mb-6">
                {language === 'ar' ? 'خدماتنا' : 'Our Services'}
              </h3>
              <div className="space-y-3">
                {Object.values(t.services).slice(1).map((service, index) => (
                  <p key={index} className="text-purple-200">{service}</p>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-lg font-semibold mb-6">
                {language === 'ar' ? 'معلومات التواصل' : 'Contact Info'}
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-purple-300" />
                  <span className="text-purple-200">+966 50 123 4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-purple-300" />
                  <span className="text-purple-200">info@loonprint.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-purple-300" />
                  <span className="text-purple-200">
                    {language === 'ar' ? 'الرياض، السعودية' : 'Riyadh, Saudi Arabia'}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="border-t border-white/20 mt-12 pt-8 text-center">
            <p className="text-purple-200">
              © 2024 LOONPRINT. {t.footer.rights}
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <button
        onClick={handleNotImplemented}
        className="whatsapp-float flex items-center justify-center"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </button>

      <Toaster />
    </div>
  );
};

export default App;
