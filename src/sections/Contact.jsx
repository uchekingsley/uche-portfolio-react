import React, { useState } from 'react';
import { MapPin, Mail, Phone, Send, CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMessage('');

    const form = e.target;
    const formData = new FormData(form);

    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');

    try {
      // 1. Submit to Formspree
      const formspreeResponse = await fetch("https://formspree.io/f/mljrgerj", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      // 2. Submit to Supabase (if configured)
      if (supabase) {
        const { error } = await supabase
          .from('messages')
          .insert([{ name, email, subject, message }]);
        
        if (error) {
          console.error('Error inserting into Supabase:', error.message);
        } else {
          console.log('Successfully saved message to Supabase!');
        }
      }

      if (formspreeResponse.ok) {
        setSucceeded(true);
        form.reset();
      } else {
        const data = await formspreeResponse.json();
        if (data.errors) {
          setErrorMessage(data.errors.map(err => err.message).join(', '));
        } else {
          setErrorMessage('There was a problem submitting your form.');
        }
      }
    } catch (err) {
      console.error('Submission error:', err);
      setErrorMessage('Could not connect to the form server. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="mb-20 pt-20 relative z-10">
      <div className="bg-surface rounded-3xl p-8 md:p-12 border border-gray-800 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-[80px]"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
          <div>
            <h2 className="text-4xl font-bold mb-4">
              Have a <span className="text-primary">Project</span> in your mind? Let's get to work ⚡
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Looking for a mobile engineer to bring your ideas to life? I'm always open to new opportunities, contract projects, or technical discussions. Leave a message below and let's build something great together.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-primary">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-sm text-gray-400">Lagos, Nigeria</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-primary">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <a href="mailto:uchekingsley15@gmail.com" className="text-sm text-gray-400 hover:text-primary transition-colors">
                    uchekingsley15@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-primary">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="font-semibold">Phone</p>
                  <a href="tel:+2347084010317" className="text-sm text-gray-400 hover:text-primary transition-colors">
                    +234 708 401 0317
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-900/40 rounded-full flex items-center justify-center text-green-500 border border-green-800/50">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-green-500">WhatsApp</p>
                  <a href="https://wa.me/2347084010317" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-green-400 transition-colors">
                    +234 708 401 0317
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form or Success State */}
          <div className="bg-background/50 p-6 rounded-2xl border border-gray-800 flex items-center justify-center min-h-[350px]">
            {succeeded ? (
              <div className="text-center p-8 flex flex-col items-center gap-4 animate-[fadeIn_0.5s_ease-out]">
                <CheckCircle size={56} className="text-green-500 animate-[bounce_1s_infinite_alternate]" />
                <h3 className="text-2xl font-bold text-white">Thank you!</h3>
                <p className="text-gray-400 text-sm">Your message has been sent successfully. I will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="text-xs text-gray-400 mb-1 block">Your Name</label>
                    <input id="name" type="text" name="name" required className="w-full bg-surface border border-gray-700 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary transition-colors text-white" placeholder="John Doe" />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-xs text-gray-400 mb-1 block">Email Address</label>
                    <input id="email" type="email" name="email" required className="w-full bg-surface border border-gray-700 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary transition-colors text-white" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="subject" className="text-xs text-gray-400 mb-1 block">Subject</label>
                  <input id="subject" type="text" name="subject" required className="w-full bg-surface border border-gray-700 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary transition-colors text-white" placeholder="Project details..." />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="text-xs text-gray-400 mb-1 block">Your Message</label>
                  <textarea id="message" name="message" rows="4" required className="w-full bg-surface border border-gray-700 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary transition-colors resize-none text-white" placeholder="Hello, I want to build..."></textarea>
                </div>
                
                {errorMessage && (
                  <p className="text-xs text-red-500 mb-4 text-center">{errorMessage}</p>
                )}

                <button type="submit" disabled={submitting} className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:bg-primaryHover transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
                  <Send size={18} /> {submitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
