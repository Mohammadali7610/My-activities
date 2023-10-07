import { useState } from "react";

export default function MissileLaunching() {
  const [openTunnel, setopenTunnel] = useState(true);
  const [enablePower, setenablePower] = useState(true);
  const [startCountdown, setstartCountdown] = useState(true);
  const [launchMisslie, setlaunchMissile] = useState(true);
  const [successMassage, setsuccessMassage] = useState("");
  const [tunnelColor, settunnelColor] = useState("white");
  const [powerColor, setpowerColor] = useState("white");
  const [countDownColor, setcountDownColor] = useState("white");
  const [missileLaunchColor, setmissileLaunchColor] = useState("white");

  const openingTunnel = () => {
    setopenTunnel(!openTunnel);
    setenablePower(true);
    setstartCountdown(true);
    setlaunchMissile(true);
    settunnelColor("green");
    setpowerColor("white");
    setcountDownColor("white");
    setmissileLaunchColor("white");

    if (!openTunnel) {
      settunnelColor("white");
    }
    if (!launchMisslie) {
      setsuccessMassage("Launched failed");
    }
  };

  const enablingPower = () => {
    setenablePower(!enablePower);
    setstartCountdown(true);
    setlaunchMissile(true);
    setcountDownColor("white");
    setmissileLaunchColor("white");

    if (!enablePower) {
      setpowerColor("white");
    } else if (enablePower) {
      setpowerColor("green");
    }
    console.log(enablePower);
    if (!launchMisslie) {
      setsuccessMassage("Launched failed");
    }
  };

  const startingCountdown = () => {
    setstartCountdown(!startCountdown);
    setlaunchMissile(true);
    setcountDownColor("green");
    setmissileLaunchColor("white");
    if (!startCountdown) {
      setcountDownColor("white");
    }
    if (!launchMisslie) {
      setsuccessMassage("Launched failed");
    }
  };

  const launchingMisslie = () => {
    setlaunchMissile(!launchMisslie);
    setmissileLaunchColor("green");
    if (launchMisslie) {
      setsuccessMassage("Your missle is launched successfully");
    } else if (!launchMisslie) {
      setsuccessMassage("Launched failed");
      setmissileLaunchColor("white");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", gap: "20px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <h3>Open Tunnel</h3>
          <button
            onClick={openingTunnel}
            style={{
              backgroundColor: tunnelColor,
              color: "black",
              border: "1px solid black",
            }}
          >
            {openTunnel ? "off" : "on"}
          </button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <h3>Enable power</h3>
          <button
            onClick={enablingPower}
            style={{
              backgroundColor: powerColor,
              color: "black",
              border: "1px solid black",
            }}
            disabled={openTunnel}
          >
            {enablePower ? "off" : "on"}
          </button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <h3>Start countdown</h3>
          <button
            onClick={startingCountdown}
            style={{
              backgroundColor: countDownColor,
              color: "black",
              border: "1px solid black",
            }}
            disabled={enablePower}
          >
            {startCountdown ? "off" : "on"}
          </button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <h3>Launch Missile</h3>
          <button
            onClick={launchingMisslie}
            style={{
              backgroundColor: missileLaunchColor,
              color: "black",
              border: "1px solid black",
            }}
            disabled={startCountdown}
          >
            {launchMisslie ? "off" : "on"}
          </button>
        </div>
      </div>
      <p>{successMassage}</p>
    </div>
  );
}
