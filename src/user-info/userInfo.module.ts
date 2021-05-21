import { Module } from "@nestjs/common";
import { UserInfoDataBase } from "src/database/database.userInfo";
import { UserInfoResolver } from "./userInfo.resolver";
import { UserInfoService } from "./userInfo.service";

@Module({
    providers : [UserInfoDataBase, UserInfoResolver, UserInfoService],
})

export default class UserInfoModule{}