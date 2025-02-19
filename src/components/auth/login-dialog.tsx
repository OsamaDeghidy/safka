import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/contexts/auth-context";

export function LoginDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [role, setRole] = useState<"vendor" | "customer">("customer");

  const { login, register } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isRegistering) {
        await register(email, password, role);
      } else {
        await login(email, password);
      }
      setIsOpen(false);
    } catch (error) {
      console.error("Auth failed:", error);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">تسجيل الدخول</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {isRegistering ? "إنشاء حساب جديد" : "تسجيل الدخول"}
          </DialogTitle>
          <DialogDescription>
            {isRegistering
              ? "قم بإنشاء حسابك للبدء في التسوق"
              : "قم بتسجيل الدخول لمتابعة التسوق"}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">البريد الإلكتروني</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">كلمة المرور</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {isRegistering && (
            <div className="space-y-2">
              <Label>نوع الحساب</Label>
              <div className="flex gap-4">
                <Button
                  type="button"
                  variant={role === "customer" ? "default" : "outline"}
                  onClick={() => setRole("customer")}
                >
                  مشتري
                </Button>
                <Button
                  type="button"
                  variant={role === "vendor" ? "default" : "outline"}
                  onClick={() => setRole("vendor")}
                >
                  بائع
                </Button>
              </div>
            </div>
          )}
          <div className="flex flex-col gap-4">
            <Button type="submit">
              {isRegistering ? "إنشاء حساب" : "تسجيل الدخول"}
            </Button>
            <Button
              type="button"
              variant="link"
              onClick={() => setIsRegistering(!isRegistering)}
            >
              {isRegistering
                ? "لديك حساب؟ سجل دخولك"
                : "ليس لديك حساب؟ سجل الآن"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
