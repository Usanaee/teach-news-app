import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "./section/Navbar";
import HeroSection from "./section/Hero";
import Footer from "./section/Footer";
import Main from "./section/Main";

function App() {
  // const getPosts = async () => {
  //   try {
  //     let data = await fetch(
  //       "https://newsapi.org/v2/top-headlines?q=india&apiKey=77c78fda32c744b3bcc23970201deb56"
  //     );
  //     let dataJson = await data.json();
  //     let post = dataJson.articles;
  //     setNews(post);
  //     console.log(post);
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };

  // let [news, setNews] = useState([]);
  // let [error, setError] = useState(false);
  // let [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       setLoading(true);
  //       setError(false);
  //       const response = await axios.get(
  //         "https://newsapi.org/v2/top-headlines?q=india&apiKey=77c78fda32c744b3bcc23970201deb56"
  //       );
  //       console.log(response.data);
  //       setNews(response.data.articles);
  //       setLoading(false);
  //     } catch (error) {
  //       setError(true);
  //       setLoading(false);
  //     }
  //   })();
  // }, []);

  // if (error) {
  //   return <div>Error during fetching data...</div>;
  // }

  // if (loading) {
  //   return <div>Loading...</div>;
  // }
  return (
    <>
      <Navbar />
      <HeroSection />
      <Main />
      <Footer />
    </>
  );
}

export default App;

// const [news,error,loading] = customReactQuery(
//   "https://newsapi.org/v2/top-headlines?q=india&apiKey=77c78fda32c744b3bcc23970201deb56"
// );
// const customReactQuery = (urlPath) => {
//   let [news, setNews] = useState([]);
//   let [error, setError] = useState(false);
//   let [loading, setLoading] = useState(false);
//   useEffect(() => {
//     (async () => {
//       try {
//         setLoading(true);
//         setError(false);
//         const response = await axios.get(urlPath);
//         console.log(response.data.articles);
//         setNews(response.data.articles);
//         setLoading(false);
//       } catch (error) {
//         setError(true);
//         setLoading(false);
//       }
//     })();
//   }, []);

//   return [news, error, loading];
// };
