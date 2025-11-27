import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Store, Upload, BarChart3, DollarSign, Users, Package, CheckCircle2, ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";

export default function Sell() {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [formData, setFormData] = useState({
    shopName: "",
    email: "",
    fullName: "",
    bio: "",
    phone: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const howItWorksRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setIsRegistrationOpen(false);
      setSubmitted(false);
      setFormData({ shopName: "", email: "", fullName: "", bio: "", phone: "" });
    }, 2000);
  };

  const scrollToHowItWorks = () => {
    howItWorksRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleCategoryClick = (category: string) => {
    navigate(`/marketplace?category=${encodeURIComponent(category)}`);
  };

  const benefits = [
    {
      icon: Store,
      title: "Easy Shop Setup",
      description: "Create your seller profile and start listing products in minutes with our intuitive dashboard.",
    },
    {
      icon: Upload,
      title: "Simple Product Uploads",
      description: "Upload physical products or digital files with drag-and-drop ease. Add images, descriptions, and pricing.",
    },
    {
      icon: BarChart3,
      title: "Seller Analytics",
      description: "Track your sales, views, and revenue with detailed analytics and insights.",
    },
    {
      icon: DollarSign,
      title: "Competitive Fees",
      description: "Keep more of what you earn with our low commission rates and transparent pricing.",
    },
    {
      icon: Users,
      title: "Reach 50K+ Crafters",
      description: "Connect with a passionate community of craft enthusiasts actively looking for unique items.",
    },
    {
      icon: Package,
      title: "Flexible Selling Options",
      description: "Sell physical handmade items, digital downloads, patterns, templates, or craft supplies.",
    },
  ];

  const steps = [
    {
      number: "1",
      title: "Create Your Seller Account",
      description: "Sign up and complete your seller profile with your shop name, bio, and branding.",
    },
    {
      number: "2",
      title: "Upload Your Products",
      description: "Add product photos, descriptions, pricing, and categories. Set up digital downloads or shipping options.",
    },
    {
      number: "3",
      title: "Start Selling",
      description: "Your products go live immediately. Manage orders, communicate with buyers, and track your earnings.",
    },
  ];

  const categories = [
    "Paper Crafts",
    "Home Decor DIY",
    "Kids Crafts",
    "Sewing & Crochet",
    "Resin Art",
    "Seasonal Crafts",
    "Digital Templates",
    "Craft Supplies",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Seller Program</Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Turn Your Craft Passion Into Profit
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Join Make Hive's marketplace and sell your handmade items, digital patterns, and craft supplies to thousands of eager buyers. No upfront costs, easy setup, and full support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8" onClick={() => setIsRegistrationOpen(true)}>
                  <Store className="w-5 h-5 mr-2" />
                  Start Selling Today
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8" onClick={scrollToHowItWorks}>
                  Learn More
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                ✓ No listing fees • ✓ Free to join • ✓ Instant payouts
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800&q=80"
                alt="Seller workspace"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="text-3xl font-bold text-primary">$2.5M+</div>
                <div className="text-sm text-muted-foreground">Earned by sellers in 2024</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Sell on Make Hive?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to build a successful craft business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section ref={howItWorksRef} className="py-16 bg-gradient-to-b from-white to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get started in three simple steps
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1">
                  <Card className="p-6">
                    <h3 className="font-bold text-xl mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </Card>
                </div>
                {index < steps.length - 1 && (
                  <div className="flex-shrink-0 flex items-center">
                    <ArrowRight className="w-6 h-6 text-muted-foreground" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="text-lg px-8" onClick={() => setIsRegistrationOpen(true)}>
              Create Seller Account
            </Button>
          </div>
        </div>
      </section>

      {/* What You Can Sell */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What Can You Sell?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We welcome a wide variety of craft-related products
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {categories.map((category, index) => (
              <Card 
                key={index} 
                className="p-4 text-center hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => handleCategoryClick(category)}
              >
                <CheckCircle2 className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="font-semibold">{category}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seller Dashboard Preview */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Powerful Seller Dashboard</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Manage your entire shop from one intuitive dashboard. Track orders, upload products, view analytics, and communicate with customers.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Order Management</p>
                    <p className="text-sm text-muted-foreground">Track and fulfill orders with ease</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Product Analytics</p>
                    <p className="text-sm text-muted-foreground">See which products perform best</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Revenue Tracking</p>
                    <p className="text-sm text-muted-foreground">Monitor your earnings in real-time</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Customer Messages</p>
                    <p className="text-sm text-muted-foreground">Respond to buyer inquiries quickly</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <Card className="p-6 shadow-2xl">
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-6 mb-4">
                  <h3 className="font-bold text-lg mb-4">Your Shop Overview</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground">Total Sales</p>
                      <p className="text-2xl font-bold text-primary">$3,245</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground">Orders</p>
                      <p className="text-2xl font-bold text-primary">127</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground">Products</p>
                      <p className="text-2xl font-bold text-primary">24</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground">Rating</p>
                      <p className="text-2xl font-bold text-primary">4.9★</p>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground text-center">
                  Example seller dashboard metrics
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-2">How much does it cost to sell?</h3>
              <p className="text-muted-foreground">
                It's free to create a seller account. We charge a small commission (5-10%) only when you make a sale. No monthly fees or listing charges.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-2">What can I sell on Make Hive?</h3>
              <p className="text-muted-foreground">
                You can sell handmade crafts, digital patterns, templates, printables, craft supplies, and DIY kits. All items must be craft-related and meet our quality guidelines.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-2">How do I get paid?</h3>
              <p className="text-muted-foreground">
                Payments are processed securely and deposited directly to your bank account or PayPal. You can request payouts weekly or monthly.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-2">Do you provide seller support?</h3>
              <p className="text-muted-foreground">
                Yes! Our seller support team is available via email and chat to help with setup, product listings, and any questions you have.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <Card className="p-12 text-center bg-white shadow-xl max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Craft Business?</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Join thousands of successful sellers on Make Hive and turn your creativity into income.
            </p>
            <Button size="lg" className="text-lg px-12" onClick={() => setIsRegistrationOpen(true)}>
              <Store className="w-5 h-5 mr-2" />
              Become a Seller
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Questions? <Link to="/contact" className="text-primary hover:underline">Contact our seller support team</Link>
            </p>
          </Card>
        </div>
      </section>

      {/* Seller Registration Dialog */}
      <Dialog open={isRegistrationOpen} onOpenChange={setIsRegistrationOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">Create Your Seller Account</DialogTitle>
            <DialogDescription>
              Fill out the form below to start selling on Make Hive
            </DialogDescription>
          </DialogHeader>

          {submitted ? (
            <div className="py-8 text-center">
              <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Application Submitted!</h3>
              <p className="text-muted-foreground">
                We'll review your application and send you an email within 24-48 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 py-4">
              <div className="space-y-2">
                <Label htmlFor="shopName">Shop Name *</Label>
                <Input
                  id="shopName"
                  name="shopName"
                  placeholder="My Craft Shop"
                  value={formData.shopName}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name *</Label>
                <Input
                  id="fullName"
                  name="fullName"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="(555) 123-4567"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Tell us about your shop *</Label>
                <Textarea
                  id="bio"
                  name="bio"
                  placeholder="I create handmade jewelry using sustainable materials..."
                  value={formData.bio}
                  onChange={handleInputChange}
                  rows={4}
                  required
                />
              </div>

              <div className="bg-primary/10 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">What happens next?</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>✓ We'll review your application within 24-48 hours</li>
                  <li>✓ You'll receive an email with next steps</li>
                  <li>✓ Set up your shop and start listing products</li>
                  <li>✓ Start earning from your first sale</li>
                </ul>
              </div>

              <Button type="submit" size="lg" className="w-full">
                Submit Application
              </Button>
            </form>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}