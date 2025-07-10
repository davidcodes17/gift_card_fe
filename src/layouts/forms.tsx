import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ArrowRight } from "lucide-react";
import { useRedeemCode } from "@/hooks/hooks";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import type { RedeemCardResponse } from "@/types/redeem";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phonenumber: Yup.string()
    .matches(/^\+?\d{7,15}$/, "Invalid phone number")
    .notRequired(),
  otp: Yup.string()
    .length(12, "OTP must be 12 characters")
    .required("OTP is required"),
});

const Forms = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<RedeemCardResponse | null>(null);

  const handleRedeem = async (values: {
    name: string;
    email: string;
    phonenumber: string;
    otp: string;
  }) => {
    setLoading(true);
    try {
      const result = await useRedeemCode({ data: values });
      setData(result);
      setDialogOpen(true);
    } catch (error) {
      alert("Failed to redeem. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-5">
      <Formik
        initialValues={{ name: "", email: "", phonenumber: "", otp: "" }}
        validationSchema={validationSchema}
        onSubmit={handleRedeem}
      >
        {({ setFieldValue }) => (
          <Form>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-10">
              <div className="w-full">
                <Field
                  name="name"
                  type="text"
                  className="border-b-[1px] outline-none border-[#ddd] py-3 sm:py-5 w-full"
                  placeholder="Your Full Name"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-xs"
                />
              </div>
              <div className="w-full">
                <Field
                  name="email"
                  type="email"
                  className="border-b-[1px] outline-none border-[#ddd] py-3 sm:py-5 w-full"
                  placeholder="Email Address"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-xs"
                />
              </div>
              <div className="w-full">
                <Field
                  name="phonenumber"
                  type="tel"
                  className="border-b-[1px] outline-none border-[#ddd] py-3 sm:py-5 w-full"
                  placeholder="Phone Number"
                />
                <ErrorMessage
                  name="phonenumber"
                  component="div"
                  className="text-red-500 text-xs"
                />
              </div>
            </div>

            <div className="my-6 w-full lg:overflow-x-none overflow-x-auto">
              <Field name="otp">
                {({ field }: any) => (
                  <InputOTP
                    className="flex-nowrap"
                    maxLength={12}
                    value={field.value}
                    onChange={(val) => setFieldValue("otp", val)}
                  >
                    {[0, 3, 6, 9].map((startIndex, groupIdx) => (
                      <InputOTPGroup key={groupIdx}>
                        {[0, 1, 2].map((offset) => (
                          <InputOTPSlot
                            key={startIndex + offset}
                            index={startIndex + offset}
                            className="w-10 h-10 sm:w-20 sm:h-20 text-base sm:text-xl min-w-0 flex-shrink"
                          />
                        ))}
                        {groupIdx < 3 && <InputOTPSeparator />}
                      </InputOTPGroup>
                    ))}
                  </InputOTP>
                )}
              </Field>
              <ErrorMessage
                name="otp"
                component="div"
                className="text-red-500 text-xs"
              />
            </div>

            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <Button
                type="submit"
                className="items-center lg:py-8 lg:!px-20 py-6 !px-8 rounded-3xl cursor-pointer hover:bg-[#07C75F] bg-[#07C75F] text-white flex justify-center gap-2"
                disabled={loading}
              >
                {loading ? "Processing..." : "Redeem Now"}
                <ArrowRight size={30} />
              </Button>

              <DialogContent>
                {data && (
                  <div>
                    <div className="flex justify-center">
                      <img
                        src={data.success ? "/success.png" : "/failure.png"}
                        alt="Result"
                        className="w-100 h-100"
                      />
                    </div>
                    <div className="text-center">
                      <h1 className="text-[30px] font-bold">
                        {data.success
                          ? "Gift Redeemed Successfully!"
                          : "Failed to Redeem Gift Card"}
                      </h1>
                      <p className="my-2">
                        {data.success
                          ? `₦${
                              data.data?.amount ?? 0
                            } has been added to your account. It may take 1–6hrs to reflect.`
                          : "Unable to redeem gift card. Reconfirm code or contact support."}
                      </p>
                      <div className="flex justify-center pt-5">
                        <div className="flex justify-center w-[40%]">
                          <Button
                            onClick={() => {
                              setDialogOpen(false);
                              window.location.replace("https://myrtleng.com");
                            }}
                            className={`py-8 ${
                              data?.success ? "bg-[#07C75F]" : "bg-[#000]"
                            } hover:${
                              data?.success ? "bg-[#07C75F]" : "bg-[#000]"
                            } rounded-full cursor-pointer px-10 w-full`}
                          >
                            Go Home
                            <ArrowRight />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </DialogContent>
            </Dialog>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Forms;
