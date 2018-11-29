export interface News {
    id:         number;
    admin_id:   number;
    tag_id:     number;
    header:     string;
    headline:   string;
    content:    string;
    created_at: Date;
    updated_at: Date;
};
