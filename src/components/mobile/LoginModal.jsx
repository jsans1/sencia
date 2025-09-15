import React, { useEffect } from 'react';

const LoginModal = ({ isOpen, onClose, onEmailLogin, onPhoneLogin }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="login-modal" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <button className="modal-close" onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        
        <div className="modal-content">
          <div className="login-header">
            <h3 className="login-title">L'aventure commence ici…</h3>
            <p className="login-subtitle">Suivez quotidiennement vos symptômes et vos ressentis.</p>
          </div>
          
          <div className="login-options">
            <button className="login-button primary" onClick={onEmailLogin}>
              Via E-mail
            </button>
            <button className="login-button secondary" onClick={onPhoneLogin}>
              Via Téléphone
            </button>
            
            <div className="social-login">
              <button className="social-button apple">
                <svg width="24" height="24" viewBox="0 0 24 26" fill="currentColor">
                  <path d="M15.386 2.615C14.54 1.646 13.345 1 12.054 1C11.87 1 11.685 1.012 11.5 1.035C11.464 2.408 12.017 3.693 12.863 4.662C13.709 5.631 14.904 6.277 16.195 6.277C16.379 6.277 16.564 6.265 16.748 6.242C16.784 4.869 16.232 3.584 15.386 2.615ZM16.685 6.788C15.076 6.692 13.636 7.484 12.831 7.484C12.026 7.484 10.804 6.836 9.476 6.836C7.649 6.836 5.939 7.976 4.986 9.756C3.058 13.324 4.516 18.736 6.395 21.692C7.332 23.164 8.457 24.78 10.018 24.78C11.346 24.78 11.87 23.996 13.514 23.996C15.158 23.996 15.634 24.78 17.01 24.78C18.571 24.78 19.648 23.308 20.585 21.836C21.282 20.748 21.786 19.564 22.097 18.332C18.023 16.768 17.478 11.116 21.406 9.12C20.549 7.844 18.858 6.956 16.685 6.788Z"/>
                </svg>
              </button>
              <button className="social-button google">
                <svg width="24" height="24" viewBox="0 0 20 20" fill="none">
                  <path d="M19.99 10.187C19.99 9.538 19.934 8.887 19.812 8.255H10.19V11.872H15.71C15.508 12.995 14.864 14 13.9 14.679V17.206H17.075C18.928 15.486 19.99 13.009 19.99 10.187Z" fill="#4285F4"/>
                  <path d="M10.19 19.731C12.957 19.731 15.267 18.832 17.075 17.206L13.9 14.679C12.992 15.273 11.836 15.626 10.19 15.626C7.516 15.626 5.257 13.893 4.463 11.533H1.178V14.141C3.014 17.796 6.398 19.731 10.19 19.731Z" fill="#34A853"/>
                  <path d="M4.463 11.533C4.087 10.529 4.087 9.408 4.463 8.404V5.796H1.178C-0.098 8.344 -0.098 11.593 1.178 14.141L4.463 11.533Z" fill="#FBBC04"/>
                  <path d="M10.19 4.312C11.926 4.285 13.617 4.95 14.902 6.159L17.675 3.386C15.178 1.025 11.811 -0.268 10.19 0.269C6.398 0.269 3.014 2.204 1.178 5.796L4.463 8.404C5.257 6.044 7.516 4.312 10.19 4.312Z" fill="#EA4335"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;