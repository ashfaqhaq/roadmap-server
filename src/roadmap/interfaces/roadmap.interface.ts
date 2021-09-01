import {Document} from 'mongoose';

export interface IRoadmap extends Document{
    readonly name: string;
    readonly description: string;
    readonly createdBy: string;
    readonly steps: string[];
    readonly rating: number;

}