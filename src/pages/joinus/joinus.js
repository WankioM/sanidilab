import React, { useState } from "react";
import { MdSend, MdOutlineOpenInNew } from "react-icons/md";

const JoinUs = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    language: "en"
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:Daobitat@gmail.com?subject=Join Sanidi: ${formData.name}&body=${encodeURIComponent(formData.message)}%0D%0A%0D%0AFrom: ${formData.email}`;
    window.location.href = mailtoLink;
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-spacecadet via-spacecadet/95 to-spacecadet/90 pt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section with Gradient Border */}
        <div className="relative mb-12 p-1 rounded-2xl bg-gradient-to-r from-flame via-dun to-flame">
          <div className="bg-spacecadet rounded-xl p-8 sm:p-12">
            <h2 className="font-morgath text-4xl sm:text-5xl lg:text-6xl text-dun mb-4">
              Join Us! 🚀
            </h2>
            <p className="font-montserrat text-lg sm:text-xl text-dun/80 max-w-3xl">
              Make Web3 Simple. Make it Accessible. Make it Together.
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Content */}
          <div className="space-y-6">
            {/* English Card */}
            <div className="bg-gradient-to-br from-flame/10 to-transparent backdrop-blur-sm rounded-xl p-6 border border-flame/20">
              <h3 className="text-2xl font-morgath text-dun mb-6">For Global Developers 🌏</h3>
              <div className="space-y-4 text-dun/80">
                <p>This app was built purely with <strong className="text-flame">React</strong>, and that's all you need to get started. 📱</p>
                <p>All the guidance you need is in the <strong className="text-flame">docs</strong> 📚, ready for you to dive in!</p>
                <p>Got a crazy idea 💡? Want to add features or include your language? Let's build together! 💪</p>
              </div>
            </div>

            {/* Swahili Card */}
            <div className="bg-gradient-to-br from-dun/10 to-transparent backdrop-blur-sm rounded-xl p-6 border border-dun/20">
              <h3 className="text-2xl font-morgath text-flame mb-6">Kwa Waendelezaji wa Afrika Mashariki 🌍</h3>
              <div className="space-y-4 text-flame/80">
                <p>App hii ilijengwa kwa kutumia <strong>React</strong> pekee, na hiyo ndiyo yote unayohitaji kuanza. 📱</p>
                <p>Miongozo yote inapatikana kwenye <strong>docs</strong> 📚, iko tayari kwa ajili yako!</p>
                <p>Una wazo la kipekee 💡? Unataka kuongeza vipengele au kuingiza lugha yako? Tujenge pamoja! 💪</p>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 sm:p-8 border border-dun/10">
            <h4 className="text-2xl font-morgath mb-8 flex flex-col sm:flex-row items-start sm:items-center gap-2">
              <span className="text-dun">Contact Us</span>
              <span className="text-flame">/ Wasiliana Nasi</span>
            </h4>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2 text-dun/80">
                  <span>Name</span>
                  <span className="text-flame/80">/ Jina</span>
                </div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 bg-white/5 border border-dun/20 rounded-lg focus:outline-none focus:border-flame/60 text-dun"
                />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2 text-dun/80">
                  <span>Email</span>
                  <span className="text-flame/80">/ Barua pepe</span>
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 bg-white/5 border border-dun/20 rounded-lg focus:outline-none focus:border-flame/60 text-dun"
                />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2 text-dun/80">
                  <span>Message</span>
                  <span className="text-flame/80">/ Ujumbe</span>
                </div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full p-3 bg-white/5 border border-dun/20 rounded-lg focus:outline-none focus:border-flame/60 text-dun"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-flame to-flame/80 text-dun py-4 px-6 rounded-lg hover:from-flame/90 hover:to-flame/70 transition-all duration-300 flex items-center justify-center gap-2 font-montserrat"
              >
                <span>Send Message</span>
                <span className="text-dun/80">/ Tuma Ujumbe</span>
                <MdSend className="w-5 h-5" />
              </button>
            </form>

            <div className="mt-6 text-sm text-dun/60 flex items-center gap-2">
              <MdOutlineOpenInNew className="w-4 h-4" />
              <span>Direct email:</span>
              <a 
                href="mailto:Daobitat@gmail.com"
                className="text-flame hover:text-flame/80"
              >
                Daobitat@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;