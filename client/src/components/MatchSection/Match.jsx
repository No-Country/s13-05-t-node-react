import PreferencesColumn from "./PreferencesColumn";
import TabColumn from "./TabColumn";
import TinderColumn from "./TinderColumn";

function Match() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid md:grid-cols-12">
        <div className="hidden md:grid md:col-span-3">
          <TabColumn />
        </div>
        <div className="col-span-1 md:col-span-5">
          <TinderColumn />
        </div>
        <div className="hidden md:grid md:col-span-4 bg-black">
          <PreferencesColumn />
        </div>
      </div>
    </div>
  );
}

export default Match;
