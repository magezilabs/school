// components/Testimonials.js
const testimonials = [
  {
    quote: "This school transformed my child's future! The teachers are amazing and the curriculum is top-notch embarked with co-cirricular activitities plus a solid religious foundation. I highly recommend it to everyone.",
    name: "Magezi",
    relation: "Parent",
    profilePic: "media/images/profile2.jpg", // Make sure to have this image in your public/images directory
  },
  {
    quote: "An amazing place to learn and grow. I highly recommend it to everyone for it great environment and teachers. who are profession kind and always ready to help.",
    name: "Black Prince",
    relation: "Alumnus",
    profilePic: "/media/images/profile1.jpg",
  },
  {
    quote: "I am so grateful for the opportunity to have studied at this school. The teachers are amazing and the curriculum is top-notch. I highly recommend it to everyone.",
    name: "Robert Mots",
    relation: "OB",
    profilePic: "/media/images/profile3.jpg",
  },
  // Add more testimonials as needed
];

export default function Testimonials() {
  return (
    <section className="testimonials ">
      <h2>What People Are Saying</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial" key={index}>
            <img src={testimonial.profilePic} alt={`${testimonial.name} profile`} className="profile-pic" />
            <blockquote>
              <p>"{testimonial.quote}"</p>
              <footer>
                <strong>{testimonial.name}</strong> <span>{testimonial.relation}</span>
              </footer>
            </blockquote>
          </div>
        ))}
      </div>
      <a href="/enrol" className="enrolment-btn text-base flex justify-center items-center my-12">Join a Number of Pround People Enroll Now</a>
      <div className="flex flex-col items-center">
  <a href="/contact" className="text-lg flex justify-left my-10 text-white bg-green-700 rounded-2xl p-2 ml-8 transform transition-transform duration-300 hover:translate-x-5 hover:bg-green-800">
    Share Your Testimonial ✅
  </a>
</div>

    </section>
  );
};
