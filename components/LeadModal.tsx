'use client';

import React, { useState, useEffect } from 'react';
import { X, CheckCircle2 } from 'lucide-react';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultInquiry?: string;
  defaultService?: string;
}

export default function LeadModal({
  isOpen,
  onClose,
  defaultInquiry = 'Podcast Production',
  defaultService = '',
}: LeadModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState(defaultService || 'Podcast Production');
  const [date, setDate] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (defaultService) {
      setService(defaultService);
    } else if (defaultInquiry === 'Studio Visit') {
      setService('Studio Visit');
    }
  }, [defaultInquiry, defaultService]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !message.trim()) {
      setErrorMessage('Please fill in all required fields (Name, Phone, and Project Details).');
      return;
    }

    setErrorMessage('');
    setIsSubmitting(true);

    // Simulate reliable API response
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setName('');
    setPhone('');
    setEmail('');
    setDate('');
    setMessage('');
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div
      className="wf-lead-modal is-open"
      role="dialog"
      aria-modal="true"
      aria-labelledby="wf-lead-modal-title"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.25rem',
        background: 'rgba(7, 9, 13, 0.85)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        animation: 'fadeIn 0.2s ease-out',
      }}
    >
      <div
        className="wf-lead-modal__backdrop"
        onClick={onClose}
        style={{
          position: 'absolute',
          inset: 0,
          cursor: 'pointer',
        }}
      />

      <div
        className="wf-lead-modal__panel bringer-block"
        style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          maxWidth: '520px',
          maxHeight: 'calc(100vh - 2.5rem)',
          overflowY: 'auto',
          padding: '2rem 1.75rem',
          margin: 0,
          background: 'rgba(26, 29, 36, 0.96)',
          border: '1px solid rgba(245, 247, 250, 0.15)',
          borderRadius: '16px',
          boxShadow: '0 24px 60px rgba(0, 0, 0, 0.65)',
        }}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'rgba(255, 255, 255, 0.7)',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '50%',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#fff';
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
          }}
        >
          <X size={18} />
        </button>

        {isSubmitted ? (
          <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
            <CheckCircle2 size={56} style={{ color: '#25D366', margin: '0 auto 1rem' }} />
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', color: '#F5F7FA' }}>
              Enquiry Received!
            </h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.6, marginBottom: '1.75rem' }}>
              Thank you, <strong style={{ color: '#fff' }}>{name}</strong>. Our production team will contact you at <strong style={{ color: '#fff' }}>{phone}</strong> within one business day.
            </p>
            <button
              type="button"
              className="bringer-button"
              onClick={handleReset}
              style={{ width: '100%' }}
            >
              Done
            </button>
          </div>
        ) : (
          <>
            <h3 id="wf-lead-modal-title" style={{ fontSize: '1.45rem', marginBottom: '0.4rem', color: '#F5F7FA' }}>
              Tell us about your project
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.65)', marginBottom: '1.5rem' }}>
              Share a few details and our production team will respond within one business day.
            </p>

            {errorMessage && (
              <div
                style={{
                  background: 'rgba(239, 68, 68, 0.15)',
                  border: '1px solid rgba(239, 68, 68, 0.4)',
                  color: '#fca5a5',
                  padding: '0.75rem 1rem',
                  borderRadius: '6px',
                  fontSize: '0.85rem',
                  marginBottom: '1rem',
                }}
              >
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: '#F5F7FAC0', marginBottom: '0.35rem' }}>
                    Your Name <span style={{ color: '#5C9DFF' }}>*</span>
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      background: 'rgba(7, 9, 13, 0.6)',
                      border: '1px solid rgba(245, 247, 250, 0.15)',
                      borderRadius: '6px',
                      color: '#fff',
                      fontSize: '0.9rem',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: '#F5F7FAC0', marginBottom: '0.35rem' }}>
                    Your Phone <span style={{ color: '#5C9DFF' }}>*</span>
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      background: 'rgba(7, 9, 13, 0.6)',
                      border: '1px solid rgba(245, 247, 250, 0.15)',
                      borderRadius: '6px',
                      color: '#fff',
                      fontSize: '0.9rem',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: '#F5F7FAC0', marginBottom: '0.35rem' }}>
                    Your Email <span style={{ opacity: 0.6 }}>(optional)</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email@example.com"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      background: 'rgba(7, 9, 13, 0.6)',
                      border: '1px solid rgba(245, 247, 250, 0.15)',
                      borderRadius: '6px',
                      color: '#fff',
                      fontSize: '0.9rem',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: '#F5F7FAC0', marginBottom: '0.35rem' }}>
                    Service of interest
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      background: 'rgba(7, 9, 13, 0.8)',
                      border: '1px solid rgba(245, 247, 250, 0.15)',
                      borderRadius: '6px',
                      color: '#fff',
                      fontSize: '0.9rem',
                      cursor: 'pointer',
                    }}
                  >
                    <option value="Podcast Production">Podcast Production</option>
                    <option value="Studio Visit">Studio Visit / Recce</option>
                    <option value="Video Production">Video Production</option>
                    <option value="Corporate Videos">Corporate Videos</option>
                    <option value="Commercial Ad Films">Commercial Ad Films</option>
                    <option value="Green Screen Production">Green Screen Production</option>
                    <option value="Product & E-Commerce Shoots">Product & E-Commerce Shoots</option>
                    <option value="Video Editing & Post Production">Video Editing & Post Production</option>
                    <option value="Live Streaming">Live Streaming</option>
                  </select>
                </div>

                {service === 'Studio Visit' && (
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: '#F5F7FAC0', marginBottom: '0.35rem' }}>
                      Preferred visit date
                    </label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        background: 'rgba(7, 9, 13, 0.6)',
                        border: '1px solid rgba(245, 247, 250, 0.15)',
                        borderRadius: '6px',
                        color: '#fff',
                        fontSize: '0.9rem',
                      }}
                    />
                  </div>
                )}

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: '#F5F7FAC0', marginBottom: '0.35rem' }}>
                    Project details <span style={{ color: '#5C9DFF' }}>*</span>
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your shoot dates, deliverables, format, and budget range"
                    required
                    rows={3}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      background: 'rgba(7, 9, 13, 0.6)',
                      border: '1px solid rgba(245, 247, 250, 0.15)',
                      borderRadius: '6px',
                      color: '#fff',
                      fontSize: '0.9rem',
                      resize: 'vertical',
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bringer-button"
                  style={{
                    width: '100%',
                    marginTop: '0.5rem',
                    padding: '0.95rem 1.5rem',
                    fontSize: '0.95rem',
                    opacity: isSubmitting ? 0.7 : 1,
                  }}
                >
                  {isSubmitting ? 'Sending Enquiry...' : 'Send Enquiry'}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
