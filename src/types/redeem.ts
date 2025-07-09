export interface RedeemPayload {
  email: string;
  name: string;
  phonenumber: string;
  otp: string;
}
export interface RedeemCardResponse {
  msg: string;
  data: Data; // Replace `any` with a more specific type if you know the structure of `addCard`
  success: boolean;
}

interface Data{
  amount : string;
  code : string
}