import { Phone, MapPin, Wifi, Car, Wind, Tv, Refrigerator, Waves, Star, MessageCircle } from "lucide-react";

export default function HomePage() {
  const currentYear = new Date().getFullYear();
  const phoneNumbers = ["(+995) 595 22 55 16", "(+995) 591 91 01 02"];
  const whatsappNumber = "595225516";

  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-bold text-primary">კოტეჯი</div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-text hover:text-primary transition">სერვისები</a>
              <a href="#location" className="text-text hover:text-primary transition">მდებარეობა</a>
              <a href="#contact" className="text-text hover:text-primary transition">კონტაქტი</a>
            </div>
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-success text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-success/90 transition flex items-center gap-2"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-16 min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80"
            alt="კოტეჯი"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">კოტეჯი</h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              თქვენი სახლი ზღვასთან ქობულეთში
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">✓ კომფორტული ოთახები</span>
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">✓ ზღვასთან ახლოს</span>
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">✓ კეთილმოწყობილი ტერიტორია</span>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href={`tel:${phoneNumbers[0].replace(/\s/g, "")}`}
                className="bg-white text-primary px-6 py-3 rounded-full font-semibold hover:bg-white/90 transition flex items-center gap-2"
              >
                <Phone size={20} />
                დაგვირეკეთ
              </a>
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-success text-white px-6 py-3 rounded-full font-semibold hover:bg-success/90 transition flex items-center gap-2"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-primary py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            <div>
              <div className="text-3xl font-bold">ქობულეთი</div>
              <div className="text-white/80 text-sm">მდებარეობა</div>
            </div>
            <div>
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-white/80 text-sm">მიღება</div>
            </div>
            <div>
              <div className="text-3xl font-bold">Wi-Fi</div>
              <div className="text-white/80 text-sm">უფასო ინტერნეტი</div>
            </div>
            <div>
              <div className="text-3xl font-bold">პარკინგი</div>
              <div className="text-white/80 text-sm">უფასო</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text mb-4">სერვისები</h2>
            <p className="text-text/70 max-w-2xl mx-auto">
              ჩვენი სასტუმრო გთავაზობთ ყველა საჭირო სერვისს კომფორტული დასვენებისთვის
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <Wifi className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-semibold text-text mb-2">უფასო Wi-Fi</h3>
              <p className="text-text/60 text-sm">სწრაფი ინტერნეტი ყველა ოთახში</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <Car className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-semibold text-text mb-2">უფასო პარკინგი</h3>
              <p className="text-text/60 text-sm">დაცული ავტოსადგომი</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <Wind className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-semibold text-text mb-2">კონდიცირება</h3>
              <p className="text-text/60 text-sm">კლიმატ-კონტროლი ყველა ოთახში</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <Tv className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-semibold text-text mb-2">ტელევიზორი</h3>
              <p className="text-text/60 text-sm">თანამედროვე ტელევიზორები</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <Refrigerator className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-semibold text-text mb-2">მაცივარი</h3>
              <p className="text-text/60 text-sm">პირადი მაცივარი ოთახში</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <Waves className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-semibold text-text mb-2">ზღვასთან ახლოს</h3>
              <p className="text-text/60 text-sm">რამდენიმე წუთი ზღვამდე</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-text mb-6">მდებარეობა</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-text">მისამართი</h3>
                    <p className="text-text/70">ქობულეთი, აჭარა, საქართველო</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-text">ტელეფონი</h3>
                    {phoneNumbers.map((phone, idx) => (
                      <a
                        key={idx}
                        href={`tel:${phone.replace(/\s/g, "")}`}
                        className="block text-text/70 hover:text-primary transition"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MessageCircle className="w-6 h-6 text-success mt-1" />
                  <div>
                    <h3 className="font-semibold text-text">WhatsApp</h3>
                    <a
                      href={`https://wa.me/${whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text/70 hover:text-success transition"
                    >
                      +995 {whatsappNumber}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2982.0!2d41.82!3d41.82!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4045b9b1c0e5c5c5%3A0x5c5c5c5c5c5c5c5c!2sKobuleti%2C%20Georgia!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text mb-4">სტუმრების შეფასებები</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-star text-star" />
                ))}
              </div>
              <p className="text-text/70 mb-4">
                "ძალიან კომფორტული სასტუმრო, მყუდრო გარემო და მეგობრული მასპინძლები."
              </p>
              <p className="font-semibold text-text">— ნინო კ.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-star text-star" />
                ))}
              </div>
              <p className="text-text/70 mb-4">
                "შესანიშნავი ადგილი დასასვენებლად. ზღვასთან ახლოს და ყველა საჭირო სერვისით."
              </p>
              <p className="font-semibold text-text">— გიორგი მ.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-star text-star" />
                ))}
              </div>
              <p className="text-text/70 mb-4">
                "მოვალ აუცილებლად კიდევ! სუფთა ოთახები, კარგი სერვისი და მისაღები ფასები."
              </p>
              <p className="font-semibold text-text">— თამარ ბ.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">დაჯავშნეთ ოთახი დღესვე!</h2>
          <p className="text-xl text-white/90 mb-8">
            დაგვიკავშირდით WhatsApp-ით ან ტელეფონით
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-success text-white px-8 py-4 rounded-full font-semibold hover:bg-success/90 transition flex items-center gap-2 animate-pulse"
            >
              <MessageCircle size={24} />
              WhatsApp-ზე დაწერა
            </a>
            <a
              href={`tel:${phoneNumbers[0].replace(/\s/g, "")}`}
              className="bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition flex items-center gap-2"
            >
              <Phone size={24} />
              დაგვირეკეთ
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text mb-4">კონტაქტი</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <a
              href={`tel:${phoneNumbers[0].replace(/\s/g, "")}`}
              className="bg-background p-6 rounded-xl text-center hover:shadow-md transition"
            >
              <Phone className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-text mb-2">ტელეფონი</h3>
              <p className="text-text/70">{phoneNumbers[0]}</p>
            </a>
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background p-6 rounded-xl text-center hover:shadow-md transition"
            >
              <MessageCircle className="w-10 h-10 text-success mx-auto mb-4" />
              <h3 className="font-semibold text-text mb-2">WhatsApp</h3>
              <p className="text-text/70">+995 {whatsappNumber}</p>
            </a>
            <div className="bg-background p-6 rounded-xl text-center">
              <MapPin className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-text mb-2">მისამართი</h3>
              <p className="text-text/70">ქობულეთი, აჭარა</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-footer py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white/80">
          <p className="mb-2">© {currentYear} კოტეჯი — თქვენი სახლი ზღვასთან</p>
          <p className="text-sm text-white/60">შექმნილია SiTech-ის მიერ</p>
        </div>
      </footer>
    </main>
  );
}
