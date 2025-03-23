import os from "os";

export function getLocalIP() {
    const nets = os.networkInterfaces();
    let localIP = "Not found";

    for (const name of Object.keys(nets)) {
        for (const net of nets[name]) {
            if (net.family === "IPv4" && !net.internal) {
                localIP = net.address;
            }
        }
    }

    return localIP;
}
