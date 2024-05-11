import { Injectable, Logger } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Injectable()
export class CatService {
  private readonly logger = new Logger(CatService.name);

  create(createCatDto: CreateCatDto) {
    this.logger.log('create - Started');
    return 'This action adds a new cat';
  }

  findAll() {
    this.logger.log('findAll - Started');
    return `This action returns all cat`;
  }

  findOne(id: number) {
    this.logger.log('findOne - Started');
    return `This action returns a #${id} cat`;
  }

  update(id: number, updateCatDto: UpdateCatDto) {
    this.logger.log('update - Started');
    return `This action updates a #${id} cat`;
  }

  remove(id: number) {
    this.logger.log('remove - Started');
    return `This action removes a #${id} cat`;
  }
}
