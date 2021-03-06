export interface ReviewPullModel {
    Review_ID: number;
    Review_Author: string;
    Review_Title: string;
    Review_Commentary: string;
    Review_Tags: string;
}

export interface ReviewPostModel {
    title: string;
    commentary: string;
    image_url: string;
    riderid: number;
}

export interface UserPullModel {
    id: number;
    username: string;
    email: string;
    _created: Date;
}

export interface TagPullModel {
    tag: string;
    id: number;
}

export interface ReviewTagPostModel {
    reviewid: string;
    tagid: string;
}

export interface DbCannedResp {
    affectedRows?: number;
    insertId?: number;
}

export interface TUsers {
    id?: number;
    username?: string;
    email?: string;
    password?: string;
    role?: string;
    _created?: Date;
}

export interface TTokens {
    id?: number;
    userid?: number;
    uniq?: string;
    jwt?: string;
    _created?: Date;
}