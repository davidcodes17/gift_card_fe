import { redeemCode } from "@/services/api-service.service";
import type { RedeemPayload } from "@/types/redeem";

export const useRedeemCode = async ({data} : {data : RedeemPayload})=>{
    const response  = await redeemCode({data});
    return response;
}