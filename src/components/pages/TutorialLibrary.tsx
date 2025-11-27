import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Clock, Search, Filter } from "lucide-react";

const allTutorials = [
  {
    id: "1",
    title: "DIY Paper Flower Bouquet",
    image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=800&q=80",
    time: "45 min",
    difficulty: "Beginner",
    category: "Paper Crafts",
    season: "Spring",
  },
  {
    id: "2",
    title: "Macramé Wall Hanging",
    image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80",
    time: "2 hours",
    difficulty: "Intermediate",
    category: "Fiber Arts",
    season: "All Seasons",
  },
  {
    id: "3",
    title: "Hand-Painted Ceramic Mugs",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=800&q=80",
    time: "1 hour",
    difficulty: "Beginner",
    category: "Ceramics",
    season: "All Seasons",
  },
  {
    id: "4",
    title: "Pressed Flower Bookmarks",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800&q=80",
    time: "20 min",
    difficulty: "Beginner",
    category: "Nature Crafts",
    season: "Spring",
  },
  {
    id: "5",
    title: "Embroidered Tote Bag",
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80",
    time: "3 hours",
    difficulty: "Advanced",
    category: "Embroidery",
    season: "All Seasons",
  },
  {
    id: "6",
    title: "Watercolor Greeting Cards",
    image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=800&q=80",
    time: "40 min",
    difficulty: "Beginner",
    category: "Painting",
    season: "All Seasons",
  },
  {
    id: "7",
    title: "Origami Crane Mobile",
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&q=80",
    time: "30 min",
    difficulty: "Intermediate",
    category: "Paper Crafts",
    season: "All Seasons",
  },
  {
    id: "8",
    title: "Knitted Cozy Scarf",
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&q=80",
    time: "5 hours",
    difficulty: "Intermediate",
    category: "Knitting",
    season: "Winter",
  },
  {
    id: "9",
    title: "Resin Jewelry Making",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    time: "1.5 hours",
    difficulty: "Advanced",
    category: "Jewelry",
    season: "All Seasons",
  },
  {
    id: "10",
    title: "Polymer Clay Earrings",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    time: "1 hour",
    difficulty: "Beginner",
    category: "Jewelry",
    season: "All Seasons",
  },
  {
    id: "11",
    title: "Candle Making Workshop",
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=800&q=80",
    time: "2 hours",
    difficulty: "Beginner",
    category: "Home Decor",
    season: "All Seasons",
  },
  {
    id: "12",
    title: "Crochet Amigurumi Animals",
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&q=80",
    time: "4 hours",
    difficulty: "Advanced",
    category: "Crochet",
    season: "All Seasons",
  },
];

export default function TutorialLibrary() {
  const [searchQuery, setSearchQuery] = useState("");
  const [difficultyFilter, setDifficultyFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [seasonFilter, setSeasonFilter] = useState("all");

  const filteredTutorials = allTutorials.filter((tutorial) => {
    const matchesSearch = tutorial.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDifficulty = difficultyFilter === "all" || tutorial.difficulty === difficultyFilter;
    const matchesCategory = categoryFilter === "all" || tutorial.category === categoryFilter;
    const matchesSeason = seasonFilter === "all" || tutorial.season === seasonFilter;

    return matchesSearch && matchesDifficulty && matchesCategory && matchesSeason;
  });

  const categories = ["all", ...Array.from(new Set(allTutorials.map((t) => t.category)))];
  const seasons = ["all", ...Array.from(new Set(allTutorials.map((t) => t.season)))];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary/10">
      <Navigation />

      {/* Header */}
      <section className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Tutorial Library</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Browse our complete collection of step-by-step craft tutorials. Filter by difficulty,
            category, or season to find your perfect project.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Search and Filters */}
        <Card className="p-6 mb-8 shadow-lg">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Search tutorials..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <Filter className="w-4 h-4 mr-2" />
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

              <Select value={seasonFilter} onValueChange={setSeasonFilter}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Season" />
                </SelectTrigger>
                <SelectContent>
                  {seasons.map((season) => (
                    <SelectItem key={season} value={season}>
                      {season === "all" ? "All Seasons" : season}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-muted-foreground">
            Showing {filteredTutorials.length} of {allTutorials.length} tutorials
          </div>
        </Card>

        {/* Tutorial Grid */}
        {filteredTutorials.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredTutorials.map((tutorial) => (
              <Link key={tutorial.id} to={`/tutorial/${tutorial.id}`}>
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group h-full">
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
                    <div className="flex gap-2 mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {tutorial.category}
                      </Badge>
                      {tutorial.season !== "All Seasons" && (
                        <Badge variant="outline" className="text-xs">
                          {tutorial.season}
                        </Badge>
                      )}
                    </div>
                    <h3 className="font-bold text-lg line-clamp-2">{tutorial.title}</h3>
                  </CardHeader>
                  <CardFooter className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{tutorial.time}</span>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          <Card className="p-12 text-center">
            <p className="text-muted-foreground text-lg mb-4">
              No tutorials found matching your filters
            </p>
            <Button
              onClick={() => {
                setSearchQuery("");
                setDifficultyFilter("all");
                setCategoryFilter("all");
                setSeasonFilter("all");
              }}
            >
              Clear Filters
            </Button>
          </Card>
        )}
      </div>

      <Footer />
    </div>
  );
}