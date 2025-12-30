import '../pages/About.css'

function About() {
  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About Rights Navigator</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6 text-lg">
              Rights Navigator is an application designed to help you explore and understand 
              civil, constitutional, and other personal rights and liberties.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our Mission</h2>
            <p className="mb-6">
              Our mission is to provide clear, accessible information about the rights that 
              protect individuals and ensure freedom in our society. We believe that 
              understanding your rights is the first step toward protecting them.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">What We Offer</h2>
            <ul className="list-disc list-inside space-y-3 mb-6">
              <li>Comprehensive information about civil and constitutional rights</li>
              <li>Clear explanations of complex legal concepts</li>
              <li>Practical guidance on exercising your rights</li>
              <li>Resources for further learning and exploration</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our Commitment</h2>
            <p className="mb-6">
              We are committed to providing accurate, up-to-date information that helps 
              individuals understand their rights and liberties. Knowledge is power, and 
              we believe everyone should have access to information about their fundamental rights.
            </p>

            <div className="mt-8 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-500">
              <p className="text-blue-900 font-medium">
                "The rights of every man are diminished when the rights of one man are threatened."
              </p>
              <p className="text-blue-700 text-sm mt-2">— John F. Kennedy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

