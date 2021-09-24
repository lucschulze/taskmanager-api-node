import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TaskDto } from './dto/task.dto';
import { Task } from './entity/task.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>,
  ) {}

  findAll(): Promise<Task[]> {
    return this.tasksRepository.find();
  }
  
  findOne(id: string): Promise<Task> {
    return this.tasksRepository.findOne(id);
  }

  update(task: Task): Promise<Task> {
   return this.tasksRepository.save(task);
  }

  delete(id: string) {
    return this.tasksRepository.delete(id);
  }

 
}
