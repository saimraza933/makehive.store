import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle, CheckCircle2 } from "lucide-react";

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">Refund & Return Policy</h1>
            <p className="text-xl text-muted-foreground">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Alert className="mb-8">
            <AlertCircle className="h-5 w-5" />
            <AlertDescription>
              This policy outlines Make Hive's refund guidelines. Individual sellers may have additional policies. Please review seller-specific policies before purchasing.
            </AlertDescription>
          </Alert>

          <Card className="p-8 md:p-12 mb-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6">1. Overview</h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                At Make Hive, we want you to be completely satisfied with your purchase. This Refund Policy explains your rights and responsibilities when requesting a refund or return. Because Make Hive is a marketplace connecting buyers with independent sellers, refund policies may vary by seller.
              </p>

              <h2 className="text-3xl font-bold mb-6 mt-10">2. Physical Products</h2>
              <h3 className="text-xl font-semibold mb-4">2.1 Return Window</h3>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                <li>Physical items can be returned within <strong>30 days</strong> of delivery</li>
                <li>Items must be unused, in original condition, with original packaging</li>
                <li>Custom or personalized items may not be eligible for return (check seller policy)</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">2.2 Eligible Reasons for Return</h3>
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold mb-1">Item Not as Described</p>
                  <p className="text-muted-foreground text-sm">Product significantly differs from listing description or photos</p>
                </div>
              </div>
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold mb-1">Damaged or Defective</p>
                  <p className="text-muted-foreground text-sm">Item arrived broken, damaged, or with manufacturing defects</p>
                </div>
              </div>
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold mb-1">Wrong Item Received</p>
                  <p className="text-muted-foreground text-sm">You received an incorrect product or quantity</p>
                </div>
              </div>
              <div className="flex items-start gap-3 mb-6">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold mb-1">Changed Mind</p>
                  <p className="text-muted-foreground text-sm">Item is unused and in original condition (return shipping paid by buyer)</p>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-4">2.3 Return Shipping</h3>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                <li><strong>Seller's Fault:</strong> If item is defective, damaged, or not as described, seller pays return shipping</li>
                <li><strong>Buyer's Change of Mind:</strong> Buyer is responsible for return shipping costs</li>
                <li>We recommend using trackable shipping methods for returns</li>
                <li>Keep your return tracking number until refund is processed</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 mt-10">3. Digital Products</h2>
              <h3 className="text-xl font-semibold mb-4">3.1 Digital Download Policy</h3>
              <p className="mb-4 text-muted-foreground leading-relaxed">
                <strong>Digital products (patterns, templates, printables, PDFs) are generally non-refundable once downloaded.</strong> This is because we cannot verify that digital files have been deleted after purchase.
              </p>

              <h3 className="text-xl font-semibold mb-4">3.2 Exceptions for Digital Products</h3>
              <p className="mb-2 text-muted-foreground">Refunds may be issued for digital products if:</p>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                <li>File is corrupted or won't open</li>
                <li>Product is significantly different from description</li>
                <li>You were charged multiple times for the same item</li>
                <li>Item was never delivered/accessible after purchase</li>
              </ul>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Contact the seller immediately if you experience issues with digital downloads. Most sellers will work to resolve technical problems before refunds are considered.
              </p>

              <h2 className="text-3xl font-bold mb-6 mt-10">4. How to Request a Refund</h2>
              <h3 className="text-xl font-semibold mb-4">4.1 Contact the Seller First</h3>
              <ol className="list-decimal pl-6 mb-6 text-muted-foreground space-y-2">
                <li>Log into your Make Hive account</li>
                <li>Go to "My Orders" and find the order</li>
                <li>Click "Contact Seller" to explain the issue</li>
                <li>Provide photos if the item is damaged or not as described</li>
                <li>Wait for seller response (sellers must respond within 48 hours)</li>
              </ol>

              <h3 className="text-xl font-semibold mb-4">4.2 If Seller Doesn't Respond or Refuses</h3>
              <p className="mb-2 text-muted-foreground">If you can't reach an agreement with the seller:</p>
              <ol className="list-decimal pl-6 mb-6 text-muted-foreground space-y-2">
                <li>Click "Request Refund" on your order page</li>
                <li>Select reason for refund request</li>
                <li>Upload supporting documentation (photos, messages)</li>
                <li>Submit request to Make Hive support team</li>
                <li>We'll review and respond within 3-5 business days</li>
              </ol>

              <h2 className="text-3xl font-bold mb-6 mt-10">5. Refund Processing</h2>
              <h3 className="text-xl font-semibold mb-4">5.1 Approval and Timeline</h3>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                <li>Once refund is approved, processing begins immediately</li>
                <li>For physical items, seller must receive returned item first</li>
                <li>Refunds are issued to original payment method</li>
                <li><strong>Timeline:</strong> 5-10 business days after approval (may vary by bank/card issuer)</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">5.2 Partial Refunds</h3>
              <p className="mb-2 text-muted-foreground">Partial refunds may be issued if:</p>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                <li>Item is returned with missing pieces or accessories</li>
                <li>Item shows signs of use beyond inspection</li>
                <li>Seller offers partial refund to resolve dispute</li>
                <li>Shipping costs are being deducted</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">5.3 What Gets Refunded</h3>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                <li><strong>Product Price:</strong> Always refunded when approved</li>
                <li><strong>Original Shipping:</strong> Refunded only if item is defective or seller's error</li>
                <li><strong>Return Shipping:</strong> Generally not refunded unless item is defective</li>
                <li><strong>Transaction Fees:</strong> Not refunded (payment processing costs)</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 mt-10">6. Non-Refundable Items</h2>
              <p className="mb-2 text-muted-foreground">The following items are typically non-refundable:</p>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                <li>Custom or personalized products made to order</li>
                <li>Perishable goods or items with expiration dates</li>
                <li>Digital downloads (unless file is defective)</li>
                <li>Intimate items or personal care products</li>
                <li>Items marked "final sale" in the listing</li>
                <li>Gift cards or store credit</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 mt-10">7. Exchanges</h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Make Hive does not directly facilitate exchanges. If you want a different size, color, or style, contact the seller to arrange an exchange. Most sellers are happy to accommodate exchange requests if inventory is available. You may need to pay shipping costs for exchanges.
              </p>

              <h2 className="text-3xl font-bold mb-6 mt-10">8. Damaged or Lost in Shipping</h2>
              <h3 className="text-xl font-semibold mb-4">8.1 Damaged During Shipping</h3>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                <li>Photograph damaged packaging and item immediately</li>
                <li>Contact seller within 48 hours of delivery</li>
                <li>Seller is responsible for filing shipping insurance claims</li>
                <li>Refund or replacement will be provided once resolved</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">8.2 Lost Packages</h3>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                <li>Contact seller if package doesn't arrive within expected timeframe</li>
                <li>Seller must wait for carrier's investigation period to complete</li>
                <li>If package is confirmed lost, seller will refund or reship at no charge</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 mt-10">9. Fraudulent Claims</h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Make Hive takes fraud seriously. Abusing our refund policy (false damage claims, keeping items after refund, etc.) will result in account suspension or termination. We may report fraudulent activity to law enforcement.
              </p>

              <h2 className="text-3xl font-bold mb-6 mt-10">10. Seller Responsibilities</h2>
              <p className="mb-2 text-muted-foreground">Sellers on Make Hive must:</p>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                <li>Respond to refund requests within 48 hours</li>
                <li>Process approved refunds within 3 business days of receiving returned items</li>
                <li>Clearly state any additional return/refund policies in their shop policies</li>
                <li>Honor Make Hive's minimum refund standards</li>
                <li>Provide accurate product descriptions to minimize returns</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 mt-10">11. Contact Us</h2>
              <p className="mb-2 text-muted-foreground">For questions about refunds or returns:</p>
              <ul className="list-none mb-6 text-muted-foreground space-y-2">
                <li>Email: sales@makehive.store</li>
                <li>Phone: +1 864 214 9115</li>
                <li>Address: 2445 Lawrence St Denver, CO 80205</li>
                <li>Website: www.makehive.store</li>
                <li>Visit our Contact page</li>
                <li>Live chat during business hours (9am-5pm EST)</li>
              </ul>

              <div className="mt-10 p-6 bg-primary/10 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Important Notes</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• This policy applies to purchases made on Make Hive's platform</li>
                  <li>• Individual sellers may have more generous return policies - always check seller policies</li>
                  <li>• Make Hive reserves the right to mediate disputes and make final refund decisions</li>
                  <li>• We may update this policy; check back regularly for changes</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}