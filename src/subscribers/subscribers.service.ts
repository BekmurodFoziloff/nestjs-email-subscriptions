import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Subscriber from './subscriber.entity';
import CreateSubscriberDto from './dto/createSubscriber.dto';
import { Repository } from 'typeorm';

@Injectable()
export class SubscribersService {
  constructor(
    @InjectRepository(Subscriber)
    private subscriberRepository: Repository<Subscriber>
  ) {}

  async addSubscriber(subscriber: CreateSubscriberDto) {
    const newSubscriber = this.subscriberRepository.create(subscriber);
    await this.subscriberRepository.save(newSubscriber);
    return newSubscriber;
  }

  async getAllSubscribers() {
    return this.subscriberRepository.find();
  }
}
