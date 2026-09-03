import "./Operationsflow.css";

import worldMap from "../../../assets/world-map.svg";
import user from "../../../assets/user.svg";
import network from "../../../assets/server.svg";
import mill from "../../../assets/mill.svg";

export default function Operationsflow() {
  return (
    <section className="networkFlow">
      <div className="flowContainer">
        <img src={worldMap} className="worldMap" alt="World Map" />

        <div className="flowItem userNode">
          <img src={user} alt="User" />
          <button>MILL OWNER</button>
        </div>

 
        <div className="arrowWrapper arrowUserNetwork">
          <p className="requestText">REQUEST</p>

          <svg className="curveArrow" viewBox="0 0 100 50" preserveAspectRatio="none">
            <defs>
              <marker
                id="arrowBlue"
                markerWidth="8"
                markerHeight="8"
                refX="6"
                refY="4"
                orient="auto"
              >
                <polygon points="0 0, 8 4, 0 8" fill=" #ff7800" />
              </marker>
              <marker
                id="arrowGreen"
                markerWidth="8"
                markerHeight="8"
                refX="2"
                refY="4"
                orient="auto"
              >
                <polygon points="8 0, 0 4, 8 8" fill="#0d5b43;" />
              </marker>
            </defs>

            <path
              d="M 5 35 Q 50 5 95 35"
              className="requestPath"
              markerEnd="url(#arrowBlue)"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          <svg className="curveArrow" viewBox="0 0 100 50" preserveAspectRatio="none">
            <path
              d="M 5 15 Q 50 45 95 15"
              className="responsePath"
              markerStart="url(#arrowGreen)"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          <p className="responseText">RESPONSE</p>
        </div>

        <div className="flowItem networkNode">
          <img src={network} alt="Network" />
          <button>SERVER</button>
        </div>

   
        <div className="arrowWrapper arrowNetworkMill">
          <p className="requestText">REQUEST</p>

          <svg className="curveArrow" viewBox="0 0 100 50" preserveAspectRatio="none">
            <path
              d="M 5 35 Q 50 5 95 35"
              className="requestPath"
              markerEnd="url(#arrowBlue)"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          <svg className="curveArrow" viewBox="0 0 100 50" preserveAspectRatio="none">
            <path
              d="M 5 15 Q 50 45 95 15"
              className="responsePath"
              markerStart="url(#arrowGreen)"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          <p className="responseText">RESPONSE</p>
        </div>


        <div className="flowItem millNode">
          <img src={mill} alt="Mill" />
          <button>MILL</button>
        </div>
      </div>
    </section>
  );
}