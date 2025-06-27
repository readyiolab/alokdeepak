// frontend/src/components/Unsubscribe.jsx
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const Unsubscribe = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const location = useLocation();

  // Extract email from query parameter
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const emailParam = params.get('email');
    if (emailParam) {
      setEmail(decodeURIComponent(emailParam));
    } else {
      setError('No email provided in the link.');
    }
  }, [location]);

  const handleUnsubscribe = async () => {
    if (!email) {
      setError('Email is required.');
      return;
    }

    setIsSubmitting(true);
    setError('');
    setMessage('');

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/newsletter/subscriptions`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to unsubscribe');
      }

      setMessage('Unsubscribed successfully! You’ll receive a confirmation email.');
    } catch (err) {
      setError(err.message || 'Failed to unsubscribe. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      {...fadeInUp}
      className="max-w-md mx-auto mt-10 p-6 bg-white rounded-3xl shadow-lg"
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Unsubscribe from Newsletter</h2>
      {error && (
        <div className="mb-4 p-3 bg-red-500/10 text-red-600 rounded-xl text-sm">
          {error}
        </div>
      )}
      {message && (
        <div className="mb-4 p-3 bg-green-500/10 text-green-600 rounded-xl text-sm">
          {message}
        </div>
      )}
      {email && !message && (
        <>
          <p className="text-gray-600 mb-4">
            Are you sure you want to unsubscribe <strong>{email}</strong> from the Sownmark Newsletter?
          </p>
          <motion.button
            onClick={handleUnsubscribe}
            disabled={isSubmitting}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`w-full py-3 rounded-xl font-semibold text-base transition-all duration-300 ${
              isSubmitting ? 'opacity-60 cursor-not-allowed' : ''
            }`}
            style={{
              background: 'linear-gradient(135deg, #1a2957, #90abff)',
              color: 'white',
            }}
          >
            {isSubmitting ? 'Processing...' : 'Confirm Unsubscribe'}
          </motion.button>
        </>
      )}
    </motion.div>
  );
};

export default Unsubscribe;