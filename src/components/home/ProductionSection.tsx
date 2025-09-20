import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ProductionSection = () => {
  return (
    <section className="py-16 bg-gradient-warm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl sm:text-4xl font-bold text-forest-deep">
              Our Production House
            </h3>
            
            <div className="text-lg text-forest-deep/80 space-y-4 leading-relaxed">
              <p>
                Our production house blends film, theatre, puppetry, and AI innovation. Our work celebrates 
                folklore, protects wildlife, and inspires the imaginations of children and adults alike.
              </p>
              
              <p>
                From Africa to Asia, from Europe to the Americas, we bring magical stories to life — 
                and invite the world to join us in protecting our planet's most precious treasures.
              </p>
            </div>
              
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="default" size="lg" asChild>
                <Link to="/productions">Watch Our Films</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/partnerships">Partner With Us</Link>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <Link to="/get-involved">Join the Journey</Link>
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            {/* Large Wildlife Videos */}
            <div className="grid grid-cols-1 gap-6">
              <div className="relative overflow-hidden rounded-xl aspect-video">
                <video 
                  src="https://lovedancelive.org/wp-content/uploads/2025/09/vecteezy_mantis-or-praying-mantis-mantis-religiosa-the-green_8660552.mp4"
                  autoPlay 
                  muted 
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/60 via-transparent to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h4 className="text-xl font-semibold mb-2">Wildlife Conservation</h4>
                    <p className="text-sm opacity-90">Capturing the wonder of nature through storytelling</p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="relative overflow-hidden rounded-lg aspect-video">
                  <video 
                    src="https://lovedancelive.org/wp-content/uploads/2025/09/vecteezy_aerial-view-of-a-mountain-river-in-the-clouds_67163497-1.mp4"
                    autoPlay 
                    muted 
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative overflow-hidden rounded-lg aspect-video">
                  <video 
                    src="https://lovedancelive.org/wp-content/uploads/2025/09/vecteezy_the-horses-are-walking-in-the-grass-at-sunset_70189274.mov"
                    autoPlay 
                    muted 
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductionSection;