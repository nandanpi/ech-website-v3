import Button from "@/components/button/page";
export default function Admin() {
  const tabs = [
    { label: "Network Upgrades", link: "/admin/network_upgrades" },
    { label: "Blogs and Events", link: "/admin/blogs_events" },
    { label: "Youtube", link: "/admin/youtube" },
  ];
  return (
    <>
      <div className="flex md:flex-row flex-wrap flex-col justify-center w-full h-screen items-center gap-5">
        {tabs.map((tab, index) => {
          return (
            <span key={index}>
              <Button text={tab.label} link={tab.link} size="md" />
            </span>
          );
        })}
      </div>
    </>
  );
}
