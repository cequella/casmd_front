export interface Post {
    id:        number;
    author:    any;
    tag:       any;
    header:    string;
    headline:  string;
    content:   string;
    createdAt: Date;
    updatedAt: Date;
}
