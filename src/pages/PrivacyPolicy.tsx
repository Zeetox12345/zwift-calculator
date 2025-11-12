import { useEffect } from "react";
import AnimatedText from "@/components/AnimatedText";
import { Card, CardContent } from "@/components/ui/card";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      {/* Header Section */}
      <section className="relative pt-24 md:pt-32 pb-8 md:pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zwift-orange/10 to-transparent -z-10"></div>
        
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <AnimatedText delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Privacy <span className="zwift-gradient-text">Policy</span>
              </h1>
            </AnimatedText>
            <AnimatedText delay={200} className="mt-4">
              <p className="text-muted-foreground">Effective Date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' })}</p>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 md:py-12 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2">
              <CardContent className="p-6 md:p-8 space-y-6 text-muted-foreground leading-relaxed">
                <div>
                  <p>
                    At ZwiftCalculator.com, your privacy matters. This Privacy Policy explains what data we collect, how we use it, and the choices you have. By using our website, you agree to the practices described here.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">1) Information We Collect</h2>
                  <p className="mb-2"><strong className="text-foreground">Personal Information (you provide):</strong> If you contact us or subscribe (e.g., name, email address).</p>
                  <p><strong className="text-foreground">Usage/Technical Data (automatic):</strong> IP address, browser type, device info, pages visited, and similar analytics data collected via cookies and similar technologies.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">2) How We Use Information</h2>
                  <p>We use information to:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1 mt-2">
                    <li>Operate, maintain, and improve the site and user experience.</li>
                    <li>Analyze traffic and performance.</li>
                    <li>Personalize content and ads.</li>
                    <li>Communicate with you and respond to inquiries.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">3) Cookies & Similar Technologies</h2>
                  <p>We use cookies, local storage, and similar tech to:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1 mt-2">
                    <li>Remember preferences.</li>
                    <li>Measure site performance.</li>
                    <li>Serve personalized and non-personalized ads via third-party partners.</li>
                  </ul>
                  <p className="mt-2">You can manage cookies in your browser settings. Disabling cookies may affect site functionality.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">4) Advertising & Third-Party Partners</h2>
                  <p>
                    We partner with third-party advertising partners to display ads. These partners may use cookies, web beacons, device identifiers, and similar technologies to deliver and measure ads and to personalize content. Some partners may receive limited data to provide analytics, ad measurement, fraud prevention, and similar services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">5) Your Privacy Rights (GDPR/EEA)</h2>
                  <p className="mb-2">If you are in the European Economic Area, you have rights to:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Access, correct, or delete personal data we hold about you.</li>
                    <li>Object to or restrict certain processing.</li>
                    <li>Data portability where applicable.</li>
                    <li>Withdraw consent at any time (this won't affect prior lawful processing).</li>
                    <li>Lodge a complaint with your local Data Protection Authority.</li>
                  </ul>
                  <p className="mt-2">
                    To exercise these rights, contact us at{" "}
                    <a href="mailto:zwiftcalculator@gmail.com" className="text-zwift-orange hover:text-zwift-orange/80 underline">
                      zwiftcalculator@gmail.com
                    </a>
                    . You can also adjust consent preferences via our cookie banner (where available).
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">6) Your Privacy Rights (CCPA/CPRA – California)</h2>
                  <p className="mb-2">California residents may:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Request disclosure of categories and specific pieces of personal information collected, used, or disclosed.</li>
                    <li>Request deletion of personal information (subject to exceptions).</li>
                    <li>Opt out of "sale"/"sharing" of personal information for cross-context behavioral advertising.</li>
                  </ul>
                  <p className="mt-2">
                    Submit requests to{" "}
                    <a href="mailto:zwiftcalculator@gmail.com" className="text-zwift-orange hover:text-zwift-orange/80 underline">
                      zwiftcalculator@gmail.com
                    </a>
                    . We will not discriminate against you for exercising your rights.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">7) Legal Bases for Processing (EEA Users)</h2>
                  <p>We rely on one or more of the following:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1 mt-2">
                    <li>Consent (e.g., analytics, personalized ads via the consent banner).</li>
                    <li>Legitimate interests (e.g., site security, basic analytics).</li>
                    <li>Performance of a contract (providing requested services).</li>
                    <li>Compliance with legal obligations.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">8) Data Retention</h2>
                  <p>
                    We keep personal data only as long as necessary for the purposes described in this policy, to comply with legal obligations, resolve disputes, and enforce agreements.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">9) Data Security</h2>
                  <p>
                    We use reasonable administrative, technical, and physical safeguards to protect personal information. No method of transmission or storage is 100% secure.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">10) Children's Privacy</h2>
                  <p>
                    Our site is not intended for children under 13 (or under 16 in certain jurisdictions). We do not knowingly collect personal information from children. If you believe a child has provided us personal information, contact us and we will delete it.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">11) International Transfers</h2>
                  <p>
                    Your information may be processed in countries outside your own, which may have different data protection laws. Where required, we implement safeguards (such as standard contractual clauses).
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">12) Links to Other Sites</h2>
                  <p>
                    We may link to external sites we don't operate. We're not responsible for their content or privacy practices. Review their privacy policies.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">13) Changes to This Policy</h2>
                  <p>
                    We may update this Privacy Policy from time to time. The "Effective Date" at the top reflects the latest version. Continued use of the site means you accept the updated policy.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">14) Contact Us</h2>
                  <p>
                    If you have questions or requests regarding this Privacy Policy or your data, contact us:
                  </p>
                  <p className="mt-2">
                    Email:{" "}
                    <a href="mailto:zwiftcalculator@gmail.com" className="text-zwift-orange hover:text-zwift-orange/80 underline">
                      zwiftcalculator@gmail.com
                    </a>
                  </p>
                  <p>
                    Website: ZwiftCalculator.com
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;

