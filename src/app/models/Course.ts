export interface Course {
    id:             number;
    cod:            string;
    name:           string;
    duration:       number;
    mandatoriness:  string;
    prerequisite:   string[];
    targetSemester: number;
};
