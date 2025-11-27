import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">Privacy Policy</h1>
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
              <h2 className="text-3xl font-bold mb-6">1. Introduction</h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Make Hive ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, share, and protect your personal information when you use our website and services.
              </p>

              <h2 className="text-3xl font-bold mb-6 mt-10">2. Information We Collect</h2>
              <h3 className="text-xl font-semibold mb-4">2.1 Information You Provide</h3>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                <li><strong>Account Information:</strong> Name, email address, username, password, profile photo</li>
                <li><strong>Payment Information:</strong> Billing address, payment method details (processed securely by our payment processor)</li>
                <li><strong>Seller Information:</strong> Shop name, business details, bank account information for payouts, tax information</li>
                <li><strong>Shipping Information:</strong> Delivery addresses for order fulfillment</li>
                <li><strong>Communications:</strong> Messages sent through our platform, customer support inquiries, reviews, and comments</li>
                <li><strong>Content:</strong> Product listings, tutorials, photos, videos, and other content you upload</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">2.2 Information Collected Automatically</h3>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                <li><strong>Usage Data:</strong> Pages visited, time spent on pages, clicks, search queries, purchase history</li>
                <li><strong>Device Information:</strong> IP address, browser type, operating system, device identifiers</li>
                <li><strong>Location Data:</strong> Approximate location based on IP address</li>
                <li><strong>Cookies and Tracking:</strong> We use cookies and similar technologies to enhance your experience</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">2.3 Information from Third Parties</h3>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                <li>Social media platforms (if you connect your account)</li>
                <li>Payment processors providing transaction details</li>
                <li>Analytics providers helping us understand service usage</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 mt-10">3. How We Use Your Information</h2>
              <p className="mb-2 text-muted-foreground">We use your information to:</p>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                <li>Provide and improve our services</li>
                <li>Process transactions and send confirmations</li>
                <li>Facilitate communication between buyers and sellers</li>
                <li>Personalize your experience and recommendations</li>
                <li>Send important updates, newsletters, and promotional materials (you can opt out)</li>
                <li>Prevent fraud and enhance security</li>
                <li>Comply with legal obligations</li>
                <li>Analyze usage patterns and improve platform functionality</li>
                <li>Provide customer support</li>
                <li>Enforce our Terms of Service</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 mt-10">4. How We Share Your Information</h2>
              <p className="mb-2 text-muted-foreground">We may share your information with:</p>

              <h3 className="text-xl font-semibold mb-4">4.1 Other Users</h3>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                <li>Buyers can see seller shop names, ratings, and public profile information</li>
                <li>Sellers receive buyer shipping addresses and contact information for order fulfillment</li>
                <li>Public content (reviews, comments, tutorials) is visible to all users</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">4.2 Service Providers</h3>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                <li>Payment processors to handle transactions</li>
                <li>Cloud hosting and storage services</li>
                <li>Email service providers</li>
                <li>Analytics and marketing tools</li>
                <li>Customer support platforms</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">4.3 Legal Requirements</h3>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                We may disclose information when required by law, to protect our rights, prevent fraud, or respond to legal processes such as subpoenas or court orders.
              </p>

              <h3 className="text-xl font-semibold mb-4">4.4 Business Transfers</h3>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                If Make Hive is involved in a merger, acquisition, or sale of assets, your information may be transferred. We will notify you before your information becomes subject to a different privacy policy.
              </p>

              <p className="mb-6 text-muted-foreground leading-relaxed">
                <strong>We do not sell your personal information to third parties for their marketing purposes.</strong>
              </p>

              <h2 className="text-3xl font-bold mb-6 mt-10">5. Data Security</h2>
              <p className="mb-2 text-muted-foreground">We implement security measures including:</p>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                <li>Encryption of sensitive data in transit and at rest</li>
                <li>Secure payment processing (we don't store complete payment card details)</li>
                <li>Regular security audits and updates</li>
                <li>Access controls limiting who can view your information</li>
                <li>Monitoring for suspicious activity</li>
              </ul>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                However, no method of transmission over the internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
              </p>

              <h2 className="text-3xl font-bold mb-6 mt-10">6. Your Privacy Rights</h2>
              <p className="mb-2 text-muted-foreground">Depending on your location, you may have the right to:</p>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                <li><strong>Access:</strong> Request a copy of your personal data</li>
                <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal data (subject to legal exceptions)</li>
                <li><strong>Portability:</strong> Receive your data in a machine-readable format</li>
                <li><strong>Opt-Out:</strong> Unsubscribe from marketing emails</li>
                <li><strong>Object:</strong> Object to certain data processing activities</li>
                <li><strong>Restriction:</strong> Request restriction of processing your data</li>
              </ul>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                To exercise these rights, contact us at privacy@makehive.store or through your account settings.
              </p>

              <h2 className="text-3xl font-bold mb-6 mt-10">7. Cookies and Tracking Technologies</h2>
              <h3 className="text-xl font-semibold mb-4">7.1 Types of Cookies We Use</h3>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                <li><strong>Essential Cookies:</strong> Required for the website to function (login, shopping cart)</li>
                <li><strong>Performance Cookies:</strong> Help us understand how visitors use our site</li>
                <li><strong>Functionality Cookies:</strong> Remember your preferences</li>
                <li><strong>Advertising Cookies:</strong> Deliver relevant ads based on your interests</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">7.2 Managing Cookies</h3>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                You can control cookies through your browser settings. Note that disabling certain cookies may affect website functionality. You can also use our cookie preference center to manage your choices.
              </p>

              <h2 className="text-3xl font-bold mb-6 mt-10">8. Data Retention</h2>
              <p className="mb-2 text-muted-foreground">We retain your information for as long as:</p>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                <li>Your account is active</li>
                <li>Needed to provide you services</li>
                <li>Required for legal, tax, or accounting purposes</li>
                <li>Necessary to resolve disputes and enforce agreements</li>
              </ul>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                When data is no longer needed, we securely delete or anonymize it. Some information may be retained in backup systems for a limited time.
              </p>

              <h2 className="text-3xl font-bold mb-6 mt-10">9. Children's Privacy</h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Make Hive is not intended for users under 18 years of age. We do not knowingly collect personal information from children. If we learn we have collected information from a child under 18, we will delete it immediately. If you believe a child has provided us information, contact us at privacy@makehive.store.
              </p>

              <h2 className="text-3xl font-bold mb-6 mt-10">10. International Data Transfers</h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data in compliance with applicable laws.
              </p>

              <h2 className="text-3xl font-bold mb-6 mt-10">11. Third-Party Links</h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Our website may contain links to third-party sites. We are not responsible for their privacy practices. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>

              <h2 className="text-3xl font-bold mb-6 mt-10">12. Changes to This Policy</h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of significant changes by email or through a notice on our website. The "Last Updated" date at the top indicates when changes were made. Your continued use of Make Hive after changes constitutes acceptance of the updated policy.
              </p>

              <h2 className="text-3xl font-bold mb-6 mt-10">13. Contact Us</h2>
              <p className="mb-2 text-muted-foreground">If you have questions or concerns about this Privacy Policy:</p>
              <ul className="list-none mb-6 text-muted-foreground space-y-2">
                <li>Email: sales@makehive.store</li>
                <li>Phone: +1 864 214 9115</li>
                <li>Address: 2445 Lawrence St Denver, CO 80205</li>
                <li>Website: www.makehive.store</li>
                <li>Visit our Contact page</li>
              </ul>

              <div className="mt-10 p-6 bg-primary/10 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">California Residents (CCPA)</h3>
                <p className="text-sm text-muted-foreground">
                  California residents have additional rights under the California Consumer Privacy Act (CCPA). You have the right to know what personal information is collected, to delete personal information, and to opt-out of the sale of personal information (note: we do not sell personal information). To exercise these rights, contact sales@makehive.store.
                </p>
              </div>

              <div className="mt-6 p-6 bg-primary/10 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">European Union Residents (GDPR)</h3>
                <p className="text-sm text-muted-foreground">
                  If you are in the European Economic Area (EEA), you have rights under the General Data Protection Regulation (GDPR), including the right to access, rectify, erase, restrict processing, data portability, and to object to processing. You also have the right to lodge a complaint with your local data protection authority.
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