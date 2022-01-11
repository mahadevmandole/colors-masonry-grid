interface ColorShade {
    image:string;
    color:string;
    light:boolean
}
export interface ColorResult {
    primary: string;
    secondary:string;
    colors:ColorShade[]
}