
import React, { useState } from 'react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  projectDetails: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  projectDetails?: string;
}

const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    projectDetails: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const inputClasses = (fieldName: keyof FormErrors) => `
    w-full rounded-xl px-4 transition-all duration-300 ease-out outline-none h-12
    ${errors[fieldName] 
      ? "border-primary bg-red-50 focus:ring-primary shadow-sm" 
      : "border-gray-200 bg-gray-50/50 hover:border-gray-300 hover:bg-gray-50 focus:border-primary focus:ring-primary focus:bg-white focus:shadow-xl focus:shadow-primary/10 focus:-translate-y-1"
    } border
  `;

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (formData.firstName.trim().length < 2) {
      newErrors.firstName = "First name is too short";
    }
    
    if (formData.lastName.trim().length < 2) {
      newErrors.lastName = "Last name is too short";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (formData.projectDetails.trim().length < 20) {
      newErrors.projectDetails = "Please provide at least 20 characters about your project";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing again
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      // Reset form data after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        projectDetails: '',
      });
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com',
      path: <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    },
    {
      name: 'Twitter',
      href: 'https://www.twitter.com',
      path: <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z"/>
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com',
      path: <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
    }
  ];

  return (
    <footer className="bg-jet text-white pt-24 pb-12" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <div>
            <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tighter leading-none">Let’s grow your brand together.</h2>
            <p className="text-gray-400 text-xl mb-12 max-w-md">Ready to make an impact? Reach out today and let's start building your digital legacy.</p>
            <div className="space-y-8">
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/10">
                  <span className="material-symbols-outlined text-primary text-2xl">mail</span>
                </div>
                <span className="text-xl font-medium tracking-tight">hello@fillenial.agency</span>
              </div>
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/10">
                  <span className="material-symbols-outlined text-primary text-2xl">language</span>
                </div>
                <span className="text-xl font-medium tracking-tight">www.fillenial.agency</span>
              </div>
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/10">
                  <span className="material-symbols-outlined text-primary text-2xl">phone</span>
                </div>
                <span className="text-xl font-medium tracking-tight">+1 (555) 123-4567</span>
              </div>
            </div>
            
            <div className="flex gap-4 mt-12">
              {socialLinks.map(social => (
                <a 
                  key={social.name} 
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center hover:bg-white hover:text-primary transition-all shadow-lg shadow-red-500/20 group"
                >
                  <svg 
                    className="w-6 h-6 fill-current group-hover:scale-110 transition-transform" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {social.path}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl p-10 text-jet shadow-2xl relative overflow-hidden min-h-[600px] flex flex-col">
            {isSubmitted ? (
              <div className="flex-grow flex flex-col items-center justify-center text-center py-12 animate-in zoom-in duration-500">
                <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-green-600 text-5xl filled-icon">check_circle</span>
                </div>
                <h3 className="text-4xl font-black mb-3">Message Sent!</h3>
                <p className="text-gray-500 text-lg">Your strategy session request is in our hands. <br/>Expect a reply within 24 hours.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-10 bg-jet text-white px-8 py-3 rounded-xl font-bold hover:bg-primary transition-colors"
                >
                  New Message
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-3xl font-black mb-8 tracking-tight">Send Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6 flex-grow">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="group">
                      <label className="block text-[10px] font-black text-gray-400 mb-2 uppercase tracking-[0.2em] transition-colors group-focus-within:text-primary">First Name</label>
                      <input 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className={inputClasses('firstName')}
                        placeholder="Jane" 
                        type="text"
                      />
                      {errors.firstName && <p className="text-primary text-[10px] font-bold mt-1 uppercase tracking-wider animate-in slide-in-from-top-1">{errors.firstName}</p>}
                    </div>
                    <div className="group">
                      <label className="block text-[10px] font-black text-gray-400 mb-2 uppercase tracking-[0.2em] transition-colors group-focus-within:text-primary">Last Name</label>
                      <input 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className={inputClasses('lastName')}
                        placeholder="Doe" 
                        type="text"
                      />
                      {errors.lastName && <p className="text-primary text-[10px] font-bold mt-1 uppercase tracking-wider animate-in slide-in-from-top-1">{errors.lastName}</p>}
                    </div>
                  </div>
                  <div className="group">
                    <label className="block text-[10px] font-black text-gray-400 mb-2 uppercase tracking-[0.2em] transition-colors group-focus-within:text-primary">Email Address</label>
                    <input 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClasses('email')}
                      placeholder="jane@example.com" 
                      type="email"
                    />
                    {errors.email && <p className="text-primary text-[10px] font-bold mt-1 uppercase tracking-wider animate-in slide-in-from-top-1">{errors.email}</p>}
                  </div>
                  <div className="group">
                    <label className="block text-[10px] font-black text-gray-400 mb-2 uppercase tracking-[0.2em] transition-colors group-focus-within:text-primary">Project Details</label>
                    <textarea 
                      name="projectDetails"
                      value={formData.projectDetails}
                      onChange={handleChange}
                      className={`${inputClasses('projectDetails')} py-4 h-32 resize-none`}
                      placeholder="Tell us about your project goals and requirements..." 
                    ></textarea>
                    {errors.projectDetails && <p className="text-primary text-[10px] font-bold mt-1 uppercase tracking-wider animate-in slide-in-from-top-1">{errors.projectDetails}</p>}
                  </div>
                  <button 
                    className="w-full bg-primary hover:bg-red-700 text-white font-black py-4 rounded-xl transition-all shadow-xl shadow-red-500/20 text-sm uppercase tracking-[0.2em] active:scale-[0.98]" 
                    type="submit"
                  >
                    Send Strategy Request
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
        <div className="border-t border-gray-800 mt-20 pt-10 text-center text-gray-500 text-sm font-medium">
          © 2024 FILLENIAL Digital Marketing Agency. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Contact;
