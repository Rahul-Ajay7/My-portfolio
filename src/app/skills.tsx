'use client';

export default function Skills() {
  const sk = [
    'HTML', 'CSS', 'JavaScript', 'ML', 'React',
    'Next.js', 'Firebase', 'Node.js', 'Tailwind CSS',
    'Git', 'Java','C', 'MongoDB'
  ];

  return (
    <section className="w-full max-w-5xl mx-auto py-16 px-4" >
      <h2 className="text-3xl font-bold text-white text-center mb-6">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center">
        {sk.map((ski, index) => (
          <div key={index} className="bg-gray-800 text-white py-3 px-4 rounded-lg shadow hover:bg-yellow-500 hover:text-black transition">
            {ski}
          </div>
        ))}
      </div>
    </section>
  );
}
