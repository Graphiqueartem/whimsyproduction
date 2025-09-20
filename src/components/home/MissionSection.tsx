import { Card, CardContent } from "@/components/ui/card";
import culturalStorytelling2 from "@/assets/cultural-storytelling-2.jpg";
import turtleConservation from "@/assets/videos/turtle-conservation.jpg";

const MissionSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <Card className="border-0 shadow-magical bg-gradient-warm">
              <CardContent className="p-8 lg:p-12">
                <h3 className="text-2xl sm:text-3xl font-bold text-forest-deep mb-6">Our Mission</h3>
                <div className="space-y-6 text-forest-deep/80 text-lg leading-relaxed">
                  <p>
                    At Whimsy Films, we believe storytelling is humanity's oldest and most powerful tool. 
                    Stories have taught us who we are, connected us across cultures, and inspired generations to dream.
                  </p>
                  <p>
                    Today, stories must do more. They must remind us of our shared humanity, protect the fragile 
                    beauty of wildlife, and spark empathy in a divided world.
                  </p>
                  <p>
                    That is why Whimsy Films exists. We are a UK-based production company that creates films, 
                    series, and cultural experiences rooted in folklore and magical storytelling — designed not 
                    only to entertain but also to educate, conserve, and inspire global action.
                  </p>
                </div>
                
                <div className="mt-8 p-6 bg-forest-deep/10 rounded-xl">
                  <p className="text-forest-deep font-bold text-center text-xl">
                    "We tell magical stories that protect nature and inspire generations."
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-xl aspect-[4/3]">
              <img 
                src={culturalStorytelling2} 
                alt="Children's cultural storytelling and theatre workshop"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            
            <div className="relative overflow-hidden rounded-xl aspect-video">
              <img 
                src={turtleConservation} 
                alt="Ocean conservation - Sea turtle swimming with fish"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 via-transparent to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h4 className="text-xl font-semibold mb-2">Conservation Through Storytelling</h4>
                  <p className="text-sm opacity-90">Protecting marine life through powerful narratives</p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl aspect-video">
              <video 
                src="https://lovedancelive.org/wp-content/uploads/2025/09/vecteezy_zebra-on-green-screen_70196321.mov"
                autoPlay 
                muted 
                loop
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/60 via-transparent to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h4 className="text-xl font-semibold mb-2">Wildlife Storytelling</h4>
                  <p className="text-sm opacity-90">Bringing nature's stories to life</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;