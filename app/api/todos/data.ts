import { Todo } from "../../../models/todo";
import { faker } from "@faker-js/faker";

export function getTodos(): Todo[] {
  return Array.from({ length: 5 }).map(() => ({
    id: faker.string.uuid(),
    title: faker.lorem.sentence(),
    completed: faker.datatype.boolean(),
  }));
}
