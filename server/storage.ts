import { subscribers, type Subscriber, type InsertSubscriber } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  createSubscriber(subscriber: InsertSubscriber): Promise<Subscriber>;
}

export class DatabaseStorage implements IStorage {
  async createSubscriber(insertSubscriber: InsertSubscriber): Promise<Subscriber> {
    const [subscriber] = await db.insert(subscribers).values(insertSubscriber).returning();
    return subscriber;
  }
}

export const storage = new DatabaseStorage();
