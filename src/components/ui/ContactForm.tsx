import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    acceptPolicy: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData({ ...formData, [name]: checked });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?\d{10,15}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Phone number is invalid (must be 10-15 digits)';
    }

    if (!formData.subject) {
      newErrors.subject = 'Please select a subject';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    if (!formData.acceptPolicy) {
      newErrors.acceptPolicy = 'You must agree to the Privacy Policy';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(false);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact/contact-messages`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to submit form');
      }

      const result = await response.json();
      console.log('Form submitted:', result);

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        acceptPolicy: false,
      });

      setSubmitSuccess(true);
    } catch (error: any) {
      console.error('Error submitting form:', error);
      setErrors({ submit: error.message || 'There was a problem sending your message. Please try again.' });
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {submitSuccess && (
        <div className="mb-6 p-4 bg-[#90abff]/10 text-[#1a2957] rounded-xl">
          Thank you for your message! We'll get back to you soon.
        </div>
      )}

      {submitError && (
        <div className="mb-6 p-4 bg-red-500/10 text-red-600 rounded-xl">
          {errors.submit || 'There was a problem sending your message. Please try again.'}
        </div>
      )}

      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Name <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-2 border ${errors.name ? 'border-red-600' : 'border-gray-300'
            } rounded-xl focus:outline-none focus:ring-2 focus:ring-[#90abff] focus:border-[#1a2957]`}
          placeholder="Your name"
        />
        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email <span className="text-red-600">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-2 border ${errors.email ? 'border-red-600' : 'border-gray-300'
            } rounded-xl focus:outline-none focus:ring-2 focus:ring-[#90abff] focus:border-[#1a2957]`}
          placeholder="Your email address"
        />
        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Phone Number <span className="text-red-600">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`w-full px-4 py-2 border ${errors.phone ? 'border-red-600' : 'border-gray-300'
            } rounded-xl focus:outline-none focus:ring-2 focus:ring-[#90abff] focus:border-[#1a2957]`}
          placeholder="Your phone number"
        />
        {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
          Subject <span className="text-red-600">*</span>
        </label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className={`w-full px-4 py-2 border ${errors.subject ? 'border-red-600' : 'border-gray-300'
            } rounded-xl focus:outline-none focus:ring-2 focus:ring-[#90abff] focus:border-[#1a2957]`}
        >
          <option value="">Select a subject</option>
          <option value="Hiring Needs">Hiring Needs</option>
          <option value="Agency Services">Agency Services</option>
          <option value="Website Development">Website Development</option>
          <option value="General Inquiry">General Inquiry</option>
        </select>
        {errors.subject && <p className="mt-1 text-sm text-red-600">{errors.subject}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message <span className="text-red-600">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className={`w-full px-4 py-2 border ${errors.message ? 'border-red-600' : 'border-gray-300'
            } rounded-xl focus:outline-none focus:ring-2 focus:ring-[#90abff] focus:border-[#1a2957]`}
          placeholder="Your message"
        ></textarea>
        {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
      </div>

      <div className="mb-6">
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="acceptPolicy"
              name="acceptPolicy"
              type="checkbox"
              checked={formData.acceptPolicy}
              onChange={handleCheckboxChange}
              className="w-4 h-4 text-[#1a2957] border-gray-300 rounded focus:ring-[#90abff]"
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="acceptPolicy" className="font-medium text-gray-700">
              I agree to the{' '}
              <a href="/privacy-policy" className="text-[#1a2957] hover:text-[#90abff] hover:underline">
                Privacy Policy
              </a>{' '}
              <span className="text-red-600">*</span>
            </label>
            {errors.acceptPolicy && <p className="mt-1 text-sm text-red-600">{errors.acceptPolicy}</p>}
          </div>
        </div>
      </div>

      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`w-full bg-gradient-to-r from-[#1a2957] to-[#90abff] text-white px-8 py-3 rounded-xl font-bold text-base transition-all duration-300 flex items-center justify-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
          }`}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </motion.button>
    </motion.form>
  );
};

export default ContactForm;