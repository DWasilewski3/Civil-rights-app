import { Link } from 'react-router-dom'
import '../pages/Rights.css'

function Rights() {
  const rightsCategories = [
    {
      title: 'Freedom of Speech',
      description: 'The right to express your opinions and ideas without government interference.',
      icon: '🗣️'
    },
    {
      title: 'Right to Privacy',
      description: 'Protection from unwarranted government intrusion into personal matters.',
      icon: '🔒'
    },
    {
      title: 'Right to Assembly',
      description: 'The freedom to gather peacefully with others for various purposes.',
      icon: '👥'
    },
    {
      title: 'Right to Petition',
      description: 'The right to address the government with grievances and requests.',
      icon: '📝'
    },
    {
      title: 'Due Process',
      description: 'Fair treatment through the judicial system and legal procedures.',
      icon: '⚖️'
    },
    {
      title: 'Equal Protection',
      description: 'Protection from discrimination and equal treatment under the law.',
      icon: '⚖️'
    }
  ]

  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Your Rights</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore various rights and understand how they apply to you in different situations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {rightsCategories.map((right, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{right.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{right.title}</h3>
              <p className="text-gray-600">{right.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Explore More</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link to="/civil-rights" className="p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors">
              <h3 className="font-semibold text-gray-900 mb-2">Civil Rights</h3>
              <p className="text-sm text-gray-600">Learn about protections from discrimination</p>
            </Link>
            <Link to="/constitutional-rights" className="p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors">
              <h3 className="font-semibold text-gray-900 mb-2">Constitutional Rights</h3>
              <p className="text-sm text-gray-600">Explore rights guaranteed by the Constitution</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rights

