import React, { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    if (!/\S+@\S+\.\S+/.test(formData.email)) return;
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="contact">
      <h1>Get In Touch</h1>
      <div className="shop-info">
        <h2>ClayArt Studio</h2>
        <p>Address: 123 Artisan Lane, Pottery District,Buldhana, Maharashtra 444203</p>
        <p>Email: hello@clayart.com</p>
        <p>Phone: +91 1800 0000 1111</p>
        <p>Opening Hours: Mon-Sat: 10:00 AM - 7:00 PM</p>
      </div>
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
          <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} required></textarea>
          <button type="submit">Submit</button>
        </form>
        {submitted && <p className="success-message">Thank you! We'll get back to you soon</p>}
      </div>
      <div className="map">
        <iframe title="ClayArt Studio Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.0000!2d72.0000!3d19.0000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAwJzAwLjAiTiA3MsKwMDAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890" allowFullScreen="" loading="lazy"></iframe>
      </div>
    </div>
  );
}

export default Contact;