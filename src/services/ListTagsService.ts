import { classToPlain } from "class-transformer";
import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";

class ListTagsService {
  async execute() {
    const TagsRepository = getCustomRepository(TagsRepositories);

    const tags = await TagsRepository.find();

    return classToPlain(tags);
  }
}

export { ListTagsService };
