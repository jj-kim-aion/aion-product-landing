'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const steps = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description: 'We analyze your business operations, identify automation opportunities, and design a custom AI architecture aligned with your goals.',
    features: ['Business analysis', 'Opportunity mapping', 'Architecture design', 'ROI projection'],
  },
  {
    number: '02',
    title: 'Build & Deploy',
    description: 'Our team builds and deploys autonomous AI agents that integrate with your systems, trained on your data and workflows.',
    features: ['Custom AI development', 'System integration', 'Testing & validation', 'Production deployment'],
  },
  {
    number: '03',
    title: 'Execute & Optimize',
    description: 'Your AI systems operate autonomously, handling complex tasks while continuously learning and improving performance.',
    features: ['24/7 autonomous operation', 'Real-time monitoring', 'Continuous learning', 'Performance optimization'],
  },
]

export default function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="how-it-works" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24 space-y-4"
        >
          <h2 className="font-display text-display font-bold tracking-tight">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            From initial strategy to fully autonomous execution, we deliver AI systems 
            that transform how your business operates.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="relative grid md:grid-cols-2 gap-8 items-center p-8 md:p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-primary-500/30 transition-all duration-500">
                {/* Number Badge */}
                <div className={`absolute top-8 ${index % 2 === 0 ? 'left-8' : 'right-8'} md:relative md:top-0 md:left-0 md:right-0`}>
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary-500/10 border border-primary-500/20 group-hover:bg-primary-500/20 group-hover:scale-110 transition-all duration-300">
                    <span className="font-display text-3xl font-bold gradient-text">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 0 ? 'md:order-2' : ''}`}>
                  <div className="space-y-4 pt-16 md:pt-0">
                    <h3 className="text-3xl font-bold font-display group-hover:text-primary-400 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-lg text-white/70 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="grid grid-cols-2 gap-3">
                    {step.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                        transition={{ duration: 0.5, delay: index * 0.2 + featureIndex * 0.1 + 0.3 }}
                        className="flex items-center gap-2 text-sm text-white/60"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                        {feature}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Connecting Line (visible on desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-1/2 -bottom-8 w-px h-8 bg-gradient-to-b from-primary-500/50 to-transparent" />
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-white/70 mb-6">
            Ready to transform your business with autonomous AI?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex px-8 py-4 bg-primary-500 text-white rounded-full font-semibold text-lg hover:bg-primary-600 transition-colors duration-200 shadow-xl shadow-primary-500/20"
          >
            Start Your AI Journey
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
