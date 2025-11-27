import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Search, ShoppingCart, Download, Star, Package, FileText, Trash2, CreditCard, CheckCircle2, Smartphone } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface Product {
  id: string;
  title: string;
  image: string;
  price: number;
  category: string;
  type: "physical" | "digital";
  rating: number;
  downloads?: string;
  stock?: number;
  description: string;
}

const products: Product[] = [
  {
    id: "p1",
    title: "Complete Embroidery Pattern Pack",
    image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80",
    price: 12.99,
    category: "Digital Templates",
    type: "digital",
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
    type: "digital",
    rating: 4.9,
    downloads: "3.2K",
    description: "Create stunning paper flowers with 30 different templates. Includes roses, peonies, daisies, and more.",
  },
  {
    id: "p3",
    title: "Resin Jewelry Starter Kit",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    price: 34.99,
    category: "Resin Art",
    type: "physical",
    rating: 4.7,
    stock: 45,
    description: "Complete resin jewelry making kit with molds, resin, pigments, and tools. Perfect for beginners.",
  },
  {
    id: "p4",
    title: "Macramé Cord Bundle - 5 Colors",
    image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80",
    price: 24.99,
    category: "Sewing & Crochet",
    type: "physical",
    rating: 4.8,
    stock: 120,
    description: "Premium cotton macramé cord in 5 beautiful colors. 100 yards per color, 3mm thickness.",
  },
  {
    id: "p5",
    title: "Crochet Amigurumi Patterns",
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&q=80",
    price: 15.99,
    category: "Sewing & Crochet",
    type: "digital",
    rating: 4.9,
    downloads: "4.1K",
    description: "Adorable amigurumi patterns for 25 different animals and characters. Includes detailed instructions.",
  },
  {
    id: "p6",
    title: "Watercolor Paint Set - 48 Colors",
    image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=800&q=80",
    price: 29.99,
    category: "Home Decor DIY",
    type: "physical",
    rating: 4.6,
    stock: 78,
    description: "Professional watercolor paint set with 48 vibrant colors. Includes brushes and mixing palette.",
  },
  {
    id: "p7",
    title: "Seasonal Craft Calendar Templates",
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&q=80",
    price: 8.99,
    category: "Seasonal Crafts",
    type: "digital",
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
    type: "digital",
    rating: 4.7,
    downloads: "3.5K",
    description: "100+ fun and educational craft activities for children ages 4-12. Printable templates included.",
  },
  {
    id: "p9",
    title: "Polymer Clay Tool Set",
    image: "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=800&q=80",
    price: 18.99,
    category: "Resin Art",
    type: "physical",
    rating: 4.6,
    stock: 92,
    description: "Complete polymer clay sculpting tool set with 15 essential tools for detailed work.",
  },
  {
    id: "p10",
    title: "Origami Paper Pack - 500 Sheets",
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&q=80",
    price: 14.99,
    category: "Paper Crafts",
    type: "physical",
    rating: 4.8,
    stock: 156,
    description: "500 sheets of premium origami paper in 50 different colors and patterns.",
  },
  {
    id: "p11",
    title: "Knitting Pattern Collection",
    image: "https://images.unsplash.com/photo-1586339277861-b0b895343ba5?w=800&q=80",
    price: 11.99,
    category: "Sewing & Crochet",
    type: "digital",
    rating: 4.7,
    downloads: "2.9K",
    description: "40 knitting patterns for scarves, hats, sweaters, and blankets. All skill levels.",
  },
  {
    id: "p12",
    title: "Acrylic Paint Set - 24 Colors",
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&q=80",
    price: 22.99,
    category: "Home Decor DIY",
    type: "physical",
    rating: 4.5,
    stock: 88,
    description: "High-quality acrylic paints perfect for canvas, wood, and mixed media projects.",
  },
  {
    id: "p13",
    title: "Scrapbooking Sticker Pack",
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&q=80",
    price: 7.99,
    category: "Paper Crafts",
    type: "physical",
    rating: 4.9,
    stock: 200,
    description: "1000+ decorative stickers for scrapbooking, journaling, and card making.",
  },
  {
    id: "p14",
    title: "Resin Mold Set - 20 Pieces",
    image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=800&q=80",
    price: 16.99,
    category: "Resin Art",
    type: "physical",
    rating: 4.7,
    stock: 67,
    description: "Silicone molds for jewelry, coasters, keychains, and decorative items.",
  },
  {
    id: "p15",
    title: "Cross Stitch Pattern Bundle",
    image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=800&q=80",
    price: 13.99,
    category: "Digital Templates",
    type: "digital",
    rating: 4.8,
    downloads: "3.1K",
    description: "60 cross stitch patterns from beginner to advanced. Includes color charts.",
  },
  {
    id: "p16",
    title: "Felt Craft Sheets - 50 Pack",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    price: 12.99,
    category: "Kids Crafts",
    type: "physical",
    rating: 4.6,
    stock: 145,
    description: "Assorted colors of premium felt sheets perfect for kids crafts and DIY projects.",
  },
  {
    id: "p17",
    title: "Calligraphy Practice Sheets",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80",
    price: 6.99,
    category: "Digital Templates",
    type: "digital",
    rating: 4.5,
    downloads: "4.2K",
    description: "Printable calligraphy practice sheets with multiple fonts and styles.",
  },
  {
    id: "p18",
    title: "Beading Supplies Kit",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
    price: 28.99,
    category: "Sewing & Crochet",
    type: "physical",
    rating: 4.7,
    stock: 73,
    description: "Complete beading kit with 2000+ beads, wire, clasps, and tools.",
  },
  {
    id: "p19",
    title: "Holiday Card Templates",
    image: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=800&q=80",
    price: 8.99,
    category: "Seasonal Crafts",
    type: "digital",
    rating: 4.9,
    downloads: "5.1K",
    description: "50+ holiday card templates for all occasions. Fully customizable.",
  },
  {
    id: "p20",
    title: "Wood Burning Tool Kit",
    image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=800&q=80",
    price: 32.99,
    category: "Home Decor DIY",
    type: "physical",
    rating: 4.6,
    stock: 54,
    description: "Professional wood burning tool with 20 tips and temperature control.",
  },
  {
    id: "p21",
    title: "Quilling Paper Strips",
    image: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800&q=80",
    price: 9.99,
    category: "Paper Crafts",
    type: "physical",
    rating: 4.8,
    stock: 112,
    description: "1000 strips of quilling paper in 40 colors. Perfect for paper art projects.",
  },
  {
    id: "p22",
    title: "Sewing Pattern Collection",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea1c8e77?w=800&q=80",
    price: 14.99,
    category: "Sewing & Crochet",
    type: "digital",
    rating: 4.7,
    downloads: "2.7K",
    description: "35 sewing patterns for clothing, bags, and home decor items.",
  },
  {
    id: "p23",
    title: "Glitter Glue Set - 12 Colors",
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&q=80",
    price: 11.99,
    category: "Kids Crafts",
    type: "physical",
    rating: 4.5,
    stock: 98,
    description: "Non-toxic glitter glue perfect for kids crafts and school projects.",
  },
  {
    id: "p24",
    title: "Resin Pigment Set",
    image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=800&q=80",
    price: 19.99,
    category: "Resin Art",
    type: "physical",
    rating: 4.8,
    stock: 81,
    description: "24 highly concentrated resin pigments for vibrant color mixing.",
  },
  {
    id: "p25",
    title: "Printable Planner Stickers",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
    price: 5.99,
    category: "Digital Templates",
    type: "digital",
    rating: 4.9,
    downloads: "6.3K",
    description: "500+ printable planner stickers for organization and decoration.",
  },
  {
    id: "p26",
    title: "Fabric Paint Set - 18 Colors",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea1c8e77?w=800&q=80",
    price: 17.99,
    category: "Sewing & Crochet",
    type: "physical",
    rating: 4.6,
    stock: 65,
    description: "Permanent fabric paints for clothing, bags, and textile projects.",
  },
  {
    id: "p27",
    title: "Wreath Making Supplies",
    image: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=800&q=80",
    price: 26.99,
    category: "Seasonal Crafts",
    type: "physical",
    rating: 4.7,
    stock: 42,
    description: "Complete wreath making kit with wire frames, ribbons, and decorations.",
  },
  {
    id: "p28",
    title: "Coloring Book Templates",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80",
    price: 7.99,
    category: "Kids Crafts",
    type: "digital",
    rating: 4.8,
    downloads: "4.5K",
    description: "100 printable coloring pages with various themes and difficulty levels.",
  },
  {
    id: "p29",
    title: "Leather Crafting Tool Set",
    image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=800&q=80",
    price: 38.99,
    category: "Home Decor DIY",
    type: "physical",
    rating: 4.5,
    stock: 38,
    description: "Professional leather working tools including stamps, punches, and needles.",
  },
  {
    id: "p30",
    title: "Cardstock Paper Pack",
    image: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800&q=80",
    price: 13.99,
    category: "Paper Crafts",
    type: "physical",
    rating: 4.7,
    stock: 128,
    description: "250 sheets of premium cardstock in 25 colors. Perfect for card making.",
  },
  {
    id: "p31",
    title: "Crochet Hook Set - 14 Sizes",
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&q=80",
    price: 15.99,
    category: "Sewing & Crochet",
    type: "physical",
    rating: 4.9,
    stock: 95,
    description: "Ergonomic crochet hooks in all standard sizes with storage case.",
  },
  {
    id: "p32",
    title: "SVG Cut Files Bundle",
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&q=80",
    price: 12.99,
    category: "Digital Templates",
    type: "digital",
    rating: 4.8,
    downloads: "3.8K",
    description: "500+ SVG files for Cricut and Silhouette cutting machines.",
  },
  {
    id: "p33",
    title: "Epoxy Resin Kit - 32oz",
    image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=800&q=80",
    price: 29.99,
    category: "Resin Art",
    type: "physical",
    rating: 4.7,
    stock: 58,
    description: "Crystal clear epoxy resin perfect for jewelry, art, and coatings.",
  },
  {
    id: "p34",
    title: "Pom Pom Maker Set",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    price: 8.99,
    category: "Kids Crafts",
    type: "physical",
    rating: 4.6,
    stock: 142,
    description: "4 sizes of pom pom makers for creating fluffy decorations.",
  },
  {
    id: "p35",
    title: "Watercolor Floral Patterns",
    image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=800&q=80",
    price: 10.99,
    category: "Digital Templates",
    type: "digital",
    rating: 4.9,
    downloads: "4.7K",
    description: "Beautiful watercolor floral designs for digital and print projects.",
  },
  {
    id: "p36",
    title: "Needle Felting Starter Kit",
    image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=800&q=80",
    price: 24.99,
    category: "Sewing & Crochet",
    type: "physical",
    rating: 4.7,
    stock: 71,
    description: "Complete needle felting kit with wool, needles, and foam pad.",
  },
  {
    id: "p37",
    title: "Christmas Ornament Templates",
    image: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=800&q=80",
    price: 9.99,
    category: "Seasonal Crafts",
    type: "digital",
    rating: 4.8,
    downloads: "5.6K",
    description: "50 DIY Christmas ornament templates and instructions.",
  },
  {
    id: "p38",
    title: "Mod Podge Variety Pack",
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&q=80",
    price: 16.99,
    category: "Home Decor DIY",
    type: "physical",
    rating: 4.6,
    stock: 89,
    description: "5 different finishes of Mod Podge for decoupage projects.",
  },
  {
    id: "p39",
    title: "Paper Punch Set - 12 Shapes",
    image: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800&q=80",
    price: 14.99,
    category: "Paper Crafts",
    type: "physical",
    rating: 4.7,
    stock: 103,
    description: "Decorative paper punches in various shapes for scrapbooking.",
  },
  {
    id: "p40",
    title: "Quilting Pattern Collection",
    image: "https://images.unsplash.com/photo-1586339277861-b0b895343ba5?w=800&q=80",
    price: 16.99,
    category: "Sewing & Crochet",
    type: "digital",
    rating: 4.8,
    downloads: "2.4K",
    description: "30 quilting patterns from traditional to modern designs.",
  },
  {
    id: "p41",
    title: "Chalk Paint Set - 8 Colors",
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&q=80",
    price: 27.99,
    category: "Home Decor DIY",
    type: "physical",
    rating: 4.5,
    stock: 62,
    description: "Matte finish chalk paint perfect for furniture upcycling.",
  },
  {
    id: "p42",
    title: "Resin Glitter Mix",
    image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=800&q=80",
    price: 12.99,
    category: "Resin Art",
    type: "physical",
    rating: 4.8,
    stock: 94,
    description: "Fine glitter mix in 20 colors specifically for resin projects.",
  },
  {
    id: "p43",
    title: "Birthday Party Printables",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80",
    price: 8.99,
    category: "Kids Crafts",
    type: "digital",
    rating: 4.9,
    downloads: "5.9K",
    description: "Complete party printable set with banners, invitations, and decorations.",
  },
  {
    id: "p44",
    title: "Washi Tape Set - 24 Rolls",
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&q=80",
    price: 18.99,
    category: "Paper Crafts",
    type: "physical",
    rating: 4.7,
    stock: 136,
    description: "Decorative washi tape in various patterns and colors.",
  },
  {
    id: "p45",
    title: "Embroidery Floss - 100 Colors",
    image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80",
    price: 21.99,
    category: "Sewing & Crochet",
    type: "physical",
    rating: 4.8,
    stock: 87,
    description: "Complete embroidery floss set with organizer box.",
  },
  {
    id: "p46",
    title: "Wall Art Printables",
    image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=800&q=80",
    price: 11.99,
    category: "Digital Templates",
    type: "digital",
    rating: 4.6,
    downloads: "3.9K",
    description: "50 modern wall art designs ready to print and frame.",
  },
  {
    id: "p47",
    title: "Hot Glue Gun Kit",
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&q=80",
    price: 13.99,
    category: "Home Decor DIY",
    type: "physical",
    rating: 4.5,
    stock: 118,
    description: "High-temp glue gun with 50 glue sticks included.",
  },
  {
    id: "p48",
    title: "Resin Jewelry Findings",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    price: 15.99,
    category: "Resin Art",
    type: "physical",
    rating: 4.7,
    stock: 76,
    description: "200+ jewelry findings including chains, clasps, and jump rings.",
  },
  {
    id: "p49",
    title: "Easter Craft Templates",
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&q=80",
    price: 7.99,
    category: "Seasonal Crafts",
    type: "digital",
    rating: 4.8,
    downloads: "4.1K",
    description: "40 Easter-themed craft templates and decoration ideas.",
  },
  {
    id: "p50",
    title: "Cutting Mat - Self Healing",
    image: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800&q=80",
    price: 19.99,
    category: "Paper Crafts",
    type: "physical",
    rating: 4.9,
    stock: 84,
    description: "24x36 inch self-healing cutting mat with grid lines.",
  },
  {
    id: "p51",
    title: "Yarn Bundle - 20 Skeins",
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&q=80",
    price: 32.99,
    category: "Sewing & Crochet",
    type: "physical",
    rating: 4.7,
    stock: 69,
    description: "Assorted colors of soft acrylic yarn perfect for any project.",
  },
  {
    id: "p52",
    title: "Wedding Invitation Templates",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
    price: 14.99,
    category: "Digital Templates",
    type: "digital",
    rating: 4.9,
    downloads: "3.3K",
    description: "Elegant wedding invitation templates with RSVP cards.",
  },
  {
    id: "p53",
    title: "Stencil Set - 30 Designs",
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&q=80",
    price: 16.99,
    category: "Home Decor DIY",
    type: "physical",
    rating: 4.6,
    stock: 91,
    description: "Reusable stencils for painting, crafts, and home decor.",
  },
  {
    id: "p54",
    title: "UV Resin - 200g",
    image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=800&q=80",
    price: 18.99,
    category: "Resin Art",
    type: "physical",
    rating: 4.8,
    stock: 63,
    description: "Fast-curing UV resin perfect for small jewelry projects.",
  },
  {
    id: "p55",
    title: "Foam Sheets - 40 Pack",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    price: 10.99,
    category: "Kids Crafts",
    type: "physical",
    rating: 4.7,
    stock: 157,
    description: "Colorful foam sheets for kids crafts and school projects.",
  },
  {
    id: "p56",
    title: "Bullet Journal Templates",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
    price: 9.99,
    category: "Digital Templates",
    type: "digital",
    rating: 4.8,
    downloads: "5.2K",
    description: "100+ bullet journal page templates and trackers.",
  },
  {
    id: "p57",
    title: "Rotary Cutter Set",
    image: "https://images.unsplash.com/photo-1604695573706-53170668f6a6?w=800&q=80",
    price: 22.99,
    category: "Sewing & Crochet",
    type: "physical",
    rating: 4.6,
    stock: 72,
    description: "Precision rotary cutter with 5 replacement blades.",
  },
  {
    id: "p58",
    title: "Fall Wreath Templates",
    image: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=800&q=80",
    price: 8.99,
    category: "Seasonal Crafts",
    type: "digital",
    rating: 4.7,
    downloads: "3.7K",
    description: "25 autumn wreath designs with material lists.",
  },
  {
    id: "p59",
    title: "Spray Paint Set - 12 Colors",
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&q=80",
    price: 34.99,
    category: "Home Decor DIY",
    type: "physical",
    rating: 4.5,
    stock: 47,
    description: "Multi-surface spray paint in trending colors.",
  },
  {
    id: "p60",
    title: "Die Cut Machine Accessories",
    image: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800&q=80",
    price: 28.99,
    category: "Paper Crafts",
    type: "physical",
    rating: 4.8,
    stock: 55,
    description: "Essential accessories for Cricut and Silhouette machines.",
  },
  {
    id: "p61",
    title: "Knitting Needles Set",
    image: "https://images.unsplash.com/photo-1586339277861-b0b895343ba5?w=800&q=80",
    price: 26.99,
    category: "Sewing & Crochet",
    type: "physical",
    rating: 4.7,
    stock: 68,
    description: "Bamboo knitting needles in 10 sizes with case.",
  },
  {
    id: "p62",
    title: "Logo Design Templates",
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&q=80",
    price: 15.99,
    category: "Digital Templates",
    type: "digital",
    rating: 4.6,
    downloads: "2.8K",
    description: "200 customizable logo templates for small businesses.",
  },
  {
    id: "p63",
    title: "Resin Alcohol Inks",
    image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=800&q=80",
    price: 21.99,
    category: "Resin Art",
    type: "physical",
    rating: 4.8,
    stock: 79,
    description: "12 vibrant alcohol inks for resin art and mixed media.",
  },
  {
    id: "p64",
    title: "Pipe Cleaners - 500 Pack",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    price: 9.99,
    category: "Kids Crafts",
    type: "physical",
    rating: 4.6,
    stock: 168,
    description: "Assorted colors of chenille stems for creative projects.",
  },
  {
    id: "p65",
    title: "Social Media Templates",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
    price: 12.99,
    category: "Digital Templates",
    type: "digital",
    rating: 4.9,
    downloads: "6.8K",
    description: "300+ Instagram, Facebook, and Pinterest post templates.",
  },
  {
    id: "p66",
    title: "Fabric Scissors - Professional",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea1c8e77?w=800&q=80",
    price: 17.99,
    category: "Sewing & Crochet",
    type: "physical",
    rating: 4.8,
    stock: 93,
    description: "Sharp fabric scissors with ergonomic handles.",
  },
  {
    id: "p67",
    title: "Valentine's Day Crafts",
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&q=80",
    price: 7.99,
    category: "Seasonal Crafts",
    type: "digital",
    rating: 4.7,
    downloads: "4.4K",
    description: "35 Valentine's Day craft ideas and templates.",
  },
  {
    id: "p68",
    title: "Wood Stain Set - 6 Colors",
    image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=800&q=80",
    price: 29.99,
    category: "Home Decor DIY",
    type: "physical",
    rating: 4.6,
    stock: 51,
    description: "Interior wood stain in popular finishes.",
  },
  {
    id: "p69",
    title: "Scrapbook Paper Pack",
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&q=80",
    price: 14.99,
    category: "Paper Crafts",
    type: "physical",
    rating: 4.7,
    stock: 124,
    description: "180 sheets of double-sided scrapbook paper.",
  },
  {
    id: "p70",
    title: "Tapestry Yarn Bundle",
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&q=80",
    price: 19.99,
    category: "Sewing & Crochet",
    type: "physical",
    rating: 4.7,
    stock: 82,
    description: "50 colors of tapestry yarn for needlepoint projects.",
  },
  {
    id: "p71",
    title: "Business Card Templates",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
    price: 10.99,
    category: "Digital Templates",
    type: "digital",
    rating: 4.8,
    downloads: "3.6K",
    description: "100 professional business card designs.",
  },
  {
    id: "p72",
    title: "Resin Mixing Cups - 100 Pack",
    image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=800&q=80",
    price: 11.99,
    category: "Resin Art",
    type: "physical",
    rating: 4.6,
    stock: 105,
    description: "Graduated mixing cups with stir sticks.",
  },
  {
    id: "p73",
    title: "Googly Eyes - 1000 Pack",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80",
    price: 8.99,
    category: "Kids Crafts",
    type: "physical",
    rating: 4.9,
    stock: 189,
    description: "Assorted sizes of self-adhesive googly eyes.",
  },
  {
    id: "p74",
    title: "Recipe Card Templates",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
    price: 6.99,
    category: "Digital Templates",
    type: "digital",
    rating: 4.7,
    downloads: "4.9K",
    description: "Beautiful printable recipe card designs.",
  },
  {
    id: "p75",
    title: "Seam Ripper Set",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea1c8e77?w=800&q=80",
    price: 7.99,
    category: "Sewing & Crochet",
    type: "physical",
    rating: 4.5,
    stock: 147,
    description: "Precision seam rippers in 3 sizes.",
  },
  {
    id: "p76",
    title: "Halloween Decoration Templates",
    image: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=800&q=80",
    price: 9.99,
    category: "Seasonal Crafts",
    type: "digital",
    rating: 4.8,
    downloads: "5.3K",
    description: "50 spooky Halloween decoration templates.",
  },
  {
    id: "p77",
    title: "Sandpaper Variety Pack",
    image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=800&q=80",
    price: 12.99,
    category: "Home Decor DIY",
    type: "physical",
    rating: 4.6,
    stock: 96,
    description: "50 sheets in various grits for wood projects.",
  },
  {
    id: "p78",
    title: "Rubber Stamps Set",
    image: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800&q=80",
    price: 18.99,
    category: "Paper Crafts",
    type: "physical",
    rating: 4.7,
    stock: 77,
    description: "20 decorative rubber stamps with ink pads.",
  },
  {
    id: "p79",
    title: "Embroidery Hoop Set",
    image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80",
    price: 13.99,
    category: "Sewing & Crochet",
    type: "physical",
    rating: 4.8,
    stock: 108,
    description: "Bamboo embroidery hoops in 5 sizes.",
  },
  {
    id: "p80",
    title: "Flyer Design Templates",
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&q=80",
    price: 11.99,
    category: "Digital Templates",
    type: "digital",
    rating: 4.6,
    downloads: "3.2K",
    description: "75 customizable flyer templates for events.",
  },
  {
    id: "p81",
    title: "Resin Gloves - 100 Pack",
    image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=800&q=80",
    price: 9.99,
    category: "Resin Art",
    type: "physical",
    rating: 4.7,
    stock: 132,
    description: "Disposable nitrile gloves for resin work.",
  },
  {
    id: "p82",
    title: "Construction Paper - 500 Sheets",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    price: 16.99,
    category: "Kids Crafts",
    type: "physical",
    rating: 4.6,
    stock: 143,
    description: "Assorted colors of construction paper.",
  },
  {
    id: "p83",
    title: "Label Templates Pack",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
    price: 8.99,
    category: "Digital Templates",
    type: "digital",
    rating: 4.8,
    downloads: "5.7K",
    description: "200+ label templates for jars, bottles, and gifts.",
  },
  {
    id: "p84",
    title: "Bias Tape Maker Set",
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&q=80",
    price: 14.99,
    category: "Sewing & Crochet",
    type: "physical",
    rating: 4.7,
    stock: 64,
    description: "4 sizes of bias tape makers for sewing.",
  },
  {
    id: "p85",
    title: "Thanksgiving Craft Bundle",
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&q=80",
    price: 10.99,
    category: "Seasonal Crafts",
    type: "digital",
    rating: 4.9,
    downloads: "4.6K",
    description: "40 Thanksgiving decoration and craft templates.",
  },
  {
    id: "p86",
    title: "Paint Brush Set - 24 Pieces",
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&q=80",
    price: 23.99,
    category: "Home Decor DIY",
    type: "physical",
    rating: 4.7,
    stock: 86,
    description: "Professional paint brushes for all mediums.",
  },
  {
    id: "p87",
    title: "Embossing Folders Set",
    image: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800&q=80",
    price: 19.99,
    category: "Paper Crafts",
    type: "physical",
    rating: 4.6,
    stock: 71,
    description: "10 embossing folders with various patterns.",
  },
  {
    id: "p88",
    title: "Sewing Machine Needles",
    image: "https://images.unsplash.com/photo-1597045566677-8cf032d6c3c8?w=800&q=80",
    price: 8.99,
    category: "Sewing & Crochet",
    type: "physical",
    rating: 4.8,
    stock: 156,
    description: "Assorted sewing machine needles - 50 pack.",
  },
  {
    id: "p89",
    title: "Brochure Templates",
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&q=80",
    price: 13.99,
    category: "Digital Templates",
    type: "digital",
    rating: 4.7,
    downloads: "2.9K",
    description: "50 tri-fold brochure templates.",
  },
  {
    id: "p90",
    title: "Resin Heat Gun",
    image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=800&q=80",
    price: 24.99,
    category: "Resin Art",
    type: "physical",
    rating: 4.6,
    stock: 58,
    description: "Dual temperature heat gun for removing bubbles.",
  },
  {
    id: "p91",
    title: "Craft Sticks - 1000 Pack",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80",
    price: 11.99,
    category: "Kids Crafts",
    type: "physical",
    rating: 4.7,
    stock: 174,
    description: "Natural wood craft sticks in 3 sizes.",
  },
  {
    id: "p92",
    title: "Menu Design Templates",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
    price: 12.99,
    category: "Digital Templates",
    type: "digital",
    rating: 4.8,
    downloads: "3.4K",
    description: "40 restaurant menu templates.",
  },
  {
    id: "p93",
    title: "Quilting Ruler Set",
    image: "https://images.unsplash.com/photo-1586339277861-b0b895343ba5?w=800&q=80",
    price: 21.99,
    category: "Sewing & Crochet",
    type: "physical",
    rating: 4.7,
    stock: 67,
    description: "Acrylic quilting rulers in 4 essential sizes.",
  },
  {
    id: "p94",
    title: "New Year's Party Printables",
    image: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=800&q=80",
    price: 9.99,
    category: "Seasonal Crafts",
    type: "digital",
    rating: 4.6,
    downloads: "3.8K",
    description: "Complete New Year's Eve party decoration set.",
  },
  {
    id: "p95",
    title: "Furniture Wax - 3 Colors",
    image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=800&q=80",
    price: 26.99,
    category: "Home Decor DIY",
    type: "physical",
    rating: 4.8,
    stock: 49,
    description: "Furniture wax for sealing and finishing painted pieces.",
  },
  {
    id: "p96",
    title: "Corner Rounder Punch",
    image: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800&q=80",
    price: 12.99,
    category: "Paper Crafts",
    type: "physical",
    rating: 4.6,
    stock: 98,
    description: "Professional corner rounder for cards and photos.",
  },
  {
    id: "p97",
    title: "Patchwork Fabric Bundle",
    image: "https://images.unsplash.com/photo-1604695573706-53170668f6a6?w=800&q=80",
    price: 28.99,
    category: "Sewing & Crochet",
    type: "physical",
    rating: 4.7,
    stock: 73,
    description: "50 pieces of coordinating cotton fabric squares.",
  },
  {
    id: "p98",
    title: "Certificate Templates",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
    price: 10.99,
    category: "Digital Templates",
    type: "digital",
    rating: 4.9,
    downloads: "4.2K",
    description: "50 customizable certificate and award templates.",
  },
  {
    id: "p99",
    title: "Resin Silicone Mat",
    image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=800&q=80",
    price: 15.99,
    category: "Resin Art",
    type: "physical",
    rating: 4.8,
    stock: 91,
    description: "Large non-stick silicone mat for resin projects.",
  },
  {
    id: "p100",
    title: "Tissue Paper - 100 Sheets",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    price: 13.99,
    category: "Kids Crafts",
    type: "physical",
    rating: 4.6,
    stock: 162,
    description: "Rainbow assortment of tissue paper for crafts.",
  },
  {
    id: "p101",
    title: "Poster Design Templates",
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&q=80",
    price: 14.99,
    category: "Digital Templates",
    type: "digital",
    rating: 4.7,
    downloads: "3.1K",
    description: "60 eye-catching poster templates for events.",
  },
  {
    id: "p102",
    title: "Measuring Tape - Retractable",
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&q=80",
    price: 6.99,
    category: "Sewing & Crochet",
    type: "physical",
    rating: 4.8,
    stock: 187,
    description: "60-inch retractable measuring tape for sewing.",
  },
  {
    id: "p103",
    title: "Spring Craft Collection",
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&q=80",
    price: 11.99,
    category: "Seasonal Crafts",
    type: "digital",
    rating: 4.8,
    downloads: "4.3K",
    description: "45 spring-themed craft projects and templates.",
  },
  {
    id: "p104",
    title: "Wood Glue - Professional Grade",
    image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=800&q=80",
    price: 14.99,
    category: "Home Decor DIY",
    type: "physical",
    rating: 4.7,
    stock: 104,
    description: "Strong wood glue for furniture and craft projects.",
  },
  {
    id: "p105",
    title: "Ink Pad Set - 12 Colors",
    image: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800&q=80",
    price: 17.99,
    category: "Paper Crafts",
    type: "physical",
    rating: 4.6,
    stock: 89,
    description: "Archival quality ink pads for stamping.",
  },
];

