import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Star, CheckCircle, Crown, ArrowRight, MessageCircle, Globe, Video, Mic, Users, Presentation, Award, Building, Calendar, Menu, X } from 'lucide-react';
import { FaFacebookF, FaTiktok } from 'react-icons/fa';
import { SiZalo } from 'react-icons/si';
import ConsultationModal from './components/ConsultationModal';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const openModal = () => setIsModalOpen(true);

  // Xử lý scroll để đổi màu header
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsMobileMenuOpen(false); // Đóng menu mobile khi click
    const element = document.getElementById(id);
    if (element) {
        // Trừ đi chiều cao header để không bị che nội dung
        const headerOffset = 50;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <div className="font-sans text-gray-800 bg-white selection:bg-rose-200 overflow-x-hidden">
      {/* Giả sử bạn có component này */}
      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
      {/* HEADER */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 py-2 
        ${isMobileMenuOpen 
            ? 'bg-white shadow-none transition-none' // MỞ
            : 'transition-colors duration-300 delay-100' // ĐÓNG
        }
        ${!isMobileMenuOpen && scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : ''}
        ${!isMobileMenuOpen && !scrolled ? 'bg-transparent' : ''}
        `}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          
          {/* LOGO */}
          <div className="flex items-center gap-3 z-50">
            <img
              src="https://res.cloudinary.com/ddutk6rhm/image/upload/v1768465881/1_ke2xqj.png"
              alt="Champ Holding Logo"
              className="h-10 md:h-14 w-auto object-contain"
            />
            
            <div className="leading-tight">
              {/* Khi Menu mở -> Chữ luôn đen */}
              <h1 className={`font-heading-2 font-bold transition-colors duration-300 text-xl md:text-2xl
                  ${isMobileMenuOpen ? 'text-gray-900' : (scrolled ? 'text-rose-950' : 'text-white')}
              `}>
                HUYỀN TRANG
              </h1>
              <span className={`text-[10px] md:text-xs font-bold tracking-widest uppercase block transition-colors duration-300
                  ${isMobileMenuOpen ? 'text-amber-600' : (scrolled ? 'text-amber-600' : 'text-amber-400')}
              `}>
                Champ Holding
              </span>
            </div>
          </div>

          {/* DESKTOP NAV */}
          <nav className={`hidden md:flex gap-8 font-bold text-sm uppercase tracking-wide px-6 py-2 rounded-full transition-all duration-300 ${scrolled ? 'text-gray-600 bg-white/80' : 'text-white/90 bg-black/20 backdrop-blur-sm'}`}>
            <button onClick={() => scrollToSection('about')} className="hover:text-amber-400 transition hover:scale-105">Giới thiệu</button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-amber-400 transition hover:scale-105">Dự án</button>
            <button onClick={() => scrollToSection('work')} className="hover:text-amber-400 transition hover:scale-105">Công việc</button>
            <button onClick={() => scrollToSection('connect')} className="hover:text-amber-400 transition hover:scale-105">Kết nối</button>
          </nav>

          {/* CTA BUTTON */}
          <a href="tel:0916868165" className={`hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full transition shadow-lg border border-rose-700 ${scrolled ? 'bg-rose-900 text-white' : 'bg-rose-900/80 text-white backdrop-blur-sm'}`}>
            <Phone size={18} className="animate-pulse" />
            <span className="font-cta font-bold">091.6868.165</span>
          </a>

          {/* MOBILE MENU TOGGLE */}
          <button 
            className={`md:hidden z-50 p-2 rounded-full transition-colors duration-300 ${
                isMobileMenuOpen 
                    ? 'text-gray-900 bg-gray-100' 
                    : scrolled 
                        ? 'text-rose-900 hover:bg-rose-50' 
                        : 'text-white bg-black/20'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <div 
          className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 
            transition-all duration-300 ease-in-out
            ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}
          `}
        >
            <button onClick={() => { scrollToSection('about'); setIsMobileMenuOpen(false); }} className="text-xl font-bold text-gray-800 uppercase hover:text-amber-500 transition transform hover:scale-110">Giới thiệu</button>
            <button onClick={() => { scrollToSection('projects'); setIsMobileMenuOpen(false); }} className="text-xl font-bold text-gray-800 uppercase hover:text-amber-500 transition transform hover:scale-110">Dự án</button>
            <button onClick={() => { scrollToSection('work'); setIsMobileMenuOpen(false); }} className="text-xl font-bold text-gray-800 uppercase hover:text-amber-500 transition transform hover:scale-110">Công việc</button>
            <button onClick={() => { scrollToSection('connect'); setIsMobileMenuOpen(false); }} className="text-xl font-bold text-gray-800 uppercase hover:text-amber-500 transition transform hover:scale-110">Kết nối</button>
            
            <a href="tel:0916868165" className="flex items-center gap-2 bg-rose-900 text-white px-8 py-3 rounded-full shadow-xl text-lg font-bold mt-4 animate-bounce">
               <Phone size={20} /> 091.6868.165
            </a>
      </div>

      {/* HERO SECTION */}
      <section className="relative h-auto lg:min-h-screen flex items-center bg-gray-900 overflow-hidden py-10 lg:py-0">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-20" 
            alt="City Background" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-900/90 to-rose-950/80"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-12 h-full">
            {/* ... Nội dung Hero ... */}
            <div className="text-white space-y-6 flex flex-col justify-center pb-20 md:pb-24 pt-8 md:pt-0 pl-6 md:pl-10">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-400 px-4 py-2 rounded-full text-sm font-bold border border-amber-500/30 backdrop-blur-md w-fit">
                    <Crown size={16} className="text-amber-400" /> 
                    CHUYÊN GIA BĐS TÂY HÀ NỘI
                </div>
                {/* ... (Phần còn lại của code của bạn) ... */}
                <div>
                <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-2">
                    NGUYỄN THỊ <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 drop-shadow-sm">
                    HUYỀN TRANG
                    </span>
                </h1>
                <p className="text-xl md:text-2xl text-rose-200 font-light mt-2">
                    Founder <b className="text-white">Champ Holding</b>
                </p>
                <div className="h-1.5 w-32 bg-gradient-to-r from-amber-500 to-rose-600 rounded-full mt-4"></div>
                </div>

                <p className="text-gray-300 text-lg font-light max-w-lg leading-relaxed">
                Đối tác chiến lược Sao Vàng Holdings. Kiến tạo giải pháp đầu tư an toàn và sinh lời bền vững.
                </p>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 space-y-4 max-w-lg">
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-rose-950 shrink-0 mt-1 shadow-lg shadow-amber-500/50">
                            <Phone size={20} />
                        </div>
                        <div>
                            <p className="text-xs text-amber-400 font-bold uppercase tracking-wider mb-1">Hotline tư vấn 24/7</p>
                            <p className="font-cta text-xl md:text-2xl font-bold text-white">091.6868.165 <span className="text-gray-500 text-lg font-normal">|</span> 087.872.8888</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-rose-800 rounded-full flex items-center justify-center text-white shrink-0 mt-1">
                            <MapPin size={20} />
                        </div>
                        <div>
                            <p className="text-xs text-rose-300 font-bold uppercase tracking-wider mb-1">Văn phòng giao dịch</p>
                            <p className="text-sm md:text-base text-gray-300 leading-snug">
                            Số 11 - LK1 - KĐT Tân Tây Đô - Ô Diên - TP.Hà Nội
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex gap-4">
                <button onClick={openModal} className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg hover:shadow-amber-500/30 transition transform hover:-translate-y-1 uppercase tracking-wide flex items-center gap-2">
                    <MessageCircle size={20}/> Kết nối ngay
                </button>
                </div>
            </div>

            {/* CỘT PHẢI */}
            <div className="relative h-[500px] md:h-full flex items-end justify-center md:justify-end">
                <div className="absolute top-1/2 right-0 md:right-10 transform -translate-y-1/2 w-[400px] h-[400px] bg-amber-600/30 rounded-full blur-[100px] z-0"></div>
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-gray-900 to-transparent z-20"></div>
                <img 
                    src="https://res.cloudinary.com/ddutk6rhm/image/upload/v1768408052/z7431496395297_5417d70b7358bbf7e0fcb2adaba5c9c5_u06szd.jpg" 
                    alt="Huyen Trang Portrait" 
                    className="relative z-10 h-[90%] md:h-[95%] w-auto object-contain drop-shadow-[0_0_15px_rgba(251,191,36,0.3)] hover:scale-105 transition duration-700 ease-in-out" 
                />
            </div>
        </div>
      </section> 

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="py-16 md:py-24 bg-white relative">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="relative group">
                <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-rose-900 transition-all duration-500 group-hover:top-0 group-hover:left-0"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-amber-500 transition-all duration-500 group-hover:bottom-0 group-hover:right-0"></div>
                <img 
                  src="https://res.cloudinary.com/ddutk6rhm/image/upload/v1768408049/z7431496394216_f553cef0625b81934d8f0fdc63a5b680_tlkn0t.jpg" 
                  alt="About Huyen Trang" 
                  className="w-full h-[400px] md:h-[650px] object-cover rounded-lg shadow-2xl" 
                />
            </div>
            
            <div>
                <span className="text-rose-800 font-bold tracking-widest uppercase text-xs md:text-sm mb-2 block">Về tôi</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-heading">NGUYỄN THỊ HUYỀN TRANG</h2>
                
                <div className="space-y-6 mb-8">
                   <div className="p-4 bg-rose-50 border-l-4 border-rose-900 rounded-r-lg">
                      <p className="font-bold text-rose-900 text-lg">FOUNDER CHAMP HOLDING</p>
                      <p className="text-sm text-rose-700 mt-1 font-mono">MST: 0110793873</p>
                   </div>
                   
                   <p className="text-gray-600 leading-relaxed text-justify text-base md:text-lg">
                    Sinh ra và lớn lên tại phía Tây Hà Nội, tốt nghiệp cử nhân Đại học Văn Hóa. Với niềm đam mê cháy bỏng về Bất Động Sản.
                    <br/><br/>
                    <b>06 năm kinh nghiệm</b>, phân phối <b>~100 dự án</b> từ đất nền, căn hộ, nhà phố, biệt thự hạng sang trên toàn quốc... 
                    Hiện tại là Tổng Giám Đốc của <b className="text-rose-900">CHAMP HOLDING</b> - Đối tác chiến lược của <a href="https://saovangholdings.com" className="text-amber-600 hover:underline font-bold">Sao Vàng Holdings</a>.
                   </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                   <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <CheckCircle size={20} className="text-amber-500 shrink-0"/> 
                      <span className="text-gray-700 font-medium">Chứng chỉ môi giới chuyên nghiệp</span>
                   </div>
                   <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <CheckCircle size={20} className="text-amber-500 shrink-0"/> 
                      <span className="text-gray-700 font-medium">Chuyên gia BĐS dự án & thổ cư</span>
                   </div>
                </div>
            </div>
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section id="projects" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-amber-600 font-bold uppercase tracking-widest text-xs md:text-sm">Sản phẩm chiến lược</span>
            <h2 className="text-3xl md:text-4xl font-bold text-rose-950 mt-2 mb-4 font-heading">DỰ ÁN TRỌNG ĐIỂM</h2>
            <div className="w-24 h-1 bg-rose-900 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 cursor-pointer flex flex-col h-full" onClick={openModal}>
              <div className="relative h-60 md:h-64 overflow-hidden">
                <span className="absolute top-4 left-4 bg-rose-600 text-white text-[10px] md:text-xs font-bold px-3 py-1 rounded shadow-md z-10 animate-pulse">HOT NHẤT</span>
                <img src="https://noblepalacetaythanglong.com/wp-content/uploads/noble-palace-tay-thang-long-1.jpg" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" alt="Noble Palace"/>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition"></div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg md:text-xl font-bold text-rose-950 mb-2 line-clamp-1">NOBLE PALACE TÂY THĂNG LONG</h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2 flex-grow">Kiệt tác kiến trúc Châu Âu. Cơ hội đầu tư sinh lời x3 tại vị trí đắc địa nhất.</p>
                <div className="flex items-center gap-2 text-rose-700 font-bold text-sm uppercase group-hover:gap-3 transition-all">Xem chi tiết <ArrowRight size={16}/></div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 cursor-pointer flex flex-col h-full" onClick={openModal}>
              <div className="relative h-60 md:h-64 overflow-hidden">
                <span className="absolute top-4 left-4 bg-blue-600 text-white text-[10px] md:text-xs font-bold px-3 py-1 rounded shadow-md z-10">ĐAN PHƯỢNG</span>
                <img src="https://vinhomesdanphuonghanoi.com/wp-content/uploads/2025/03/Phan-khu-Pho-Hung-Dong-Wonder-Avenue-Vinhomes-Dan-Phuong-Wonder-City.jpg" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" alt="Vinhomes"/>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg md:text-xl font-bold text-rose-950 mb-2 line-clamp-1">VINHOMES WONDER CITY</h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2 flex-grow">Đại đô thị xanh đẳng cấp. Vinhomes Đan Phượng - Biểu tượng sống mới phía Tây.</p>
                <div className="flex items-center gap-2 text-rose-700 font-bold text-sm uppercase group-hover:gap-3 transition-all">Xem chi tiết <ArrowRight size={16}/></div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 cursor-pointer flex flex-col h-full" onClick={openModal}>
              <div className="relative h-60 md:h-64 overflow-hidden">
                <img src="https://vars.com.vn/uploads/up/vars/project/2022/05/09/22/35/hin1652088938_4647.jpg" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" alt="Hinode"/>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg md:text-xl font-bold text-rose-950 mb-2 line-clamp-1">HINODE ROYAL PARK</h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2 flex-grow">Khu đô thị Kim Chung Di Trạch. Vị trí vàng cửa ngõ giao thương sầm uất.</p>
                <div className="flex items-center gap-2 text-rose-700 font-bold text-sm uppercase group-hover:gap-3 transition-all">Xem chi tiết <ArrowRight size={16}/></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* --- TIKTOK SECTION --- */}
      <section className="py-16 md:py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
              <FaTiktok className="text-cyan-400" /> VIDEO TIKTOK NỔI BẬT
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "7551443468900470023",
              "7586277254393498888",
              "7568848776312458503",
              "7576586354386144519",
            ].map((id, index) => (
              // Wrapper để căn giữa video trong cột lưới
              <div key={index} className="flex justify-center w-full"> 
                
                {/* --- PHONE FRAME CONTAINER --- */}
                {/* max-w-[320px]: Giới hạn chiều rộng giống điện thoại thật */}
                {/* w-full: Co giãn trên màn hình bé hơn 320px */}
                {/* aspect-[9/16]: Luôn giữ tỷ lệ dọc chuẩn */}
                <div className="relative w-full max-w-[320px] aspect-[9/16] rounded-[2rem] overflow-hidden border-4 border-gray-800 shadow-2xl bg-gray-900 group hover:scale-[1.02] transition-transform duration-300">
                  
                  {/* Loading Placeholder */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white/30 z-0 bg-gray-800">
                    <FaTiktok className="text-4xl mb-2 opacity-50 animate-pulse"/>
                    <span className="text-xs font-medium tracking-wider">Đang tải video...</span>
                  </div>

                  {/* Iframe */}
                  <iframe
                    src={`https://www.tiktok.com/embed/v2/${id}`}
                    className="absolute inset-0 w-full h-full z-10 bg-black"
                    title={`tiktok-video-${index}`}
                    loading="lazy"
                    scrolling="no"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    referrerPolicy="strict-origin-when-cross-origin"
                    style={{ border: 'none' }} // Xóa border mặc định của iframe cũ
                  />

                  {/* Hiệu ứng bóng kính (Glass Reflection) cho giống màn hình thật */}
                  <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none z-20 opacity-50"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WORK SECTION --- */}
      <section id="work" className="py-16 md:py-24 bg-gray-900 text-white relative overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
             <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" alt="Office Work" className="w-full h-full object-cover opacity-10" />
             <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/95 to-rose-950/40"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
                <span className="text-amber-500 font-bold uppercase tracking-widest text-xs md:text-sm mb-2 block">Hoạt động chuyên môn</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">SỰ KIỆN & HOẠT ĐỘNG</h2>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">Ngoài là nhà môi giới BĐS, Huyền Trang còn đảm nhiệm vai trò đào tạo kỹ năng cho nhân sự và cố vấn phát triển các sản phẩm BĐS.</p>
                <div className="w-24 h-1 bg-amber-500 mx-auto mt-6 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                  { img: "https://res.cloudinary.com/ddutk6rhm/image/upload/v1768465853/4_gafa9y.jpg", title: "Year End Party 2024", icon: Award },
                  { img: "https://res.cloudinary.com/ddutk6rhm/image/upload/v1768465854/5_e5xetr.jpg", title: "Lễ Kick-off Noble Palace", icon: Building },
                  { img: "https://res.cloudinary.com/ddutk6rhm/image/upload/v1768465854/7_jeocf3.jpg", title: "Khai trương VP Đan Phượng", icon: MapPin },
                  { img: "https://res.cloudinary.com/ddutk6rhm/image/upload/v1768465856/6_r21yi4.jpg", title: "Off Team Champ Holding", icon: Users },
                  { img: "https://res.cloudinary.com/ddutk6rhm/image/upload/v1768465854/8_udk0nt.jpg", title: "Gặp gỡ Lãnh đạo", icon: Crown },
                  { img: "https://res.cloudinary.com/ddutk6rhm/image/upload/v1768465854/9_kmv3bl.jpg", title: "Vinh danh Cá nhân Xuất sắc", icon: Star },
              ].map((item, idx) => (
                <div key={idx} className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition duration-500 hover:-translate-y-2 hover:bg-white/10 cursor-pointer">
                    <div className="relative h-56 md:h-60 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
                        <img src={item.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={item.title} />
                        <div className="absolute top-4 right-4 bg-amber-500 text-rose-950 p-2 rounded-xl shadow-lg z-20">
                            <item.icon size={20} />
                        </div>
                    </div>
                    <div className="p-5 text-center">
                        <h3 className="text-base md:text-lg font-bold text-amber-400 group-hover:text-white transition line-clamp-2 min-h-[3.5rem] flex items-center justify-center">
                            {item.title}
                        </h3>
                    </div>
                </div>
              ))}
            </div>
        </div>
      </section>

      {/* --- CONNECT SECTION --- */}
      <section id="connect" className="py-16 md:py-24 bg-rose-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-rose-800 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
           <div className="text-center mb-10 md:mb-12">
             <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">KẾT NỐI VỚI HUYỀN TRANG</h2>
             <p className="text-rose-200 text-sm md:text-base">Cập nhật thông tin thị trường nhanh nhất & chính xác nhất</p>
           </div>
           
           {/* Social Buttons */}
           <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto mb-16">
              <a href="https://www.facebook.com/huyentrangg165" target="_blank" className="flex items-center justify-center gap-3 bg-[#1877F2] text-white py-4 rounded-xl hover:bg-blue-700 transition font-bold shadow-lg transform hover:-translate-y-1">
                <FaFacebookF size={24}/> Facebook
              </a>
              <a href="https://www.tiktok.com/@huyentrang.land" target="_blank" className="flex items-center justify-center gap-3 bg-black text-white py-4 rounded-xl hover:bg-gray-800 transition font-bold shadow-lg border border-gray-700 transform hover:-translate-y-1">
                <FaTiktok size={24}/> TikTok
              </a>
              <a href="https://zalo.me/changchiny" target="_blank" className="flex items-center justify-center gap-3 bg-[#0068FF] text-white py-4 rounded-xl hover:bg-blue-600 transition font-bold shadow-lg transform hover:-translate-y-1">
                <SiZalo size={24}/> Chat Zalo
              </a>
           </div>

           {/* Zalo Groups */}
           <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 md:p-12 border border-white/20">
              <h3 className="text-xl md:text-2xl font-bold text-amber-400 mb-8 text-center uppercase flex items-center justify-center gap-2">
                 <Users size={28}/> Tham gia cộng đồng chuyên sâu
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {/* Group 1 */}
                <a
                  href="https://zalo.me/g/nnlraf715"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-6 rounded-2xl shadow-xl flex flex-col items-center text-center group hover:-translate-y-1 transition duration-300 border-4 border-transparent hover:border-amber-400"
                >
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-4 shadow-md group-hover:scale-110 transition border-2 border-gray-200">
                    <img src="https://s480-ava-grp-talk.zadn.vn/7/d/e/6/4/480/2bc64f038c85c78611a2a7a10e6d9879.jpg" alt="Masteri Sky Quarter" className="w-full h-full object-cover"/>
                  </div>
                  <h4 className="font-heading font-bold text-lg text-gray-900 mb-2">MASTERI SKY QUARTER</h4>
                  <span className="text-blue-600 font-bold uppercase text-xs bg-blue-50 px-3 py-1 rounded-full">Bấm tham gia</span>
                </a>

                {/* Group 2 */}
                <a
                    href="https://zalo.me/g/ozhgyj043"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-6 rounded-2xl shadow-xl flex flex-col items-center text-center group hover:-translate-y-1 transition duration-300 border-4 border-transparent hover:border-amber-400"
                  >
                    <div className="w-20 h-20 rounded-full overflow-hidden mb-4 shadow-md group-hover:scale-110 transition border-2 border-gray-200">
                      <img src="https://ava-grp-talk.zadn.vn/c/5/8/8/4/360/05a15e1110cd0725ad1b5508ce143849.jpg" alt="Noble Palace Tây Thăng Long" className="w-full h-full object-cover"/>
                    </div>
                    <h4 className="font-heading font-bold text-lg text-gray-900 mb-2">NOBLE PALACE TÂY THĂNG LONG</h4>
                    <span className="text-blue-600 font-bold uppercase text-xs bg-blue-50 px-3 py-1 rounded-full">Bấm tham gia</span>
                  </a>
              </div>
           </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-gray-950 text-white py-12 md:py-16 border-t border-gray-800">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center gap-3 mb-6 justify-center md:justify-start">
              <div className="w-16 h-16 bg-rose-900 rounded-full flex items-center justify-center border-2 border-amber-500 shadow-lg overflow-hidden p-1">
                <img src="https://res.cloudinary.com/ddutk6rhm/image/upload/v1768465881/2_rk7sw1.png" alt="Logo" className="w-full h-full object-contain"/>
              </div>
              <div className="text-center md:text-left">
                  <span className="font-heading text-2xl font-bold block">HUYỀN TRANG</span>
                  <span className="text-amber-500 font-bold text-sm tracking-wider">CHAMP HOLDING</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-sm mx-auto md:mx-0">
                Đối tác tin cậy mang lại giải pháp đầu tư an toàn và hiệu quả cao nhất. Đồng hành cùng sự thịnh vượng của khách hàng.
            </p>
          </div>
          
          <div className="text-center md:text-left">
              <h4 className="text-lg font-bold text-white mb-6 border-b border-gray-800 pb-2 inline-block">THÔNG TIN LIÊN HỆ</h4>
              <ul className="space-y-4 flex flex-col items-center md:items-start">
                 <li className="flex items-center gap-3">
                    <Phone className="text-amber-500 shrink-0" size={20} />
                    <span className="font-cta font-bold text-lg text-amber-500">091.6868.165 - 087.872.8888</span>
                 </li>
                 <li className="flex items-start gap-3">
                    <MapPin className="text-amber-500 shrink-0 mt-1" size={20} />
                    <span className="text-gray-300 text-sm">Số 11 - LK1 - KĐT Tân Tây Đô - TP.Hà Nội</span>
                 </li>
                 <li className="flex items-center gap-3">
                    <Globe className="text-amber-500 shrink-0" size={20} />
                    <span className="text-gray-300 text-sm">Champholding.jsc@gmail.com</span>
                 </li>
              </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-12 pt-8 border-t border-gray-900 text-center text-xs text-gray-600">
            © 2026 Champ Holding. All rights reserved. Designed for Huyen Trang.
        </div>
      </footer>
    </div>
  );
};

export default App;