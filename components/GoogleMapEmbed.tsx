// components/GoogleMapEmbed.tsx (Enhanced Google Map with Marker)
export default function GoogleMapEmbed() {
  return (
    <section className="mt-12 mb-20 ml-2 mr-2 p-4 round">
    <h3 className="text-3xl font-bold mb-6">Location of Cornerstone</h3>
       <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.123456789!2d32.123456!3d1.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x123456789abcdef!2sCornerstone%20Leadership%20Academy%20Uganda!5e0!3m2!1sen!2sug!4v1234567890" // Update with actual embed link
      width="100%"
      height="450"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
    ></iframe>
    </section>
   
  );
}
