import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Search, ShoppingCart, Download, Star } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface Product {
  id: string;
  title: string;
  image: string;
  price: number;
  category: string;
  rating: number;
  downloads: string;
  description: string;
}

const products: Product[] = [
  {
    id: "p1",
    title: "Complete Embroidery Pattern Pack",
    image: "https://images.unsplash.com/photo-1590739225017-e513e0c4e1f7?w=800&q=80",
    price: 12.99,
    category: "Embroidery",
    rating: 4.8,
    downloads: "2.5K",
    description: "50+ beautiful embroidery patterns including florals, animals, and geometric designs. Includes PDF templates and stitch guides.",
  },
  {
    id: "p2",
    title: "Paper Flower Templates Bundle",
    image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=800&q=80",
    price: 9.99,
    category: "Paper Crafts",
    rating: 4.9,
    downloads: "3.2K",
    description: "Create stunning paper flowers with 30 different templates. Includes roses, peonies, daisies, and more.",
  },
  {
    id: "p3",
    title: "Macramé Knot Guide & Patterns",
    image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80",
    price: 14.99,
    category: "Fiber Arts",
    rating: 4.7,
    downloads: "1.8K",
    description: "Master macramé with detailed knot instructions and 20 project patterns from beginner to advanced.",
  },
  {
    id: "p4",
    title: "Watercolor Technique Workbook",
    image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=800&q=80",
    price: 11.99,
    category: "Painting",
    rating: 4.6,
    downloads: "2.1K",
    description: "Learn watercolor basics with practice sheets, color mixing guides, and 15 project tutorials.",
  },
  {
    id: "p5",
    title: "Crochet Amigurumi Patterns",
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&q=80",
    price: 15.99,
    category: "Crochet",
    rating: 4.9,
    downloads: "4.1K",
    description: "Adorable amigurumi patterns for 25 different animals and characters. Includes detailed instructions and yarn recommendations.",
  },
  {
    id: "p6",
    title: "Resin Jewelry Mold Collection",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    price: 19.99,
    category: "Jewelry",
    rating: 4.8,
    downloads: "1.5K",
    description: "Digital templates for creating custom resin jewelry molds. Includes earrings, pendants, and rings.",
  },
  {
    id: "p7",
    title: "Seasonal Craft Calendar",
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&q=80",
    price: 8.99,
    category: "Seasonal",
    rating: 4.5,
    downloads: "2.8K",
    description: "Year-round craft ideas with monthly themes, shopping lists, and step-by-step instructions.",
  },
  {
    id: "p8",
    title: "Kids Craft Activity Book",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80",
    price: 10.99,
    category: "Kids Crafts",
    rating: 4.7,
    downloads: "3.5K",
    description: "100+ fun and educational craft activities for children ages 4-12. Printable templates included.",
  },
];

export default function Marketplace() {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<string[]>([]);
  const { toast } = useToast();

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === "all" || product.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const categories = ["all", ...Array.from(new Set(products.map((p) => p.category)))];

  const addToCart = (productId: string) => {
    setCart([...cart, productId]);
    toast({
      title: "Added to cart! 🛒",
      description: "Product has been added to your cart.",
    });
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary/10">
      <Navigation />

      {/* Header */}
      <section className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">The Hive Market</h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Download premium patterns, templates, and guides to sweeten your crafting projects
              </p>
            </div>
            <Button size="lg" className="hidden md:flex items-center gap-2">
              <ShoppingCart className="w-5 h-5" />
              Cart ({cart.length})
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Search and Filters */}
        <Card className="p-6 mb-8 shadow-lg">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {cat === "all" ? "All Categories" : cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button className="md:hidden flex items-center gap-2">
              <ShoppingCart className="w-5 h-5" />
              Cart ({cart.length})
            </Button>
          </div>

          <div className="mt-4 text-sm text-muted-foreground">
            Showing {filteredProducts.length} of {products.length} products
          </div>
        </Card>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
              onClick={() => setSelectedProduct(product)}
            >
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
              <CardFooter className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-sm">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">{product.rating}</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Download className="w-4 h-4" />
                  <span>{product.downloads}</span>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Product Detail Modal */}
      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-2xl">
          {selectedProduct && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedProduct.title}</DialogTitle>
              </DialogHeader>
              <div className="grid md:grid-cols-2 gap-6 py-4">
                <div>
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.title}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <div className="flex items-center gap-4 mt-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">{selectedProduct.rating}</span>
                      <span className="text-muted-foreground text-sm">rating</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Download className="w-5 h-5" />
                      <span>{selectedProduct.downloads} downloads</span>
                    </div>
                  </div>
                </div>
                <div>
                  <Badge variant="secondary" className="mb-3">
                    {selectedProduct.category}
                  </Badge>
                  <p className="text-muted-foreground mb-6">{selectedProduct.description}</p>
                  <div className="bg-secondary/20 p-4 rounded-lg mb-6">
                    <div className="text-3xl font-bold text-primary mb-2">
                      ${selectedProduct.price}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Instant digital download • Lifetime access
                    </p>
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setSelectedProduct(null)}>
                  Close
                </Button>
                <Button onClick={() => addToCart(selectedProduct.id)} className="flex items-center gap-2">
                  <ShoppingCart className="w-4 h-4" />
                  Add to Cart
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}