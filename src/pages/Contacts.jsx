import Footer from "../components/Footer"

const Contacts = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center bg-no-repeat h-[480px] text-white flex  justify-center items-center"
        style={{
          backgroundImage:"url('https://res.cloudinary.com/dsjsvmug6/image/upload/v1737771555/sinclair/contact_yofrsr.jpg')",
        }}
      ></div>
       <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-8 px-4 py-12 bg-gray-100">
      {/* Contact Us Form */}
      <div className="bg-white rounded-lg shadow-md p-6 w-full md:w-1/2">
        <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
        <p className="text-gray-600 mb-6">Reach out to us, we always respond</p>
        <form className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              placeholder="Full Name *"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            />
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              placeholder="eg. Jamesbond@email.com"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            />
          </div>

          {/* Subject */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Subject
            </label>
            <input
              type="text"
              placeholder="Give it a title"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              placeholder="Tell us something..."
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      {/* More Ways to Find Us */}
      <div className="bg-white rounded-lg shadow-md p-6 w-full md:w-1/2">
        <h2 className="text-2xl font-bold mb-2">More Ways to Find Us</h2>
        <p className="text-gray-600 mb-6">Reach out to us, we always respond</p>

        {/* Contact Details */}
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <span className="text-green-500 text-2xl">📞</span>
            <p className="text-gray-700">+2347047600061</p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-green-500 text-2xl">📧</span>
            <p className="text-gray-700">info@metadigitalservices.ng</p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-green-500 text-2xl">📧</span>
            <p className="text-gray-700">Metadigitalservices@icloud.com</p>
          </div>
        </div>

        {/* Map */}
        <div className="mt-6">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31515.81610745058!2d3.385909219938948!3d6.465422047019555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf52525555555%3A0xa9d8d9e7a7eb6e9!2sVictoria%20Island%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1677599151644!5m2!1sen!2sng"
            width="100%"
            height="250"
            className="rounded-md"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Contacts