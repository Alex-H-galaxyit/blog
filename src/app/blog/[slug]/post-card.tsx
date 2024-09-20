"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Share, Star } from "lucide-react";
import Image from "next/image";

interface PostCardProps {
  title: string;
  body: string;
}

export default function PostCard({ title, body }: PostCardProps) {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <article className="max-w-4xl mx-auto px-6 py-10 bg-white rounded-lg">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
            {title}
          </h1>

          <div className="flex items-center space-x-4 mb-6">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="Author" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>

            <div>
              <p className="text-sm font-medium text-gray-900">John Doe</p>
              <p className="text-sm text-gray-500">
                Lead Developer at TechCorp
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
            <span className="flex items-center">
              <Calendar className="mr-1 h-4 w-4" />
              March 15, 2023
            </span>
            <span className="flex items-center">
              <Clock className="mr-1 h-4 w-4" />8 min read
            </span>
            <Badge>Web Development</Badge>
          </div>

          <Image
            src="https://images.unsplash.com/photo-1563207153-f403bf289096?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Blog post cover"
            width={800}
            height={400}
            className="w-full h-48 object-cover mb-6 rounded-md"
          />

          <div className="prose prose-lg prose-indigo text-slate-900">
            {body}
          </div>

          <div className="mt-8 flex items-center justify-between">
            <div className="flex items-center space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="h-6 w-6 cursor-pointer text-yellow-400 fill-yellow-400"
                />
              ))}
              <span className="text-sm text-gray-600">5/5</span>
            </div>

            <Button className="flex items-center">
              <Share className="mr-2 h-4 w-4" />
              Share
            </Button>
          </div>
        </article>
      </div>
    </section>
  );
}
