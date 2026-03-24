'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const services = [
  {
    title: 'AI Strategy & Architecture',
    description: 'We design end-to-end AI systems tailored to your business operations, identifying high-impact automation opportunities and building scalable architectures.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
  },
  {
    title: 'Implementation & Integration',
    description: 'Our autonomous AI agents integrate seamlessly with your existing systems, handling complex workflows from data processing to customer interactions.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Enterprise Automation',
    description: 'Deploy production-grade AI systems that operate 24/7, making intelligent decisions, managing workflows, and driving measurable business outcomes.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
]

export default function WhatWeDo() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="what-we-do" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 space-y-4"
        >
          <h2 className="font-display text-display font-bold tracking-tight">
            What We <span className="gradient-text">Do</span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            From strategy to execution, we deliver autonomous AI systems that transform 
            business operations and drive measurable results.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative"
            >
              <div className="relative h-full p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:border-primary-500/30 hover:shadow-2xl hover:shadow-primary-500/10">
                {/* Icon */}
                <div className="mb-6 inline-flex p-3 rounded-xl bg-primary-500/10 text-primary-400 group-hover:bg-primary-500/20 group-hover:scale-110 transition-all duration-300">
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold font-display mb-4 group-hover:text-primary-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {service.description}
                </p>

                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-primary-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Feature Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-primary-500/10 via-primary-600/5 to-transparent border border-primary-500/20 backdrop-blur-sm"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold font-display">
                Beyond Traditional Consulting
              </h3>
              <p className="text-lg text-white/70 leading-relaxed">
                While others deliver PowerPoint decks, we deliver working AI systems. 
                Our autonomous agents don't just recommend solutions—they execute them, 
                learning and adapting to your business needs in real-time.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: 'Custom AI Systems', value: 'Built for You' },
                { label: 'Real-time Learning', value: 'Adaptive AI' },
                { label: 'Full Integration', value: 'Seamless' },
                { label: 'Ongoing Support', value: '24/7 Monitoring' },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  className="p-4 rounded-xl bg-white/5 border border-white/10"
                >
                  <div className="text-sm text-white/60 mb-1">{item.label}</div>
                  <div className="text-lg font-semibold text-primary-400">{item.value}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
