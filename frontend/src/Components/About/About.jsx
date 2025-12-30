import './About.css';
import aboutImg from '../../assets/logo.png'; 
function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-image">
          <img src={aboutImg} alt="Hina's Kitchen" />
        </div>
        <div className="about-content">
          <h2>Why Choose Hina's Kitchen</h2>
          <p>
            At Hina's Kitchen, we deliver fresh, high-quality food crafted with love and attention to detail. Every recipe is designed to delight your taste buds and bring comfort with every bite. From beloved traditional dishes to our signature creations, each plate reflects our dedication to quality, consistency, and genuine passion for exceptional food. We believe in creating not just meals, but memorable dining experiences delivered straight to your doorstep.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;