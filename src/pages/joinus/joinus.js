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
    <div 
      className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8 relative"
      style={{
        backgroundImage: `url('https://i.pinimg.com/736x/62/ef/16/62ef16ecfbbaf1c93d24c0ac08e34c62.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-spacecadet/95 via-spacecadet/90 to-spacecadet/95" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        {/* Header Section with Gradient Border */}
        <div className="relative p-0 rounded-2xl bg-gradient-to-r from-flame/40 via-dun/50 to-flame/40">
          <div className="bg-spacecadet/80 backdrop-blur-sm rounded-xl p-8 sm:p-12">
            <h2 className="font-morgath text-5xl sm:text-6xl lg:text-7xl text-dun mb-6">
              Join Us! 
            </h2>
            <p className="font-montserrat text-lg sm:text-xl text-dun/80 max-w-3xl">
              Make Web3 Simple. Make it Accessible. Make it Together.
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* English Card */}
            <div className="bg-gradient-to-br from-flame/10 to-transparent backdrop-blur-sm rounded-xl p-8 border border-flame/20 transform hover:scale-[1.02] transition-transform duration-300">
              <h3 className="text-2xl font-montserrat text-dun mb-8">For Global Developers 🌏</h3>
              <div className="space-y-6 text-dun/80">
                <p className="text-lg">This app was built purely with <strong className="text-flame">React</strong>, and that's all you need to get started. 📱</p>
                <p className="text-lg">All the guidance you need is in the <strong className="text-flame">docs</strong> 📚, ready for you to dive in!</p>
                <p className="text-lg">Got a crazy idea 💡? Want to add features or include your language? Let's build together! 💪</p>
              </div>
            </div>

            {/* Swahili Card */}
            <div className="bg-gradient-to-br from-dun/10 to-transparent backdrop-blur-sm rounded-xl p-8 border border-dun/20 transform hover:scale-[1.02] transition-transform duration-300">
              <h3 className="text-2xl font-montserrat text-flame mb-8">Kwa Waendelezaji wa Afrika Mashariki 🌍</h3>
              <div className="space-y-6 text-flame/80">
                <p className="text-lg">App hii ilijengwa kwa kutumia <strong>React</strong> pekee, na hiyo ndiyo yote unayohitaji kuanza. 📱</p>
                <p className="text-lg">Miongozo yote inapatikana kwenye <strong>docs</strong> 📚, iko tayari kwa ajili yako!</p>
                <p className="text-lg">Una wazo la kipekee 💡? Unataka kuongeza vipengele au kuingiza lugha yako? Tujenge pamoja! 💪</p>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 sm:p-10 border border-dun/10 transform hover:scale-[1.02] transition-transform duration-300">
            <h4 className="text-3xl font-montserrat mb-10 flex flex-col sm:flex-row items-start sm:items-center gap-2">
              <span className="text-dun">Contact Us</span>
              <span className="text-flame">/ Wasiliana Nasi</span>
            </h4>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <div className="flex items-center gap-2 mb-3 text-dun/80 text-lg">
                  <span>Name</span>
                  <span className="text-flame/80">/ Jina</span>
                </div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full p-4 bg-white/5 border border-dun/20 rounded-lg focus:outline-none focus:border-flame/60 text-dun"
                />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-3 text-dun/80 text-lg">
                  <span>Email</span>
                  <span className="text-flame/80">/ Barua pepe</span>
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full p-4 bg-white/5 border border-dun/20 rounded-lg focus:outline-none focus:border-flame/60 text-dun"
                />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-3 text-dun/80 text-lg">
                  <span>Message</span>
                  <span className="text-flame/80">/ Ujumbe</span>
                </div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full p-4 bg-white/5 border border-dun/20 rounded-lg focus:outline-none focus:border-flame/60 text-dun"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-flame to-flame/80 text-dun py-5 px-8 rounded-lg hover:from-flame/90 hover:to-flame/70 transition-all duration-300 flex items-center justify-center gap-3 text-lg font-montserrat"
              >
                <span>Send Message</span>
                <span className="text-dun/80">/ Tuma Ujumbe</span>
                <MdSend className="w-6 h-6" />
              </button>
            </form>

            <div className="mt-8 text-dun/60 flex items-center gap-2">
              <MdOutlineOpenInNew className="w-5 h-5" />
              <span>Direct email:</span>
              <a 
                href="mailto:Daobitat@gmail.com"
                className="text-flame hover:text-flame/80 text-lg"
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