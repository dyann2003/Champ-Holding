import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Loader2, AlertCircle } from 'lucide-react';

// URL Google Apps Script của bạn (Phiên bản 3)
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx_F2uVr3qjm6GTzsE7ZQAvyDsdDfS5x32y3YrWbUYNOtXQgFfp8cAryVvvrwapZHey/exec'; 

const ConsultationModal = ({ isOpen, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  
  // State chứa dữ liệu form
  const [formData, setFormData] = useState({
    HoTen: '',
    SoDienThoai: '',
    Email: '',
    NhuCau: 'Tư vấn mua dự án', 
  });

  // State chứa thông báo lỗi
  const [errors, setErrors] = useState({});

  // Reset form và lỗi mỗi khi mở Modal
  useEffect(() => {
    if (isOpen) {
      setSuccess(false);
      setErrors({});
      setFormData({ 
        HoTen: '', 
        SoDienThoai: '', 
        Email: '', 
        NhuCau: 'Tư vấn mua dự án' 
      });
    }
  }, [isOpen]);

  // Hàm xử lý khi người dùng nhập liệu (vừa nhập vừa xóa lỗi cũ)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Nếu đang có lỗi ở trường này thì xóa lỗi đi khi người dùng bắt đầu gõ lại
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  // Hàm kiểm tra hợp lệ (Validate)
  const validateForm = () => {
    let newErrors = {};
    let isValid = true;

    // 1. Kiểm tra Họ tên
    if (!formData.HoTen.trim()) {
      newErrors.HoTen = 'Vui lòng nhập họ tên của bạn';
      isValid = false;
    }

    // 2. Kiểm tra Số điện thoại (VN: 10 số, bắt đầu bằng 0)
    const simplePhoneRegex = /^(84|0)(3|5|7|8|9)\d{8}$/; // Regex số điện thoại Việt Nam cơ bản và có 10 chữ số

    if (!formData.SoDienThoai) {
      newErrors.SoDienThoai = 'Vui lòng nhập số điện thoại';
      isValid = false;
    } else if (!simplePhoneRegex.test(formData.SoDienThoai)) {
      newErrors.SoDienThoai = 'Số điện thoại không hợp lệ (phải có 10 số)';
      isValid = false;
    }

    // 3. Kiểm tra Email (nếu có nhập)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.Email && !emailRegex.test(formData.Email)) {
      newErrors.Email = 'Email không đúng định dạng';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Bước 1: Validate trước khi gửi
    if (!validateForm()) {
      return; // Dừng lại nếu có lỗi
    }

    setLoading(true);

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(formData),
      });
      
      setLoading(false);
      setSuccess(true);
      setTimeout(() => { onClose(); }, 3000);

    } catch (error) {
      console.error('Lỗi gửi form:', error);
      setLoading(false);
      alert("Kết nối không ổn định, vui lòng thử lại!");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity" onClick={onClose}></div>
      
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-fade-in-up">
        
        {/* Header */}
        <div className="bg-rose-900 p-6 flex justify-between items-center text-white">
          <div>
            <h3 className="text-xl font-bold">Đăng Ký Tư Vấn</h3>
            <p className="text-rose-200 text-sm mt-1">Kết nối trực tiếp Founder Champ Holding</p>
          </div>
          <button onClick={onClose} className="text-rose-200 hover:text-white transition"><X size={24} /></button>
        </div>

        {/* Body */}
        <div className="p-8">
          {success ? (
            <div className="text-center py-8 animate-fade-in">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                <CheckCircle size={32} />
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-2">Đăng ký thành công!</h4>
              <p className="text-gray-500">Huyền Trang sẽ liên hệ với bạn sớm nhất.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Field Họ Tên */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Họ tên <span className="text-red-500">*</span></label>
                <div className="relative">
                  <input 
                    type="text" 
                    name="HoTen"
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 outline-none transition ${errors.HoTen ? 'border-red-500 focus:ring-red-200 bg-red-50' : 'border-gray-300 focus:ring-rose-900'}`}
                    value={formData.HoTen} 
                    onChange={handleChange} 
                    placeholder="Nhập họ tên..." 
                  />
                  {errors.HoTen && <AlertCircle size={18} className="absolute right-3 top-3.5 text-red-500" />}
                </div>
                {/* Thông báo lỗi */}
                {errors.HoTen && <p className="text-red-500 text-xs mt-1 font-medium">{errors.HoTen}</p>}
              </div>

              {/* Field Số Điện Thoại */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">SĐT <span className="text-red-500">*</span></label>
                <div className="relative">
                  <input 
                    type="tel" 
                    name="SoDienThoai"
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 outline-none transition ${errors.SoDienThoai ? 'border-red-500 focus:ring-red-200 bg-red-50' : 'border-gray-300 focus:ring-rose-900'}`}
                    value={formData.SoDienThoai} 
                    onChange={handleChange} 
                    placeholder="Nhập số điện thoại..." 
                  />
                  {errors.SoDienThoai && <AlertCircle size={18} className="absolute right-3 top-3.5 text-red-500" />}
                </div>
                {errors.SoDienThoai && <p className="text-red-500 text-xs mt-1 font-medium">{errors.SoDienThoai}</p>}
              </div>

              {/* Field Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <div className="relative">
                  <input 
                    type="text" // Để text thay vì email để ta tự validate custom
                    name="Email"
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 outline-none transition ${errors.Email ? 'border-red-500 focus:ring-red-200 bg-red-50' : 'border-gray-300 focus:ring-rose-900'}`}
                    value={formData.Email} 
                    onChange={handleChange} 
                    placeholder="Nhập email..." 
                  />
                  {errors.Email && <AlertCircle size={18} className="absolute right-3 top-3.5 text-red-500" />}
                </div>
                {errors.Email && <p className="text-red-500 text-xs mt-1 font-medium">{errors.Email}</p>}
              </div>

              {/* Field Nhu Cầu */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nhu cầu</label>
                <select 
                  name="NhuCau"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-900 outline-none transition bg-white" 
                  value={formData.NhuCau} 
                  onChange={handleChange}
                >
                  <option value="Tư vấn mua dự án">Tư vấn mua dự án</option>
                  <option value="Ký gửi chuyển nhượng">Ký gửi chuyển nhượng</option>
                  <option value="Hợp tác đầu tư">Hợp tác đầu tư</option>
                  <option value="Khác">Khác</option>
                </select>
              </div>

              <button 
                type="submit" 
                disabled={loading} 
                className="w-full bg-rose-900 text-white py-4 rounded-lg font-bold hover:bg-rose-800 transition flex items-center justify-center gap-2 mt-2 shadow-lg shadow-rose-200 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? <Loader2 className="animate-spin" /> : "GỬI THÔNG TIN NGAY"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConsultationModal;