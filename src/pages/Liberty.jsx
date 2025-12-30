import '../pages/Liberty.css'

function Liberty() {
  const liberties = [
    {
      title: 'Personal Liberty',
      description: 'The freedom to make choices about your own life, body, and personal affairs without undue government interference.',
      examples: ['Freedom of movement', 'Right to personal autonomy', 'Bodily integrity']
    },
    {
      title: 'Economic Liberty',
      description: 'The freedom to engage in economic activities, own property, and pursue economic opportunities.',
      examples: ['Right to own property', 'Freedom to contract', 'Right to work']
    },
    {
      title: 'Political Liberty',
      description: 'The freedom to participate in the political process and express political views.',
      examples: ['Right to vote', 'Freedom of political expression', 'Right to run for office']
    },
    {
      title: 'Religious Liberty',
      description: 'The freedom to practice your religion or hold no religious beliefs without government coercion.',
      examples: ['Freedom of worship', 'Right to religious expression', 'Freedom from religious establishment']
    }
  ]

  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Understanding Liberty</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn about liberty and the freedoms that are fundamental to our society and way of life.
          </p>
        </div>

        <div className="space-y-6 mb-12">
          {liberties.map((liberty, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{liberty.title}</h2>
              <p className="text-gray-700 mb-4 text-lg">{liberty.description}</p>
              <div className="mt-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide">Examples:</h3>
                <ul className="list-disc list-inside space-y-1">
                  {liberty.examples.map((example, idx) => (
                    <li key={idx} className="text-gray-600">{example}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl shadow-lg p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">The Foundation of Freedom</h2>
          <p className="text-lg mb-4">
            Liberty is not just the absence of restraint, but the presence of opportunity. 
            It is the ability to pursue your goals, express your beliefs, and live according 
            to your values within a framework of mutual respect and legal protection.
          </p>
          <p className="text-lg">
            Understanding these liberties helps us appreciate the freedoms we enjoy and 
            recognize when they may be at risk.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Liberty

