import React, { useEffect, useRef } from 'react';

const TikTokEmbed = ({ videoId }) => {
  const videoUrl = `https://www.tiktok.com/@user/video/${videoId}`;
  const hasLoaded = useRef(false);

  useEffect(() => {
    if (hasLoaded.current) return;

    // 1. Tìm script
    const scriptId = 'tiktok-embed-script';
    let script = document.getElementById(scriptId);

    // Hàm gọi TikTok render lại giao diện
    const reloadTikTok = () => {
      if (window.tiktok && window.tiktok.embed) {
        window.tiktok.embed.load();
      }
    };

    if (!script) {
      // Nếu chưa có script -> Tạo mới
      script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://www.tiktok.com/embed.js';
      script.async = true;
      
      // Quan trọng: Khi script tải xong mới gọi render
      script.onload = reloadTikTok;
      
      document.body.appendChild(script);
    } else {
      // Nếu script đã có sẵn -> Gọi render ngay
      reloadTikTok();
    }
    
    hasLoaded.current = true;
  }, [videoId]);

  return (
    // Bỏ display flex và margin cứng để nó tuân theo Grid của cha
    <div className="w-full h-full flex justify-center">
      <blockquote
        className="tiktok-embed"
        cite={videoUrl}
        data-video-id={videoId}
        // Quan trọng: Đặt width 100% để nó co giãn theo cột grid
        style={{ width: '100%', maxWidth: '605px', margin: 0 }} 
      >
        <section>
          <a target="_blank" rel="noopener noreferrer" href={videoUrl}>
             {/* Loading state nhỏ gọn */}
          </a>
        </section>
      </blockquote>
    </div>
  );
};

export default TikTokEmbed;