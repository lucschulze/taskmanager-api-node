import { Body, Controller, Delete, Get,  Param,  Post, Put } from '@nestjs/common';
import { Task } from './entity/task.entity';
import { TaskService } from './task.service';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  async findAll(): Promise<Task[]> {
    return this.taskService.findAll();
  }

  @Get(':id')
  get(@Param() params) {
      return this.taskService.findOne(params.id);
  }

  @Post()
  create(@Body() task: Task) {
      return this.taskService.update(task);
  }

  @Put()
  update(@Body() task: Task) {
    return this.taskService.update(task);
  }

  @Delete(':id')
  delete(@Param() params) {
      return this.taskService.delete(params.id);
  }
}

