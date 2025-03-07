import StatsSection from '../../components/StatsSection';
import TextSection2 from '@/components/TextSection2';
export default function About() {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen py-10">
      <header className="bg-blue-500 text-white p-6">
        <h1 className="text-4xl font-bold text-center">Cornerstone Leadership Academy</h1>
        <p className="text-center text-lg">Nurturing Tomorrow's Leaders</p>
      </header>
      <main className="max-w-4xl mx-auto p-6 fade-in">
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            At Cornerstone Leadership Academy, we seek to create a life-transforming learning environment that molds young men and women into future leaders for Uganda. Our mission is to nurture individuals whose lives fully reflect the character qualities and leadership principles embodied in the life of Jesus.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Our History</h2>
          <p className="text-lg leading-relaxed">
            Cornerstone's work in education began in 1994 with a Leadership Academy for boys, set on the serene grazing pastures of Ekitangaala Ranch in southern Nakasongola District. In 2004, we expanded our capacity to work with young ladies by opening a girls' campus. Today, our academies are "Advanced Level" boarding high schools that aim to mold young people from disadvantaged backgrounds into future leaders.
          </p>
        </section>
        <StatsSection />
        <TextSection2 />
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Our Programs</h2>
          <p className="text-lg leading-relaxed">
            Our curriculum follows the national material taught to prepare students for the UNEB exams. In addition to academic studies, our program involves comprehensive discipleship and character development, empowering our young men and women to become leaders in all walks of life.
          </p>
          <ul className="list-disc list-inside">
            <li>Discipleship Materials</li>
            <li>Character Development</li>
            <li>Leadership Principles</li>
            <li>Social Events</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Co-Curricular Activities</h2>
          <p className="text-lg leading-relaxed">
            In addition to academic subjects, students participate in our character development curriculum, which teaches timeless, universal principles like forgiveness, honesty, integrity, compassion, kindness, hard work, humility, and service to the less fortunate. Other co-curricular activities include sports, debate forums, community outreach, and participation in the Nile Awards.
          </p>
        </section>
       
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
          <p className="text-lg leading-relaxed">
            For more information, please contact us at:
          </p>
          <p className="text-lg leading-relaxed">
            Phone: +256774068314<br />
            Email: cornerstoneleadershipacademy@gmail.com<br />
            Address: Ekitangaala Ranch, Nakasongola District, Uganda
          </p>
        </section>
      </main>
    </div>
  );
}
