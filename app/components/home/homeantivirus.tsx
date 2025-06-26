import Service from "./service"
import Opportunity from "./opportunity"
import DollHome from "./dollhome";
import Benefits from "~/Components/Benefits";

export default function homeantivirus() {
  return (
    <div>
      <div>
        <DollHome />
      </div>
      <div>
        <Opportunity />
      </div>
      <div>
        <Service />
      </div>
      <div>
        <Benefits />
      </div>
    </div>
  )
}