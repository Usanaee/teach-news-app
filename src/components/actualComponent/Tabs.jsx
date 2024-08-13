import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGlobalContext } from "@/store/StoreContext";

export function TabsDemo({tabs}) {
  const {select,toggleTabs} = useGlobalContext();
  
  return (
    <Tabs defaultValue="account">
      <TabsList className="flex gap-4 w-full justify-center items-center flex-wrap">
        {tabs.map((labelName) => (
          <TabsTrigger value={labelName.name} select={select} tabsLabel={labelName.name} key={labelName.id} onClick={() => toggleTabs(labelName.name)} >
            {labelName.name}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
