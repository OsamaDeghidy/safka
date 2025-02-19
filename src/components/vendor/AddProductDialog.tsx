import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

export function AddProductDialog() {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement product addition
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>إضافة منتج جديد</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>إضافة منتج جديد</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">اسم المنتج</Label>
            <Input id="name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="price">السعر</Label>
            <Input id="price" type="number" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">الوصف</Label>
            <Textarea id="description" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="image">صورة المنتج</Label>
            <Input id="image" type="file" accept="image/*" required />
          </div>
          <Button type="submit" className="w-full">
            إضافة
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
