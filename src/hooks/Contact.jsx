import { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });
  
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Using environment variables for security
      const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
      const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
      
      // Validate that environment variables are set
      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration is missing. Please check your environment variables.');
      }
      
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Mohamed', // Your name
        reply_to: formData.email
      };
      
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setStatus({
        submitted: true,
        success: true,
        message: 'Message sent successfully! I will get back to you soon.'
      });
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus({
        submitted: true,
        success: false,
        message: error.message || 'Failed to send message. Please try again or contact me directly.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-container">
          {/* Contact Info Section */}
          <div className="contact-info">
            <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <div>
                <h3>Email</h3>
                <p>mohamedaytsidibah@gmail.com</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">🌍</div>
              <div>
                <h3>Location</h3>
                <p>Based in Morocco</p>
              </div>
            </div>
          </div>
          
          {/* Contact Form Section */}
          <form className="contact-form" onSubmit={handleSubmit}>
            {status.submitted && (
              <div className={`form-status ${status.success ? 'success' : 'error'}`}>
                {status.message}
              </div>
            )}
            
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input 
                type="text" 
                id="name" 
                className="form-input" 
                placeholder="Your name" 
                required 
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input 
                type="email" 
                id="email" 
                className="form-input" 
                placeholder="Your email" 
                required 
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input 
                type="text" 
                id="subject" 
                className="form-input" 
                placeholder="Subject" 
                required 
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea 
                id="message" 
                className="form-textarea" 
                placeholder="Your message" 
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="button" 
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;