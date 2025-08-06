import {boolean, serial, timestamp} from "drizzle-orm/pg-core";
import {sql} from "drizzle-orm";

export const baseEntity = {
  id: serial('id').primaryKey(),
  createdAt: timestamp('created_at', { mode: 'string' }).default(sql`now()`),
  updatedAt: timestamp('updated_at', { mode: 'string' }).default(sql`now()`).$onUpdate(() => sql`now()`),
  deleted: boolean('deleted').default(false).notNull(),
};
