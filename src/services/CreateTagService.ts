import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";

class CreateTagService {
  async execute(name: string) {
    const TagsRepository = getCustomRepository(TagsRepositories);

    if (!name) throw new Error("Tag name can't be empty");

    const tagExists = await TagsRepository.findOne({
      name: name,
    });

    if(tagExists) throw new Error("This tag already exists")

    const tag = TagsRepository.create({
      name: name,
    });

    await TagsRepository.save(tag);

    return tag
  }
}

export { CreateTagService };
