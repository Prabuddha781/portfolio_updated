import "bootstrap/dist/css/bootstrap.min.css";

import TechCard from "../components/TechCard";
import Board from "../components/Board";
import SlidesBackOffice from "../components/SlidesBackOffice";
import MLinference from "../components/MLInference";

import AWSLogo from "../icons/techstacks/AWS.png";
import BootstrapLogo from "../icons/techstacks/Bootstrap.png";
import DjangoLogo from "../icons/techstacks/Django.png";
import HerokuLogo from "../icons/techstacks/Heroku.png";
import JSLogo from "../icons/techstacks/Javascript.png";
import MaterialUILogo from "../icons/techstacks/MaterialUI.png";
import MongoDBLogo from "../icons/techstacks/MongoDB.png";
import PostgresqlLogo from "../icons/techstacks/Postgresql.png";
import ReduxLogo from "../icons/techstacks/Redux.png";
import NodeLogo from "../icons/techstacks/NodeJS.png";
import ReactLogo from "../icons/techstacks/React.ico";
import PytorchLogo from "../icons/techstacks/pytorch_sm.jpg";
import TensorflowJSLogo from "../icons/techstacks/tf_small.jpg";
import OnnxLogo from "../icons/techstacks/onnx_large.png";

import Slides from "../components/Slides";
import NavBar from "../components/NavBar";

const Tech = () => {
  return (
    <main>
      <NavBar />
      <TechCard
        title={"Hate speech detector"}
        titleSupport={"ML inference in browser"}
        techStack={{
          Pytorch: PytorchLogo,
          "Tensorflow.js": TensorflowJSLogo,
          OnnxRuntimeWeb: OnnxLogo,
          React: ReactLogo,
        }}
        dark={true}
        mainContent={<MLinference />}
      />
      <div style={{ height: "3vh", backgroundColor: "rgb(220, 200, 200)" }}>
        {" "}
      </div>
      <TechCard
        title={"Pathsfind.com"}
        titleSupport={"Pathfinding algorithms, visualized"}
        techStack={{ React: ReactLogo, Bootstrap: BootstrapLogo }}
        GitHubLink={"https://github.com/Prabuddha781/pathFinder/tree/master"}
        siteLink={"https://www.pathsfind.com"}
        dark={true}
        mainContent={<Board />}
      />
      <div style={{ height: "3vh", backgroundColor: "rgb(220, 200, 200)" }}>
        {" "}
      </div>
      <TechCard
        title={"Lovestories.rocks"}
        titleSupport={"Modern CRUD app"}
        techStack={{
          NodeJS: NodeLogo,
          "Express.js": JSLogo,
          Redux: ReduxLogo,
          React: ReactLogo,
          MongoDB: MongoDBLogo,
          MaterialUI: MaterialUILogo,
        }}
        GitHubLink={"https://github.com/Prabuddha781/lovestories.rocks.git"}
        siteLink={"https://www.lovestories.rocks/"}
        dark={true}
        mainContent={<Slides />}
      />
      <div style={{ height: "3vh", backgroundColor: "rgb(220, 200, 200)" }}>
        {" "}
      </div>
      <TechCard
        title={"PSEG Training"}
        titleSupport={"Employee training platform"}
        techStack={{
          Django: DjangoLogo,
          PostgreSQL: PostgresqlLogo,
          Heroku: HerokuLogo,
          AWS: AWSLogo,
        }}
        GitHubLink={"https://github.com/Prabuddha781/BackOfficeTraining"}
        dark={true}
        siteLink={"#"}
        mainContent={<SlidesBackOffice />}
      />
    </main>
  );
};

export default Tech;
