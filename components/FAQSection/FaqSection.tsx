"use client";

import React from "react";
import { FaqItem } from "./FaqItem";

const faqData = [
  {
    question: "What is Portfolio Management Services?",
    answer:
      "Portfolio Management Services (PMS) are specialized investment solutions provided by expert portfolio managers, tailored to meet individual investment goals based on factors such as risk tolerance, returns and diversification. Several portfolio management firms in India offer these services, aiming to generate high returns through well-diversified investment strategies.",
  },
  {
    question: "What are the different types of Portfolio Management Services?",
    answer:
      "Services can be either discretionary (where the fund manager makes investment decisions on behalf of clients) or non-discretionary (where the investor makes the final decision, with the fund manager providing advice), depending on the fund house. In India, most of the funds operate under a discretionary model.",
  },
  {
    question: "How does Portfolio Management Services work??",
    answer:
      "Portfolio Management Services (PMS) function by designing and managing a personalized investment portfolio tailored to the client’s risk tolerance, financial goals, and overall financial situation. Following an initial assessment, the portfolio manager actively oversees the portfolio, making strategic decisions—such as buying or selling assets—to optimize returns and manage risk. Clients receive regular updates and performance reports to keep them informed.",
  },
  {
    question: "How do PMS deliver better alpha than mutual funds?",
    answer: `Most mutual fund AMCs also offer PMS, with similar investment strategies across both. 
However, PMS typically delivers superior returns due to three key factors:\n
<br />
<br />
a) Stock Holding Limits: SEBI regulations cap mutual fund exposure to a single stock at 10% of AUM, forcing fund managers to trim outperformers and reinvest in suboptimal alternatives. PMS faces no such restriction, allowing for sustained investment in multibaggers.
<br />
<br />
b) Liquidity Constraints: Mutual funds must maintain at least 65% of AUM in equities, limiting their ability to exit during market corrections or bear phases. PMS has no such mandate, enabling better downside protection.
<br />
<br />
c) Tactical Flexibility: PMS can capitalize on corporate actions like buybacks and demergers, which mutual funds, due to their large AUM, often cannot exploit.`,
  },
  {
    question: "Can PMS guarantee returns?",
    answer: `No equity investment can guarantee returns. If any financial intermediary promises guaranteed returns, please report them to SEBI. Avoid falling for such false and misleading claims.
<br />
<br />
As equity investors we can be guided by the long-term correlation between economic growth and equity market returns. But it is not always straightforward or one-to-one. 
<br />
<br />
Over the long term, stock markets tend to reflect economic growth because corporate earnings grow in line with GDP. A growing economy leads to higher corporate profits, increased consumer spending, and stronger business investments, all of which drive stock prices up. Historically, countries with higher GDP growth have seen strong equity market performance over the long run.
`,
  },
  {
    question: "Are investments in PMS safe?",
    answer: `Your funds with a Portfolio Management Service (PMS) are generally safe, provided you have chosen a SEBI-registered PMS. 

<br />
<br />
The Securities and Exchange Board of India (SEBI) has severe standards in place for PMS managers in terms of experience and operating norms:
<br />
<br />

• The PMS provider opens a separate Demat and bank account in your name.
<br />
<br />
• Funds are transferred from your personal bank account to this dedicated PMS bank account.
<br />
<br />
• Securities bought and sold remain in your individual Demat account, ensuring transparency.
<br />
<br />
• The PMS provider only has limited Power of Attorney (PoA) to manage trades but cannot withdraw funds.
<br />
<br />
• You receive regular statements directly from the custodian and depository (like NSDL/CDSL), adding another layer of security.
<br />
<br />

So rest assured when it comes to safety!`,
  },
  {
    question: "What are the advantages & disadvantages of PMS?",
    answer: `Advantages: PMS provides expert-driven, customized investment solutions that often lead to better investment decisions and higher potential returns compared to traditional options.
<br />
<br />
1. Personalized Approach: Tailored investment strategies based on individual financial goals and risk tolerance.
<br />
<br />
2. Transparency: Clients receive detailed reports and updates on their investments.
<br />
<br />
3. Flexibility: Portfolios can be adjusted based on market conditions.
<br />
<br />
4. Diverse Opportunities: Access to exclusive investment options beyond traditional markets.
<br />
<br />
5. Tax Efficiency: Active management enables better tax optimization.
<br />
<br />
6. Direct Ownership: Clients own securities directly, offering more control.
<br />
<br />
7. Dedicated Manager: A professional portfolio manager actively monitors and manages investments.
<br />
<br />
8. Real-Time Monitoring: Advanced tools track portfolios, ensuring timely interventions.
<br />
<br />
9. Higher Potential Returns: Expert-driven active management enhances return potential.
<br />
<br />
    
Disadvantages:
<br />
<br />
1. High Entry Barrier: Requires a significant minimum investment starting at Rs 50 lakh and can be higher for some PMS.
<br />
<br />
2. High Fees: Management fees can be substantial, and underperformance may erode profits.`,
  },
  {
    question: "What are the important features of PMS",
    answer: `Customization: Tailored investment strategies based on individual goals and risk tolerance.
<br />
<br />
Asset Allocation: Diversified investments across equities, fixed income, real estate, commodities, and alternatives.
<br />
<br />
Risk Assessment: Informed decision-making through accurate risk evaluation.
<br />
<br />
Professional Management: Expertise from portfolio managers and research teams.
<br />
<br />
Research-Based Decisions: Unbiased investments backed by in-depth analysis.
<br />
<br />
Transparency: Detailed reporting on performance, fees, and transactions.
<br />
<br />
Diversification: Spreading investments to reduce risk and maximize returns.
<br />
<br />
Cost-Effectiveness: Higher fees justified by expert guidance and consistent growth.
<br />
<br />
Adaptability: Strategies evolve with market conditions.    
`,
  },
  {
    question: "What are Portfolio Management Services charges?",
    answer: `PMS typically involves three types of charges:
<br />
<br />
1. Management Fees: Annual charges for professional portfolio management, research, and resources used to align investments with market conditions
<br />
<br />
2. Performance Fees: Charged when portfolio returns exceed a specified benchmark, ensuring that portfolio managers are incentivized to achieve superior performance.
<br />
<br />
3. Entry & Exit Load: One-time fees applied at the beginning (entry load) or when withdrawing investments before a set period (exit load), covering administrative costs and discouraging premature withdrawals.`,
  },
  {
    question: "How to choose the right PMS fee structure?",
    answer: `PMS providers in India offer varying fee structures based on portfolio size, services, and complexity. Some firms provide competitive pricing for larger portfolios, while others include additional services like tax consultancy. Before selecting a PMS, investors should compare charges, evaluate performance, and ensure the fees justify the returns. Understanding these costs helps in making informed investment decisions.`,
  },
  {
    question: "Are the returns post fees?",
    answer: `All returns mentioned on our website are pre-tax i.e., post all fees, commissions, charges etc.`,
  },
  {
    question: "How are PMS taxed?",
    answer: `Pass-through PMS Taxation: Since under a PMS, investments are held directly in the investor’s name (and not via a trust like in a Mutual Fund or AIF), the tax liability for the PMS investor is the same as the investor directly buying or selling shares/securities in his own name.
<br />
<br />
  • Equity Capital Gains:12.5% (LT – greater than 1 year holding with a Rs 1.25 lakh exemption) / 20% (ST – less than 1 year holding) 
<br />
<br />
  • Equity Dividend Income: added to income tax slab
<br />
<br />
It is noteworthy that while in Mutual Funds tax is payable when the investor redeems the unit, in case of PMS tax is payable when the PMS Manager exits a stock. However, many PMS managers do tax arbitrage and tax planning to reduce overall tax outflow.
    `,
  },
  {
    question: "What is the minimum ticket size of PMS?",
    answer: `SEBI mandates a minimum ticket size of Rs 50 lakhs for PMS. However, individual PMS schemes may have a higher cut-off.
<br />
<br />
An investor can also transfer their existing shares and demat mutual funds to meet the minimum investment requirement for a Portfolio Management Service (PMS).`,
  },
  {
    question: "Can I do SIP in PMS?",
    answer: `Some PMS schemes allow monthly or quarterly SIP.`,
  },
  {
    question: "What is the entry load of PMS?",
    answer: `SEBI mandates zero entry load.`,
  },
  {
    question: "Can I withdraw from PMS?",
    answer: `Yes. There is no lock-in and you can withdraw from PMS at anytime. However, we recommend staying invested for at least five years to reap meaningful benefits.
<br />
<br />
Most PMS don’t charge exit loads. Some PMS may charge exit load but the maximum exit load is capped at 3% for exit within year 1, 2% for exit within year 2, and 1% for exit within year 3. `,
  },
  {
    question: "Can NRIs invest in PMS in India?",
    answer: `Yes, NRIs with an up-to-date KYC and a demat account can invest in PMS Services in India through their NRE or NRO accounts.`,
  },
  {
    question: "Who should consider Portfolio Management Services investments?",
    answer: `We recommend that investors with an equity and mutual fund corpus of ₹1.5 crore or more, and an investment horizon of at least five years, consider allocating a portion of their portfolio to PMS for enhanced diversification and potential long-term growth.`,
  },
  {
    question: "How to Choose the Best Performing PMS Schemes in India",
    answer: `Choosing the right Portfolio Management Service (PMS) can be challenging, given the numerous options available. Here are key factors to consider for making an informed decision:
    
<br />
<br />
    1. Track Record:
       Evaluate the PMS scheme’s past performance across different market cycles. A history of strong and consistent returns, particularly during downturns, indicates resilience and effective management. While past performance isn’t a guarantee of future results, it offers insights into the scheme’s ability to navigate various market conditions.
<br />
<br />
    
    2. Expertise of the Manager:
       The experience and track record of the portfolio manager and their team are crucial. Assess their professional background, years of experience, and investment philosophy to ensure alignment with your financial goals and risk appetite. A team with a clear, proven strategy is more reliable.
<br />
<br />
    
    3. Fee Structure:
       Management fees can significantly impact net returns. Compare fee structures across PMS providers and ensure the charges are justified by the services offered. The most expensive service isn’t always the best, and the cheapest may lack essential features.
<br />
<br />
    
    4. Asset Allocation Strategy:
       A well-diversified portfolio spreads investments across equities, bonds, commodities, and other asset classes, reducing exposure to underperforming sectors. Ensure that the PMS strategy aligns with your risk tolerance and investment horizon, avoiding excessive concentration in a single asset class.
<br />
<br />
    
    5. Transparency & Customer Service:
       Regular updates on portfolio performance, asset allocation changes, and market insights are vital. Choose a PMS provider that values transparency and provides easy access to customer support for queries and concerns.    
      `,
  },
  {
    question: "How does AlphaSqr Assist in Selection Right PMS Scheme",
    answer: `We are an independent platform dedicated to helping you select the PMS that best aligns with your financial goals and risk tolerance.
<br />
<br />
    Our data scientists actively track and analyze PMS performance, selecting only the best risk-adjusted funds and matching them to the right investor profile.
<br />
<br />
    Our advisors take the time to understand your needs, offering thoughtful and unbiased guidance—just as we would for our own family. Beyond simply recommending PMS options, our goal is to ensure you gain a deep understanding of these products, empowering you to make informed investment decisions.`,
  },
  {
    question: "What are the service charges of AlphaSqr?",
    answer:
      "AlphaSqr does not charge any direct fees from customers. Instead, we earn a distribution commission from the PMS manager. This commission is transparently displayed in the client's performance statement every month, ensuring full disclosure and clarity in our fee structure.",
  },
  {
    question:
      "What happens if AlphaSqr or the PMS goes bankrupt/out-of-business?",
    answer: `AlphaSqr ensures that your investments are managed securely and effectively. Your funds are invested in a regulated PMS. 
<br />
<br />
A demat account is opened in your name with an accredited custodian, ensuring full transparency and ownership. In the unlikely event of AlphaSqr’s bankruptcy, your investments remain unaffected—you retain full control and can either manage or withdraw them from the PMS or directly from the demat account.`,
  },
  {
    question: "How can I contact/ get support from AlphaSqr?",
    answer:
      "Our support team can be reached through whatsapp/calls [+91 99589 05337] and email",
  },
];

export const FaqSection: React.FC = () => {
  return (
    <section
      id="faqs"
      className="flex flex-col items-start pt-24 pr-60 pb-36 pl-60 w-full min-h-[screen] max-md:px-32 max-md:py-16 max-sm:px-5 max-sm:py-10"
    >
      <div className="flex flex-col gap-12 items-start w-full max-w-[1036px]">
        <h1 className="text-5xl font-medium tracking-tighter leading-normal text-white max-md:text-4xl max-sm:text-3xl">
          FAQs
        </h1>
        <div className="flex flex-col gap-4 justify-center items-start w-full">
          {faqData.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
