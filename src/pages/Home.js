import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import '../styles/Home.css';
import '../styles/ChatWidget.css';

function Home() {
  const featuredProducts = products.slice(0, 6);
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const handleStartChat = () => {
    // Use the global function created in index.html
    if (window.openNoupeChat && typeof window.openNoupeChat === 'function') {
      window.openNoupeChat();
      console.log('Opening Noupe chat from Home page');
    } else {
      console.warn('Noupe chat opener not available');
    }
  };

  const faqData = [
    {
      id: 1,
      question: "How are your pottery pieces made?",
      answer: "Each piece is handcrafted using traditional wheel-throwing techniques passed down through generations. Our artisans use premium clay and fire them in traditional kilns."
    },
    {
      id: 2,
      question: "Do you offer custom orders?",
      answer: "Yes! We specialize in custom pottery orders. You can contact our team to discuss your specific requirements, size preferences, and design ideas for personalized pieces."
    },
    {
      id: 3,
      question: "What is your shipping policy?",
      answer: "We ship across India with secure packaging to ensure your pottery arrives safely. Shipping costs vary by location. Contact us for detailed shipping information and delivery timelines."
    },
    {
      id: 4,
      question: "How do I care for my pottery?",
      answer: "Our pottery pieces are food-safe and dishwasher-friendly. For longevity, we recommend hand washing with mild soap. Avoid sudden temperature changes to prevent cracking."
    },
    {
      id: 5,
      question: "What makes ClayArt special?",
      answer: "We combine 5,000 years of Indian pottery heritage with contemporary design. Every piece supports skilled artisans and preserves traditional craftsmanship in the modern world."
    },
    {
      id: 6,
      question: "Can I visit your studio?",
      answer: "Absolutely! We welcome visitors to our studio in Maharashtra's pottery district. You can witness the creation process and meet our master artisans. Please contact us to schedule a visit."
    }
  ];

  return (
    <>
    <div className="home">
      <section className="hero">
        <h1>Handcrafted Ceramics with Love</h1>
        <p>Unique pottery pieces made by local artisans</p>
        <Link to="/gallery"><button>Explore Gallery</button></Link>
      </section>

      <section className="featured">
        <h2>Featured Collection</h2>
        <div className="featured-grid">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} onClick={() => {}} />
          ))}
        </div>
      </section>

      <section className="about">
        <div className="about-section">
          <div className="about-content">
            <div className="about-text">
              <h2>Our Story: Centuries of Craftsmanship</h2>
              <p>
                ClayArt was born from a deep passion to preserve the timeless art of pottery—a craft that traces its roots back over 5,000 years in Indian civilization. In the heart of Maharashtra's pottery district, our studio stands as a testament to the remarkable skill and dedication of artisans who have kept this ancient tradition alive through countless generations. Every piece created at ClayArt carries the spirit of our ancestors, blending traditional hand-throwing techniques with thoughtful contemporary design. We believe that pottery is not merely functional ware; it is a living narrative of cultural heritage, a tangible connection to the wisdom of our forebears who understood the profound relationship between earth, water, and human hands.
              </p>
              <p>
                In an era dominated by mass production and industrial efficiency, ClayArt stands firm in its commitment to slow craftsmanship and sustainable practices. Our artisans spend months perfecting their craft, using traditional kiln firing methods passed down through generations. Each vase, bowl, and vessel is a meditation—a dialogue between the artist's vision and the natural properties of clay. By choosing ClayArt, you're not just acquiring a beautiful object; you're supporting the survival of an endangered art form and helping us preserve India's rich cultural legacy for generations yet to come.
              </p>
            </div>
            <div className="about-image">
              <img src="/images/Home image.jpeg" alt="Pottery Workshop" />
            </div>
          </div>
        </div>

        <div className="team-section">
          <h2>Meet Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <h3>Rajesh Kumar - Founder & Master Artisan</h3>
              <p>
                Rajesh Kumar, a third-generation potter, established ClayArt with a singular vision: to elevate Indian pottery into the global consciousness while maintaining its authenticity. With 25 years of hands-on experience and apprenticeships under master craftsmen, Rajesh combines traditional techniques with innovative design thinking.
              </p>
            </div>

            <div className="team-member">
              <h3>Priya Sharma - Design & Heritage Director</h3>
              <p>
                Priya brings a fresh contemporary perspective to ClayArt's aesthetic vision. A graduate of the National Institute of Design, Priya specializes in bridging the gap between traditional craftsmanship and modern minimalist design, ensuring every collection tells a meaningful narrative.
              </p>
            </div>

            <div className="team-member">
              <h3>Arjun Deshmukh - Master Kiln Master</h3>
              <p>
                Arjun holds mastery over the delicate science of firing. With four decades of experience, he understands the subtle language of heat, humidity, and timing. His traditional wood-fired kilns produce the distinctive texture and color variations that make ClayArt pieces unmistakably authentic.
              </p>
            </div>

            
          </div>
        </div>

        <div className="about-mission">
          <h2>Our Mission: Bridging Past and Present</h2>
          <p>
            ClayArt exists at the intersection of heritage and innovation. We are custodians of a cultural treasure—Indian pottery traditions that span millennia—while simultaneously pioneering new ways to make this art form relevant and accessible in the modern world. Every firing in our kiln is a silent prayer for the continuation of tradition. Every perfectly thrown bowl is a victory against the tide of disposable culture. By choosing to support ClayArt, you become a guardian of heritage, a patron of skilled artisans, and a participant in one of humanity's oldest and most beautiful artistic practices.
          </p>
        </div>
      </section>

      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <p className="faq-intro">Have questions? Browse our FAQs or chat with our AI assistant</p>
        <div className="faq-container">
          <div className="faq-accordion">
            {faqData.map((faq) => (
              <div key={faq.id} className="accordion-item">
                <button 
                  className="accordion-header"
                  onClick={() => setExpandedFAQ(expandedFAQ === faq.id ? null : faq.id)}
                >
                  <span>{faq.question}</span>
                  <span className={`toggle-icon ${expandedFAQ === faq.id ? 'active' : ''}`}>+</span>
                </button>
                {expandedFAQ === faq.id && (
                  <div className="accordion-content">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="faq-chatbot">
            <div className="chatbot-widget">
              <h3>Ask Our AI Assistant</h3>
              <p>Have other questions? Chat with our AI-powered assistant for instant answers!</p>
              <button className="chatbot-cta" onClick={handleStartChat}>Start Chat</button>
              <div className="chatbot-hint">
                <small>💬 Available 24/7</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="cta-content">
          <h2>Ready to Bring Artisan Pottery Into Your Home?</h2>
          <p>Connect with our team to explore custom orders, inquire about collections, or visit our studio</p>
          <div className="cta-buttons">
            <Link to="/contact"><button className="cta-primary">Get In Touch</button></Link>
            <Link to="/gallery"><button className="cta-secondary">Browse Gallery</button></Link>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}

export default Home;
