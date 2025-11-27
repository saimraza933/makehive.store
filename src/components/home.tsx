import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Clock, Star, TrendingUp, Sparkles, Mail, ShoppingBag, Download, Video, Store } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const featuredTutorials = [
  {
    id: 1,
    title: "Embroidered Tote Bag",
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80",
    time: "3 hours",
    difficulty: "Advanced",
    category: "Embroidery",
  },
  {
    id: 2,
    title: "Macramé Wall Hanging",
    image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80",
    time: "2 hours",
    difficulty: "Intermediate",
    category: "Fiber Arts",
  },
  {
    id: 3,
    title: "Hand-Painted Ceramic Mugs",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=800&q=80",
    time: "1 hour",
    difficulty: "Beginner",
    category: "Ceramics",
  },
  {
    id: 4,
    title: "Pressed Flower Bookmarks",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800&q=80",
    time: "20 min",
    difficulty: "Beginner",
    category: "Nature Crafts",
  },
  {
    id: 5,
    title: "DIY Paper Flower Bouquet",
    image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=800&q=80",
    time: "45 min",
    difficulty: "Beginner",
    category: "Paper Crafts",
  },
  {
    id: 6,
    title: "Watercolor Greeting Cards",
    image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=800&q=80",
    time: "40 min",
    difficulty: "Beginner",
    category: "Painting",
  },
];

const trendingCrafts = [
  {
    id: "t1",
    title: "Resin Jewelry Making",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80",
    views: "12.5K",
  },
  {
    id: "t2",
    title: "Crochet Amigurumi Animals",
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&q=80",
    views: "10.2K",
  },
  {
    id: "t3",
    title: "Polymer Clay Earrings",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80",
    views: "9.8K",
  },
  {
    id: "t4",
    title: "Candle Making Workshop",
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=800&q=80",
    views: "8.5K",
  },
];

const seasonalHighlights = [
  {
    id: "s1",
    title: "Spring Garden Decorations",
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&q=80",
    season: "Spring",
    projects: 15,
  },
  {
    id: "s2",
    title: "Holiday Gift Wrapping Ideas",
    image: "https://images.unsplash.com/photo-1512909006721-3d6018887383?w=800&q=80",
    season: "Winter",
    projects: 12,
  },
  {
    id: "s3",
    title: "Summer Beach Crafts",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    season: "Summer",
    projects: 18,
  },
];

const featuredProducts = [
  {
    id: "p1",
    title: "Complete Embroidery Pattern Pack",
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&q=80",
    price: 12.99,
    category: "Digital Templates",
    rating: 4.8,
  },
  {
    id: "p2",
    title: "Paper Flower Templates Bundle",
    image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=800&q=80",
    price: 9.99,
    category: "Paper Crafts",
    rating: 4.9,
  },
  {
    id: "p3",
    title: "Resin Jewelry Starter Kit",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    price: 34.99,
    category: "Resin Art",
    rating: 4.7,
  },
  {
    id: "p4",
    title: "Crochet Amigurumi Patterns",
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&q=80",
    price: 15.99,
    category: "Sewing & Crochet",
    rating: 4.9,
  },
];

