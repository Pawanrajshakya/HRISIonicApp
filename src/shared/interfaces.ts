export interface IChart {
    label: string[],
    data: any[]
}

export interface ICode {
    code: string,
    description: string,
    rcs: string
}

export interface IMenu {
    title: string,
    description: string,
    component: string,
    reportComponent?: string,
    dataComponent?: string,
    icon: string,
    hasFilterPage?: boolean
}

export interface INote {
    Note: string;
    CreatedOn: string;
}

export interface IFilterData {
    Id: number,
    Name: string,
    Count: number
}

export interface IUser {
    userID: string,
    lanID: string,
    roleID: number,
    ein: string,
    firstName: string,
    lastName: string,
    emailAddress: string,
    lastAccess: string,
    ishrisUser: boolean,
    rcs: string[],
    dps: string[],
    isteamsUser: boolean,
    isOvertimeUser: boolean,
    groups: number[],
    isDeveloper: boolean,
    agency: string,
    isdhsUser: boolean,
    isSuper: boolean
}

export interface IRCCode {
    code: string;
    description: string;
    isSelected: boolean;
}

export interface IDPCode {
    code: string;
    description: string;
    rcCode: string;
    isSelected: boolean;
}

export interface IResponse {
    message: string,
    status: number, //0:success
    data?: any
}