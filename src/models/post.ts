export interface Meme {
    id:        string;
    name:      string;
    url:       string;
    width:     number;
    height:    number;
    box_count: number;
}

export interface MemeCall {
    success: boolean,
    data : any
}