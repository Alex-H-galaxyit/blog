import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ExternalLink,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Twitter,
} from "lucide-react";

const UserProfile = () => {
  return (
    <section className="flex flex-col justify-center min-h-screen py-20">
      <div className="container mx-auto px-4">
        <Card className="w-full max-w-7xl mx-auto">
          <CardHeader className="flex flex-col sm:flex-row items-center gap-4 pb-8">
            <Avatar className="w-24 h-24">
              <AvatarImage alt="Jane Doe" src="https://github.com/shadcn.png" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>

            <div className="flex flex-col items-center sm:items-start">
              <CardTitle className="text-3xl">Jane Doe</CardTitle>
              <CardDescription className="text-xl">
                Travel & Lifestyle Blogger
              </CardDescription>
              <div className="flex gap-2 mt-2">
                <Badge variant="secondary">Travel</Badge>
                <Badge variant="secondary">Lifestyle</Badge>
                <Badge variant="secondary">Food</Badge>
              </div>
            </div>
          </CardHeader>

          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">About Me</h3>
                <p className="text-muted-foreground">
                  Passionate traveler and lifestyle enthusiast. I&apos;ve been
                  to over 30 countries and love sharing my experiences through
                  my blog. When I&apos;m not exploring new destinations, you can
                  find me trying out new recipes or working on my photography
                  skills.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Contact & Social</h3>
                <div>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 opacity-70" />
                      <span className="text-sm">jane.doe@travelblog.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 opacity-70" />
                      <span className="text-sm">Based in New York, NY</span>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button variant="outline" size="icon">
                      <Twitter className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Facebook className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Instagram className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Recent Blog Posts
                </h3>
                <ul className="space-y-2">
                  {[
                    "10 Hidden Gems in Southeast Asia",
                    "A Foodie's Guide to Paris",
                    "Sustainable Travel: Tips for Eco-Friendly Adventures",
                    "5 Must-Visit Coffee Shops in New York City",
                  ].map((post, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <ExternalLink className="h-4 w-4 opacity-70 shrink-0" />
                      <span className="text-sm hover:underline cursor-pointer truncate">
                        {post}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default UserProfile;
