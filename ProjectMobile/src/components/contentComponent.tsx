import { CodeScannerComponent } from "./codeScannerComponent"
import { ContactComponent } from "./contactComponent"
import { HomeComponent } from "./homeComponent"
import { MapsComponent } from "./mapsComponent"

export function ContentController(props) {
    const itemChoice = {
        home: <HomeComponent />,
        maps: <MapsComponent setOption = {props.setOption}/>,
        codeScanner: <CodeScannerComponent setOption = {props.setOption}/>,
        contact: <ContactComponent />
    }

    return itemChoice[props.option]
}
