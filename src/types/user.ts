export interface User {
  id: string;
  email: string;
  name: string;
  role: "admin" | "vendor" | "customer";
  avatar?: string;
  storeId?: string; // For vendors
}

export interface Store {
  id: string;
  name: string;
  ownerId: string;
  logo?: string;
  description?: string;
  categories: string[];
}
