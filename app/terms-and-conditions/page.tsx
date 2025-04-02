import AlphaSection from "@/components/AlphaSection";

export default function Page() {
  return (
    <AlphaSection isTop>
      <TermsAndConditions />
    </AlphaSection>
  );
}

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto shadow-lg rounded-lg overflow-hidden">
        <div className="px-6 py-8">
          <h1 className="text-3xl font-bold mb-8 text-center">
            Terms and Conditions
          </h1>

          {[
            {
              title: "1. Acceptance of Terms",
              content:
                "By accessing and using the AlphaSqr website (hereinafter 'the Website'), you (hereinafter 'the User') agree to be bound by these Terms and Conditions (hereinafter 'Terms'). If you do not agree with any part of these Terms, you must not use the Website.",
            },
            {
              title: "2. Services Provided",
              content:
                "AlphaSqr provides PMS distribution services. The Website may be modified or discontinued at any time without prior notice.",
            },
            {
              title: "3. User Responsibilities",
              content: (
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Accurate Information:</strong> Users are responsible
                    for providing accurate and up-to-date information when
                    required.
                  </li>
                  <li>
                    <strong>Lawful Use:</strong> Users must use the Website for
                    lawful purposes only and refrain from any activity that
                    violates applicable laws or regulations.
                  </li>
                  <li>
                    <strong>Prohibited Conduct:</strong> Users must not engage
                    in any activity that may disrupt, damage, or interfere with
                    the operation of the Website or the experience of other
                    users. This includes, but is not limited to, transmitting
                    viruses, spamming, or engaging in any form of harassment.
                  </li>
                  <li>
                    <strong>Account Security:</strong> Users are responsible for
                    maintaining the confidentiality of their account
                    credentials.
                  </li>
                </ul>
              ),
            },
            {
              title: "4. Intellectual Property",
              content: (
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    All content on the Website, including text, graphics, logos,
                    images, and software, is the property of AlphaSqr or its
                    licensors and is protected by copyright and other
                    intellectual property laws.
                  </li>
                  <li>
                    Users may not reproduce, distribute, or modify any content
                    from the Website without prior written consent from
                    AlphaSqr.
                  </li>
                  <li>
                    Any user generated content, becomes the property of
                    AlphaSqr.
                  </li>
                </ul>
              ),
            },
            {
              title: "5. Disclaimer of Liability",
              content: (
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    AlphaSqr makes no warranties or representations about the
                    accuracy, reliability, or completeness of the content on the
                    Website.
                  </li>
                  <li>
                    AlphaSqr shall not be liable for any direct, indirect,
                    incidental, consequential, or punitive damages arising from
                    the use of the Website.
                  </li>
                  <li>
                    The Website may contain links to third-party websites.
                    AlphaSqr is not responsible for the content or practices of
                    these websites.
                  </li>
                  <li>
                    AlphaSqr is not responsible for any financial loss incurred
                    by the user from information gathered from the website.
                  </li>
                </ul>
              ),
            },
            {
              title: "6. Privacy Policy",
              content:
                "User privacy is important to AlphaSqr. Please refer to our Privacy Policy for information on how we collect, use, and protect your personal information.",
            },
            {
              title: "7. Modifications to Terms",
              content: (
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    AlphaSqr reserves the right to modify these Terms at any
                    time without prior notice. Changes will be effective
                    immediately upon posting on the Website.
                  </li>
                  <li>
                    Continued use of the Website after any modifications
                    constitutes acceptance of the revised Terms.
                  </li>
                </ul>
              ),
            },
            {
              title: "8. Governing Law",
              content: (
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    These Terms shall be governed by and construed in accordance
                    with the laws of New Delhi, India.
                  </li>
                  <li>
                    Any disputes arising from these Terms shall be subject to
                    the exclusive jurisdiction of the courts in New Delhi,
                    India.
                  </li>
                </ul>
              ),
            },
            {
              title: "9. Contact Information",
              content: (
                <p>
                  If you have any questions or concerns about these Terms,
                  please contact us at{" "}
                  <a
                    href="mailto:info@alphasqr.com"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    info@alphasqr.com
                  </a>
                </p>
              ),
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
