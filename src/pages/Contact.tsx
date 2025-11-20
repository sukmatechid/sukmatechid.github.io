function ContactUs() {
  return (
    <div className="mx-auto py-6 px-6 max-w-6xl min-h-screen mt-16 lg:mt-0 mb-16">
      <div className="text-center mb-20">
        <div className="bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 rounded-2xl p-8 md:p-16 mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Innovative
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Reliable
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-700 to-blue-700 bg-clip-text text-transparent">
              Collaborative
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Excellence
            </span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-left">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Contact Us</h2>
          </div>

          <div className="space-y-8">
            <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-10">
              We're here to help you bring your ideas to life. Reach out to us
              for consultations, project discussions, or general inquiries.
            </p>

            <div className="space-y-6 text-base md:text-lg text-gray-800">
              <p>
                <strong>Company:</strong> Sukma Tech Indonesia
              </p>
              <p>
                <strong>WhatsApp:</strong>{" "}
                <a href="https://wa.me/6285259380265">+62 852-5938-0265</a>
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:sukmatechindonesia@gmail.com">
                  sukmatechindonesia@gmail.com
                </a>
              </p>
              <p>
                <strong>Contact Person:</strong> Indra Rudianto
              </p>
              <p>
                <strong>Address:</strong> Ngawi, East Java, Indonesia
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer className="text-center py-8 text-gray-500 text-sm border-t border-gray-200 mt-12">
        <p>
          © {new Date().getFullYear()} Sukma Tech Indonesia. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}

export default ContactUs;
