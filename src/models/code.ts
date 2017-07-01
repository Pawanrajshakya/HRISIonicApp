import { IUser, IMenu } from "../shared/interfaces";

export enum method {
    local = 0,
    get = 1,
    post = 2
}

export abstract class HRISDataInfo {
    name: string;
    key: string;
    url: string;
    method: method;
    hasParam: boolean;
    param?: any;
    data?: {};
    selectedName?: string;
    selectedCount?: number;
    refresh?: boolean = false; //ignore local db data
    isArray?: boolean = true;
    hasLocalStorage: boolean = true;
}

// export abstract class HRISInternalData {
//     summary: HRISDataInfo = { name: "Summary", url: "api/summary", key: "summary", hasParam: false, method: method.get, isArray: true, hasLocalStorage: true };
//     user: HRISDataInfo = { name: "User", url: "api/user", key: "user", hasParam: true, method: method.get, isArray: false, hasLocalStorage: true };
//     userInfo: HRISDataInfo = { name: "UserInfo", url: "api/user/getuserinfo", key: "userInfo", hasParam: true, method: method.get, isArray: false, hasLocalStorage: true };
//     staffInfo: HRISDataInfo = { name: "StaffInfo", url: "api/staff", key: "staffInfo", hasParam: true, method: method.get, isArray: false, hasLocalStorage: false };
//     staffList: HRISDataInfo = { name: "StaffList", url: "api/staff/List", key: "staffList", hasParam: true, method: method.get, isArray: true, hasLocalStorage: true };
//     rc: HRISDataInfo = { name: "RC", url: "api/codes/getRC", key: "rc", hasParam: true, method: method.get, isArray: true, hasLocalStorage: true };
//     rcSelected: HRISDataInfo = { name: "RCSelected", url: "", key: "rcSelected", hasParam: false, method: method.local, isArray: true, hasLocalStorage: true };
//     dp: HRISDataInfo = { name: "DP", url: "api/codes/getDP", key: "dp", selectedName: "SelectedDP", hasParam: true, method: method.get, isArray: true, hasLocalStorage: true };
//     dpSelected: HRISDataInfo = { name: "DPSelected", url: "", key: "dpSelected", hasParam: false, method: method.local, isArray: true, hasLocalStorage: true };
//     location: HRISDataInfo = { name: "Location", url: "api/codes/getLocation", key: "location", selectedName: "SelectedLocation", hasParam: true, method: method.get, isArray: true, hasLocalStorage: true };
//     title: HRISDataInfo = { name: "Title", url: "api/codes/getTitle", key: "title", selectedName: "SelectedTitle", hasParam: true, method: method.get, isArray: true, hasLocalStorage: true };
//     backupTitle: HRISDataInfo = { name: "BackupTitle", url: "api/codes/getBackupTitle", key: "backupTitle", selectedName: "SelectedBackupTitle", hasParam: true, method: method.get, isArray: true, hasLocalStorage: true };
//     csStatus: HRISDataInfo = { name: "CsStatus", url: "api/codes/getCsStatus", key: "csStatus", selectedName: "SelectedCsStatus", hasParam: true, method: method.get, isArray: true, hasLocalStorage: true };
//     leaveStatus: HRISDataInfo = { name: "LeaveStatus", url: "api/codes/getLeaveStatus", key: "leaveStatus", selectedName: "SelectedLeaveStatus", hasParam: true, method: method.get, isArray: true, hasLocalStorage: true };
//     ecardChart: HRISDataInfo = {
//         name: "EcardChart",
//         url: "api/chart/EcardChart",
//         key: "ecardChart",
//         hasParam: true,
//         method: method.post,
//         isArray: true,
//         hasLocalStorage: false
//     };
//     hcChart: HRISDataInfo = {
//         name: "HCChart",
//         url: "api/chart/AgencyHeadcountChartAsync",
//         key: "hcChart",
//         hasParam: true,
//         method: method.post,
//         isArray: true,
//         hasLocalStorage: false
//     };

// }

