import { useState } from "react";
import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Clock,
  Users,
  Printer,
  Share2,
  Download,
  CheckCircle2,
  Play,
  Pause,
  Volume2,
  Maximize,
} from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";

interface Material {
  id: string;
  name: string;
  checked: boolean;
}

interface Step {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

const mockTutorial = {
  id: "1",
  title: "DIY Paper Flower Bouquet",
  difficulty: "Beginner",
  timeEstimate: "45 minutes",
  category: "Paper Crafts",
  season: "Spring",
  image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=1200&q=80",
  videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  description:
    "Create beautiful, long-lasting paper flowers perfect for home decor or gifts. This beginner-friendly project uses simple materials and techniques.",
  materials: [
    { id: "m1", name: "Colored tissue paper (3-4 colors)", checked: false },
    { id: "m2", name: "Floral wire or pipe cleaners", checked: false },
    { id: "m3", name: "Scissors", checked: false },
    { id: "m4", name: "Green floral tape", checked: false },
    { id: "m5", name: "Ribbon (optional)", checked: false },
  ],
  steps: [
    {
      id: "s1",
      title: "Prepare Your Paper",
      description:
        "Stack 6-8 sheets of tissue paper together. Cut them into 8x10 inch rectangles. You can mix colors for a beautiful gradient effect.",
      completed: false,
    },
    {
      id: "s2",
      title: "Create Accordion Folds",
      description:
        "Fold the stacked paper accordion-style, making each fold about 1 inch wide. Press firmly to create crisp creases.",
      completed: false,
    },
    {
      id: "s3",
      title: "Shape the Petals",
      description:
        "Round the edges of both ends with scissors to create petal shapes. You can also try pointed or scalloped edges for variety.",
      completed: false,
    },
    {
      id: "s4",
      title: "Secure the Center",
      description:
        "Wrap floral wire tightly around the center of the folded paper. Twist to secure, leaving a long tail for the stem.",
      completed: false,
    },
    {
      id: "s5",
      title: "Separate the Layers",
      description:
        "Gently pull each layer of tissue paper toward the center, one at a time. Be careful not to tear the delicate paper.",
      completed: false,
    },
    {
      id: "s6",
      title: "Fluff and Shape",
      description:
        "Continue separating layers and fluffing until you achieve a full, rounded flower shape. Adjust petals as needed.",
      completed: false,
    },
    {
      id: "s7",
      title: "Finish the Stem",
      description:
        "Wrap the wire stem with green floral tape, stretching slightly as you wrap. Create multiple flowers and arrange into a bouquet!",
      completed: false,
    },
  ],
  relatedTutorials: [
    {
      id: "2",
      title: "Origami Crane Mobile",
      image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400&q=80",
      time: "30 min",
    },
    {
      id: "3",
      title: "Pressed Flower Bookmarks",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&q=80",
      time: "20 min",
    },
    {
      id: "4",
      title: "Watercolor Greeting Cards",
      image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=400&q=80",
      time: "40 min",
    },
  ],
};

export default function TutorialDetail() {
  const { id } = useParams();
  const { toast } = useToast();
  const [materials, setMaterials] = useState<Material[]>(mockTutorial.materials);
  const [steps, setSteps] = useState<Step[]>(mockTutorial.steps);
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMaterial = (materialId: string) => {
    setMaterials((prev) =>
      prev.map((m) => (m.id === materialId ? { ...m, checked: !m.checked } : m))
    );
  };

  const toggleStep = (stepId: string) => {
    setSteps((prev) =>
      prev.map((s) => (s.id === stepId ? { ...s, completed: !s.completed } : s))
    );
  };

  const handlePrint = () => {
    window.print();
    toast({
      title: "Print dialog opened",
      description: "Your tutorial is ready to print!",
    });
  };

  const handleShare = (platform: string) => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: `Shared to ${platform}!`,
      description: "Link copied to clipboard",
    });
    setShareModalOpen(false);
  };

  const completedSteps = steps.filter((s) => s.completed).length;
  const progress = (completedSteps / steps.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary/10">
      <Navigation />

      {/* Hero Section */}
      <div className="relative h-[400px] overflow-hidden">
        <img
          src={mockTutorial.image}
          alt={mockTutorial.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="container mx-auto">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-primary text-white">{mockTutorial.difficulty}</Badge>
              <Badge variant="secondary">{mockTutorial.category}</Badge>
              <Badge variant="outline" className="bg-white/20 text-white border-white">
                {mockTutorial.season}
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{mockTutorial.title}</h1>
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{mockTutorial.timeEstimate}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>Perfect for all ages</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <Card className="p-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {mockTutorial.description}
              </p>
            </Card>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              <Button onClick={handlePrint} variant="outline" className="flex items-center gap-2">
                <Printer className="w-4 h-4" />
                Print Tutorial
              </Button>
              <Button
                onClick={() => setShareModalOpen(true)}
                variant="outline"
                className="flex items-center gap-2"
              >
                <Share2 className="w-4 h-4" />
                Share
              </Button>
              <Button className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                Download PDF Pattern
              </Button>
            </div>

            {/* Video Player */}
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">Video Tutorial</h2>
              <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
                <iframe
                  src={mockTutorial.videoUrl}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </Card>

            {/* Materials Checklist */}
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">Materials Needed</h2>
              <div className="space-y-3">
                {materials.map((material) => (
                  <div key={material.id} className="flex items-center space-x-3">
                    <Checkbox
                      id={material.id}
                      checked={material.checked}
                      onCheckedChange={() => toggleMaterial(material.id)}
                    />
                    <label
                      htmlFor={material.id}
                      className={`text-base cursor-pointer ${
                        material.checked ? "line-through text-muted-foreground" : ""
                      }`}
                    >
                      {material.name}
                    </label>
                  </div>
                ))}
              </div>
            </Card>

            {/* Step-by-Step Instructions */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Step-by-Step Instructions</h2>
                <div className="text-sm text-muted-foreground">
                  {completedSteps} of {steps.length} completed
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="h-2 bg-secondary/30 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              <Accordion type="single" collapsible className="space-y-4">
                {steps.map((step, index) => (
                  <AccordionItem
                    key={step.id}
                    value={step.id}
                    className="border rounded-lg px-4 bg-white"
                  >
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex items-center gap-4 text-left">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                            step.completed
                              ? "bg-primary text-white"
                              : "bg-secondary text-secondary-foreground"
                          }`}
                        >
                          {step.completed ? <CheckCircle2 className="w-5 h-5" /> : index + 1}
                        </div>
                        <span className="font-semibold">{step.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4 pb-4">
                      <p className="text-muted-foreground mb-4 ml-12">{step.description}</p>
                      <Button
                        onClick={() => toggleStep(step.id)}
                        variant={step.completed ? "outline" : "default"}
                        size="sm"
                        className="ml-12"
                      >
                        {step.completed ? "Mark Incomplete" : "Mark Complete"}
                      </Button>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-4">Related Tutorials</h3>
              <div className="space-y-4">
                {mockTutorial.relatedTutorials.map((tutorial) => (
                  <div
                    key={tutorial.id}
                    className="flex gap-3 cursor-pointer hover:bg-secondary/20 p-2 rounded-lg transition-colors"
                  >
                    <img
                      src={tutorial.image}
                      alt={tutorial.title}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm mb-1">{tutorial.title}</h4>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        {tutorial.time}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Share Modal */}
      <Dialog open={shareModalOpen} onOpenChange={setShareModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Share This Tutorial</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-2 gap-3 pt-4">
            <Button onClick={() => handleShare("Facebook")} variant="outline">
              Facebook
            </Button>
            <Button onClick={() => handleShare("Pinterest")} variant="outline">
              Pinterest
            </Button>
            <Button onClick={() => handleShare("Twitter")} variant="outline">
              Twitter
            </Button>
            <Button onClick={() => handleShare("Copy Link")} variant="outline">
              Copy Link
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}