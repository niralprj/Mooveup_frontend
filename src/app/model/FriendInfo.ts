import { LocationInfo } from "./LocationInfo";
import { NameInfo } from "./NameInfo";

export interface FriendInfo {
    _id: string;
    name: NameInfo;
    email: string;
    picture: string;
    location: LocationInfo;
}
