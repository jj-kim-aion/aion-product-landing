'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const caseStudies = [
  {
    company: 'Enterprise SaaS Platform',
    industry: 'Software',
    challenge: 'Manual customer onboarding taking 40+ hours per client',
    solution: 'Autonomous AI system handling end-to-end onboarding workflow',
    results: [
      { metric: '95%', label: 'Time Reduction' },
      { metric: '$2M', label: 'Annual Savings' },
      { metric: '98%', label: 'Customer Satisfaction' },
    ],
    quote: 'Aion transformed our onboarding from a 3-day manual process to a 2-hour autonomous workflow.',
  },
  {
    company: 'Financial Services Firm',
    industry: 'Finance',
    challenge: 'Complex compliance reporting requiring 100+ hours monthly',
    solution: 'AI-powered compliance automation with real-time monitoring',
    results: [
      { metric: '87%', label: 'Efficiency Gain' },
      { metric: '100%', label: 'Accuracy Rate' },
      { metric: '24/7', label: 'Monitoring' },
    ],
    quote: 'The autonomous compliance system catches issues before they become problems.',
  },
  {
    company: 'Healthcare Technology',
    industry: 'Healthcare',
    challenge: 'Patient data processing and analysis bottlenecks',
    solution: 'Multi-agent AI system for data processing and insights',
    results: [
      { metric: '10x', label: 'Processing Speed' },
      { metric: '60%', label: 'Cost Reduction' },
      { metric: '99.9%', label: 'Uptime SLA' },
    ],
    quote: 'Our operations now run 24/7 with AI systems that never miss a detail.',
  },
]

export default function Results() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="results" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
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
            Proven <span className="gradient-text">Results</span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            Real businesses achieving transformative outcomes with autonomous AI systems.
          </p>
        </motion.div>

        {/* Case Studies */}
        <div className="space-y-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.company}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="relative p-8 md:p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-primary-500/30 transition-all duration-500">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold font-display mb-2 group-hover:text-primary-400 transition-colors duration-300">
                      {study.company}
                    </h3>
                    <div className="inline-flex px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-sm text-primary-400">
                      {study.industry}
                    </div>
                  </div>
                </div>

                {/* Challenge & Solution */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-primary-400 uppercase tracking-wider">
                      Challenge
                    </div>
                    <p className="text-white/70 leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-primary-400 uppercase tracking-wider">
                      Solution
                    </div>
                    <p className="text-white/70 leading-relaxed">
                      {study.solution}
                    </p>
                  </div>
                </div>

                {/* Results Metrics */}
                <div className="grid grid-cols-3 gap-6 mb-8 p-6 rounded-2xl bg-white/5 border border-white/10">
                  {study.results.map((result, resultIndex) => (
                    <motion.div
                      key={result.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + resultIndex * 0.1 + 0.3 }}
                      className="text-center"
                    >
                      <div className="text-3xl md:text-4xl font-bold font-display gradient-text mb-2">
                        {result.metric}
                      </div>
                      <div className="text-sm text-white/60">
                        {result.label}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Quote */}
                <div className="relative pl-6 border-l-2 border-primary-500/30">
                  <p className="text-lg italic text-white/80 leading-relaxed">
                    "{study.quote}"
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: '$50M+', label: 'Client Value Generated' },
            { value: '1000+', label: 'Hours Automated Weekly' },
            { value: '99.9%', label: 'Average System Uptime' },
            { value: '15+', label: 'Industries Served' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-primary-500/30 transition-all duration-300"
            >
              <div className="text-3xl font-bold font-display gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-white/60">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
