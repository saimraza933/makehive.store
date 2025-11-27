import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Clock, Search, Play, Eye, ThumbsUp, Share2, BookmarkPlus } from "lucide-react";

const videoTutorials = [
  {
    id: "v1",
    title: "DIY Paper Flower Bouquet - Full Tutorial",
    thumbnail: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=800&q=80",
    duration: "15:32",
    views: "45K",
    category: "Paper Crafts",
    difficulty: "Beginner",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "Learn how to create beautiful paper flowers that last forever! This beginner-friendly tutorial covers all the basic techniques you need to make stunning paper flower bouquets.",
    materials: ["Colored paper", "Scissors", "Glue", "Wire stems", "Floral tape"],
  },
  {
    id: "v2",
    title: "Macramé Wall Hanging for Beginners",
    thumbnail: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80",
    duration: "22:15",
    views: "38K",
    category: "Home Decor DIY",
    difficulty: "Beginner",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "Create a beautiful macramé wall hanging with this step-by-step tutorial. Perfect for beginners, we'll cover all the essential knots.",
    materials: ["Macramé cord", "Wooden dowel", "Scissors", "Measuring tape"],
  },
  {
    id: "v3",
    title: "Resin Jewelry Making - Complete Guide",
    thumbnail: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    duration: "18:45",
    views: "52K",
    category: "Resin Art",
    difficulty: "Intermediate",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "Master the art of resin jewelry making! Learn mixing ratios, embedding techniques, and finishing touches for professional results.",
    materials: ["Epoxy resin", "Jewelry molds", "Pigments", "Dried flowers", "Jewelry findings"],
  },
  {
    id: "v4",
    title: "Crochet Amigurumi Animals Step-by-Step",
    thumbnail: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&q=80",
    duration: "28:10",
    views: "61K",
    category: "Sewing & Crochet",
    difficulty: "Intermediate",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "Create adorable amigurumi animals with this comprehensive crochet tutorial. Includes patterns for bears, bunnies, and more!",
    materials: ["Yarn", "Crochet hook", "Stuffing", "Safety eyes", "Yarn needle"],
  },
  {
    id: "v5",
    title: "Watercolor Techniques for Beginners",
    thumbnail: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=800&q=80",
    duration: "12:30",
    views: "29K",
    category: "Home Decor DIY",
    difficulty: "Beginner",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "Discover essential watercolor techniques including wet-on-wet, dry brush, and gradient washes. Perfect for beginners!",
    materials: ["Watercolor paints", "Watercolor paper", "Brushes", "Water container", "Paper towels"],
  },
  {
    id: "v6",
    title: "Kids Craft: Easy Paper Plate Animals",
    thumbnail: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80",
    duration: "10:15",
    views: "42K",
    category: "Kids Crafts",
    difficulty: "Beginner",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "Fun and easy paper plate animal crafts perfect for kids! Make lions, fish, birds, and more with simple materials.",
    materials: ["Paper plates", "Paint", "Googly eyes", "Glue", "Construction paper"],
  },
  {
    id: "v7",
    title: "Seasonal Wreath Making Tutorial",
    thumbnail: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&q=80",
    duration: "16:20",
    views: "35K",
    category: "Seasonal Crafts",
    difficulty: "Intermediate",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "Create stunning seasonal wreaths for any occasion. Learn techniques for spring, summer, fall, and winter designs.",
    materials: ["Wreath base", "Floral wire", "Seasonal decorations", "Hot glue gun", "Ribbon"],
  },
  {
    id: "v8",
    title: "Embroidery Basics: 10 Essential Stitches",
    thumbnail: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&q=80",
    duration: "20:45",
    views: "48K",
    category: "Sewing & Crochet",
    difficulty: "Beginner",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "Master the 10 most essential embroidery stitches every beginner needs to know. Includes backstitch, satin stitch, and more!",
    materials: ["Embroidery floss", "Embroidery hoop", "Fabric", "Embroidery needles", "Pattern"],
  },
];

export default function Videos() {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [difficultyFilter, setDifficultyFilter] = useState("all");
  const [selectedVideo, setSelectedVideo] = useState<typeof videoTutorials[0] | null>(null);

  const filteredVideos = videoTutorials.filter((video) => {
    const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === "all" || video.category === categoryFilter;
    const matchesDifficulty = difficultyFilter === "all" || video.difficulty === difficultyFilter;
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  const categories = ["all", ...Array.from(new Set(videoTutorials.map((v) => v.category)))];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary/10">
      <Navigation />

      {/* Header */}
      <section className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hive TV</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Watch step-by-step video guides from expert crafters. Learn new techniques and craft along at your own pace.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Search and Filters */}
        <Card className="p-6 mb-8 shadow-lg">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Search videos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Difficulty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="Beginner">Beginner</SelectItem>
                  <SelectItem value="Intermediate">Intermediate</SelectItem>
                  <SelectItem value="Advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>

              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-full sm:w-[180px]">
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
            </div>
          </div>

          <div className="mt-4 text-sm text-muted-foreground">
            Showing {filteredVideos.length} of {videoTutorials.length} videos
          </div>
        </Card>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredVideos.map((video) => (
            <Card
              key={video.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
              onClick={() => setSelectedVideo(video)}
            >
              <div className="relative h-48 overflow-hidden bg-black">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 opacity-90"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-primary ml-1" />
                  </div>
                </div>
                <Badge className="absolute bottom-3 right-3 bg-black/80 text-white">
                  {video.duration}
                </Badge>
                <Badge className="absolute top-3 right-3 bg-white text-foreground">
                  {video.difficulty}
                </Badge>
              </div>
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2 text-xs">
                  {video.category}
                </Badge>
                <h3 className="font-bold text-lg line-clamp-2">{video.title}</h3>
              </CardHeader>
              <CardFooter className="flex items-center gap-2 text-sm text-muted-foreground">
                <Eye className="w-4 h-4" />
                <span>{video.views} views</span>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Video Player Dialog */}
      <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
        <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
          {selectedVideo && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedVideo.title}</DialogTitle>
                <DialogDescription className="flex items-center gap-4 text-base">
                  <Badge variant="secondary">{selectedVideo.category}</Badge>
                  <Badge>{selectedVideo.difficulty}</Badge>
                  <span className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    {selectedVideo.views} views
                  </span>
                </DialogDescription>
              </DialogHeader>

              {/* Video Player */}
              <div className="aspect-video bg-black rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src={selectedVideo.videoUrl}
                  title={selectedVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 flex-wrap">
                <Button variant="outline" size="sm">
                  <ThumbsUp className="w-4 h-4 mr-2" />
                  Like
                </Button>
                <Button variant="outline" size="sm">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
                <Button variant="outline" size="sm">
                  <BookmarkPlus className="w-4 h-4 mr-2" />
                  Save
                </Button>
              </div>

              {/* Description */}
              <div>
                <h3 className="font-bold text-lg mb-2">About this tutorial</h3>
                <p className="text-muted-foreground leading-relaxed">{selectedVideo.description}</p>
              </div>

              {/* Materials List */}
              <div>
                <h3 className="font-bold text-lg mb-3">Materials Needed</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {selectedVideo.materials.map((material, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>{material}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related Tutorials Link */}
              <div className="pt-4 border-t">
                <Link to="/tutorials" className="text-primary hover:underline">
                  View written tutorial version →
                </Link>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}