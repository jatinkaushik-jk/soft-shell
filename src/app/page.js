"use client";
import Navbar from './components/navbar';
import Chatbot from './components/chatbot';
import { Footer } from './components/footer';
import ContactForm from './components/contact-form';
import HeroElement from './components/hero-element';
import { motion } from "motion/react"
import { delay } from 'motion';

export default function Home() {

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300 dark:bg-gray-900 dark:text-white bg-white text-gray-800`}>
      {/* Navigation */}
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-24 pb-12 md:pt-32 md:pb-20 mt-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
              <div className="mb-8 lg:mb-0">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
                  Turn Unused Software Licenses into Cash
                </h1>
                <p className={`mt-3 text-sm sm:mt-5 sm:text-lg md:mt-5 md:text-base lg:mx-0 dark:text-gray-300 text-gray-500`}>
                  SoftSell helps businesses monetize unused software licenses with a simple, secure process and competitive valuations. Stop paying for software you don&apos;t use and start turning those licenses into revenue.
                </p>
                <div className="mt-16 my-12 md:mb-4 sm:flex">
                  <div>
                    <a
                      href="#contact"
                      className={`w-full flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-lg bg-primary text-white dark:text-black hover:bg-primary/85 md:py-3 md:px-8 transition-colors duration-200`}
                    >
                      Get a Quote
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="#how-it-works"
                      className={`w-full flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-md dark:bg-transparent dark:border-gray-400 dark:text-gray-300 dark:hover:bg-gray-400/10 text-gray-800 hover:bg-accent md:py-3 md:px-8 transition-colors duration-200`}
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
              <HeroElement />
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className={`py-12 md:py-20 dark:bg-gray-800/50 bg-gray-50`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className={`text-3xl font-extrabold tracking-tight sm:text-4xl dark:text-white text-gray-900`}>
                How It Works
              </h2>
              <p className={`mt-4 max-w-2xl mx-auto text-xl dark:text-gray-300 text-gray-500`}>
                Our simple 3-step process makes selling your unused software licenses quick and painless.
              </p>
            </div>

            <div className="mt-16 md:mt-20">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {/* Step 1 */}
                <motion.div
                  initial={{ x: 50 }}
                  whileInView={{
                    x: 0, transition: { ease: "linear" }
                  }}
                  viewport={{ once: true }}
                  className={`relative p-6 dark:bg-gray-700 bg-white rounded-lg shadow-md transition-transform duration-300 hover:transform hover:scale-105`}>
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 mb-4">
                    <svg className="w-8 h-8 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                    </svg>
                  </div>
                  <h3 className={`text-xl font-medium dark:text-white text-gray-900`}>Upload License</h3>
                  <p className={`mt-2 dark:text-gray-300 text-gray-500`}>
                    Submit your software license details through our secure form. We accept all major enterprise software licenses.
                  </p>
                  <div className="absolute top-0 right-0 -mt-4 -mr-4 w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
                    1
                  </div>
                </motion.div>

                {/* Step 2 */}
                <motion.div
                  initial={{ x: 100 }}
                  whileInView={{
                    x: 0, transition: { delay: 0.2, ease: "linear" }
                  }}
                  viewport={{ once: true }}
                  className={`relative p-6 dark:bg-gray-700 bg-white rounded-lg shadow-md transition-transform duration-300 hover:transform hover:scale-105`}>
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900 mb-4">
                    <svg className="w-8 h-8 text-green-600 dark:text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className={`text-xl font-medium dark:text-white text-gray-900`}>Get Valuation</h3>
                  <p className={`mt-2 dark:text-gray-300 text-gray-500`}>
                    Our experts will evaluate your license and provide a competitive offer within 24 hours. No obligation to accept.
                  </p>
                  <div className="absolute top-0 right-0 -mt-4 -mr-4 w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold">
                    2
                  </div>
                </motion.div>

                {/* Step 3 */}
                <motion.div
                  initial={{ x: 150 }}
                  whileInView={{
                    x: 0, transition: { delay: 0.4, ease: "linear" }
                  }}
                  viewport={{ once: true }}
                  className={`relative p-6 dark:bg-gray-700 bg-white rounded-lg shadow-md transition-transform duration-300 hover:transform hover:scale-105`}>
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900 mb-4">
                    <svg className="w-8 h-8 text-purple-600 dark:text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className={`text-xl font-medium dark:text-white text-gray-900`}>Get Paid</h3>
                  <p className={`mt-2 dark:text-gray-300 text-gray-500`}>
                    Accept our offer and receive payment via your preferred method within 2 business days. It&apos;s that simple!
                  </p>
                  <div className="absolute top-0 right-0 -mt-4 -mr-4 w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold">
                    3
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="why-choose-us" className="py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className={`text-3xl font-extrabold tracking-tight sm:text-4xl dark:text-white text-gray-900`}>
                Why Choose SoftSell
              </h2>
              <p className={`mt-4 max-w-2xl mx-auto text-xl dark:text-gray-300 text-gray-500`}>
                We&apos;re the industry leader in software license resale, with a proven track record of success.
              </p>
            </div>

            <div className="mt-16 md:mt-20">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                {/* Feature 1 */}
                <motion.div initial={{ scale: 0.95 }} whileInView={{ scale: 1 }} viewport={{ once: true }} className={`p-6 rounded-lg dark:bg-gray-800 border border-gray-700 bg-white shadow-md transition-all duration-300 hover:shadow-lg`}>
                  <div className={`w-12 h-12 rounded-md flex items-center justify-center dark:bg-blue-900 bg-blue-100`}>
                    <svg className={`w-6 h-6 dark:text-blue-300 text-blue-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 className={`mt-4 text-lg font-medium dark:text-white text-gray-900`}>Secure Transactions</h3>
                  <p className={`mt-2 dark:text-gray-300 text-gray-500`}>
                    Bank-level encryption and secure data handling protocols to protect your sensitive license information.
                  </p>
                </motion.div>

                {/* Feature 2 */}
                <motion.div initial={{ scale: 0.95 }} whileInView={{ scale: 1, transition: { delay: 0.3 } }} viewport={{ once: true }} className={`p-6 rounded-lg dark:bg-gray-800 border border-gray-700 bg-white shadow-md transition-all duration-300 hover:shadow-lg`}>
                  <div className={`w-12 h-12 rounded-md flex items-center justify-center dark:bg-green-900 bg-green-100`}>
                    <svg className={`w-6 h-6 dark:text-green-300 text-green-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                  </div>
                  <h3 className={`mt-4 text-lg font-medium dark:text-white text-gray-900`}>Best Valuations</h3>
                  <p className={`mt-2 dark:text-gray-300 text-gray-500`}>
                    We consistently offer 40-70% of remaining contract value, higher than industry average for a quick, hassle-free sale.
                  </p>
                </motion.div>

                {/* Feature 3 */}
                <motion.div initial={{ scale: 0.95 }} whileInView={{ scale: 1, transition: { delay: 0.6 } }} viewport={{ once: true }} className={`p-6 rounded-lg dark:bg-gray-800 border border-gray-700 bg-white shadow-md transition-all duration-300 hover:shadow-lg`}>
                  <div className={`w-12 h-12 rounded-md flex items-center justify-center dark:bg-purple-900 bg-purple-100`}>
                    <svg className={`w-6 h-6 dark:text-purple-300 text-purple-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className={`mt-4 text-lg font-medium dark:text-white text-gray-900`}>Fast Processing</h3>
                  <p className={`mt-2 dark:text-gray-300 text-gray-500`}>
                    From submission to payment in as little as 48 hours. Our streamlined process ensures you get your money quickly.
                  </p>
                </motion.div>

                {/* Feature 4 */}
                <motion.div initial={{ scale: 0.95 }} whileInView={{ scale: 1, transition: { delay: 0.9 } }} viewport={{ once: true }} className={`p-6 rounded-lg dark:bg-gray-800 border border-gray-700 bg-white shadow-md transition-all duration-300 hover:shadow-lg`}>
                  <div className={`w-12 h-12 rounded-md flex items-center justify-center dark:bg-yellow-900 bg-yellow-100`}>
                    <svg className={`w-6 h-6 dark:text-yellow-300 text-yellow-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className={`mt-4 text-lg font-medium dark:text-white text-gray-900`}>Compliance Guarantee</h3>
                  <p className={`mt-2 dark:text-gray-300 text-gray-500`}>
                    All transactions are 100% compliant with software licensing agreements and transfer regulations.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className={`py-12 md:py-20 dark:bg-secondary/50 bg-primary/75`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className={`text-3xl font-extrabold tracking-tight sm:text-4xl dark:text-white text-gray-900`}>
                What Our Customers Say
              </h2>
              <p className={`mt-4 max-w-2xl mx-auto text-xl dark:text-gray-300 text-gray-700`}>
                Don&apos;t just take our word for it. See what businesses like yours have experienced with SoftSell.
              </p>
            </div>

            <div className="mt-16 md:mt-20">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {/* Testimonial 1 */}
                <motion.div initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1, transition: { default: { type: "spring" }, opacity: { ease: "linear" } } }} viewport={{ once: true }} className={`p-6 rounded-lg dark:bg-gray-700 bg-white shadow-md`}>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center dark:bg-blue-800 bg-blue-100`}>
                        <span className={`text-lg font-bold dark:text-white text-blue-600`}>JS</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className={`mt-2 text-lg font-medium dark:text-white text-gray-900`}>
                        &quot;SoftSell helped us recover over $85,000 from unused Adobe and Microsoft licenses. The process was incredibly smooth, and we had the money in our account within three days.&quot;
                      </p>
                      <div className="mt-4">
                        <p className={`text-base font-medium dark:text-white text-gray-900`}>Jennifer Smith</p>
                        <p className={`text-sm dark:text-gray-400 text-gray-500`}>CIO, TechSolutions Inc.</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Testimonial 2 */}
                <motion.div initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1, transition: { default: { type: "spring", delay: 0.2 }, opacity: { ease: "linear", delay: 0.2 } } }} viewport={{ once: true }} className={`p-6 rounded-lg dark:bg-gray-700 bg-white shadow-md`}>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center dark:bg-green-800 bg-green-100`}>
                        <span className={`text-lg font-bold dark:text-white text-green-600`}>DM</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className={`mt-2 text-lg font-medium dark:text-white text-gray-900`}>
                        &quot;After downsizing, we had surplus Salesforce licenses. SoftSell&apos;s valuation was 20% higher than competitors, and their compliance team handled all the transfer paperwork. Excellent service!&quot;
                      </p>
                      <div className="mt-4">
                        <p className={`text-base font-medium dark:text-white text-gray-900`}>David Miller</p>
                        <p className={`text-sm dark:text-gray-400 text-gray-500`}>Finance Director, GrowthWave</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className={`text-3xl font-extrabold tracking-tight sm:text-4xl dark:text-white text-gray-900`}>
                Get a Free License Valuation
              </h2>
              <p className={`mt-4 max-w-2xl mx-auto text-xl dark:text-gray-300 text-gray-500`}>
                Fill out the form below and our team will get back to you within 24 hours with a competitive offer.
              </p>
            </div>

            <div className="mt-12">
              <div className="max-w-lg mx-auto">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Chat Widget */}
      <Chatbot />
    </div>
  );
}