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
// import { sendEmail } from "@/lib/resend";

export const EnquirySchema = z.object({
  firstName: z.string().min(3).max(30),
  lastName: z.string().min(3).max(30),
  email: z.string().email(),
  phone: z.string().min(3).max(30),
});

const EnquiryForm = () => {
  const [isLoading, setIsLoading] = useState(false);
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
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
  });

  const onSubmit = async (formData) => {
    setIsLoading(true);
    // try {
    //   await sendEmail(formData);
    //   toast.success("Email Sent Successfully!");
    //   form.reset();
    // } catch (error) {
    //   toast.error("Failed to send email.");
    // } finally {
    //   setIsLoading(false);
    // }
  };

  return (
    <main className="bg-transparent p-3">
      <section>
        <article>
          <h4 className="text-3xl font-bold py-2 mb-4 text-left text-white">
            Enquire Now
          </h4>
          <Form {...form}>
            <form
              //   action={sendEmail}
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-3">
              <div className="flex flex-col lg:flex-row justify-between gap-2">
                <div className="w-full">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="First name" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                <div className="w-full">
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Last name" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="flex flex-col lg:flex-row justify-between gap-2">
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
              <div className="flex flex-col lg:flex-row justify-between gap-2">
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
                <Button className="px-12 py-6 text-white font-bold" variant="secondary" size="lg" type="submit" disabled={isLoading}>
                  {isLoading ? "Submitting..." : "Submit Enquiry"}
                </Button>
              </div>
            </form>
          </Form>
        </article>
      </section>
    </main>
  );
};

export default EnquiryForm;
