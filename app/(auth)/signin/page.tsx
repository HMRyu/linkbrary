"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Button from "@/app/shared/components/button/Button";
import Input from "@/app/shared/components/input/Input";

import axiosInstance from "@/app/api/axiosInstance";
import { setAccessToken } from "@/app/api/cookies";
import Spinner from "@/app/shared/components/spinner/Spinner";
import { useToast } from "@/components/ui/use-toast";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email({
    message: "올바르지 않은 이메일입니다.",
  }),
  password: z.string().min(8, {
    message: "비밀번호는 8자리 이상이 필요합니다.",
  }),
});

const SignIn = () => {
  const router = useRouter();
  const { toast } = useToast();

  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    startTransition(async () => {
      try {
        const res = await axiosInstance.post("/sign-in", {
          email: values.email,
          password: values.password,
        });

        const token = res?.data.data.accessToken;

        await setAccessToken(token);

        router.push("/");
      } catch (error) {
        toast({
          variant: "destructive",
          description: "로그인 시 에러가 발생했습니다. 다시 시도해주세요.",
        });
      }
    });
  }

  return (
    <div className="bg-linkbrary-gray_5 dark:bg-linkbrary-black flex h-screen flex-col items-center justify-center">
      <div className="space-y-4">
        <Link href="/">
          <Image
            src="/images/auth/logo.png"
            width={200}
            height={38}
            alt="logo"
          />
        </Link>
        <div>
          회원이 아니신가요?{" "}
          <Link href="/signup">
            <span className="text-linkbrary-primary underline">
              회원 가입하기
            </span>
          </Link>
        </div>
      </div>
      <div className="mt-[30px] w-[400px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>이메일</FormLabel>
                  <FormControl>
                    <Input inputPlaceholder="codeit@codeit.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>비밀번호</FormLabel>
                  <FormControl>
                    <Input
                      inputPlaceholder="비밀번호를 입력하세요"
                      {...field}
                      type="password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {isPending ? <Spinner /> : <Button text="로그인" />}
          </form>
        </Form>
      </div>
    </div>
  );
};

export default SignIn;