//for firebase
export abstract class HRISInternalData {
    summary: HRISDataInfo = { name: "Summary", url: "Summary.json", key: "summary", hasParam: false, method: method.get, isArray: true, hasLocalStorage: true };
    user: HRISDataInfo = {
        name: "User", url: "user/OD7SO77.json", key: "user", hasParam: false, method: method.get, isArray: false, hasLocalStorage: true
    };
    userInfo: HRISDataInfo = { name: "UserInfo", url: "getuserinfo.json", key: "userInfo", hasParam: false, method: method.get, isArray: false, hasLocalStorage: true };
    staffInfo: HRISDataInfo = { name: "StaffInfo", url: "staff.json", key: "staffInfo", hasParam: false, method: method.get, isArray: false, hasLocalStorage: false };
    staffList: HRISDataInfo = { name: "StaffList", url: "staffs.json", key: "staffList", hasParam: false, method: method.get, isArray: true, hasLocalStorage: true };
    rc: HRISDataInfo = { name: "RC", url: "getRC.json", key: "rc", hasParam: false, method: method.get, isArray: true, hasLocalStorage: true };
    rcSelected: HRISDataInfo = { name: "RCSelected", url: "", key: "rcSelected", hasParam: false, method: method.local, isArray: true, hasLocalStorage: true };
    dp: HRISDataInfo = { name: "DP", url: "getDP.json", key: "dp", selectedName: "SelectedDP", hasParam: false, method: method.get, isArray: true, hasLocalStorage: true };
    dpSelected: HRISDataInfo = { name: "DPSelected", url: "", key: "dpSelected", hasParam: false, method: method.local, isArray: true, hasLocalStorage: true };
    location: HRISDataInfo = { name: "Location", url: "api/codes/getLocation", key: "location", selectedName: "SelectedLocation", hasParam: true, method: method.get, isArray: true, hasLocalStorage: true };
    title: HRISDataInfo = { name: "Title", url: "api/codes/getTitle", key: "title", selectedName: "SelectedTitle", hasParam: true, method: method.get, isArray: true, hasLocalStorage: true };
    backupTitle: HRISDataInfo = { name: "BackupTitle", url: "api/codes/getBackupTitle", key: "backupTitle", selectedName: "SelectedBackupTitle", hasParam: true, method: method.get, isArray: true, hasLocalStorage: true };
    csStatus: HRISDataInfo = { name: "CsStatus", url: "api/codes/getCsStatus", key: "csStatus", selectedName: "SelectedCsStatus", hasParam: true, method: method.get, isArray: true, hasLocalStorage: true };
    leaveStatus: HRISDataInfo = { name: "LeaveStatus", url: "api/codes/getLeaveStatus", key: "leaveStatus", selectedName: "SelectedLeaveStatus", hasParam: true, method: method.get, isArray: true, hasLocalStorage: true };
    ecardChart: HRISDataInfo = {
        name: "EcardChart",
        url: "ecardChart.json",
        key: "ecardChart",
        hasParam: false,
        method: method.get,
        isArray: true,
        hasLocalStorage: false
    };
    hcChart: HRISDataInfo = {
        name: "HCChart",
        url: "hcChart.json",
        key: "hcChart",
        hasParam: false,
        method: method.get,
        isArray: true,
        hasLocalStorage: false
    };

}

export class User implements IUser {
    userID: string;
    lanID: string;
    roleID: number;
    ein: string;
    firstName: string;
    lastName: string;
    emailAddress: string;
    lastAccess: string;
    ishrisUser: boolean;
    rcs: string[];
    dps: string[];
    isteamsUser: boolean;
    isOvertimeUser: boolean;
    groups: number[];
    isDeveloper: boolean;
    agency: string;
    isdhsUser: boolean;
    isSuper: boolean;
}

export class Menu implements IMenu {
    title: string;
    description: string;
    component: string;
    reportComponent?: string;
    dataComponent?: string;
    icon: string;
    hasFilterPage?: boolean;
}

export class API {
    _BaseURL: string = 'https://fir-3927b.firebaseio.com';//'https://webdeva/HRISMobile';//
    _token = { access_token: null, expires_in: 0, token_type: null };
    _hasToken: boolean = true;//false;
}