export default function Shop() {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [productType, setProductType] = useState<"all" | "physical" | "digital">("all");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<Array<{ product: Product; quantity: number }>>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState<"cart" | "shipping" | "payment" | "confirmation">("cart");
  const [orderNumber, setOrderNumber] = useState("");
  const { toast } = useToast();

  // Checkout form state
  const [shippingInfo, setShippingInfo] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "US",
  });

  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: "",
    cardName: "",
    expiry: "",
    cvv: "",
  });

  const [paymentMethod, setPaymentMethod] = useState<"card" | "cashapp">("card");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === "all" || product.category === categoryFilter;
    const matchesType = productType === "all" || product.type === productType;
    return matchesSearch && matchesCategory && matchesType;
  });

  const categories = ["all", ...Array.from(new Set(products.map((p) => p.category)))];

  const addToCart = (product: Product) => {
    const existingItem = cart.find((item) => item.product.id === product.id);
    if (existingItem) {
      setCart(cart.map((item) =>
        item.product.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { product, quantity: 1 }]);
    }
    toast({
      title: "Added to cart! 🛒",
      description: `${product.title} has been added to your cart.`,
    });
    setSelectedProduct(null);
    setCartOpen(true); // Open cart sidebar automatically
  };

  const removeFromCart = (productId: string) => {
    setCart(cart.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity < 1) return;
    setCart(cart.map((item) =>
      item.product.id === productId ? { ...item, quantity } : item
    ));
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleCheckout = () => {
    setCartOpen(true);
    setCheckoutStep("cart");
  };

  const proceedToShipping = () => {
    setCheckoutStep("shipping");
  };

  const proceedToPayment = () => {
    if (!shippingInfo.fullName || !shippingInfo.email || !shippingInfo.address) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    setCheckoutStep("payment");
  };

  const completeOrder = () => {
    if (!paymentInfo.cardNumber || !paymentInfo.cardName || !paymentInfo.expiry || !paymentInfo.cvv) {
      toast({
        title: "Missing payment information",
        description: "Please fill in all payment details",
        variant: "destructive",
      });
      return;
    }
    
    // Generate fake order number
    const orderNum = `CB-${Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}`;
    setOrderNumber(orderNum);
    setCheckoutStep("confirmation");
    
    // Clear cart after a delay
    setTimeout(() => {
      setCart([]);
    }, 2000);
  };

  const resetCheckout = () => {
    setCheckoutStep("cart");
    setCartOpen(false);
    setShippingInfo({
      fullName: "",
      email: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      country: "US",
    });
    setPaymentInfo({
      cardNumber: "",
      cardName: "",
      expiry: "",
      cvv: "",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary/10">
      <Navigation />

      {/* Header */}
      <section className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Craft Shop</h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Shop craft supplies, digital patterns, and handmade items from talented creators
              </p>
            </div>
            <Sheet open={cartOpen} onOpenChange={setCartOpen}>
              <SheetTrigger asChild>
                <Button size="lg" className="hidden md:flex items-center gap-2 relative">
                  <ShoppingCart className="w-5 h-5" />
                  Cart
                  {cartCount > 0 && (
                    <Badge className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0 flex items-center justify-center">
                      {cartCount}
                    </Badge>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent className="w-full sm:max-w-lg overflow-y-auto">
                {checkoutStep === "cart" && (
                  <>
                    <SheetHeader>
                      <SheetTitle>Shopping Cart ({cartCount} items)</SheetTitle>
                    </SheetHeader>
                    <div className="mt-8 space-y-4">
                      {cart.length === 0 ? (
                        <div className="text-center py-12">
                          <ShoppingCart className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                          <p className="text-muted-foreground">Your cart is empty</p>
                        </div>
                      ) : (
                        <>
                          {cart.map((item) => (
                            <Card key={item.product.id} className="p-4">
                              <div className="flex gap-4">
                                <img
                                  src={item.product.image}
                                  alt={item.product.title}
                                  className="w-20 h-20 object-cover rounded"
                                />
                                <div className="flex-1">
                                  <h4 className="font-semibold line-clamp-2">{item.product.title}</h4>
                                  <p className="text-sm text-muted-foreground">${item.product.price}</p>
                                  <div className="flex items-center gap-2 mt-2">
                                    <Button
                                      size="sm"
                                      variant="outline"
                                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                                    >
                                      -
                                    </Button>
                                    <span className="w-8 text-center">{item.quantity}</span>
                                    <Button
                                      size="sm"
                                      variant="outline"
                                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                    >
                                      +
                                    </Button>
                                    <Button
                                      size="sm"
                                      variant="ghost"
                                      onClick={() => removeFromCart(item.product.id)}
                                      className="ml-auto"
                                    >
                                      <Trash2 className="w-4 h-4" />
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </Card>
                          ))}
                          <Separator />
                          <div className="space-y-2">
                            <div className="flex justify-between text-lg font-semibold">
                              <span>Total:</span>
                              <span>${cartTotal.toFixed(2)}</span>
                            </div>
                          </div>
                          <Button onClick={proceedToShipping} className="w-full" size="lg">
                            Proceed to Checkout
                          </Button>
                        </>
                      )}
                    </div>
                  </>
                )}

                {checkoutStep === "shipping" && (
                  <>
                    <SheetHeader>
                      <SheetTitle>Shipping Information</SheetTitle>
                    </SheetHeader>
                    <div className="mt-8 space-y-4">
                      <div>
                        <Label htmlFor="fullName">Full Name *</Label>
                        <Input
                          id="fullName"
                          value={shippingInfo.fullName}
                          onChange={(e) => setShippingInfo({ ...shippingInfo, fullName: e.target.value })}
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={shippingInfo.email}
                          onChange={(e) => setShippingInfo({ ...shippingInfo, email: e.target.value })}
                          placeholder="john@example.com"
                        />
                      </div>
                      <div>
                        <Label htmlFor="address">Address *</Label>
                        <Input
                          id="address"
                          value={shippingInfo.address}
                          onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })}
                          placeholder="123 Main St"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="city">City</Label>
                          <Input
                            id="city"
                            value={shippingInfo.city}
                            onChange={(e) => setShippingInfo({ ...shippingInfo, city: e.target.value })}
                          />
                        </div>
                        <div>
                          <Label htmlFor="state">State</Label>
                          <Input
                            id="state"
                            value={shippingInfo.state}
                            onChange={(e) => setShippingInfo({ ...shippingInfo, state: e.target.value })}
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="zip">ZIP Code</Label>
                          <Input
                            id="zip"
                            value={shippingInfo.zip}
                            onChange={(e) => setShippingInfo({ ...shippingInfo, zip: e.target.value })}
                          />
                        </div>
                        <div>
                          <Label htmlFor="country">Country</Label>
                          <Select value={shippingInfo.country} onValueChange={(v) => setShippingInfo({ ...shippingInfo, country: v })}>
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="US">United States</SelectItem>
                              <SelectItem value="CA">Canada</SelectItem>
                              <SelectItem value="UK">United Kingdom</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="flex gap-2 pt-4">
                        <Button variant="outline" onClick={() => setCheckoutStep("cart")} className="flex-1">
                          Back
                        </Button>
                        <Button onClick={proceedToPayment} className="flex-1">
                          Continue to Payment
                        </Button>
                      </div>
                    </div>
                  </>
                )}

                {checkoutStep === "payment" && (
                  <>
                    <SheetHeader>
                      <SheetTitle>Payment Information</SheetTitle>
                    </SheetHeader>
                    <div className="mt-8 space-y-4">
                      <div className="bg-secondary/20 p-4 rounded-lg">
                        <div className="flex justify-between mb-2">
                          <span>Subtotal:</span>
                          <span>${cartTotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between mb-2">
                          <span>Shipping:</span>
                          <span>$5.99</span>
                        </div>
                        <Separator className="my-2" />
                        <div className="flex justify-between font-bold text-lg">
                          <span>Total:</span>
                          <span>${(cartTotal + 5.99).toFixed(2)}</span>
                        </div>
                      </div>

                      <div>
                        <Label>Payment Method</Label>
                        <RadioGroup value={paymentMethod} onValueChange={(v) => setPaymentMethod(v as any)} className="mt-2">
                          <div className="flex items-center space-x-2 border rounded-lg p-3 cursor-pointer hover:bg-secondary/20">
                            <RadioGroupItem value="card" id="card" />
                            <Label htmlFor="card" className="flex items-center gap-2 cursor-pointer flex-1">
                              <CreditCard className="w-5 h-5" />
                              <span>Credit/Debit Card</span>
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2 border rounded-lg p-3 cursor-pointer hover:bg-secondary/20">
                            <RadioGroupItem value="cashapp" id="cashapp" />
                            <Label htmlFor="cashapp" className="flex items-center gap-2 cursor-pointer flex-1">
                              <Smartphone className="w-5 h-5" />
                              <span>Cash App</span>
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>

                      {paymentMethod === "card" && (
                        <>
                          <div>
                            <Label htmlFor="cardNumber">Card Number *</Label>
                            <Input
                              id="cardNumber"
                              value={paymentInfo.cardNumber}
                              onChange={(e) => setPaymentInfo({ ...paymentInfo, cardNumber: e.target.value })}
                              placeholder="1234 5678 9012 3456"
                              maxLength={19}
                            />
                          </div>
                          <div>
                            <Label htmlFor="cardName">Cardholder Name *</Label>
                            <Input
                              id="cardName"
                              value={paymentInfo.cardName}
                              onChange={(e) => setPaymentInfo({ ...paymentInfo, cardName: e.target.value })}
                              placeholder="John Doe"
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="expiry">Expiry Date *</Label>
                              <Input
                                id="expiry"
                                value={paymentInfo.expiry}
                                onChange={(e) => setPaymentInfo({ ...paymentInfo, expiry: e.target.value })}
                                placeholder="MM/YY"
                                maxLength={5}
                              />
                            </div>
                            <div>
                              <Label htmlFor="cvv">CVV *</Label>
                              <Input
                                id="cvv"
                                value={paymentInfo.cvv}
                                onChange={(e) => setPaymentInfo({ ...paymentInfo, cvv: e.target.value })}
                                placeholder="123"
                                maxLength={4}
                              />
                            </div>
                          </div>
                        </>
                      )}

                      {paymentMethod === "cashapp" && (
                        <Card className="p-6 bg-green-50 border-green-200">
                          <div className="space-y-4">
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                                <Smartphone className="w-6 h-6 text-white" />
                              </div>
                              <div>
                                <h4 className="font-bold">Pay with Cash App</h4>
                                <p className="text-sm text-muted-foreground">Send payment to complete order</p>
                              </div>
                            </div>
                            <Separator />
                            <div className="space-y-3">
                              <div>
                                <p className="text-sm font-semibold mb-1">Cash App Tag:</p>
                                <div className="bg-white p-3 rounded border border-green-300 font-mono text-lg">
                                  $MakeHiveLLC
                                </div>
                              </div>
                              <div>
                                <p className="text-sm font-semibold mb-1">Amount to Send:</p>
                                <div className="bg-white p-3 rounded border border-green-300 font-mono text-lg font-bold text-green-600">
                                  ${(cartTotal + 5.99).toFixed(2)}
                                </div>
                              </div>
                              <div className="bg-yellow-50 border border-yellow-200 p-3 rounded">
                                <p className="text-sm font-semibold mb-2">📱 Instructions:</p>
                                <ol className="text-sm space-y-1 list-decimal list-inside">
                                  <li>Open Cash App on your phone</li>
                                  <li>Tap "Pay" and search for <strong>$MakeHiveLLC</strong></li>
                                  <li>Enter amount: <strong>${(cartTotal + 5.99).toFixed(2)}</strong></li>
                                  <li>Add note: "Order {orderNumber || 'CB-XXXXXX'}"</li>
                                  <li>Complete payment and click "Place Order" below</li>
                                </ol>
                              </div>
                            </div>
                          </div>
                        </Card>
                      )}

                      <div className="flex gap-2 pt-4">
                        <Button variant="outline" onClick={() => setCheckoutStep("shipping")} className="flex-1">
                          Back
                        </Button>
                        <Button onClick={completeOrder} className="flex-1">
                          {paymentMethod === "card" ? (
                            <>
                              <CreditCard className="w-4 h-4 mr-2" />
                              Place Order
                            </>
                          ) : (
                            <>
                              <Smartphone className="w-4 h-4 mr-2" />
                              Confirm Payment
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                  </>
                )}

                {checkoutStep === "confirmation" && (
                  <>
                    <SheetHeader>
                      <SheetTitle>Order Confirmed!</SheetTitle>
                    </SheetHeader>
                    <div className="mt-8 text-center space-y-6">
                      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-12 h-12 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                        <p className="text-muted-foreground">Your order has been successfully placed</p>
                      </div>
                      <Card className="p-6 text-left">
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Order Number:</span>
                            <span className="font-semibold">{orderNumber}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Total:</span>
                            <span className="font-semibold">${(cartTotal + 5.99).toFixed(2)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Email:</span>
                            <span className="font-semibold">{shippingInfo.email}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Payment:</span>
                            <span className="font-semibold">{paymentMethod === "card" ? "Credit Card" : "Cash App"}</span>
                          </div>
                        </div>
                      </Card>
                      
                      <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg text-left">
                        <div className="flex gap-3">
                          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                            <Download className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h4 className="font-bold mb-1">Digital Products & Order Details</h4>
                            <p className="text-sm text-muted-foreground">
                              Your order confirmation and digital downloads will be sent to <strong>{shippingInfo.email}</strong> within 5 minutes.
                            </p>
                            <p className="text-sm text-muted-foreground mt-2">
                              Physical items will be shipped to your address within 3-5 business days.
                            </p>
                          </div>
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground">
                        Check your email for order confirmation and download links
                      </p>
                      <Button onClick={resetCheckout} className="w-full">
                        Continue Shopping
                      </Button>
                    </div>
                  </>
                )}
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Product Type Tabs */}
        <Tabs value={productType} onValueChange={(v) => setProductType(v as any)} className="mb-8">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="all">All Products</TabsTrigger>
            <TabsTrigger value="physical">
              <Package className="w-4 h-4 mr-2" />
              Physical
            </TabsTrigger>
            <TabsTrigger value="digital">
              <FileText className="w-4 h-4 mr-2" />
              Digital
            </TabsTrigger>
          </TabsList>
        </Tabs>

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

            <Sheet open={cartOpen} onOpenChange={setCartOpen}>
              <SheetTrigger asChild>
                <Button className="md:hidden flex items-center gap-2 relative">
                  <ShoppingCart className="w-5 h-5" />
                  Cart
                  {cartCount > 0 && (
                    <Badge className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0 flex items-center justify-center">
                      {cartCount}
                    </Badge>
                  )}
                </Button>
              </SheetTrigger>
            </Sheet>
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
              <div className="relative h-48 overflow-hidden bg-black">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 opacity-90"
                />
                <Badge className="absolute top-3 right-3 bg-white text-foreground">
                  ${product.price}
                </Badge>
                <Badge className="absolute top-3 left-3" variant={product.type === "digital" ? "secondary" : "default"}>
                  {product.type === "digital" ? <Download className="w-3 h-3 mr-1" /> : <Package className="w-3 h-3 mr-1" />}
                  {product.type === "digital" ? "Digital" : "Physical"}
                </Badge>
              </div>
              <CardHeader>
                <Badge variant="outline" className="w-fit mb-2 text-xs">
                  {product.category}
                </Badge>
                <h3 className="font-bold text-lg line-clamp-2">{product.title}</h3>
              </CardHeader>
              <CardFooter className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-sm">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">{product.rating}</span>
                </div>
                {product.type === "digital" && product.downloads && (
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Download className="w-4 h-4" />
                    <span>{product.downloads}</span>
                  </div>
                )}
                {product.type === "physical" && product.stock && (
                  <div className="text-sm text-muted-foreground">
                    {product.stock} in stock
                  </div>
                )}
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
                    {selectedProduct.type === "digital" && selectedProduct.downloads && (
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Download className="w-5 h-5" />
                        <span>{selectedProduct.downloads} downloads</span>
                      </div>
                    )}
                  </div>
                </div>
                <div>
                  <div className="flex gap-2 mb-3">
                    <Badge variant="outline">{selectedProduct.category}</Badge>
                    <Badge variant={selectedProduct.type === "digital" ? "secondary" : "default"}>
                      {selectedProduct.type === "digital" ? "Digital Download" : "Physical Product"}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground mb-6">{selectedProduct.description}</p>
                  <div className="bg-secondary/20 p-4 rounded-lg mb-6">
                    <div className="text-3xl font-bold text-primary mb-2">
                      ${selectedProduct.price}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {selectedProduct.type === "digital" 
                        ? "Instant digital download • Lifetime access"
                        : `${selectedProduct.stock} in stock • Fast shipping`
                      }
                    </p>
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setSelectedProduct(null)}>
                  Close
                </Button>
                <Button onClick={() => addToCart(selectedProduct)} className="flex items-center gap-2">
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