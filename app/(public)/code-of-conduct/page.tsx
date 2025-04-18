import AlphaSection from "@/components/AlphaSection";

export default function Page() {
  return (
    <AlphaSection isTop>
      <CodeOfConduct />
    </AlphaSection>
  );
}
const CodeOfConduct = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto shadow-lg rounded-lg overflow-hidden">
        <div className="px-6 py-8">
          <h1 className="text-3xl font-bold text-center  mb-8">
            Code of Conduct
          </h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold   mb-4">Preamble</h2>
            <p className="  leading-relaxed">
              AlphaSqr is dedicated to maintaining the highest ethical and
              regulatory standards in the distribution of Portfolio Management
              Services (PMS). This Code of Conduct outlines the principles and
              practices that AlphaSqr is required to uphold.
            </p>
          </section>

          {[
            {
              title: "1. Investor Interest Paramount",
              content:
                "AlphaSqr considers the investor's interest as paramount and takes all necessary steps to ensure its protection in all circumstances.",
            },
            {
              title: "2. Regulatory Compliance",
              content:
                "AlphaSqr adheres to SEBI Portfolio Management Regulations and guidelines related to distribution, selling, and advertising practices.",
            },
            {
              title: "3. Sales and Promotional Materials",
              content:
                "AlphaSqr complies with SEBI guidelines in the preparation of sales, promotional, and other literature about PMS schemes.",
            },
            {
              title: "4. Disclosure of Commissions",
              content:
                "AlphaSqr discloses to investors all material information, including commissions received for soliciting a PMS strategy.",
            },
            {
              title: "5. Prohibition of Assured Returns",
              content:
                "AlphaSqr abstains from indicating or assuring returns on any strategy.",
            },
            {
              title: "6. Infrastructure and Service Standards",
              content:
                "AlphaSqr maintains the necessary infrastructure to support Portfolio Managers in maintaining high service standards. AlphaSqr ensures the timely and efficient dispatch of disclosure documents, portfolio statements, fee statements, audit reports, and other required materials.",
            },
            {
              title: "7. Staying Informed",
              content:
                "AlphaSqr keeps abreast of developments in the PMS industry, changes in disclosure documents, controlling interests, and other material aspects. AlphaSqr deals with investors appropriately based on up-to-date information.",
            },
            {
              title: "8. Confidentiality",
              content:
                "AlphaSqr maintains confidentiality of all investor details, deals, and transactions.",
            },
            {
              title: "9. Suitability and Ethical Recommendations",
              content:
                "AlphaSqr places the investor's interest and suitability to their financial needs above all else. Extra commissions or incentives are never the basis for recommending a PMS strategy.",
            },
            {
              title: "10. Prohibition of Rebates and Malpractices",
              content:
                "AlphaSqr does not rebate commissions back to investors or attract them through rebates or gifts. AlphaSqr avoids commission-driven malpractices, such as recommending inappropriate strategies for higher commissions.",
            },
            {
              title: "11. Fair Comparisons and Statements",
              content:
                "AlphaSqr abstains from making negative statements about other Portfolio Managers or strategies. AlphaSqr ensures comparisons are made with similar and comparable products, with complete facts.",
            },
            {
              title: "12. Certifications and Registrations",
              content:
                "Relevant individuals associated with AlphaSqr have obtained NISM certification and are registered with AMFI.",
            },
            {
              title: "13. Know Your Distributor (KYD) Compliance",
              content: "AlphaSqr complies with AMFI's KYD norms.",
            },
            {
              title: "14. Document Provision",
              content:
                "AlphaSqr provides all investor documents required for Anti-Money Laundering/Combating Financing of Terrorism compliance, including KYC documents, Power of Attorney, and investor agreements.",
            },
            {
              title: "15. Document Attestation and IPV",
              content:
                "AlphaSqr is diligent in attesting/certifying investor documents and performing In-Person Verification (IPV) according to SEBI/KRA guidelines.",
            },
            {
              title: "16. Ethical Standards and Due Diligence",
              content:
                "AlphaSqr observes high standards of ethics, integrity, and fairness in dealings with investors, Portfolio Managers, advisers, and other intermediaries. AlphaSqr renders high standards of service, exercises due diligence, and ensures proper care.",
            },
          ].map((section, index) => (
            <section key={index} className="mb-8">
              <h2 className="text-2xl font-semibold   mb-4">{section.title}</h2>
              <p className="  leading-relaxed">{section.content}</p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};
