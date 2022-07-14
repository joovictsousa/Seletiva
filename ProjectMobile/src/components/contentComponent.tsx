import { CodeScannerComponent } from "./codeScannerComponent"
import { ContactComponent } from "./contactComponent"
import { DataComponent } from "./dataComponent"
import { HomeComponent } from "./homeComponent"
import { MapsComponent } from "./mapsComponent"

export function ContentController(props) {
    const itemChoice = {
        home: <HomeComponent />,
        maps: <MapsComponent setOption = {props.setOption}/>,
        codeScanner: <CodeScannerComponent setOption = {props.setOption}/>,
        contact: <ContactComponent />,
        data: <DataComponent />
    }

    return itemChoice[props.option]
}
