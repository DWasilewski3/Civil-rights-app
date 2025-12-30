import '../pages/Guidance.css'

function Guidance() {
  const guidanceTopics = [
    {
      title: 'Know Your Rights',
      content: 'Understanding your rights is the first step to protecting them. Take time to learn about the rights that apply to your situation.',
      steps: [
        'Research your specific rights in different contexts',
        'Understand the limitations and exceptions',
        'Know when and how to assert your rights'
      ]
    },
    {
      title: 'Document Everything',
      content: 'If you believe your rights have been violated, documentation is crucial.',
      steps: [
        'Keep detailed records of incidents',
        'Save all relevant communications',
        'Take notes with dates, times, and witnesses'
      ]
    },
    {
      title: 'Seek Legal Help',
      content: 'When facing complex legal situations, professional guidance can be invaluable.',
      steps: [
        'Consult with qualified legal professionals',
        'Contact civil rights organizations',
        'Reach out to legal aid services if needed'
      ]
    },
    {
      title: 'Stay Informed',
      content: 'Rights and laws evolve. Stay current with changes that may affect you.',
      steps: [
        'Follow legal news and updates',
        'Join relevant advocacy groups',
        'Participate in civic education programs'
      ]
    }
  ]

  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Guidance & Resources</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find practical guidance on understanding and exercising your rights effectively.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {guidanceTopics.map((topic, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">{topic.title}</h2>
              <p className="text-gray-700 mb-4">{topic.content}</p>
              <ul className="space-y-2">
                {topic.steps.map((step, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="text-gray-600">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Important Reminders</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                  <span className="text-yellow-600 font-bold">!</span>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-gray-900 mb-1">Know When to Assert Your Rights</h3>
                <p className="text-gray-600">Understanding when and how to assert your rights is as important as knowing what they are.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold">✓</span>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-gray-900 mb-1">Rights Come with Responsibilities</h3>
                <p className="text-gray-600">Exercising your rights responsibly helps maintain the freedoms we all enjoy.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">i</span>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-gray-900 mb-1">Seek Help When Needed</h3>
                <p className="text-gray-600">Don't hesitate to reach out to legal professionals or advocacy groups when you need assistance.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Guidance

