import { TabsDemo } from "../components/actualComponent/Tabs";
import NewsHeader from "../components/actualComponent/NewsHeader";
import NewsCard from "@/components/actualComponent/NewsCard";
import { tabLabels } from "@/common";

function Main() {
  return (
    <div className="my-10">
      <TabsDemo tabs={tabLabels}  />
      <div className="my-10">
        <NewsHeader/>
      </div>
      <NewsCard tabLabels={tabLabels} />
    </div>
  );
}

export default Main;
