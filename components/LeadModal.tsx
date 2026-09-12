'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
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
  const [whatsappUrl, setWhatsappUrl] = useState('');

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
      setErrorMessage('Please fill in Name, Phone, and Project Requirements.');
      return;
    }

    setErrorMessage('');
    setIsSubmitting(true);

    const waText = `Hi ARCC Media Production, I would like to book a studio session:

*Name:* ${name.trim()}
*Phone / WhatsApp:* ${phone.trim()}${email.trim() ? `\n*Email:* ${email.trim()}` : ''}
*Service:* ${service}
*Preferred Date:* ${date || 'Flexible / To be discussed'}
*Project Details:* ${message.trim()}`;

    const waUrl = `https://wa.me/918248288388?text=${encodeURIComponent(waText)}`;
    setWhatsappUrl(waUrl);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (typeof window !== 'undefined') {
        window.open(waUrl, '_blank', 'noopener,noreferrer');
      }
    }, 400);
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
      data-lenis-prevent
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        background: 'rgba(0, 0, 0, 0.92)',
        backdropFilter: 'blur(16px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(1rem, 3vw, 2rem)',
      }}
      onClick={onClose}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '560px',
          background: '#121212',
          border: '1px solid rgba(255, 255, 255, 0.16)',
          padding: 'clamp(2rem, 4vw, 2.75rem)',
          color: '#ffffff',
          boxShadow: '0 24px 60px rgba(0, 0, 0, 0.8)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Viewfinder Corner Reticle Marks */}
        <span className="viewfinder-corner-tl" style={{ top: 0, left: 0, width: 14, height: 14 }} />
        <span className="viewfinder-corner-tr" style={{ top: 0, right: 0, width: 14, height: 14 }} />
        <span className="viewfinder-corner-bl" style={{ bottom: 0, left: 0, width: 14, height: 14 }} />
        <span className="viewfinder-corner-br" style={{ bottom: 0, right: 0, width: 14, height: 14 }} />

        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          style={{
            position: 'absolute',
            top: '18px',
            right: '18px',
            color: 'rgba(255, 255, 255, 0.65)',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '4px',
            transition: 'color 0.2s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.65)')}
        >
          <X size={22} />
        </button>

        {isSubmitted ? (
          <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
            <div
              style={{
                width: '54px',
                height: '54px',
                borderRadius: '50%',
                border: '1.5px solid #ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                color: '#ffffff',
              }}
            >
              <CheckCircle2 size={28} />
            </div>

            <h3
              style={{
                fontSize: '1.25rem',
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                marginBottom: '0.75rem',
                color: '#ffffff',
              }}
            >
              Request Confirmed
            </h3>
            <p style={{ fontSize: '0.86rem', color: '#a1a1aa', lineHeight: 1.6, marginBottom: '2rem' }}>
              Thank you, {name}. Our atelier production manager will review your specs and contact you within 2 hours.
            </p>

            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              {whatsappUrl && (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-glissando"
                  style={{
                    background: '#25D366',
                    borderColor: '#25D366',
                    color: '#ffffff',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    textDecoration: 'none',
                  }}
                >
                  Open in WhatsApp →
                </a>
              )}
              <button
                type="button"
                className="btn-glissando btn-glissando-light"
                onClick={handleReset}
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div
              style={{
                position: 'relative',
                height: '34px',
                width: '125px',
                marginBottom: '1rem',
              }}
            >
              <Image
                src="/logo.png"
                alt="ARCC Media Production"
                fill
                style={{
                  objectFit: 'contain',
                  objectPosition: 'left center',
                  mixBlendMode: 'screen',
                }}
              />
            </div>
            <span
              style={{
                display: 'block',
                fontSize: '0.68rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: '#a1a1aa',
                fontWeight: 600,
                marginBottom: '0.35rem',
              }}
            >
              Direct Studio Booking
            </span>
            <h3
              style={{
                fontSize: '1.35rem',
                fontWeight: 700,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: '#ffffff',
                marginBottom: '0.5rem',
              }}
            >
              Reserve Atelier Session
            </h3>
            <span
              style={{
                display: 'block',
                width: '30px',
                height: '2px',
                background: '#ffffff',
                marginBottom: '1.75rem',
              }}
            />

            {errorMessage && (
              <div
                style={{
                  padding: '0.65rem 1rem',
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  fontSize: '0.78rem',
                  color: '#ffffff',
                  marginBottom: '1.25rem',
                }}
              >
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.68rem',
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: 'rgba(255, 255, 255, 0.7)',
                    marginBottom: '0.35rem',
                    fontWeight: 600,
                  }}
                >
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    background: '#0a0a0a',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    color: '#ffffff',
                    fontSize: '0.85rem',
                    outline: 'none',
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.68rem',
                      letterSpacing: '0.16em',
                      textTransform: 'uppercase',
                      color: 'rgba(255, 255, 255, 0.7)',
                      marginBottom: '0.35rem',
                      fontWeight: 600,
                    }}
                  >
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      background: '#0a0a0a',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      color: '#ffffff',
                      fontSize: '0.85rem',
                      outline: 'none',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.68rem',
                      letterSpacing: '0.16em',
                      textTransform: 'uppercase',
                      color: 'rgba(255, 255, 255, 0.7)',
                      marginBottom: '0.35rem',
                      fontWeight: 600,
                    }}
                  >
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      background: '#0a0a0a',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      color: '#ffffff',
                      fontSize: '0.85rem',
                      outline: 'none',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.68rem',
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: 'rgba(255, 255, 255, 0.7)',
                    marginBottom: '0.35rem',
                    fontWeight: 600,
                  }}
                >
                  Selected Setup / Service
                </label>
                <input
                  type="text"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    background: '#0a0a0a',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    color: '#ffffff',
                    fontSize: '0.85rem',
                    outline: 'none',
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.68rem',
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: 'rgba(255, 255, 255, 0.7)',
                    marginBottom: '0.35rem',
                    fontWeight: 600,
                  }}
                >
                  Production Requirements *
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Number of guests, target broadcast format, editing requirements..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    background: '#0a0a0a',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    color: '#ffffff',
                    fontSize: '0.85rem',
                    outline: 'none',
                    resize: 'none',
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              <div style={{ marginTop: '1rem' }}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-glissando btn-glissando-light"
                  style={{ width: '100%' }}
                >
                  {isSubmitting ? 'Transmitting Request...' : 'Submit Atelier Request'}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
