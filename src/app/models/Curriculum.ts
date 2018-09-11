import { Course } from './Course';

export interface Curriculum {
    id:      number;
    epoch:   string;
    program: Course[];
};
