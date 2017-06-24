import { IUser } from "../shared/interfaces";

export enum method {
    local,
    get,
    post
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
//     staffInfo: HRISDataInfo = { name: "StaffInfo", url: "api/staff", key: "staffInfo", hasParam: true, method: method.get, isArray: false, hasLocalStorage: true };
//     staffList: HRISDataInfo = { name: "StaffList", url: "api/staffList", key: "staffList", hasParam: true, method: method.get, isArray: true, hasLocalStorage: true };
//     rc: HRISDataInfo = { name: "RC", url: "api/codes/getRC", key: "rc", hasParam: true, method: method.get, isArray: true, hasLocalStorage: true };
//     rcSelected: HRISDataInfo = { name: "RCSelected", url: "", key: "rcSelected", hasParam: false, method: method.local, isArray: true, hasLocalStorage: true };
//     dp: HRISDataInfo = { name: "DP", url: "api/codes/getDP", key: "dp", selectedName: "SelectedDP", hasParam: true, method: method.get, isArray: true, hasLocalStorage: true };
//     dpSelected: HRISDataInfo = { name: "DPSelected", url: "", key: "dpSelected", hasParam: false, method: method.local, isArray: true, hasLocalStorage: true };
//     location: HRISDataInfo = { name: "Location", url: "api/codes/getLocation", key: "location", selectedName: "SelectedLocation", hasParam: true, method: method.get, isArray: true, hasLocalStorage: true };
//     title: HRISDataInfo = { name: "Title", url: "api/codes/getTitle", key: "title", selectedName: "SelectedTitle", hasParam: true, method: method.get, isArray: true, hasLocalStorage: true };
//     backupTitle: HRISDataInfo = { name: "BackupTitle", url: "api/codes/getBackupTitle", key: "backupTitle", selectedName: "SelectedBackupTitle", hasParam: true, method: method.get, isArray: true, hasLocalStorage: true };
//     csStatus: HRISDataInfo = { name: "CsStatus", url: "api/codes/getCsStatus", key: "csStatus", selectedName: "SelectedCsStatus", hasParam: true, method: method.get, isArray: true, hasLocalStorage: true };
//     leaveStatus: HRISDataInfo = { name: "LeaveStatus", url: "api/codes/getLeaveStatus", key: "leaveStatus", selectedName: "SelectedLeaveStatus", hasParam: true, method: method.get, isArray: true, hasLocalStorage: true };
// }
//for firebase
export abstract class HRISInternalData {
    summary: HRISDataInfo = { name: "Summary", url: "Summary.json", key: "summary", hasParam: false, method: method.get, isArray: true, hasLocalStorage: true };
    user: HRISDataInfo = { name: "User", url: "user/0275077.json", key: "user", hasParam: false, method: method.get, isArray: false, hasLocalStorage: true };
    userInfo: HRISDataInfo = { name: "UserInfo", url: "api/user/getuserinfo", key: "userInfo", hasParam: true, method: method.get, isArray: false, hasLocalStorage: true };
    staffInfo: HRISDataInfo = { name: "StaffInfo", url: "api/staff", key: "staffInfo", hasParam: true, method: method.get, isArray: false, hasLocalStorage: true };
    staffList: HRISDataInfo = { name: "StaffList", url: "api/staffList", key: "staffList", hasParam: true, method: method.get, isArray: true, hasLocalStorage: true };
    rc: HRISDataInfo = { name: "RC", url: "api/codes/getRC", key: "rc", hasParam: true, method: method.get, isArray: true, hasLocalStorage: true };
    rcSelected: HRISDataInfo = { name: "RCSelected", url: "", key: "rcSelected", hasParam: false, method: method.local, isArray: true, hasLocalStorage: true };
    dp: HRISDataInfo = { name: "DP", url: "api/codes/getDP", key: "dp", selectedName: "SelectedDP", hasParam: true, method: method.get, isArray: true, hasLocalStorage: true };
    dpSelected: HRISDataInfo = { name: "DPSelected", url: "", key: "dpSelected", hasParam: false, method: method.local, isArray: true, hasLocalStorage: true };
    location: HRISDataInfo = { name: "Location", url: "api/codes/getLocation", key: "location", selectedName: "SelectedLocation", hasParam: true, method: method.get, isArray: true, hasLocalStorage: true };
    title: HRISDataInfo = { name: "Title", url: "api/codes/getTitle", key: "title", selectedName: "SelectedTitle", hasParam: true, method: method.get, isArray: true, hasLocalStorage: true };
    backupTitle: HRISDataInfo = { name: "BackupTitle", url: "api/codes/getBackupTitle", key: "backupTitle", selectedName: "SelectedBackupTitle", hasParam: true, method: method.get, isArray: true, hasLocalStorage: true };
    csStatus: HRISDataInfo = { name: "CsStatus", url: "api/codes/getCsStatus", key: "csStatus", selectedName: "SelectedCsStatus", hasParam: true, method: method.get, isArray: true, hasLocalStorage: true };
    leaveStatus: HRISDataInfo = { name: "LeaveStatus", url: "api/codes/getLeaveStatus", key: "leaveStatus", selectedName: "SelectedLeaveStatus", hasParam: true, method: method.get, isArray: true, hasLocalStorage: true };
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


