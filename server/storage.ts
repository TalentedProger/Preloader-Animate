export type InsertSubscriber = {
  email: string;
};

export type Subscriber = {
  id: number;
  email: string;
  createdAt: Date;
  isActive: boolean;
};

export interface IStorage {
  createSubscriber(subscriber: InsertSubscriber): Promise<Subscriber>;
}

// In-memory storage for demo purposes
class InMemoryStorage implements IStorage {
  private subscribers: Subscriber[] = [];
  private nextId = 1;

  async createSubscriber(insertSubscriber: InsertSubscriber): Promise<Subscriber> {
    const subscriber: Subscriber = {
      id: this.nextId++,
      email: insertSubscriber.email,
      createdAt: new Date(),
      isActive: true,
    };
    this.subscribers.push(subscriber);
    console.log('Subscriber added:', subscriber.email);
    return subscriber;
  }
}

export const storage: IStorage = new InMemoryStorage();
