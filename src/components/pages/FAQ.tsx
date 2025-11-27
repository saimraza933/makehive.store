import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState("");

  const faqCategories = [
    {
      category: "General",
      questions: [
        {
          q: "What is Make Hive?",
          a: "Make Hive is an online marketplace and learning platform dedicated to DIY crafts, handmade items, and creative tutorials. We connect craft enthusiasts with unique products, downloadable patterns, and step-by-step video tutorials."
        },
        {
          q: "Is Make Hive free to use?",
          a: "Yes! Browsing tutorials, watching videos, and exploring our marketplace is completely free. Some premium patterns and products require purchase, and sellers pay a small commission on sales."
        },
        {
          q: "How do I create an account?",
          a: "Click the 'Sign Up' button in the top right corner and provide your email address and basic information. You'll receive a confirmation email to activate your account."
        }
      ]
    },
    {
      category: "Shopping & Orders",
      questions: [
        {
          q: "What payment methods do you accept?",
          a: "We accept all major credit cards (Visa, Mastercard, American Express, Discover), debit cards, and digital wallets. All payments are securely processed through our encrypted payment gateway."
        },
        {
          q: "How do I track my order?",
          a: "Once your order ships, you'll receive a tracking number via email. You can also view order status in your account dashboard under 'My Orders'."
        },
        {
          q: "What is your shipping policy?",
          a: "Shipping times vary by seller and product type. Physical items typically ship within 1-3 business days. Digital downloads are available immediately after purchase. International shipping is available for most products."
        },
        {
          q: "Can I cancel or modify my order?",
          a: "You can cancel orders within 1 hour of purchase if they haven't been processed. After that, contact the seller directly through your order page. Digital downloads cannot be cancelled after download."
        }
      ]
    },
    {
      category: "Returns & Refunds",
      questions: [
        {
          q: "What is your return policy?",
          a: "Physical items can be returned within 30 days of delivery if unused and in original condition. Digital products cannot be returned once downloaded. See our full Refund Policy for details."
        },
        {
          q: "How do I request a refund?",
          a: "Navigate to your order in 'My Orders', click 'Request Refund', and provide a reason. Refunds are typically processed within 5-7 business days after approval."
        },
        {
          q: "Are shipping costs refundable?",
          a: "Original shipping costs are non-refundable unless the item arrives damaged or is incorrect due to seller error. Return shipping costs are the buyer's responsibility unless otherwise stated."
        }
      ]
    },
    {
      category: "Selling on Make Hive",
      questions: [
        {
          q: "How do I become a seller?",
          a: "Visit our 'Sell on Make Hive' page and click 'Create Seller Account'. Complete the application form, and we'll review it within 24-48 hours. Once approved, you can start listing products immediately."
        },
        {
          q: "What can I sell on Make Hive?",
          a: "You can sell handmade physical items, digital downloads (patterns, templates, printables), craft supplies, and DIY kits. All items must be craft-related and comply with our seller guidelines."
        },
        {
          q: "What are the seller fees?",
          a: "We charge a 5% commission on each sale plus a small transaction processing fee. There are no listing fees or monthly charges. You keep the rest of your earnings."
        },
        {
          q: "How do I get paid?",
          a: "Payments are automatically transferred to your bank account or PayPal within 3-5 business days after the buyer's return period ends. You can view earnings in your seller dashboard."
        },
        {
          q: "Can I sell internationally?",
          a: "Yes! You can choose which countries you ship to when listing products. Be sure to set appropriate shipping costs and delivery times for international orders."
        }
      ]
    },
    {
      category: "Tutorials & Content",
      questions: [
        {
          q: "Are all tutorials free?",
          a: "Most tutorials and videos are free to access. Some premium tutorials with downloadable patterns or exclusive content may require a one-time purchase."
        },
        {
          q: "Can I download tutorials for offline viewing?",
          a: "Premium members can download video tutorials for offline viewing. Free tutorials must be streamed online. Written instructions can be printed using the 'Print' button on each tutorial page."
        },
        {
          q: "How do I submit my own tutorial?",
          a: "Sellers with active accounts can submit tutorials through the seller dashboard. Your tutorial will be reviewed for quality and compliance before being published."
        }
      ]
    },
    {
      category: "Account & Privacy",
      questions: [
        {
          q: "How do I reset my password?",
          a: "Click 'Forgot Password' on the login page, enter your email address, and you'll receive a password reset link. The link is valid for 24 hours."
        },
        {
          q: "Can I delete my account?",
          a: "Yes, you can request account deletion by contacting support. Please note that this action is permanent and cannot be undone. Complete any pending orders before requesting deletion."
        },
        {
          q: "How is my personal information protected?",
          a: "We use industry-standard encryption and security measures to protect your data. Read our Privacy Policy for detailed information about data collection and usage."
        },
        {
          q: "Do you sell my personal information?",
          a: "No, we never sell your personal information to third parties. We only share data necessary to process orders and provide services. See our Privacy Policy for full details."
        }
      ]
    }
  ];

  const filteredFAQs = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(
      item =>
        item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.a.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">The Hive Help Center</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Get the buzz on everything Make Hive - answers to all your questions
            </p>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="text"
                placeholder="Search FAQs..."
                className="pl-12 py-6 text-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {filteredFAQs.length > 0 ? (
            <div className="space-y-8">
              {filteredFAQs.map((category, index) => (
                <div key={index}>
                  <h2 className="text-2xl font-bold mb-4">{category.category}</h2>
                  <Card className="p-6">
                    <Accordion type="single" collapsible className="w-full">
                      {category.questions.map((item, qIndex) => (
                        <AccordionItem key={qIndex} value={`item-${index}-${qIndex}`}>
                          <AccordionTrigger className="text-left font-semibold">
                            {item.q}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                            {item.a}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </Card>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground mb-4">
                No results found for "{searchQuery}"
              </p>
              <Button onClick={() => setSearchQuery("")}>Clear Search</Button>
            </div>
          )}
        </div>
      </section>

      {/* Still Need Help */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
            <p className="text-muted-foreground mb-6">
              Can't find what you're looking for? Our support team is here to help!
            </p>
            <Link to="/contact">
              <Button size="lg">Contact Support</Button>
            </Link>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