export default function Homepage() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleNewsletterSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Welcome to Make Hive! 🎨",
        description: "You've successfully subscribed to our newsletter.",
      });
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-secondary/20 to-accent/10 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 w-36 h-36 bg-accent rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Buy, Sell & Learn DIY Crafts</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Your Complete
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                {" "}Craft Marketplace
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Shop craft supplies, sell your creations, learn from expert tutorials, and join a vibrant community of makers. Everything you need for your crafting journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/shop">
                <Button size="lg" className="text-lg px-8">
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Shop Products
                </Button>
              </Link>
              <Link to="/sell">
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Store className="w-5 h-5 mr-2" />
                  Start Selling
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured Products</h2>
              <p className="text-muted-foreground">Top-rated craft supplies and digital downloads</p>
            </div>
            <Link to="/shop">
              <Button variant="ghost">Shop All →</Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Link key={product.id} to={`/shop`}>
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <Badge className="absolute top-3 right-3 bg-white text-foreground">
                      ${product.price}
                    </Badge>
                  </div>
                  <CardHeader>
                    <Badge variant="secondary" className="w-fit mb-2 text-xs">
                      {product.category}
                    </Badge>
                    <h3 className="font-bold text-lg line-clamp-2">{product.title}</h3>
                  </CardHeader>
                  <CardFooter className="flex items-center gap-1 text-sm">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{product.rating}</span>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tutorials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured Tutorials</h2>
              <p className="text-muted-foreground">Handpicked projects to inspire your creativity</p>
            </div>
            <Link to="/tutorials">
              <Button variant="ghost">View All →</Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTutorials.map((tutorial) => (
              <Link key={tutorial.id} to={`/tutorial/${tutorial.id}`}>
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={tutorial.image}
                      alt={tutorial.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <Badge className="absolute top-3 right-3 bg-white text-foreground">
                      {tutorial.difficulty}
                    </Badge>
                  </div>
                  <CardHeader>
                    <Badge variant="secondary" className="w-fit mb-2">
                      {tutorial.category}
                    </Badge>
                    <h3 className="font-bold text-lg">{tutorial.title}</h3>
                  </CardHeader>
                  <CardFooter className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{tutorial.time}</span>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Crafts Carousel */}
      <section className="py-16 bg-gradient-to-b from-white to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp className="w-8 h-8 text-primary" />
            <div>
              <h2 className="text-3xl font-bold">Trending Now</h2>
              <p className="text-muted-foreground">What crafters are loving this week</p>
            </div>
          </div>

          <Carousel className="w-full">
            <CarouselContent>
              {trendingCrafts.map((craft) => (
                <CarouselItem key={craft.id} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                    <div className="relative h-64">
                      <img
                        src={craft.image}
                        alt={craft.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <h3 className="font-bold text-lg mb-2">{craft.title}</h3>
                        <div className="flex items-center gap-2 text-sm">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span>{craft.views} views</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Seasonal Highlights */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Seasonal Collections</h2>
            <p className="text-muted-foreground">Crafts perfect for every season and celebration</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {seasonalHighlights.map((highlight) => (
              <Card key={highlight.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group">
                <div className="relative h-64">
                  <img
                    src={highlight.image}
                    alt={highlight.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <Badge className="mb-3 bg-accent text-accent-foreground">
                      {highlight.season}
                    </Badge>
                    <h3 className="font-bold text-xl mb-2">{highlight.title}</h3>
                    <p className="text-sm opacity-90">{highlight.projects} projects</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Seller CTA */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <Card className="p-8 md:p-12 bg-white shadow-xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-6">
                  <Store className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Start Selling Your Crafts</h2>
                <p className="text-muted-foreground mb-6 text-lg">
                  Join thousands of creators selling handmade items, digital patterns, and craft supplies on Make Hive. Set up your shop in minutes and reach a passionate community of crafters.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-primary text-sm">✓</span>
                    </div>
                    <span>Easy product uploads & management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-primary text-sm">✓</span>
                    </div>
                    <span>Seller dashboard with analytics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-primary text-sm">✓</span>
                    </div>
                    <span>Reach 50K+ active crafters</span>
                  </li>
                </ul>
                <Link to="/sell">
                  <Button size="lg" className="text-lg px-8">
                    Become a Seller
                  </Button>
                </Link>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800&q=80"
                  alt="Seller workspace"
                  className="rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto p-8 md:p-12 text-center shadow-xl">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Join Our Creative Community</h2>
            <p className="text-muted-foreground mb-6">
              Get weekly tutorials, exclusive patterns, and crafting tips delivered to your inbox
            </p>
            <form onSubmit={handleNewsletterSignup} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1"
              />
              <Button type="submit" size="lg">
                Subscribe
              </Button>
            </form>
            <p className="text-xs text-muted-foreground mt-4">
              No spam, unsubscribe anytime. We respect your privacy.
            </p>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}