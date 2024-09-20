"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import axios from "axios";
import { useEffect, useState } from "react";
import { PostItem } from "./post-item";
import PostSkeleton from "./post-skeleton";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/posts");
        setPosts(response.data.posts);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {posts.length > 0 ? (
            posts.map(({ id, title, body }, index) => (
              <PostItem key={index} id={id} title={title} body={body} />
            ))
          ) : (
            <>
              <PostSkeleton />
              <PostSkeleton />
              <PostSkeleton />
              <PostSkeleton />
              <PostSkeleton />
              <PostSkeleton />
            </>
          )}
        </ul>

        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </section>
  );
};

export default Blog;
