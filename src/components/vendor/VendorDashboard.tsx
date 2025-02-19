import { useAuth } from "@/contexts/auth-context";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Plus, Package, DollarSign, Users } from "lucide-react";

export default function VendorDashboard() {
  const { user } = useAuth();

  const stats = [
    {
      title: "إجمالي المبيعات",
      value: "SAR 12,345",
      icon: DollarSign,
    },
    {
      title: "المنتجات",
      value: "24",
      icon: Package,
    },
    {
      title: "العملاء",
      value: "156",
      icon: Users,
    },
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">لوحة التحكم</h1>
        <Button>
          <Plus className="ml-2 h-4 w-4" />
          إضافة منتج
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>أحدث الطلبات</CardTitle>
          </CardHeader>
          <CardContent>{/* Add orders table here */}</CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>أفضل المبيعات</CardTitle>
          </CardHeader>
          <CardContent>{/* Add top products here */}</CardContent>
        </Card>
      </div>
    </div>
  );
}
