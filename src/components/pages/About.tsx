import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, Sparkles, Target, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Passion for Crafting",
      description: "We believe everyone has a creative spark waiting to be ignited through hands-on crafting.",
    },
    {
      icon: Users,
      title: "Community First",
      description: "Building a supportive community where crafters of all levels can learn, share, and grow together.",
    },
    {
      icon: Sparkles,
      title: "Quality Content",
      description: "Every tutorial is carefully crafted with clear instructions, beautiful photography, and tested techniques.",
    },
    {
      icon: Target,
      title: "Accessible Learning",
      description: "Making crafting accessible to everyone with beginner-friendly projects and affordable materials.",
    },
  ];

  const team = [
    {
      name: "Sarah Mitchell",
      role: "Founder & Creative Director",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      bio: "Former art teacher with 15 years of crafting experience",
    },
    {
      name: "Emma Rodriguez",
      role: "Content Creator",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
      bio: "Specializes in paper crafts and seasonal decorations",
    },
    {
      name: "Lisa Chen",
      role: "Tutorial Designer",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
      bio: "Expert in fiber arts, embroidery, and textile crafts",
    },
    {
      name: "Maya Patel",
      role: "Community Manager",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maya",
      bio: "Passionate about building connections in the crafting community",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Make Hive</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Where makers swarm together - empowering creativity through accessible tutorials, quality supplies, and a thriving community of crafters
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Make Hive LLC was founded in 2020 with a simple mission: to create the world's most comprehensive platform for craft enthusiasts to learn, shop, and sell.
                </p>
                <p>
                  What started as a small blog by founder Sarah Mitchell has grown into a thriving marketplace connecting thousands of crafters, sellers, and learners worldwide. We've built more than just a platform—we've created a community.
                </p>
                <p>
                  Today, Make Hive serves as a complete ecosystem for the crafting world. Whether you're looking to learn a new skill through our video tutorials, shop for unique handmade items and supplies, or start your own craft business by selling your creations, we provide all the tools you need.
                </p>
                <p>
                  As Make Hive LLC, we're committed to supporting independent creators, fostering creativity, and making crafting accessible to everyone—from curious beginners to professional artisans.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=800&q=80"
                alt="Crafting workspace"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-xl shadow-xl">
                <div className="text-4xl font-bold">50K+</div>
                <div className="text-sm">Active Community Members</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-gradient-to-b from-white to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              At Make Hive LLC, we believe creativity should be accessible to everyone. Our mission is to provide a comprehensive platform where crafters can:
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <Card className="p-6">
                <h3 className="font-bold text-lg mb-3">Learn & Grow</h3>
                <p className="text-muted-foreground">
                  Access hundreds of tutorials, videos, and guides to master new crafting techniques
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="font-bold text-lg mb-3">Shop & Discover</h3>
                <p className="text-muted-foreground">
                  Find unique handmade items, digital patterns, and quality craft supplies
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="font-bold text-lg mb-3">Sell & Succeed</h3>
                <p className="text-muted-foreground">
                  Build a thriving craft business with our seller tools and supportive community
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gradient-to-b from-white to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we create and share
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="p-6 text-center hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The creative minds behind Make Hive
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 mx-auto rounded-full bg-white p-2"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                  <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">Make Hive by the Numbers</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Video Tutorials</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">50K+</div>
              <div className="text-muted-foreground">Community Members</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">5K+</div>
              <div className="text-muted-foreground">Active Sellers</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">$2.5M+</div>
              <div className="text-muted-foreground">Seller Earnings (2024)</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="p-12 text-center bg-gradient-to-br from-primary/5 to-secondary/5">
            <h2 className="text-3xl font-bold mb-4">Join Our Creative Community</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Start your crafting journey today with hundreds of tutorials, patterns, and a
              supportive community ready to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/tutorials">
                <Button size="lg" className="text-lg px-8">
                  Browse Tutorials
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-lg px-8 flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Contact Us
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}