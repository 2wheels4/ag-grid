import {Module, ModuleNames} from "@ag-community/grid-core";
import {LicenseManager} from "./licenseManager";
import {MD5} from "./license/md5";
import {WatermarkComp} from "./license/watermark";

export {LicenseManager} from "./licenseManager";
export {MD5} from "./license/md5";
export {WatermarkComp} from "./license/watermark";

export const EnterpriseCoreModule: Module = {
    moduleName: ModuleNames.EnterpriseCoreModule,
    beans: [LicenseManager, MD5],
    agStackComponents: [
        {componentName: 'AgWatermark', componentClass: WatermarkComp}
    ]
};
