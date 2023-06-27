import { Html5QrcodeShim } from "./code-decoder";
import { BaseLoggger, Html5QrcodeSupportedFormats } from "./core";

const logger = new BaseLoggger(false);

const shim = new Html5QrcodeShim([Html5QrcodeSupportedFormats.QR_CODE], true, false, logger);

interface JSQRCode {
    scan: (canvas: HTMLCanvasElement) => Promise<string>
}

const jsqrcode: JSQRCode = {
    async scan(canvas) {
        const result = await shim.decodeAsync(canvas);
        return result.text;
    }
};

export default jsqrcode;