import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { CalendarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface PostItemProps {
  id: string;
  title: string;
  body: string;
}

export const PostItem = ({ id, title, body }: PostItemProps) => {
  return (
    <Card className="flex flex-col w-full overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1563207153-f403bf289096?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Blog post cover"
        width={500}
        height={400}
        className="w-full h-48 object-cover"
      />

      <CardHeader className="mb-auto p-4 pb-3 xl:p-6 xl:pb-5">
        <h2 className="text-lg xl:text-2xl font-bold line-clamp-2">{title}</h2>
      </CardHeader>

      <CardContent className="p-4 pt-0 xl:p-6 xl:pt-0">
        <p className="text-muted-foreground mb-4 line-clamp-4">{body}</p>
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="Author avatar"
            />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">Jane Doe</p>
            <p className="text-xs text-muted-foreground flex items-center">
              <CalendarIcon className="mr-1 h-3 w-3" strokeWidth={1} /> May 15,
              2023
            </p>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 xl:p-6 xl:pt-0">
        <Link className="w-full" href={`./blog/${id}`} passHref>
          <Button className="w-full">Read More</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};
