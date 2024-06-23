import { TOrganization } from "./Organization";
import { TResponse } from "./Status";

//todo: remove all the bs code i wrote
export type TRole = {
    id: number;
    name: 'admin' | 'sender' | 'receiver' | 'manager';
};

export type TRoleDemo = {
    id: number;
    name: 'admin' | 'student' | 'teacher' | 'manager';
};

export type TUser = {
    id: string;
    name: string;
    surname: string;
    email: string;
    role: TRole;
    role_id: number;
    root_organization?: TOrganization;
    root_organization_id?: TOrganization["id"];
    organizations: TOrganization[];
    photo?: string;
    provider?: string;
}

export type TGetUsersProps = {
    role_id?: TUser["role_id"];
    organization_id?: TOrganization["id"];
}

export type TEditUserProps = Pick<TUser, "name" | "surname" | "photo" | "role_id"> & {
    organizations: TOrganization["id"][];
}

export type TGetUsersResponse = TResponse & {
    data?: TUser[],
}

export type TUserResponse = TResponse & {
    data: TUser,
}

export type TGetUserReviewsDemoResponse = {
    averageRating: number;
    feedbacks: FeedbackDemo[];
}

export type FeedbackDemo = {
    comment: string,
    createdAt: Date,
    id: number,
    rating: number,
    studentName: string,
}

export type TUserDemo = {
    name: string,
    surname: string,
    email: string,
    password: string,
    role: TRoleDemo,
    photo: string,
    id: string,
    organization: string,
    summary: string,
    specialties: string,
    socials: Socials,
    feed_points: number,
    impressions: string,
    achievements: GeneralAchievement[],
    certificates: GeneralAchievement[],
    work_experience: WorkExperience[],
    reviews: FeedbackDemo[]
}

export type GeneralAchievement = {
    imgSrc: string,
    description: string
}

export type WorkExperience = {
    imgSrc: string,
    position: string,
    workplace: string,
    duration: string,
    description: string
}

export type Socials = {
    instagram: string,
    telegram: string,
    linkedin: string
}

