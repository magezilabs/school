'use client';
import { useState } from 'react';

const InquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    message: '', // Corrected to lowercase 'message'
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    if (!formData.name.trim() || !formData.message.trim()) { // Corrected to lowercase 'message'
      setError('All fields are required.');
      return;
    }

    // Construct WhatsApp URL
    const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '1234567890'; // Replace with the recipient's phone number in international format
    const message = `Name: ${formData.name}\nInquiry: ${formData.message}`; // Corrected to lowercase 'message'
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Redirect to WhatsApp URL
    window.open(whatsappURL, '_blank'); // Open in a new tab

    setFormData({ name: '', message: '' }); // Corrected to lowercase 'message'
    setSuccessMessage('Inquiry sent successfully via WhatsApp!');
  };

  return (
    <div className="inquiry-form-container hv-center my-40">
      <h2 className='text-3xl text-center m-4 text-blue-600'>Contact us now</h2>
      <form onSubmit={handleSubmit} className="form-container">
        {error && <p className="error-message">{error}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
        <input
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="input-field"
        />
        <textarea
          name="message" // Corrected to lowercase 'message'
          placeholder="Your Inquiry"
          value={formData.message} // Corrected to lowercase 'message'
          onChange={handleChange}
          required
          className="input-field"
        />
        <button type="submit" className="submit-button">Send</button>
      </form>
    </div>
  );
};

export default InquiryForm;
