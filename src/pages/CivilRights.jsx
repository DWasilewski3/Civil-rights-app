import '../pages/CivilRights.css'

function CivilRights() {
  const civilRights = [
    {
      title: 'Equal Protection',
      description: 'The right to equal treatment under the law regardless of race, gender, religion, or other protected characteristics.',
      protected: ['Race', 'Color', 'National origin', 'Religion', 'Gender', 'Age', 'Disability']
    },
    {
      title: 'Freedom from Discrimination',
      description: 'Protection against unfair treatment in employment, housing, education, and public accommodations.',
      protected: ['Employment', 'Housing', 'Education', 'Public services', 'Voting']
    },
    {
      title: 'Right to Vote',
      description: 'The fundamental right to participate in elections and have your voice heard in the democratic process.',
      protected: ['Voting access', 'Voter registration', 'Fair representation', 'Election integrity']
    },
    {
      title: 'Fair Housing',
      description: 'The right to rent, buy, or sell housing without discrimination based on protected characteristics.',
      protected: ['Housing availability', 'Fair lending', 'Reasonable accommodations', 'Equal terms']
    }
  ]

  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Civil Rights</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore civil rights and their importance in protecting individuals from discrimination 
            and ensuring equal treatment under the law.
          </p>
        </div>

        <div className="space-y-6 mb-12">
          {civilRights.map((right, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{right.title}</h2>
              <p className="text-gray-700 mb-4 text-lg">{right.description}</p>
              <div className="mt-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">Protected Areas:</h3>
                <div className="flex flex-wrap gap-2">
                  {right.protected.map((area, idx) => (
                    <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl shadow-lg p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">The Civil Rights Movement</h2>
          <p className="text-lg mb-4">
            Civil rights have been hard-won through decades of struggle and advocacy. 
            Understanding these rights helps us appreciate the progress made and recognize 
            the work that remains to ensure equality for all.
          </p>
          <p className="text-lg">
            These protections are essential for creating a just society where everyone 
            has the opportunity to thrive regardless of their background or identity.
          </p>
        </div>
      </div>
    </div>
  )
}

export default CivilRights

