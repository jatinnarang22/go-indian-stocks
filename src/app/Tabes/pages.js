import DesscussionPage from "../Desscussion/page";
import Market from "../Market_Stories/page";
import Toggle from "../Toggles/page";
export default function tabs() {
  return (
    <div>
      <Toggle />
      <div className="flex">
        <DesscussionPage />
        <Market />
      </div>
    </div>
  );
}
