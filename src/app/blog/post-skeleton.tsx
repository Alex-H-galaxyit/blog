import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const PostSkeleton = () => {
  return (
    <Card className="w-full overflow-hidden">
      <Skeleton className="w-full h-48" />

      <CardHeader className="p-4 pb-3 xl:p-6 xl:pb-5">
        <Skeleton className="h-8 w-4/5" />
      </CardHeader>

      <CardContent className="p-4 pt-0 xl:p-6 xl:pt-0">
        <Skeleton className="h-4 w-full mb-2.5" />
        <Skeleton className="h-4 w-full mb-2.5" />
        <Skeleton className="h-4 w-2/3 mb-4" />
        <div className="flex items-center space-x-4">
          <Skeleton className="h-10 w-10 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-3 w-24" />
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 xl:p-6 xl:pt-0">
        <Skeleton className="h-10 w-full" />
      </CardFooter>
    </Card>
  );
};

export default PostSkeleton;
