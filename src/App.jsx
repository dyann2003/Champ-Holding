import React, { useState } from 'react';
import { MapPin, Phone, Star, CheckCircle, Crown, ArrowRight, Facebook, MessageCircle, Globe, Video, Mic, Users, Presentation, Award, Building, Calendar } from 'lucide-react';
import ConsultationModal from './components/ConsultationModal';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const openModal = () => setIsModalOpen(true);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="font-sans text-gray-800 bg-white selection:bg-rose-200">
      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-rose-100">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-rose-900 rounded-full flex items-center justify-center border-2 border-amber-500 shadow-lg overflow-hidden">
              <img
                src="https://res.cloudinary.com/ddutk6rhm/image/upload/v1768465881/2_rk7sw1.png"
                alt="Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-rose-950 leading-none">HUYỀN TRANG</h1>
              <span className="text-xs font-bold text-amber-600 tracking-widest uppercase">Champ Holding</span>
            </div>
          </div>
          <nav className="hidden md:flex gap-8 font-bold text-gray-600 text-sm uppercase tracking-wide">
            <button onClick={() => scrollToSection('about')} className="hover:text-rose-800 transition">Giới thiệu</button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-rose-800 transition">Dự án</button>
            <button onClick={() => scrollToSection('work')} className="hover:text-rose-800 transition">Công việc</button>
            <button onClick={() => scrollToSection('connect')} className="hover:text-rose-800 transition">Kết nối</button>
          </nav>
          <a href="tel:0916868165" className="hidden md:flex items-center gap-2 bg-rose-900 text-white px-5 py-2 rounded-full hover:bg-rose-800 transition shadow-lg border border-rose-800">
            <Phone size={16} className="animate-pulse" /><span className="font-bold">091.6868.165</span>
          </a>
        </div>
      </header>

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

        {/* --- CONTAINER CHÍNH --- */}
        <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-12 h-full">
          
          {/* --- CỘT TRÁI: THÔNG TIN --- */}
          <div className="text-white space-y-6 flex flex-col justify-center pb-20 md:pb-24 pt-8 md:pt-0 pl-6 md:pl-10">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-400 px-4 py-2 rounded-full text-sm font-bold border border-amber-500/30 backdrop-blur-md w-fit">
              <Crown size={16} className="text-amber-400" /> 
              CHUYÊN GIA BĐS TÂY HÀ NỘI
            </div>
            
            {/* Tên & Chức vụ */}
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

            {/* Mô tả ngắn */}
            <p className="text-gray-300 text-lg font-light max-w-lg leading-relaxed">
              Đối tác chiến lược Sao Vàng Holdings. Kiến tạo giải pháp đầu tư an toàn và sinh lời bền vững.
            </p>

            {/* Khối thông tin liên hệ */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 space-y-4 max-w-lg">
               {/* Hotline */}
               <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-rose-950 shrink-0 mt-1 shadow-lg shadow-amber-500/50">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-amber-400 font-bold uppercase tracking-wider mb-1">Hotline tư vấn 24/7</p>
                    <p className="text-xl md:text-2xl font-bold text-white">091.6868.165 <span className="text-gray-500 text-lg font-normal">|</span> 087.872.8888</p>
                  </div>
               </div>

               {/* Địa chỉ */}
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

            {/* Nút hành động */}
            <div className="flex gap-4">
              <button onClick={openModal} className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg hover:shadow-amber-500/30 transition transform hover:-translate-y-1 uppercase tracking-wide flex items-center gap-2">
                <MessageCircle size={20}/> Kết nối ngay
              </button>
            </div>
          </div>

          {/* --- CỘT PHẢI: ẢNH CHÂN DUNG --- */}
          {/* Giữ nguyên logic ảnh nằm dưới đáy */}
          <div className="relative h-[500px] md:h-full flex items-end justify-center md:justify-end">
              {/* Hiệu ứng Hào quang */}
              <div className="absolute top-1/2 right-0 md:right-10 transform -translate-y-1/2 w-[400px] h-[400px] bg-amber-600/30 rounded-full blur-[100px] z-0"></div>
              
              {/* Gradient dưới chân */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-gray-900 to-transparent z-20"></div>

              {/* ẢNH CHÂN DUNG */}
              <img 
                src="https://res.cloudinary.com/ddutk6rhm/image/upload/v1768408052/z7431496395297_5417d70b7358bbf7e0fcb2adaba5c9c5_u06szd.jpg" 
                alt="Huyen Trang Portrait" 
                className="relative z-10 h-[90%] md:h-[95%] w-auto object-contain drop-shadow-[0_0_15px_rgba(251,191,36,0.3)] hover:scale-105 transition duration-700 ease-in-out" 
              />
          </div>
        </div>
      </section> 

      {/* ABOUT */}
      <section id="about" className="py-24 bg-white relative">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-rose-900"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-amber-500"></div>
                <img src="https://res.cloudinary.com/ddutk6rhm/image/upload/v1768408049/z7431496394216_f553cef0625b81934d8f0fdc63a5b680_tlkn0t.jpg" alt="About" className="w-full h-[650px] object-cover rounded-lg shadow-2xl transition duration-700" />
            </div>
            <div>
                <span className="text-rose-800 font-bold tracking-widest uppercase text-sm">Về tôi</span>
                <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-6">NGUYỄN THỊ HUYỀN TRANG</h2>
                <div className="space-y-4 mb-8">
                   <div className="p-4 bg-rose-50 border-l-4 border-rose-900 rounded-r-lg">
                      <p className="font-bold text-rose-900">FOUNDER CHAMP HOLDING</p>
                      <p className="text-sm text-rose-700 mt-1">MST: 0110793873</p>
                   </div>
                   <p className="text-gray-600 leading-relaxed text-justify">Sinh ra và lớn lên tại phía Tây Hà Nội, tốt nghiệp cử nhân Đại học Văn Hóa. Với niềm đam mê về nghề BĐS.
                    06 năm kinh nghiệm, phân phối ~100 dự án BĐS từ đất nền, căn hộ, nhà phố, biệt thự hạng sang trên toàn quốc... Hiện tại là Tổng Giám Đốc của CÔNG TY CỔ PHẦN ĐẦU 
                    TƯ VÀ PHÁT TRIỂN TÀI SẢN CHAMP HOLDING có hợp tác với phát triển cùng công ty mẹ <a href="https://saovangholdings.com" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline">Sao Vàng Holdings</a>
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                   <ul className="space-y-3"><li className="flex items-center gap-2 text-gray-700 font-medium"><CheckCircle size={18} className="text-amber-500"/> Chứng chỉ môi giới chuyên nghiệp</li><li className="flex items-center gap-2 text-gray-700 font-medium"><CheckCircle size={18} className="text-amber-500"/> Chuyên gia BĐS dự án & thổ cư</li></ul>
                </div>
            </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16"><span className="text-amber-600 font-bold uppercase tracking-widest text-sm">Sản phẩm chiến lược</span><h2 className="text-4xl font-bold text-rose-950 mt-2 mb-4">DỰ ÁN ĐANG TRIỂN KHAI</h2><div className="w-24 h-1 bg-rose-900 mx-auto"></div></div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 cursor-pointer" onClick={openModal}>
              <div className="relative h-64 overflow-hidden"><span className="absolute top-4 left-4 bg-rose-600 text-white text-xs font-bold px-3 py-1 rounded z-10">HOT NHẤT</span><img src="https://noblepalacetaythanglong.com/wp-content/uploads/noble-palace-tay-thang-long-1.jpg" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" alt="Noble Palace"/></div>
              <div className="p-6"><h3 className="text-xl font-bold text-rose-950 mb-2">NOBLE PALACE TÂY THĂNG LONG</h3><p className="text-gray-500 text-sm mb-4 line-clamp-2">Kiệt tác kiến trúc Châu Âu. Cơ hội đầu tư sinh lời x3.</p><div className="flex items-center gap-2 text-rose-700 font-bold text-sm uppercase">Xem chi tiết <ArrowRight size={16}/></div></div>
            </div>
            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 cursor-pointer" onClick={openModal}>
              <div className="relative h-64 overflow-hidden"><span className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded z-10">ĐAN PHƯỢNG</span><img src="https://vinhomesdanphuonghanoi.com/wp-content/uploads/2025/03/Phan-khu-Pho-Hung-Dong-Wonder-Avenue-Vinhomes-Dan-Phuong-Wonder-City.jpg" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" alt="Vinhomes"/></div>
              <div className="p-6"><h3 className="text-xl font-bold text-rose-950 mb-2">VINHOMES WONDER CITY</h3><p className="text-gray-500 text-sm mb-4 line-clamp-2">Đại đô thị xanh đẳng cấp. Vinhomes Đan Phượng - Biểu tượng sống mới.</p><div className="flex items-center gap-2 text-rose-700 font-bold text-sm uppercase">Xem chi tiết <ArrowRight size={16}/></div></div>
            </div>
            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 cursor-pointer" onClick={openModal}>
              <div className="relative h-64 overflow-hidden"><img src="https://vars.com.vn/uploads/up/vars/project/2022/05/09/22/35/hin1652088938_4647.jpg" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" alt="Hinode"/></div>
              <div className="p-6"><h3 className="text-xl font-bold text-rose-950 mb-2">HINODE ROYAL PARK</h3><p className="text-gray-500 text-sm mb-4 line-clamp-2">Khu đô thị Kim Chung Di Trạch. Vị trí vàng cửa ngõ phía Tây.</p><div className="flex items-center gap-2 text-rose-700 font-bold text-sm uppercase">Xem chi tiết <ArrowRight size={16}/></div></div>
            </div>
          </div>
        </div>
      </section>

      {/* --- WORK SECTION --- */}
      <section id="work" className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
             <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" alt="Office Work" className="w-full h-full object-cover opacity-10" />
             <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/90 to-rose-900/40"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16 max-w-3xl mx-auto">
                <span className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-2 block">Hoạt động chuyên môn</span>
                <h2 className="text-4xl font-bold text-white mb-6">CÔNG VIỆC CỦA HUYỀN TRANG</h2>
                <p className="text-gray-300 text-lg leading-relaxed">Ngoài là nhà môi giới BĐS, Huyền Trang còn đảm nhiệm vai trò đào tạo kỹ năng cho nhân sự và cố vấn phát triển các sản phẩm BĐS.</p>
                <div className="w-24 h-1 bg-amber-500 mx-auto mt-6 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition duration-500 hover:-translate-y-2 hover:bg-white/10 cursor-pointer">
              <div className="relative h-60 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-80 group-hover:opacity-40 transition z-10"></div>
                <img src="https://res.cloudinary.com/ddutk6rhm/image/upload/v1768465853/4_gafa9y.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Year End Party 2024" />
                <div className="absolute top-4 right-4 bg-amber-500 text-rose-950 p-2.5 rounded-xl shadow-lg z-20"><Award size={22} /></div>
              </div>
              <div className="p-5 text-center">
                <h3 className="text-lg font-bold text-amber-400 group-hover:text-white transition">
                  Year End Party 2024
                </h3>
              </div>
            </div>

            <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition duration-500 hover:-translate-y-2 hover:bg-white/10 cursor-pointer">
              <div className="relative h-60 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-80 group-hover:opacity-40 transition z-10"></div>
                <img src="https://res.cloudinary.com/ddutk6rhm/image/upload/v1768465854/5_e5xetr.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Kick-off Noble Palace" />
                <div className="absolute top-4 right-4 bg-amber-500 text-rose-950 p-2.5 rounded-xl shadow-lg z-20"><Building size={22} /></div>
              </div>
              <div className="p-5 text-center">
                <h3 className="text-lg font-bold text-amber-400 group-hover:text-white transition">
                  Lễ Kick-off dự án Noble Palace Tây Thăng Long
                </h3>
              </div>
            </div>

            <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition duration-500 hover:-translate-y-2 hover:bg-white/10 cursor-pointer">
              <div className="relative h-60 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-80 group-hover:opacity-40 transition z-10"></div>
                <img src="https://res.cloudinary.com/ddutk6rhm/image/upload/v1768465854/7_jeocf3.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Khai trương văn phòng" />
                <div className="absolute top-4 right-4 bg-amber-500 text-rose-950 p-2.5 rounded-xl shadow-lg z-20"><MapPin size={22} /></div>
              </div>
              <div className="p-5 text-center">
                <h3 className="text-lg font-bold text-amber-400 group-hover:text-white transition">
                  Khai trương VP Chi nhánh Đan Phượng
                </h3>
              </div>
            </div>

            <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition duration-500 hover:-translate-y-2 hover:bg-white/10 cursor-pointer">
              <div className="relative h-60 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-80 group-hover:opacity-40 transition z-10"></div>
                <img src="https://res.cloudinary.com/ddutk6rhm/image/upload/v1768465856/6_r21yi4.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Off Team" />
                <div className="absolute top-4 right-4 bg-amber-500 text-rose-950 p-2.5 rounded-xl shadow-lg z-20"><Users size={22} /></div>
              </div>
              <div className="p-5 text-center">
                <h3 className="text-lg font-bold text-amber-400 group-hover:text-white transition">
                  Off Team VP Champ Holding – Hiệp hội BĐS Tây Hà Nội
                </h3>
              </div>
            </div>

            <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition duration-500 hover:-translate-y-2 hover:bg-white/10 cursor-pointer">
              <div className="relative h-60 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-80 group-hover:opacity-40 transition z-10"></div>
                <img src="https://res.cloudinary.com/ddutk6rhm/image/upload/v1768465854/8_udk0nt.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Lãnh đạo doanh nghiệp" />
                <div className="absolute top-4 right-4 bg-amber-500 text-rose-950 p-2.5 rounded-xl shadow-lg z-20"><Crown size={22} /></div>
              </div>
              <div className="p-5 text-center">
                <h3 className="text-lg font-bold text-amber-400 group-hover:text-white transition">
                  Gặp gỡ các Lãnh đạo doanh nghiệp
                </h3>
              </div>
            </div>

            <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition duration-500 hover:-translate-y-2 hover:bg-white/10 cursor-pointer">
              <div className="relative h-60 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-80 group-hover:opacity-40 transition z-10"></div>
                <img src="https://res.cloudinary.com/ddutk6rhm/image/upload/v1768465854/9_kmv3bl.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Vinh danh cá nhân xuất sắc" />
                <div className="absolute top-4 right-4 bg-amber-500 text-rose-950 p-2.5 rounded-xl shadow-lg z-20"><Award size={22} /></div>
              </div>
              <div className="p-5 text-center">
                <h3 className="text-lg font-bold text-amber-400 group-hover:text-white transition">
                  Vinh danh những cá nhân xuất sắc của năm
                </h3>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* CONNECT */}
      <section id="connect" className="py-24 bg-rose-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-rose-800 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="container mx-auto px-4 relative z-10">
           <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">KẾT NỐI VỚI HUYỀN TRANG</h2><p className="text-rose-200">Cập nhật thông tin thị trường nhanh nhất</p></div>
           <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
              <a href="https://www.facebook.com/huyentrangg165" target="_blank" className="flex items-center justify-center gap-3 bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition font-bold shadow-lg"><Facebook /> Facebook</a>
              <a href="https://www.tiktok.com/@huyentrang.land" target="_blank" className="flex items-center justify-center gap-3 bg-black text-white py-4 rounded-xl hover:bg-gray-800 transition font-bold shadow-lg border border-gray-700"><Video /> TikTok</a>
              <a href="https://zalo.me/changchiny" target="_blank" className="flex items-center justify-center gap-3 bg-blue-500 text-white py-4 rounded-xl hover:bg-blue-600 transition font-bold shadow-lg"><MessageCircle /> Chat Zalo</a>
           </div>
           <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20">
              <h3 className="text-2xl font-bold text-amber-400 mb-8 text-center uppercase">Tham gia cộng đồng chuyên sâu</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <a href="https://zalo.me/g/nnlraf715" target="_blank" className="bg-white p-6 rounded-xl shadow-xl flex flex-col items-center text-center group hover:-translate-y-1 transition duration-300">
                    <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4"><Globe size={32} /></div>
                    <h4 className="font-bold text-lg text-gray-900 mb-2">MASTERI SKY QUARTER ĐAN PHƯỢNG</h4>
                    <button className="text-blue-600 font-bold uppercase text-sm border-b-2 border-blue-600 pb-1">Tham gia ngay</button>
                 </a>
                 <a href="https://zalo.me/g/ozhgyj043" target="_blank" className="bg-white p-6 rounded-xl shadow-xl flex flex-col items-center text-center group hover:-translate-y-1 transition duration-300">
                    <div className="w-16 h-16 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center mb-4"><Crown size={32} /></div>
                    <h4 className="font-bold text-lg text-gray-900 mb-2">NOBLE PALACE TÂY THĂNG LONG</h4>
                    <button className="text-blue-600 font-bold uppercase text-sm border-b-2 border-blue-600 pb-1">Tham gia ngay</button>
                 </a>
              </div>
           </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-16 border-t border-gray-800">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-rose-900 rounded-full flex items-center justify-center border-2 border-amber-500 shadow-lg overflow-hidden">
                <img
                  src="https://res.cloudinary.com/ddutk6rhm/image/upload/v1768465881/2_rk7sw1.png"
                  alt="Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-2xl font-bold tracking-tight">HUYỀN TRANG <span className="text-amber-500">Champ Holding</span></span></div>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-sm">Founder Champ Holding. Đối tác tin cậy mang lại giải pháp đầu tư an toàn và hiệu quả cao nhất.</p>
          </div>
          <div>
             <h4 className="text-lg font-bold text-white mb-6 border-b border-gray-700 pb-2 inline-block">LIÊN HỆ</h4>
             <ul className="space-y-4">
                <li className="flex items-start gap-3"><Phone className="text-amber-500 shrink-0 mt-1" size={20} /><div><div className="font-bold text-lg text-amber-500">091.6868.165 - 087.872.8888</div></div></li>
                <li className="flex items-start gap-3"><MapPin className="text-amber-500 shrink-0 mt-1" size={20} /><span className="text-gray-300">KĐT Tân Tây Đô - TP.Hà Nội</span></li>
                <li className="flex items-start gap-3"><Globe className="text-amber-500 shrink-0 mt-1" size={20} /><span className="text-gray-300">Champholding.jsc@gmail.com</span></li>
             </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-12 pt-8 border-t border-gray-800 text-center text-xs text-gray-600">© 2026 Champ Holding.</div>
      </footer>
    </div>
  );
};

export default App;