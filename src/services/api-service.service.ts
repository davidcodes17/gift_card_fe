import api_secured from "@/security/api-secured";
import type { RedeemPayload } from "@/types/redeem";

export const redeemCode = async ({ data }: { data: RedeemPayload }) => {
  try {
    const response = await api_secured.post("/redeem-code", {
      fullname: data?.name,
      email: data?.email,
      code_: data?.otp,
      phonenumber: data?.phonenumber,
    });
    return response.data;
  } catch (error: any) {
    console.log(error);
    return error?.response?.data;
  }
};
