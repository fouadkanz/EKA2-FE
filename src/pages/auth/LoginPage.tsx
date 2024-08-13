// src/pages/login/LoginPage.tsx
import { Button } from "@/components/ui/button";
import Microsoft from "@/assets/microsoft.png";
import LoginFig from "@/assets/component.png";
import JeraLogo from "@/assets/jera_logo.svg";

function LoginPage() {
  return (
    <div className="flex flex-col w-screen h-screen bg-[#334155]">
      <div className="w-screen h-screen flex justify-center items-center flex-col space-y-8">
        <img src={JeraLogo} alt="Jera logo" className="h-[55px] w-[146px]" />
        <img src={LoginFig} alt="app components" className="" />
        <span className="text-white text-2xl text-center">
          Lorem ipsum dolor, sit amet consectetur elit. Delectus minus
        </span>
        <Button type="button" className="space-x-2">
          <img src={Microsoft} alt="JERA Logo" className="size-5" />
          <span>sign in with Microsoft</span>
        </Button>
      </div>
      {/* <div className="md:w-[40%] w-screen h-screen md:flex justify-center flex-col space-y-7 md:p-20 p-8">
        <img
          src={JeraLogo}
          alt="Jera logo"
          className="h-[55px] w-[146px] md:hidden block mb-12"
        />
        <span className="text-4xl font-bold">Login</span>
        <div className="form">
        <FormGroup>
          <Label>Email</Label>
          <Input type="email" />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input type="password" />
        </FormGroup>
        </div>
        <div className="flex justify-between">
        <div className="flex items-center space-x-2">
          <Switch id="airplane-mode" />
          <Label htmlFor="airplane-mode">Remember me</Label>
        </div>
        <span className="text-[#007AFF] hover:underline hover:cursor-pointer">
          Forgot password?
        </span>
        </div>
        <Button type="button" className="bg-[#007AFF] w-full">Sign In</Button>
        <Separator className="my-4" />
        <Button type="button" className="space-x-2 w-full">
          <img src={Microsoft} alt="JERA Logo" className="size-5" />
          <span>Or sign in with Microsoft</span>
        </Button>
      </div> */}
      {/* <div className="md:hidden bg-[#334155] h-[30%]">
        <img src={LoginFig} alt="app components" className="fixed bottom-10 size-auto" />
      </div> */}
    </div>
  );
}

export default LoginPage;
