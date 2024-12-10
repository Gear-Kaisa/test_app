import { Box} from "@mui/material";
import { QRCodeCanvas } from "qrcode.react";

export default function Test() {

    const formUrl = "https://www.youtube.com/";

  return (
    <div>
      <QRCodeCanvas value={formUrl} size={300} />
    </div>
    )
}