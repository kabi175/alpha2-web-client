import AlphaSection from "@/components/AlphaSection";

export default function Page() {
  return (
    <AlphaSection isTop>
      <Disclaimer />
    </AlphaSection>
  );
}
const Disclaimer = () => {
  return (
    <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto  shadow-lg rounded-lg overflow-hidden">
        <div className="px-6 py-8">
          <h1 className="text-3xl font-bold text-center mb-8"> Disclaimer</h1>

          {[
            {
              title: "1. General Disclaimer",
              content:
                "The information provided on the AlphaSqr website ('the Website') is for general informational purposes only. It should not be considered as professional advice, including but not limited to financial, investment, legal, or tax advice. You should consult with a qualified professional before making any decisions based on the information provided on this Website.",
            },
            {
              title: "2. Accuracy and Completeness",
              content:
                "While we strive to provide accurate and up-to-date information, AlphaSqr makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the Website or the information, products, services, or related graphics contained on the Website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.",
            },
            {
              title: "3. Investment Disclaimer",
              content: (
                <ul className="list-disc pl-6 space-y-2">
                  <li>Investments are subject to market risks.</li>
                  <li>Past performance is not indicative of future results.</li>
                  <li>You may lose some or all of your invested capital.</li>
                  <li>
                    Investments in securities market are subject to market
                    risks. Read all the related documents carefully before
                    investing.
                  </li>
                  <li>
                    Registration granted by SEBI, membership of BSE and
                    certification from NISM in no way guarantee performance of
                    the intermediary or provide any assurance of returns to
                    investors.
                  </li>
                  <li>
                    AlphaSqr does not provide personalized investment advice.
                    Any investment decisions you make are solely your
                    responsibility.
                  </li>
                  <li>
                    It&rsquo;s essential that you consult your financial advisor
                    before making any investment decisions to ensure they align
                    with your financial goals and risk tolerance.
                  </li>
                  <li>
                    We do not offer financial planning, risk assessment or
                    customization of offerings. We operate strictly as per
                    requirements of the SEBI PMS Distributor regulations.
                  </li>
                  <li>
                    Any tools or calculators provided are for informational
                    purposes only, and should not be used as the sole source of
                    any investment decision.
                  </li>
                  <li>
                    The terms &rsquo;Advisor&rsquo; or &rsquo;Expert&rsquo; used
                    on this website do not imply a Registered Investment Advisor
                    or Financial Planner designation. They solely refer to an
                    associate or employee of AlphaSqr.
                  </li>
                </ul>
              ),
            },
            {
              title: "4. Limitation of Liability",
              content:
                "In no event will AlphaSqr be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this Website.",
            },
            {
              title: "5. Third-Party Links",
              content:
                "Through this Website, you may be able to link to other websites which are not under the control of AlphaSqr. We have no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.",
            },
            {
              title: "6. Website Availability",
              content:
                "Every effort is made to keep the Website up and running smoothly. However, AlphaSqr takes no responsibility for, and will not be liable for, the Website being temporarily unavailable due to technical issues beyond our control.",
            },
            {
              title: "7. Changes to Disclaimer",
              content:
                "AlphaSqr reserves the right to modify this Disclaimer at any time without prior notice. Changes will be effective immediately upon posting on the Website. Your continued use of the website represents your agreement to the new policy.",
            },
            {
              title: "8. No Endorsement",
              content:
                "Any mention of products, services, or organizations on the Website does not imply endorsement by AlphaSqr.",
            },
            {
              title: "9. Assumption of Risk",
              content:
                "By using this website, you acknowledge that you understand and assume all risks associated with your use of the website.",
            },
          ].map((section, index) => (
            <section key={index} className="mb-8">
              <h2 className="text-2xl font-semibold   mb-4">{section.title}</h2>
              <div className="  leading-relaxed">
                {typeof section.content === "string" ? (
                  <p>{section.content}</p>
                ) : (
                  section.content
                )}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};
