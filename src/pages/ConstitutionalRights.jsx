import '../pages/ConstitutionalRights.css'

function ConstitutionalRights() {
  const amendments = [
    {
      number: 'First Amendment',
      rights: ['Freedom of speech', 'Freedom of religion', 'Freedom of the press', 'Right to assemble', 'Right to petition'],
      description: 'Protects fundamental freedoms of expression and belief.'
    },
    {
      number: 'Fourth Amendment',
      rights: ['Protection from unreasonable searches', 'Protection from unreasonable seizures', 'Requirement for warrants'],
      description: 'Protects privacy and requires probable cause for searches and seizures.'
    },
    {
      number: 'Fifth Amendment',
      rights: ['Right to remain silent', 'Protection from double jeopardy', 'Right to due process', 'Protection from self-incrimination'],
      description: 'Provides important protections in criminal proceedings.'
    },
    {
      number: 'Sixth Amendment',
      rights: ['Right to a speedy trial', 'Right to a public trial', 'Right to an impartial jury', 'Right to counsel'],
      description: 'Ensures fair treatment in criminal prosecutions.'
    },
    {
      number: 'Eighth Amendment',
      rights: ['Protection from excessive bail', 'Protection from excessive fines', 'Protection from cruel and unusual punishment'],
      description: 'Prevents excessive punishment and ensures proportionality.'
    },
    {
      number: 'Fourteenth Amendment',
      rights: ['Equal protection under the law', 'Due process', 'Citizenship rights'],
      description: 'Extends fundamental rights to all citizens and ensures equal treatment.'
    }
  ]

  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Constitutional Rights</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn about constitutional rights and how they are protected by the Constitution 
            and its amendments.
          </p>
        </div>

        <div className="space-y-6 mb-12">
          {amendments.map((amendment, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-start justify-between mb-4">
                <h2 className="text-2xl font-semibold text-gray-900">{amendment.number}</h2>
                <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-semibold">
                  Amendment
                </span>
              </div>
              <p className="text-gray-700 mb-4 text-lg">{amendment.description}</p>
              <div className="mt-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">Protected Rights:</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {amendment.rights.map((right, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      {right}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-red-500 to-orange-600 rounded-xl shadow-lg p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">The Bill of Rights</h2>
          <p className="text-lg mb-4">
            The first ten amendments to the Constitution, known as the Bill of Rights, 
            were added to protect individual liberties from government overreach. These 
            fundamental rights form the cornerstone of American freedom.
          </p>
          <p className="text-lg">
            Understanding these constitutional protections helps citizens recognize when 
            their rights may be at risk and empowers them to defend their liberties.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ConstitutionalRights

