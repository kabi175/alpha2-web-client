"use client";

import { ArrowDownIcon, BarChart4Icon, TextSearch, DatabaseIcon, StarIcon } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
    {
        title: "Data Sourcing",
        icon: <DatabaseIcon className="w-6 h-6" />,
        content: "Comprehensive review of 400+ pages on SEBI's website to source and aggregate data across 1,470 PMS schemes. Data includes fund manager details, scheme information, returns, and CAGR metrics.",
    },
    {
        title: "Data Cleanup",
        icon: <TextSearch className="w-6 h-6" />,
        content: "Remove inactive schemes and schemes with less than Rs 25 crore AUM to ensure data quality.",
    },
    {
        title: "Data Enrichment",
        icon: <BarChart4Icon className="w-6 h-6" />,
        content: "Calculate annual returns, standard deviation, and lower range of expected returns to create a comprehensive analysis framework.",
    },
];

const categories = [
    {
        title: "Top Picks",
        criteria: [
            "Scheme AUM ≥ ₹250 crore",
            "Track record ≥ 5 years",
            "No annual loss >30% in past 5 years",
            "5Y CAGR in top quartile",
            "Low standard deviation and high Sharpe ratio",
        ],
    },
    {
        title: "Consistent Compounders",
        criteria: [
            "Track record ≥ 5 years and AUM ≥ ₹100 crore",
            "Outperform Nifty 50 on 3Y, 4Y, and 5Y CAGR",
            "6-month beta must not exceed 1.5x Nifty 50",
        ],
    },
    {
        title: "Top Grossers",
        criteria: [
            "Funds with highest total AUMs",
            "Top-performing scheme selection",
            "Minimum scheme-level AUM ≥ ₹25 crore",
        ],
    },
    {
        title: "Sector Leaders",
        criteria: [
            "Schemes from top-tier AMCs",
            "Leading BFSI institutions",
            "One representative scheme per fund",
        ],
    },
    {
        title: "Elite Fund Managers",
        criteria: [
            "15+ years experience managing public money",
            "Mutual funds or institutional investing background",
            "One representative scheme per fund",
        ],
    },
    {
        title: "Rising Stars",
        criteria: [
            "PMS fund AUM < ₹500 crore",
            "Scheme AUM ≥ ₹50 crore",
            "Top-quartile performer in last two calendar years",
        ],
    },
];

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
            <main className="container mx-auto px-4 py-16 max-w-7xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                        AlphaSqr&apos;s Methodology
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Identifying PMS managers who prioritize consistent compounding and capital preservation through a transparent and rigorous methodology.
                    </p>
                </motion.div>

                {/* Process Steps */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-primary/10 rounded-lg">
                                    {step.icon}
                                </div>
                                <h2 className="text-xl font-semibold">{step.title}</h2>
                            </div>
                            <p className="text-muted-foreground">{step.content}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Categories Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
                        >
                            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                <StarIcon className="w-5 h-5 text-primary" />
                                {category.title}
                            </h3>
                            <ul className="space-y-2">
                                {category.criteria.map((criterion, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                                        <ArrowDownIcon className="w-4 h-4 mt-1 text-primary" />
                                        {criterion}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </main>
        </div>
    );
}