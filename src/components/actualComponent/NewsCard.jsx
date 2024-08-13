import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaComment } from "react-icons/fa";
import { Loader } from "./Loader";
import { useGlobalContext } from "@/store/StoreContext";

const NewsCard = () => {
  const { news, loading, error } = useGlobalContext();
  if (loading) {
    return (
      <div className="mb-28">
        <Loader />
      </div>
    );
  }
  if (error) {
    return (
      <p className="text-center text-xl text-red-500">
        Something Going To Unwanted 😣
      </p>
    );
  }
  return (
    <div className="container flex flex-wrap gap-4 ">
      {news.map((newsItem, index) => (
        <Card
          className="w-[32%] bg-gray-100 shadow-md max-md:w-[47%] max-sm:w-full "
          key={index}
        >
          <CardHeader>
            <CardTitle>{newsItem.title}</CardTitle>
            <CardDescription>
              Published By:<strong> {newsItem.author.toUpperCase()}</strong>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <span className="text-red-500">
                {newsItem.createdDate} |{" "}
                <span className="text-blue-600 ">{newsItem.updatedDate}</span>
              </span>
              <span className="flex items-center justify-center gap-1 cursor-pointer ">
                <FaComment />
                <p>{newsItem.num_comments}</p>
              </span>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <button className="bg-transparent text-black hover:bg-transparent hover:text-blue-600 duration-300">
              <a target="_blank" rel="noopener noreferrer" href={newsItem.url}>
                Learn More
              </a>
            </button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default NewsCard;
