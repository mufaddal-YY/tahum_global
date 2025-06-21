"use client";
import React, { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Textarea } from "../ui/textarea";
import { AlertCircleIcon, CheckCircle2Icon, PopcornIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { sendEmail } from "@/lib/resend";

export const EnquirySchema = z.object({
  fullName: z.string().min(3).max(30),
  companyName: z.string().min(3).max(30),
  email: z.string().email(),
  phone: z.string().min(3).max(30),
  message: z.string(),
});

const EnquiryForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(EnquirySchema),
  });

  const form = useForm({
    resolver: zodResolver(EnquirySchema),
    defaultValues: {
      fullName: "",
      companyName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (formData) => {
    setIsLoading(true);
    try {
      await sendEmail(formData);
      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="bg-transparent ">
      <section>
        <article>
          <h4 className="text-3xl font-bold py-2 mb-4 text-left text-white">
            Enquire Now
          </h4>
          {/* Loader */}
          {isLoading && (
            <div className="text-white text-center py-10">
              Sending your enquiry...
            </div>
          )}

          {/* Success Message */}
          {status === "success" && (
            <Alert variant="success">
              <CheckCircle2Icon className="text-green-500" />
              <AlertTitle>
                <div className="text-green-500 text-md">
                  🎉 Your enquiry has been received successfully!
                </div>
              </AlertTitle>
              <AlertDescription>
                Thank you for reaching out to us. We will get back to you
                shortly.
              </AlertDescription>
            </Alert>
          )}

          {/* Error Message */}
          {status === "error" && (
            <div className="text-red-400 text-center py-10">
              ❌ Failed to send your enquiry. Please try again.
            </div>
          )}

          {!isLoading && !status && (
            <Form {...form}>
              <form
                //   action={sendEmail}
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4">
                <div className="flex flex-col lg:flex-row justify-between gap-4">
                  <div className="w-full">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">
                            Full Name
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="Full name" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="w-full">
                    <FormField
                      control={form.control}
                      name="companyName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">
                            Company Name
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="Company name" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row justify-between gap-4">
                  <div className="w-full">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Email</FormLabel>
                          <FormControl>
                            <Input placeholder="Email" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="w-full">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Phone</FormLabel>
                          <FormControl>
                            <Input placeholder="Phone" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row justify-between gap-4">
                  <div className="w-full">
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Message</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Message here" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className="flex justify-center py-4">
                  <Button
                    className="px-12 py-6 text-white font-bold"
                    variant="secondary"
                    size="lg"
                    type="submit"
                    disabled={isLoading}>
                    {isLoading ? "Submitting..." : "Submit Enquiry"}
                  </Button>
                </div>
              </form>
            </Form>
          )}
        </article>
      </section>
    </main>
  );
};

export default EnquiryForm;
