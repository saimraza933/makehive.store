import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">Terms of Service</h1>
            <p className="text-xl text-muted-foreground">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6">1. Agreement to Terms</h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                By accessing and using CraftBloom ("the Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our Service.
              </p>

              <h2 className="text-3xl font-bold mb-6 mt-10">2. Use of Service</h2>
              <h3 className="text-xl font-semibold mb-4">2.1 Eligibility</h3>
              <p className="mb-4 text-muted-foreground leading-relaxed">
                You must be at least 18 years old to use CraftBloom. By using the Service, you represent and warrant that you meet this age requirement.
              </p>

              <h3 className="text-xl font-semibold mb-4">2.2 Account Registration</h3>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                <li>You must provide accurate and complete information when creating an account</li>
                <li>You are responsible for maintaining the confidentiality of your account credentials</li>
                <li>You are responsible for all activities that occur under your account</li>
                <li>You must notify us immediately of any unauthorized access to your account</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">2.3 Prohibited Activities</h3>
              <p className="mb-2 text-muted-foreground">You agree not to:</p>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon intellectual property rights of others</li>
                <li>Upload malicious code, viruses, or harmful content</li>
                <li>Engage in fraudulent activities or misrepresentation</li>
                <li>Harass, abuse, or harm other users</li>
                <li>Attempt to gain unauthorized access to the Service</li>
                <li>Use automated systems to scrape or collect data</li>
                <li>Resell or redistribute purchased digital content without permission</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 mt-10">3. Marketplace Terms</h2>
              <h3 className="text-xl font-semibold mb-4">3.1 Buyer Responsibilities</h3>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                <li>Provide accurate shipping and payment information</li>
                <li>Pay for all orders placed through your account</li>
                <li>Communicate respectfully with sellers</li>
                <li>Review and comply with individual seller policies</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">3.2 Seller Responsibilities</h3>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                <li>Accurately represent products with honest descriptions and photos</li>
                <li>Ship physical items within stated timeframes</li>
                <li>Provide working digital downloads</li>
                <li>Respond to buyer inquiries within 48 hours</li>
                <li>Honor your stated return and refund policies</li>
                <li>Comply with all applicable tax laws and regulations</li>
                <li>Only sell items you have the legal right to sell</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 mt-10">4. Payment and Fees</h2>
              <h3 className="text-xl font-semibold mb-4">4.1 Payment Processing</h3>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                All payments are processed securely through our third-party payment processor. We do not store complete credit card information on our servers. By making a purchase, you authorize us to charge your payment method.
              </p>

              <h3 className="text-xl font-semibold mb-4">4.2 Seller Fees</h3>
              <p className="mb-2 text-muted-foreground">Sellers agree to pay:</p>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                <li>5% commission on each sale</li>
                <li>Standard payment processing fees (varies by payment method)</li>
                <li>No listing fees or monthly subscription charges</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">4.3 Refunds</h3>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Refund eligibility is determined by our Refund Policy and individual seller policies. CraftBloom reserves the right to issue refunds at our discretion in cases of fraud or significant policy violations.
              </p>

              <h2 className="text-3xl font-bold mb-6 mt-10">5. Intellectual Property</h2>
              <h3 className="text-xl font-semibold mb-4">5.1 CraftBloom Content</h3>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                All content on CraftBloom, including logos, designs, text, graphics, and software, is owned by CraftBloom or licensed to us. You may not copy, reproduce, or distribute this content without written permission.
              </p>

              <h3 className="text-xl font-semibold mb-4">5.2 User Content</h3>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                You retain ownership of content you create and upload (tutorials, product listings, reviews). By uploading content, you grant CraftBloom a non-exclusive, worldwide license to use, display, and distribute your content on our platform. You represent that you have all necessary rights to grant this license.
              </p>

              <h3 className="text-xl font-semibold mb-4">5.3 Copyright Infringement</h3>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                We respect intellectual property rights. If you believe content on CraftBloom infringes your copyright, please contact us with detailed information. Repeated copyright violations will result in account termination.
              </p>

              <h2 className="text-3xl font-bold mb-6 mt-10">6. Privacy and Data</h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your personal information. By using CraftBloom, you consent to our data practices as described in the Privacy Policy.
              </p>

              <h2 className="text-3xl font-bold mb-6 mt-10">7. Disclaimers and Limitation of Liability</h2>
              <h3 className="text-xl font-semibold mb-4">7.1 Service Provided "As Is"</h3>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                CraftBloom is provided "as is" without warranties of any kind. We do not guarantee uninterrupted or error-free service. We are not responsible for content accuracy, quality of products, or interactions between buyers and sellers.
              </p>

              <h3 className="text-xl font-semibold mb-4">7.2 Limitation of Liability</h3>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                To the maximum extent permitted by law, CraftBloom shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the Service. Our total liability shall not exceed the amount you paid to CraftBloom in the past 12 months.
              </p>

              <h2 className="text-3xl font-bold mb-6 mt-10">8. Dispute Resolution</h2>
              <h3 className="text-xl font-semibold mb-4">8.1 Buyer-Seller Disputes</h3>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Users should first attempt to resolve disputes directly. If resolution cannot be reached, either party may contact CraftBloom support for mediation. Our decision in disputes is final.
              </p>

              <h3 className="text-xl font-semibold mb-4">8.2 Arbitration</h3>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Any disputes between you and CraftBloom shall be resolved through binding arbitration rather than in court, except where prohibited by law. You waive your right to participate in class action lawsuits.
              </p>

              <h2 className="text-3xl font-bold mb-6 mt-10">9. Termination</h2>
              <p className="mb-2 text-muted-foreground">We may suspend or terminate your account if:</p>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                <li>You violate these Terms of Service</li>
                <li>We suspect fraudulent or illegal activity</li>
                <li>Your account remains inactive for over 24 months</li>
                <li>We discontinue the Service (with 30 days notice)</li>
              </ul>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                You may close your account at any time by contacting support. Upon termination, your access to the Service will cease, but these Terms will continue to apply to past use.
              </p>

              <h2 className="text-3xl font-bold mb-6 mt-10">10. Changes to Terms</h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                We reserve the right to modify these Terms at any time. We will notify users of significant changes via email or site notification. Continued use of the Service after changes constitutes acceptance of the new Terms.
              </p>

              <h2 className="text-3xl font-bold mb-6 mt-10">11. General Provisions</h2>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                <li><strong>Governing Law:</strong> These Terms are governed by the laws of the United States and the state in which CraftBloom is registered</li>
                <li><strong>Severability:</strong> If any provision is found unenforceable, the remaining provisions remain in effect</li>
                <li><strong>Entire Agreement:</strong> These Terms constitute the entire agreement between you and CraftBloom</li>
                <li><strong>No Waiver:</strong> Our failure to enforce any right does not waive that right</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 mt-10">12. Contact Information</h2>
              <p className="mb-2 text-muted-foreground">For questions about these Terms, contact us:</p>
              <ul className="list-none mb-6 text-muted-foreground space-y-2">
                <li>Email: sales@craftbloom.net</li>
                <li>Phone: +1 (480) 210-1019</li>
                <li>Address: 740 Pearl St Boulder, CO 80302</li>
                <li>Website: www.craftbloom.net</li>
                <li>Through our Contact page</li>
              </ul>

              <div className="mt-10 p-6 bg-primary/10 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Note:</strong> By using CraftBloom, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}